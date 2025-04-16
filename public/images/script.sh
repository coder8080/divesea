#!/bin/bash
for IMG in {6..22}; do
    cwebp -q 92 "${IMG}.jpg" -o "${IMG}.webp"
done
