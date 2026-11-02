Add-Type -AssemblyName System.IO.Compression.FileSystem

$files = Get-ChildItem -Path "data" -File
Write-Host "Found $($files.Count) files in data/"

$summary = @()

foreach ($f in $files) {
    if ($f.Extension -eq ".csv") {
        $lines = Get-Content -Path $f.FullName -TotalCount 20
        $header = $lines[0]
        $totalLines = (Get-Content -Path $f.FullName).Count - 1
        $summary += [PSCustomObject]@{
            File = $f.Name
            Type = "CSV"
            TotalRows = $totalLines
            Header = $header
        }
    } elseif ($f.Extension -eq ".xlsx") {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($f.FullName)
        $ssEntry = $zip.GetEntry("xl/sharedStrings.xml")
        $headers = @()
        if ($ssEntry) {
            $stream = $ssEntry.Open()
            $reader = New-Object System.IO.StreamReader($stream)
            $xml = [xml]$reader.ReadToEnd()
            $stream.Close()
            # First few strings usually contain headers
            $headers = ($xml.sst.si | Select-Object -First 7 | ForEach-Object { 
                if ($_.t) { $_.t } elseif ($_.r) { ($_.r | ForEach-Object { $_.t }) -join '' } 
            }) -join ", "
        }
        $sheetEntry = $zip.GetEntry("xl/worksheets/sheet1.xml")
        $rowCount = 0
        if ($sheetEntry) {
            $stream = $sheetEntry.Open()
            $reader = New-Object System.IO.StreamReader($stream)
            $sheetXml = [xml]$reader.ReadToEnd()
            $stream.Close()
            $rowCount = $sheetXml.worksheet.sheetData.row.Count - 1
        }
        $zip.Dispose()
        $summary += [PSCustomObject]@{
            File = $f.Name
            Type = "XLSX"
            TotalRows = $rowCount
            Header = $headers
        }
    }
}

$summary | Format-Table -AutoSize
$totalKeywords = ($summary | Measure-Object -Property TotalRows -Sum).Sum
Write-Host "Total raw rows across all files: $totalKeywords"

