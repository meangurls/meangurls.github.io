#!/usr/bin/python3
from PIL import Image
import os

# Define input and output folders
input_folder = "../../public/media"
output_folder = "../../public/minimedia"
os.makedirs(output_folder, exist_ok=True)  # Create the output folder if it doesn't exist

# Set the desired quality level (adjust as needed for balance between quality and size)
quality = 35  # 0-100, with 100 being the highest quality

# Process files from 0.jpg to 59.jpg
for i in range(60):
    input_path = os.path.join(input_folder, f"{i}.jpg")
    output_path = os.path.join(output_folder, f"{i}.webp")

    try:
        # Open the image file
        with Image.open(input_path) as img:
            # Convert to WebP format with reduced quality
            img.save(output_path, "WEBP", quality=quality)
            print(f"Converted {input_path} to {output_path} with quality {quality}")
    except Exception as e:
        print(f"Failed to convert {input_path}: {e}")
