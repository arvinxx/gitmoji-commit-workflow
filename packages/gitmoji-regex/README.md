# @gitmoji/gitmoji-regex

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

a gitmoji regex to for both gitmoji code and gitmoji unicode

this package is used in both [@gitmoji/parser-opts](../parser-opts) and [commitlint-plugin-gitmoji](../commitlint-plugin)

## emojiRegex

## gitmojiCodeRegex

## gitmojiUnicodeRegex

Header regex pattern test here : [Regex101](https://regex101.com/r/gYkG99/1)

```js
module.exports = {
  headerPattern:
    /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))(?:\s\(?(?<ticket>#\d*)\)?)?$/,
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
};
```

## License

[MIT](../../LICENSE) ® Arvin Xu

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/@gitmoji/gitmoji-regex.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/@gitmoji/gitmoji-regex
[download-image]: https://img.shields.io/npm/dm/@gitmoji/gitmoji-regex.svg
[download-url]: https://npmjs.org/package/@gitmoji/gitmoji-regex
