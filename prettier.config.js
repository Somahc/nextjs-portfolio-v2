/** @type {import('prettier').Config} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false, // セミコロン無し
  singleQuote: true, // シングルクォート使う
  printWidth: 90, // 折り返し
  tabWidth: 2, // スペースの単位
  trailingComma: "all", // ケツカンマつける
  jsxSingleQuote: true, //　JSXでシングルクォートを使用
};
