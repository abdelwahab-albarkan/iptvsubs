// Antennas module: Genuine content for physical over-the-air (OTA) antennas, coaxial cabling, ATSC tuners, and channel scanning.
// NO IPTV server logins, NO Xtream Codes API, NO Cat6 Ethernet claims.

function generateAntennaContent(p, hash) {
  const kw = p.primaryKeyword || p.slug.replace(/-/g, ' ');
  const kwTitle = kw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const sections = [
    {
      title: `1. Over-the-Air Broadcast Principles & ${kwTitle}`,
      content: `Cutting the cord and capturing high-definition broadcast television directly from local transmitter towers begins with understanding the engineering behind ${kw}. Over-the-air (OTA) television delivers uncompressed digital signals from major national network affiliates—including ABC, CBS, NBC, FOX, The CW, PBS, and Univision—completely free of monthly subscription fees. Because traditional cable and satellite providers heavily compress video signals to conserve bandwidth, an uncompressed digital broadcast received via ${kw} often delivers superior picture clarity, deeper black levels, and sharper motion tracking than paid cable feeds. Whether you live in an urban apartment close to transmission towers or a suburban residence requiring multi-directional reception, selecting and correctly positioning your antenna is the cornerstone of an independent, contract-free home entertainment setup.`
    },
    {
      title: `2. Frequency Bands, VHF vs. UHF & Coaxial Cabling Standards`,
      content: `Evaluating technical performance for ${kw} requires understanding the two primary frequency spectrums used by North American television broadcasters: Very High Frequency (VHF) and Ultra High Frequency (UHF). Following the FCC spectrum repack, major broadcast networks operate primarily across VHF-Hi (channels 7 to 13, spanning 174 to 216 MHz) and UHF (channels 14 to 36, spanning 470 to 608 MHz). Ultra-thin flat leaf antennas excel at capturing UHF frequencies but often struggle with VHF channels without wide physical dipole elements. When routing signals from your antenna to your television tuner, always utilize high-grade quad-shielded RG6 coaxial cabling with weather-sealed compression F-connectors. Avoid legacy, thin RG59 coaxial cables, which suffer from severe signal attenuation over distances exceeding 25 feet and lack adequate shielding against modern electromagnetic interference from household Wi-Fi routers and power supplies.`
    },
    {
      title: `3. Step-by-Step Installation & TV Channel Scanning Guide`,
      content: `Deploying ${kw} across your television setup is accomplished through this tested five-step installation sequence:\n` +
        `1. Physical Coaxial Connection: Connect the male F-type connector of your RG6 coaxial cable directly into the 75-ohm threaded 'Antenna In', 'Air', or 'Cable In' port on the rear of your smart TV or digital tuner box. Finger-tighten securely without overtightening.\n` +
        `2. Strategic Placement: Position your antenna as high as possible, ideally on or directly adjacent to an exterior window facing toward your local regional broadcast transmission towers.\n` +
        `3. Select TV Source: Turn on your television, press the Input or Source button on your remote control, and select 'TV', 'Antenna', or 'Air' mode.\n` +
        `4. Initiate Digital Channel Scan: Open your television System Settings menu, navigate to Channels or Broadcast, and select 'Auto-Program', 'Channel Scan', or 'Digital Channel Search'. Select 'Air' (not 'Cable') as the signal source.\n` +
        `5. Save and Verify Channels: Allow the automated tuner scan 5 to 10 minutes to scan VHF and UHF frequencies. Once complete, browse your channel lineup to verify signal strength and crystal-clear audio-video synchronization across all local affiliates.`
    },
    {
      title: `4. Signal Optimization, Multipath Interference & LTE/5G Filters`,
      content: `When troubleshooting missing broadcast channels or pixelated digital artifacts with ${kw}, resolving physical signal interference is paramount. Unlike analog broadcasts that produced manageable static, digital television exhibits the 'digital cliff effect'—meaning the picture is either pristine or drops completely into a black screen with no audio. If your residence is constructed with energy-efficient Low-E glass windows, aluminum siding, or stucco reinforced with metal mesh, these building materials can attenuate digital broadcast frequencies by up to 15 dB. Relocating your antenna to a higher elevation or into an attic space dramatically improves line-of-sight reception. Additionally, nearby 4G LTE and 5G cellular transmission towers operate on frequencies adjacent to TV channel 36 (600 MHz spectrum). Installing an inline LTE/5G interference filter between your antenna and TV removes high-power cellular signals, restoring stable reception on channels that previously suffered from intermittent dropouts.`
    },
    {
      title: `5. Active Amplifiers vs. Passive Antennas & Tuner Sensitivity`,
      content: `Deciding between an amplified or passive configuration for ${kw} depends strictly on your geographical distance from regional broadcast towers. If your residence is located within 20 miles of broadcast towers with unobstructed topography, a passive antenna is strongly recommended. Installing a high-gain inline pre-amplifier in a strong signal zone can overdrive your television internal digital tuner front-end, causing digital distortion and resulting in fewer channels than a simple unamplified antenna. Conversely, if you live 35 to 60 miles from transmission towers, an active amplifier with a low noise figure (below 2.0 dB) boosts faint signals above the coaxial cable noise floor. For whole-home distribution where a single antenna feeds multiple television screens, install an active distribution amplifier or a network tuner (such as an HDHomeRun or Tablo) to broadcast uncompressed over-the-air feeds to all your family smart TVs and mobile devices over local Wi-Fi.`
    },
    {
      title: `6. ATSC 3.0 NextGen TV Integration & Hybrid Cord-Cutting Strategy`,
      content: `The emergence of the ATSC 3.0 broadcast standard (commercially branded as NextGen TV) marks the most significant leap in over-the-air broadcasting in two decades, and ${kw} is fully compatible with this revolutionary format. ATSC 3.0 operates using robust Orthogonal Frequency Division Multiplexing (OFDM) modulation, dramatically improving indoor building penetration and eliminating multipath interference. NextGen TV enables native 4K Ultra HD broadcasts with High Dynamic Range (HDR10), wide color gamuts, and interactive emergency alerting alongside advanced Dolby AC-4 audio with dialog enhancement technology. By pairing your physical antenna with an ATSC 3.0 compatible television or external converter box, you secure free, uncompressed local live broadcasts. When combined with a premium streaming subscription for out-of-market sports and commercial-free entertainment, households achieve complete digital freedom, saving over $1,400 annually without sacrificing a single live channel.`
    }
  ];

  const faqs = [
    {
      question: `How many channels will I receive with ${kw}?`,
      answer: `Channel availability depends on your geographical distance from regional transmission towers, local topography, and antenna height. Most suburban and urban US households capture between 35 and 80 free digital channels, including all major network affiliates (ABC, CBS, NBC, FOX, PBS, The CW).`
    },
    {
      question: `Do I need an amplified antenna or a passive antenna for ${kw}?`,
      answer: `If you live within 20 to 25 miles of broadcast towers, a passive antenna is best, as amplifiers can overload your TV tuner. If you live 35 miles or further from towers, an amplified antenna is recommended to boost weak digital signals.`
    },
    {
      question: `Why did some of my TV channels suddenly disappear?`,
      answer: `Television stations occasionally modify transmitter power, adjust tower frequencies, or transition to ATSC 3.0. Running a new 'Auto Channel Scan' in your TV settings every few months updates your tuner database and restores missing channels.`
    }
  ];

  return { sections, faqs };
}

module.exports = { generateAntennaContent };

