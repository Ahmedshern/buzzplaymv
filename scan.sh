#!/bin/bash

# Usage message function
usage() {
    echo "Usage: $0 <project_directory> [output_file]"
    echo "If output_file is not specified, defaults to project_code.txt"
    exit 1
}

# Check for required argument
if [ -z "$1" ]; then
    usage
fi

# Set variables
PROJECT_DIR="$1"
OUTPUT_FILE="${2:-project_code.txt}"

# Check if project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo "Error: Project directory '$PROJECT_DIR' does not exist"
    exit 1
fi

# Check if it's a Next.js project
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    echo "Error: Not a valid Next.js project (package.json not found)"
    exit 1
fi

# Create or clear output file
> "$OUTPUT_FILE"

# Write header
echo "// Next.js Project Code Export" >> "$OUTPUT_FILE"
echo "// Generated on: $(date)" >> "$OUTPUT_FILE"
echo "// Project: $(basename "$PROJECT_DIR")" >> "$OUTPUT_FILE"
echo >> "$OUTPUT_FILE"

# Write package.json info
echo "// Package.json Information:" >> "$OUTPUT_FILE"
echo "// ======================" >> "$OUTPUT_FILE"
cat "$PROJECT_DIR/package.json" >> "$OUTPUT_FILE"
echo -e "\n\n" >> "$OUTPUT_FILE"

# Function to write file content with header
write_file_content() {
    local file="$1"
    local relative_path="${file#$PROJECT_DIR/}"
    
    echo "================================================================================" >> "$OUTPUT_FILE"
    echo "// File: $relative_path" >> "$OUTPUT_FILE"
    echo "================================================================================" >> "$OUTPUT_FILE"
    echo >> "$OUTPUT_FILE"
    cat "$file" >> "$OUTPUT_FILE"
    echo -e "\n\n" >> "$OUTPUT_FILE"
}

# Find and process relevant files
echo "Scanning project files..."

find "$PROJECT_DIR" \
    -type f \
    \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \
       -o -name "*.css" -o -name "*.scss" -o -name "*.sass" \
       -o -name "*.json" -o -name "*.md" \) \
    ! -path "*/node_modules/*" \
    ! -path "*/.next/*" \
    ! -path "*/out/*" \
    ! -path "*/build/*" \
    ! -path "*/.git/*" \
    ! -path "*/.github/*" \
    ! -path "*/public/*" \
    ! -path "*/assets/*" \
    ! -path "*/images/*" \
    ! -name "package-lock.json" \
    ! -name "yarn.lock" \
    ! -name ".env*" \
    ! -name ".gitignore" \
    -print0 | while IFS= read -r -d $'\0' file; do
        echo "Processing: $file"
        write_file_content "$file"
    done

# Calculate and display file size
SIZE=$(wc -c < "$OUTPUT_FILE")
SIZE_KB=$(echo "scale=2; $SIZE/1024" | bc)

echo -e "\nExport complete!"
echo "Output file: $OUTPUT_FILE"
echo "Total size: ${SIZE_KB}KB"

# Add warning if file is large
if [ "${SIZE_KB%.*}" -gt 1024 ]; then
    echo "Warning: File is larger than 1MB, might need to be split for some AI models"
fi
