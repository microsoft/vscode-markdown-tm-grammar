import path from 'node:path';
import { runTests } from 'vscode-test';

async function go() {
    try {
        const extensionDevelopmentPath = path.resolve(import.meta.dirname, '..');
        const extensionTestsPath = path.resolve(import.meta.dirname);

        await runTests({
            extensionDevelopmentPath,
            extensionTestsPath,
            version: 'insiders',
            launchArgs: [
                '--disable-extensions'
            ]
        });
    } catch (err) {
        console.error('Failed to run tests');
        process.exit(1);
    }
}

go();
