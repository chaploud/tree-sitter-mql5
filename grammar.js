/**
 * @file MQL5 language grammar for the tree-sitter.
 * @author chaploud <kudou-s0camfci76w@outlook.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "mql5",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
