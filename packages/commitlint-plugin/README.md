# commitlint-plugin-gitmoji

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

a commitlint plugin to add gitmoji check rule

## Custom Gitmoji JSON path or URL

## Fetch Error

if you meet the below error. It means that you failed to fetch the `gitmojis.json` file.

```shell
Failed to fetch gitmoji JSON, please refer to https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/plugin#fetch-error for help.
```

the solution is that manual downloads the [gitmoji.json](https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json) file and add it to `node_modules/commitlint-plugin-gitmoji/lib` folder

## License

[MIT](../../LICENSE) ® Arvin Xu

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/commitlint-plugin-gitmoji.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/commitlint-plugin-gitmoji
[download-image]: https://img.shields.io/npm/dm/commitlint-plugin-gitmoji.svg
[download-url]: https://npmjs.org/package/commitlint-plugin-gitmoji
