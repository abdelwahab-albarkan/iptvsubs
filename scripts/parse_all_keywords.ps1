Add-Type -AssemblyName System.IO.Compression.FileSystem

$files = Get-ChildItem -Path "data" -File
Write-Host "Starting keyword extraction from $($files.Count) files..."

$allKeywords = [System.Collections.Generic.Dictionary[string, PSObject]]::new([System.StringComparer]::OrdinalIgnoreCase)
$fileStats = @()

foreach ($f in $files) {
    $fStart = Get-Date
    $count = 0
    if ($f.Extension -eq ".csv") {
        $lines = Get-Content -Path $f.FullName
        for ($i = 1; $i -lt $lines.Count; $i++) {
            $line = $lines[$i]
            if ([string]::IsNullOrWhiteSpace($line)) { continue }
            
            # Simple CSV regex or split considering quotes
            $matches = [regex]::Matches($line, '(?:^|,)(?:"([^"]*)"|([^,]*))')
            if ($matches.Count -ge 5) {
                $kw = ($matches[0].Groups[1].Value + $matches[0].Groups[2].Value).Trim()
                $intent = ($matches[1].Groups[1].Value + $matches[1].Groups[2].Value).Trim()
                $relevance = ($matches[2].Groups[1].Value + $matches[2].Groups[2].Value).Trim()
                $volume = ($matches[3].Groups[1].Value + $matches[3].Groups[2].Value).Trim()
                $kd = ($matches[4].Groups[1].Value + $matches[4].Groups[2].Value).Trim()
                $cpc = if ($matches.Count -ge 6) { ($matches[5].Groups[1].Value + $matches[5].Groups[2].Value).Trim() } else { "0" }
                $serp = if ($matches.Count -ge 7) { ($matches[6].Groups[1].Value + $matches[6].Groups[2].Value).Trim() } else { "" }

                if (-not [string]::IsNullOrEmpty($kw)) {
                    $count++
                    $volNum = 0
                    [int]::TryParse($volume, [ref]$volNum) | Out-Null
                    $kdNum = 0
                    [int]::TryParse($kd, [ref]$kdNum) | Out-Null

                    if (-not $allKeywords.ContainsKey($kw) -or $allKeywords[$kw].Volume -lt $volNum) {
                        $allKeywords[$kw] = [PSCustomObject]@{
                            Keyword = $kw
                            Intent = $intent
                            Volume = $volNum
                            Difficulty = $kdNum
                            CPC = $cpc
                            SERP = $serp
                            Sources = @($f.Name)
                        }
                    } else {
                        if (-not ($allKeywords[$kw].Sources -contains $f.Name)) {
                            $allKeywords[$kw].Sources += $f.Name
                        }
                    }
                }
            }
        }
    } elseif ($f.Extension -eq ".xlsx") {
        try {
            $zip = [System.IO.Compression.ZipFile]::OpenRead($f.FullName)
            $ssEntry = $zip.GetEntry("xl/sharedStrings.xml")
            $sharedStrings = @()
            if ($ssEntry) {
                $reader = New-Object System.IO.StreamReader($ssEntry.Open())
                $ssXml = [xml]$reader.ReadToEnd()
                $reader.Close()
                $sharedStrings = $ssXml.sst.si | ForEach-Object {
                    if ($_.t) { $_.t }
                    elseif ($_.r) { ($_.r | ForEach-Object { $_.t }) -join '' }
                    else { "" }
                }
            }

            $sheetEntry = $zip.GetEntry("xl/worksheets/sheet1.xml")
            if ($sheetEntry) {
                $reader = New-Object System.IO.StreamReader($sheetEntry.Open())
                $sheetXml = [xml]$reader.ReadToEnd()
                $reader.Close()

                $rows = $sheetXml.worksheet.sheetData.row
                # Row 0 is header, iterate from 1
                for ($r = 1; $r -lt $rows.Count; $r++) {
                    $row = $rows[$r]
                    $cells = @{}
                    foreach ($c in $row.c) {
                        $colName = ($c.r -replace '[0-9]', '')
                        $val = $c.v
                        if ($c.t -eq "s" -and $val -ne $null -and $val -ne "") {
                            $idx = [int]$val
                            if ($idx -lt $sharedStrings.Count) {
                                $val = $sharedStrings[$idx]
                            }
                        }
                        $cells[$colName] = $val
                    }

                    $kw = $cells["A"]
                    if (-not [string]::IsNullOrEmpty($kw)) {
                        $kw = $kw.Trim()
                        $count++
                        $intent = $cells["B"]
                        $volNum = 0
                        [int]::TryParse($cells["D"], [ref]$volNum) | Out-Null
                        $kdNum = 0
                        [int]::TryParse($cells["E"], [ref]$kdNum) | Out-Null
                        $cpc = $cells["F"]
                        $serp = $cells["G"]

                        if (-not $allKeywords.ContainsKey($kw) -or $allKeywords[$kw].Volume -lt $volNum) {
                            $allKeywords[$kw] = [PSCustomObject]@{
                                Keyword = $kw
                                Intent = $intent
                                Volume = $volNum
                                Difficulty = $kdNum
                                CPC = $cpc
                                SERP = $serp
                                Sources = @($f.Name)
                            }
                        } else {
                            if (-not ($allKeywords[$kw].Sources -contains $f.Name)) {
                                $allKeywords[$kw].Sources += $f.Name
                            }
                        }
                    }
                }
            }
            $zip.Dispose()
        } catch {
            Write-Warning "Error processing $($f.Name): $_"
        }
    }
    $fElapsed = ((Get-Date) - $fStart).TotalSeconds
    $fileStats += [PSCustomObject]@{
        File = $f.Name
        Count = $count
        DurationSec = [math]::Round($fElapsed, 2)
    }
    Write-Host "Processed $($f.Name): $count keywords ($([math]::Round($fElapsed, 1))s)"
}

Write-Host "Deduplicated unique keywords across all files: $($allKeywords.Count)"

# Export to JSON
$keywordList = $allKeywords.Values | Sort-Object -Property Volume -Descending
$outPath = "data/keywords_master.json"
$keywordList | ConvertTo-Json -Depth 3 | Set-Content -Path $outPath -Encoding UTF8
Write-Host "Exported $($keywordList.Count) keywords to $outPath"

# Also generate a summary statistics file
$top100 = $keywordList | Select-Object -First 100
$top100 | ConvertTo-Json -Depth 3 | Set-Content -Path "data/keywords_top100.json" -Encoding UTF8

$intentStats = $keywordList | Group-Object -Property Intent | Select-Object Name, Count | Sort-Object Count -Descending
$intentStats | Format-Table -AutoSize

