module.exports = {
  rules: {
    // Stylistic Issues
    'array-bracket-spacing': [2, 'never'], // enforce spacing inside array brackets (off by default)
    'brace-style': [2, '1tbs', { allowSingleLine: false }], // enforce one true brace style (off by default)
    camelcase: 1, // require camel case names
    'comma-spacing': [2, { before: false, after: true }], // enforce spacing before and after comma
    'comma-style': [2, 'last'], // enforce one true comma style (off by default)
    'computed-property-spacing': 0, // require or disallow padding inside computed properties (off by default)
    'consistent-this': 1, // enforces consistent naming when capturing the current execution context (off by default)
    'eol-last': 2, // enforce newline at the end of file, with no multiple empty lines
    'func-names': 0, // require function expressions to have a name (off by default)
    'func-style': 0, // enforces use of function declarations or expressions (off by default)
    indent: [2], // this option sets a specific tab width for your code (off by default)
    'key-spacing': [2, { beforeColon: false, afterColon: true }], // enforces spacing between keys and values in object literal properties
    'lines-around-comment': 0, // enforces empty lines around comments (off by default)
    'linebreak-style': 0, // disallow mixed 'LF' and 'CRLF' as linebreaks (off by default)
    'max-nested-callbacks': 0, // specify the maximum depth callbacks can be nested (off by default)
    'new-cap': 0, // require a capital letter for constructors
    'new-parens': 1, // disallow the omission of parentheses when invoking a constructor with no arguments
    'newline-after-var': 0, // allow/disallow an empty newline after var statement (off by default)
    'no-array-constructor': 2, // disallow use of the Array constructor
    'no-continue': 0, // disallow use of the continue statement (off by default)
    'no-inline-comments': 0, // disallow comments inline after code (off by default)
    'no-lonely-if': 0, // disallow if as the only statement in an else block (off by default)
    'no-mixed-spaces-and-tabs': 2, // disallow mixed spaces and tabs for indentation
    'no-multiple-empty-lines': 0, // disallow multiple empty lines (off by default)
    'no-nested-ternary': 0, // disallow nested ternary expressions (off by default)
    'no-new-object': 2, // disallow use of the Object constructor
    'no-spaced-func': 0, // disallow space between function identifier and application
    'no-ternary': 0, // disallow the use of ternary operators (off by default)
    'no-trailing-spaces': 0, // disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 0, // disallow dangling underscores in identifiers
    'object-curly-spacing': [2, 'always'], // require or disallow padding inside curly braces (off by default)
    'one-var': 0, // allow just one var statement per function (off by default)
    'operator-assignment': 0, // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    'operator-linebreak': 0, // enforce operators to be placed before or after line breaks (off by default)
    'padded-blocks': 0, // enforce padding within blocks (off by default)
    'quote-props': 0, // require quotes around object literal property names (off by default)
    quotes: [2, 'single'], // specify whether double or single quotes should be used
    'semi-spacing': [2, { before: false, after: true }], // enforce spacing before and after semicolons
    semi: 0, // require or disallow use of semicolons instead of ASI
    'sort-vars': 0, // sort variables within the same declaration block (off by default)
    'space-after-keywords': 0, // require a space after certain keywords (off by default)
    'space-before-blocks': 2, // require or disallow space before blocks (off by default)
    'space-before-function-paren': 0, // require or disallow space before function opening parenthesis (off by default)
    'space-in-parens': 0, // require or disallow spaces inside parentheses (off by default)
    'space-infix-ops': 1, // require spaces around operators
    'space-return-throw-case': 0, // require a space after return, throw, and case
    'space-unary-ops': 0, // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    'spaced-comment': 0, // require or disallow a space immediately following the                                                  // or /* in a comment (off by default)
    'wrap-regex': 0 // require regex literals to be wrapped in parentheses (off by default)
  },
  globals: {
    $: true
  },
  parser: 'vue-eslint-parser',
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12
  },
  extends: 'standard'
}
