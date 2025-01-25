# tree-sitter-mql5

[MQL5](https://www.mql5.com/ja/docs) Language grammar for the [tree-sitter](https://github.com/tree-sitter).

## Link

- [MQL5_Zed_Extension](https://github.com/chaploud/MQL5_Zed_Extension)
- [mskelton/tree-sitter-mql5](https://github.com/mskelton/tree-sitter-mql5)
- [Tree-sitter:Creating Parsers](https://tree-sitter.github.io/tree-sitter/creating-parsers/1-getting-started.html)

## File Description

### Auto Generated Files

<details>

<summary>Ganerated by `tree-sitter init`</summary>

```bash
tree-sitter-mql5/
├── .editorconfig # 'editorconfig' setting file
├── .gitattributes # linguist setting file for GitHub
├── .gitignore # ignore build files
├── Cargo.toml # (Rust) Cargo configuration file
├── binding.gyp # (Node.js) Node.js binding configuration file
├── grammar.js # tree-sitter grammar file (Explain later)
├── package.json # Node.js package configuration file
├── tree-sitter.json # tree-sitter configuration file
└── bindings/ # Binding files for each language
    ├── node/
    │   ├── binding.cc
    │   ├── binding_test.js
    │   ├── index.d.ts
    │   └── index.js
    └── rust/
        ├── build.rs
        └── lib.rs
```

</details>

<details>
<summary>Ganerated by `tree-sitter generate`</summary>

```bash
tree-sitter-mql5/
└── src/  # Generated Code (C language)
   ├── grammar.json
   ├── node-types.json
   ├── parser.c
   └── tree_sitter/
       ├── alloc.h
       ├── array.h
       └── parser.h
```
</details>

<details>

<summary>Ganerated by `npm install`</summary>

**Note**: These files are ignored by `.gitignore` other than `package-lock.json`.

```bash
build/
node_modules/
target/
package-lock.json
```

</details>

### Manually Edited Files

- `README.md`: This file.
- `LICENSE`: License file.
- `grammar.js`: Tree-sitter grammar file.
- `.eslintrc.js`: ESLint configuration file.
