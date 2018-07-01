module.exports = {
  "env": {
    "browser": true,
    "amd": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "stroustrup"],
    "block-scoped-var": "error",
    "comma-dangle": ["error", "never"],
    "comma-style": ["error", "last"],
    "consistent-this": ["error", "self"],
    "curly": ["error", "all"],
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eqeqeq": "error",
    "for-direction": "off",
    "func-style": ["error", "declaration"],
    "guard-for-in": "error",
    "indent": ["off", 2],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "minimum" }],
    "keyword-spacing": ["error", { "before": true }],
    "linebreak-style": ["error", "unix"],
    "max-len": ["warn", 100],
    "new-cap": "error",
    "newline-after-var": ["error", "always"],
    "newline-per-chained-call": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-console": "warn",
    "no-continue": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-extra-semi": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "off",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-tabs": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": ["warn", { "args": "all" }],
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-undef-init": "error",
    "no-use-before-define": "error",
    "no-void": "error",
    "object-curly-spacing": ["error", "always"],
    "operator-assignment": ["error", "always"],
    "padded-blocks": ["warn", "never"],
    "quotes": ["error", "single", { "avoidEscape": true }],
    "radix": "error",
    "semi": ["error", "always"],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always", { "block": { "balanced": true } }],
    "yoda": "error"
  }
};
