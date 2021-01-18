# @gitmoji/parser-opts

> 在多个工具中共享的 gitmoji styles commit 解析器

## Usage

正则表达式: [传送门](https://regex101.com/r/YxXWi5/7)

```js
module.exports = {
  // Test URL: https://regex101.com/r/YxXWi5/7
  headerPattern: /^(?::\w*:\s)?(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*\w)\s?(?<ticket>#\d*)?$/,
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
};
```
