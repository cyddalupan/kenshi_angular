#!/bin/bash

# Create a simple blue gradient with white skeleton placeholder
# Using ImageMagick to create placeholder icons

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick not found. Installing..."
    apt-get update && apt-get install -y imagemagick
fi

# Create directory for icons
mkdir -p icons

# Create PWA icons (multiple sizes for different devices)
echo "Creating PWA icons..."
convert -size 192x192 gradient:blue-cyan -fill white -draw "circle 96,96 96,48" -pointsize 48 -fill black -gravity center -annotate 0 "💀" icons/icon-192x192.png
convert -size 512x512 gradient:blue-cyan -fill white -draw "circle 256,256 256,128" -pointsize 120 -fill black -gravity center -annotate 0 "💀" icons/icon-512x512.png

# Create favicon (multiple sizes in one .ico file)
echo "Creating favicon.ico..."
convert -size 16x16 gradient:blue-cyan -fill white -draw "circle 8,8 8,4" -pointsize 10 -fill black -gravity center -annotate 0 "S" icons/favicon-16x16.png
convert -size 32x32 gradient:blue-cyan -fill white -draw "circle 16,16 16,8" -pointsize 16 -fill black -gravity center -annotate 0 "S" icons/favicon-32x32.png
convert -size 48x48 gradient:blue-cyan -fill white -draw "circle 24,24 24,12" -pointsize 24 -fill black -gravity center -annotate 0 "S" icons/favicon-48x48.png

# Combine into favicon.ico
convert icons/favicon-16x16.png icons/favicon-32x32.png icons/favicon-48x48.png favicon.ico

# Create apple touch icon
convert -size 180x180 gradient:blue-cyan -fill white -draw "circle 90,90 90,45" -pointsize 60 -fill black -gravity center -annotate 0 "💀" icons/apple-touch-icon.png

echo "✅ Icons created in 'icons/' directory and favicon.ico"
echo ""
echo "Icon sizes created:"
echo "1. icon-192x192.png - PWA icon (192x192)"
echo "2. icon-512x512.png - PWA splash screen (512x512)"
echo "3. favicon.ico - Browser favicon (16x16, 32x32, 48x48)"
echo "4. apple-touch-icon.png - iOS home screen (180x180)"
echo ""
echo "Replace these with actual skeleton image when available."
