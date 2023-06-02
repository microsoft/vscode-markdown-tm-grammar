//@ts-check
const path = require('path');
const { runTests } = require('vscode-test');

async function go() {
    try {
        const extensionDevelopmentPath = path.resolve(__dirname, '..');
        const extensionTestsPath = path.resolve(__dirname);

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