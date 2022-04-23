module.exports = {
  root: true,
  globals: {
    defineEmits: "readonly",
    defineProps: "readonly",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "airbnb-base",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
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
    "arrow-parens": 0,
    "generator-star-spacing": 0,

    //强制不使用分号结尾
    semi: ["error", "never"],
    indent: ["error", 4],
    "space-before-function-paren": 0,
    "eol-last": 0,
    "no-useless-escape": "off",
    "max-len": [
      2,
      200,
      4,
      {
        ignoreUrls: true,
      },
    ],
    "guard-for-in": "error",
    "vue/multi-word-component-names": 0, // 取消组件名称校验
  },
};
