# VS Code Markdown Grammar

[![Build Status](https://travis-ci.org/Microsoft/vscode-markdown-tm-grammar.svg?branch=master)](https://travis-ci.org/Microsoft/vscode-markdown-tm-grammar)

VS Code markdown extension's Textmate grammar.

# Contributing
The main grammar is stored in `syntaxes/markdown.tmLanguage`. This file is generated from `markdown.tmLanguage.base.yaml`:

## Building
To generate the main grammar:

```bash
$ npm install
$ npm run build 
```

## Testing
To run the grammar tests:

```bash
$ npm run test
```

To test the grammar in VS Code, select the `Launch Extension` configuration in the VS Code debugger and run.