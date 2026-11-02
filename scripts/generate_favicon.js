// Generates a valid uncompressed BMP-based 16x16 favicon.ico
const fs = require('fs');

function createFaviconIco() {
  const width = 16;
  const height = 16;
  const bpp = 32;
  const imageSize = 40 + (width * height * 4); // BITMAPINFOHEADER (40) + pixel data
  
  const buffer = Buffer.alloc(6 + 16 + imageSize);
  
  // ICONDIR header
  buffer.writeUInt16LE(0, 0); // Reserved
  buffer.writeUInt16LE(1, 2); // Type: 1 = ICO
  buffer.writeUInt16LE(1, 4); // Count of images: 1
  
  // ICONDIRENTRY
  buffer.writeUInt8(width, 6);        // Width
  buffer.writeUInt8(height, 7);       // Height
  buffer.writeUInt8(0, 8);            // Color palette count
  buffer.writeUInt8(0, 9);            // Reserved
  buffer.writeUInt16LE(1, 10);        // Color planes
  buffer.writeUInt16LE(bpp, 12);      // Bits per pixel
  buffer.writeUInt32LE(imageSize, 14); // Bytes in resource
  buffer.writeUInt32LE(22, 18);        // Image offset from start of file (6 + 16)
  
  // BITMAPINFOHEADER
  let offset = 22;
  buffer.writeUInt32LE(40, offset); offset += 4;         // Header size
  buffer.writeInt32LE(width, offset); offset += 4;        // Width
  buffer.writeInt32LE(height * 2, offset); offset += 4;   // Height (doubled for XOR + AND masks)
  buffer.writeUInt16LE(1, offset); offset += 2;          // Color planes
  buffer.writeUInt16LE(bpp, offset); offset += 2;        // Bits per pixel
  buffer.writeUInt32LE(0, offset); offset += 4;          // Compression (0 = none)
  buffer.writeUInt32LE(width * height * 4, offset); offset += 4; // Image data size
  buffer.writeInt32LE(0, offset); offset += 4;           // H-res
  buffer.writeInt32LE(0, offset); offset += 4;           // V-res
  buffer.writeUInt32LE(0, offset); offset += 4;          // Colors used
  buffer.writeUInt32LE(0, offset); offset += 4;          // Important colors
  
  // Pixel data (BGRA, bottom-up)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Cyan border, dark blue fill (#06b6d4, #030712)
      const isBorder = (x === 0 || x === width - 1 || y === 0 || y === height - 1);
      if (isBorder) {
        buffer.writeUInt8(212, offset);     // B
        buffer.writeUInt8(182, offset + 1); // G
        buffer.writeUInt8(6, offset + 2);   // R
        buffer.writeUInt8(255, offset + 3); // A
      } else {
        buffer.writeUInt8(18, offset);      // B
        buffer.writeUInt8(7, offset + 1);   // G
        buffer.writeUInt8(3, offset + 2);   // R
        buffer.writeUInt8(255, offset + 3); // A
      }
      offset += 4;
    }
  }

  fs.writeFileSync('public/favicon.ico', buffer);
  console.log('Successfully created valid public/favicon.ico (' + buffer.length + ' bytes)');
}

createFaviconIco();

