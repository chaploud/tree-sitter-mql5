/**
 * @file MQL5 language grammar for the tree-sitter.
 * @author chaploud <kudou-s0camfci76w@outlook.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

const PREC = {
  PAREN_DECLARATOR: -10,
  ASSIGNMENT: -2,
  CONDITIONAL: -1,
  DEFAULT: 0,
  LOGICAL_OR: 1,
  LOGICAL_AND: 2,
  INCLUSIVE_OR: 3,
  EXCLUSIVE_OR: 4,
  BITWISE_AND: 5,
  EQUAL: 6,
  RELATIONAL: 7,
  OFFSETOF: 8,
  SHIFT: 9,
  ADD: 10,
  MULTIPLY: 11,
  CAST: 12,
  SIZEOF: 13,
  UNARY: 14,
  CALL: 15,
  FIELD: 16,
  SUBSCRIPT: 17,
};

module.exports = grammar({
  name: "mql5",

  // manage name conflicts in the grammar
  conflicts: ($) => [
    [$.type_specifier, $._declarator],
    [$.type_specifier, $._declarator, $.macro_type_specifier],
    [$.type_specifier, $.expression],
    [$.type_specifier, $.expression, $.macro_type_specifier],
    [$.type_specifier, $.macro_type_specifier],
    [$.type_specifier, $.sized_type_specifier],
    [$.sized_type_specifier],
    [$.attributed_statement],
    [$._declaration_modifiers, $.attributed_statement],
    [$.enum_specifier],
    [$.type_specifier, $._old_style_parameter_list],
    [$.parameter_list, $._old_style_parameter_list],
    [$.function_declarator, $._function_declaration_declarator],
    [$._block_item, $.statement],
    [$._top_level_item, $._top_level_statement],
    [$.type_specifier, $._top_level_expression_statement],
    [$.type_qualifier, $.extension_expression],
  ],

  extras: ($) => [
    /\s|\\\r?\n/,
    $.comment,
  ],

  inline: ($) => [
    $._type_identifier,
    $._field_identifier,
    $._statement_identifier,
    $._non_case_statement,
    $._assignment_left_expression,
    $._expression_not_binary,
  ],

  supertypes: ($) => [
    $._expression,
    $._statement,
    $._type_specifier,
    $._declarator,
    $._field_declarator,
    $._type_declarator,
    $._abstract_declarator,
  ],

  word: ($) => $.identifier,

  rules: {
    translation_unit: ($) => repeat($._top_level_item),

    // Top level items are block items with the exception of the expression statement
    _top_level_item: ($) => choice(
      $.function_definition,
      alias($._old_style_function_definition, $.function_definition),
      $.linkage_specification,
      $.declaration,
      $._top_level_statement,
      $.attributed_statement,
      $.type_definitaion,
      $._empty_declaration,
      $.preproc_if,
      $.preproc_ifdef,
      $.preproc_include,
      $.preproc_include,
      $.preproc_def,
      $.preproc_function_def,
      $.preproc_call,
    ),

    _block_item: $ => choice(
      $.function_definition,
      alias($._old_style_function_definition, $.function_definition),
      $.linkage_specification,
      $.declaration,
      $.statement,
      $.attributed_statement,
      $.type_definitaion,
      $._empty_declaration,
      $.preproc_if,
      $.preproc_ifdef,
      $.preproc_include,
      $.preproc_def,
      $.preproc_function_def,
      $.preproc_call,
    ),

    // TODO:

  source_file: ($) => "hello",
  },
});

module.exports.PREC = PREC;

/**
 * @param {string} suffix
 * @param {RuleBuilder<string>} content
 * @param {number} precedence
 * @returns {RuleBuilders<string, string>}
 */
function preprocIf(suffix, content, precedence = 0) {
  /**
   * @param {GrammarSymbols<string>} $
   * @returns {ChoiceRule}
   */
  function alternativeBlock($) {
    return choice(
      suffix ? alias($['preproc_else' + suffix], $.preproc_else) : $.preproc_else,
      suffix ? alias($['preproc_elif' + suffix], $.preproc_elif) : $.preproc_elif,
      suffix ? alias($['preproc_elifdef' + suffix], $.preproc_elifdef) : $.preproc_elifdef,
    )
  }

  return {
    ['preproc_if' + suffix]: ($) => prec(precedence, seq(
      preprocessor('if'),
      field('condition', $._preproc_expression),
      '\n',
      repeat(content($)),
    ))
  }

}

/**
 * Creates a preprocessor regex rule
 * @param {RegExp | Rule | string} command
 * @returns {AliasRule}
 */
function preprocessor(command) {
  return alias(new RegExp('#[ \t]*' + command), '#' + command)
}
