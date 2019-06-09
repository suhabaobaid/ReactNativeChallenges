module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "env": {
      "browser": true,
  "react-native/react-native": true
  },
  "plugins": [
      "react",
  "react-native",
      "prettier"
  ],
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "globals": { //define the globals here
     "__DEV__": true,
     "require": true,
     "module": true,
     "Promise": true,
     "test": true,
     "expect": true
 },
  "rules": {
    //general
    "comma-dangle": ["error", "always-multiline"],

    //react plugin
  "react/no-string-refs": 0,
  "react/display-name": 0,
  "react/prop-types": 0,

    //style
    "no-multi-spaces": 1,
    "array-bracket-spacing": ["error", "never"],
    "indent": ["error", 4],
    "max-len": ["error", 180],
    "no-trailing-spaces": 1,
    "semi": ["error", "always"],
    "indent": ["error", "tab", { "SwitchCase": 1 }],

    //variables
    "no-undef": 1,
    "no-unused-vars": 2,
    "no-shadow": 1,
  }
};
