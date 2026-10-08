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

def escape_ts_template(content: str) -> str:
    # Escape backticks and ${ so the content is safe inside a TS template literal
    content = content.replace('\\', '\\\\')
    content = content.replace('`', '\\`')
    content = content.replace('${', '\\${')
    return content

# Write the HTML contents to the TypeScript file
# (skip writing when unchanged, so wrangler's watcher doesn't rebuild in a loop)
def write_if_changed(path: str, content: str):
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as file:
            if file.read() == content:
                return False
    with open(path, 'w', encoding='utf-8') as file:
        file.write(content)
    return True

html_ts_content = '// Auto-generated file. Do not edit.\n\n'
html_ts_content += 'export const htmlBase = {\n'
for key, content in html_contents.items():
    html_ts_content += f'    {key}: `{escape_ts_template(content)}`,\n'
html_ts_content += '};\n'
write_if_changed(output_file, html_ts_content)

print(f'Successfully exported HTML contents to {output_file}')

# Read the stylesheet and export it as css.ts, so index.css stays the single source of truth
css_path = 'src/index.css'
css_output_file = 'src/css.ts'
with open(css_path, 'r', encoding='utf-8') as file:
    css_content = escape_ts_template(file.read())

css_ts_content = '// Auto-generated file. Do not edit. Source: src/index.css\n\n'
css_ts_content += f'export const css: string = `{css_content}`;\n'
write_if_changed(css_output_file, css_ts_content)

print(f'Successfully exported stylesheet to {css_output_file}')
