const fs = require('fs');
const path = require('path');
const Mocha = require('mocha');

module.exports.run = function (testsRoot, cb) {
    // Create the mocha test
    const mocha = new Mocha({
        ui: 'tdd',
        timeout: 30_000
    });

    try {
        const files = fs.readdirSync(testsRoot, { recursive: true })
            .filter(f => f.endsWith('.test.js'));

        // Add files to the test suite
        files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

        // Run the mocha test
        mocha.run(failures => {
            cb(null, failures);
        });
    } catch (err) {
        console.error(err);
        cb(err);
    }
}