module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "standard",
    // 新增这里vue3支持
    "plugin:vue/vue3-recommended",
  ],

  // 新的内容
  parserOptions: {
    ecmaVersion: 6, //对于新的 ES6 全局变量
    sourceType: "module", //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    ecmaFeatures: {
      modules: true,
    },
    requireConfigFile: false,
    parser: "@babel/eslint-parser", //解析器
  },
  plugins: ["vue"],
  rules: {
    "no-console": "on", // 页面开启console.log
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ], // 页面定义未使用的变量
    "no-useless-return": "off",
    "import/no-absolute-path": "off", // 允许使用绝对路径
    "no-shadow": ["warn"],
    "one-var": "off", // 是否可以同时定义多个变量
    "prefer-const": "off", // 建议使用const
    "no-underscore-dangle": "off",
    "prefer-template": "off",
    "no-else-return": "off",
    "prefer-object-spread": "off",
    "no-unused-expressions": "off",
    "no-lonely-if": "off",
    "max-classes-per-file": "off",

    semi: [2, "never"], // 禁止尾部使用分号“ ; ”
    "no-var": "error", // 禁止使用 var
    indent: ["error", 2], // 缩进2格
    "no-mixed-spaces-and-tabs": "error", // 不能空格与tab混用
    "vue/html-closing-bracket-newline": "off", // 不强制换行
    "vue/singleline-html-element-content-newline": "off", // 不强制换行
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: { max: 5 },
        multiline: { max: 5 },
      },
    ], // vue template模板元素第一行最多5个属性
    // 其它的规则可以去eslint查看，根据自己需要进行添加 https://cn.eslint.org/docs/user-guide/configuring
  },
};
