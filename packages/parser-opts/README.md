# @gitmoji/parser-opts

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

a shareable parser options for gitmoji styles commit

this package is used in both [conventional-changelog-gitmoji-config](../changelog) and [commitlint-config-gitmoji](../config)

## Sources

Header regex pattern test here : [Regex101](https://regex101.com/r/YxXWi5/11)

```js
module.exports = {
  headerPattern: /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
};
```

## License

[MIT](../../LICENSE) ® Arvin Xu

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/@gitmoji/parser-opts.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/@gitmoji/parser-opts
[download-image]: https://img.shields.io/npm/dm/@gitmoji/parser-opts.svg
[download-url]: https://npmjs.org/package/@gitmoji/parser-opts
