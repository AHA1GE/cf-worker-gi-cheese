import os

# Directory containing the HTML files
html_dir = 'src/html_pages'

# Output TypeScript file
output_file = 'src/htmlBase.ts'

# HTML file names
html_files = {
    'mainPage': 'main-page.html',
    'mainPageCard': 'main-page-card.html',
    'serverPage': 'server-page.html',
    'serverPageCard': 'server-page-card.html',
}

# Read the contents of each HTML file
html_contents = {}
for key, filename in html_files.items():
    filepath = os.path.join(html_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as file:
        html_contents[key] = file.read()

# Write the HTML contents to the TypeScript file
with open(output_file, 'w', encoding='utf-8') as ts_file:
    ts_file.write('// Auto-generated file. Do not edit.\n\n')
    ts_file.write('export const htmlBase = {\n')
    for key, content in html_contents.items():
        # Replace backticks in HTML content to avoid template string issues
        content = content.replace('`', '\\`')
        ts_file.write(f'    {key}: `{content}`,\n')
    ts_file.write('};\n')

print(f'Successfully exported HTML contents to {output_file}')
