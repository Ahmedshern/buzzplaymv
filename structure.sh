#!/bin/bash

# Define the directory of your Next.js project
PROJECT_DIR=${1:-$(pwd)}

# Define the output file
OUTPUT_FILE="project_structure.txt"

# Define directories and files to exclude
EXCLUDE_DIRS="node_modules .git .next .vercel"
EXCLUDE_FILES="*.log *.lock"

# Create a regex pattern for exclusions
EXCLUDE_PATTERN=$(echo $EXCLUDE_DIRS | sed 's/ /\\|/g')

# Check if tree command is available
if command -v tree &> /dev/null; then
    echo "Generating project structure using tree..."
    # Use tree, ignoring specified directories
    tree "$PROJECT_DIR" -I "$EXCLUDE_PATTERN" -o "$OUTPUT_FILE"
else
    echo "tree command not found. Falling back to find."
    # Use find as a fallback
    find "$PROJECT_DIR" \
        -type d \( -name "node_modules" -o -name ".git" -o -name ".next" -o -name ".vercel" \) -prune -o \
        -type f \( -name "*.log" -o -name "*.lock" \) -prune -o \
        -print | sed "s|$PROJECT_DIR/||" > "$OUTPUT_FILE"
fi

echo "Project structure saved to $OUTPUT_FILE."
