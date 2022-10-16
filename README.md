# VS Code Markdown Grammar

[![Build Status](https://dev.azure.com/monacotools/Monaco/_apis/build/status/Extensions/microsoft.vscode-markdown-tm-grammar?branchName=main)](https://dev.azure.com/monacotools/Monaco/_build/latest?definitionId=203&branchName=main)

VS Code markdown extension's TextMate grammar.

## Contributing

The main grammar is stored in `syntaxes/markdown.tmLanguage`. This file is generated from `markdown.tmLanguage.base.yaml`:

### Building

To generate the main grammar:

```console
npm install
npm run build
```

### Testing

To run the grammar tests:

```console
npm run test
```

The test cases are stored as markdown files under `test/colorize-fixtures`. Grammar test results are stored under `test/colorize-results`, which are automatically generated from the fixtures.

To test the grammar in VS Code, select the `Launch Extension` configuration in the VS Code debugger and run.
