module.exports = {
  plugins: ["promise"],
  extends: ["plugin:promise/recommended"],

  rules: {
    "promise/always-return": ["warn", {
      ignoreLastCallback: true
    }],
  }
};
