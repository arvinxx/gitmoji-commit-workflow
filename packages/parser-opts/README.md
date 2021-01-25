# @gitmoji/parser-opts

> gitmoji styles commit parser options

## Usage

Regex pattern test here : [Regex101](https://regex101.com/r/YxXWi5/7)

```js
module.exports = {
  // Test URL: https://regex101.com/r/YxXWi5/9
  headerPattern: /^(?::\w*:\s)?(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
};
```
