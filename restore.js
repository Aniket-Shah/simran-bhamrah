const fs = require('fs');
const lines = fs.readFileSync('/mnt/c/Users/shaha/.gemini/antigravity-ide/brain/98a86b98-f508-4717-bb99-a896f165b80f/.system_generated/logs/transcript.jsonl', 'utf-8').split('\n');

let targetCode = null;
let foundTarget = false;

for (let line of lines) {
    if (!line.trim()) continue;
    
    // Quick string check for write_to_file to avoid parsing everything
    if (line.includes('default_api:write_to_file') || line.includes('default_api:replace_file_content')) {
        try {
            const entry = JSON.parse(line);
            if (entry.tool_calls) {
                for (let call of entry.tool_calls) {
                    if (call.function.name.includes('write_to_file') || call.function.name.includes('replace_file_content')) {
                        const args = JSON.parse(call.function.arguments);
                        // Just grab any CodeContent or ReplacementContent that looks like the page.tsx
                        if (args.CodeContent && args.CodeContent.includes('export default function Home')) {
                            targetCode = args.CodeContent;
                        } else if (args.ReplacementContent && args.ReplacementContent.includes('export default function Home')) {
                            targetCode = args.ReplacementContent;
                        }
                    }
                }
            }
        } catch(e) {}
    }
    
    if (line.includes("I've fixed the build error")) {
        foundTarget = true;
        break;
    }
}

if (foundTarget && targetCode) {
    fs.writeFileSync('/var/www/html/simran-bhamrah/app/page.tsx', targetCode);
    console.log('Restored successfully');
} else {
    console.log('Not found:', { foundTarget, hasCode: !!targetCode });
}
