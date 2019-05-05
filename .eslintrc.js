module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "global-require": 0,
        "react/no-array-index-key": 0,
        "react/require-default-props": 0,
        "jsx-a11y/no-autofocus": 0,
        "jsx-a11y/label-has-for": 0,
        "no-return-assign": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "class-methods-use-this": 0,
        "react/prop-types": 0,
        "prefer-destructuring": 0,
        "no-undef": 0,
        "no-unused-vars": 0,
        "no-console": "off",
    }
};