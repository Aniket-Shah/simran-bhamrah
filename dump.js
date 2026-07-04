const fs = require('fs');
const lines = fs.readFileSync('/mnt/c/Users/shaha/.gemini/antigravity-ide/brain/98a86b98-f508-4717-bb99-a896f165b80f/.system_generated/logs/transcript.jsonl', 'utf-8').split('\n');

let count = 0;

for (let line of lines) {
    if (!line.trim()) continue;
    if (line.includes('write_to_file') || line.includes('replace_file_content')) {
        try {
            const entry = JSON.parse(line);
            if (entry.tool_calls) {
                for (let call of entry.tool_calls) {
                    if (call.function.name.includes('write_to_file')) {
                        const args = JSON.parse(call.function.arguments);
                        if (args.TargetFile && args.TargetFile.endsWith('page.tsx')) {
                            fs.writeFileSync(`/var/www/html/simran-bhamrah/page_${count}.tsx`, args.CodeContent);
                            count++;
                        }
                    }
                }
            }
        } catch(e) {}
    }
}
console.log('Saved files:', count);
