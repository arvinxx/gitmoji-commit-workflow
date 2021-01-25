# Gitmoji Commit

[![Gitmoji][gitmoji]][gitmoji-url] [![semantic-release][semantic-release]][semantic-release-repo] ![][license-url]

<!-- badge -->

[gitmoji]: https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg
[gitmoji-url]: https://gitmoji.carloscuesta.me/
[semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-repo]: https://github.com/semantic-release/semantic-release
[license-url]: https://img.shields.io/github/license/arvinxx/commit-gitmoji

> 😉 Use gitmoji commit in your workflow

## Packages

### Config

| Packages                                                         | Status                                                       | Downloads                                  |
| ---------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| [commitlint-config-gitmoji](./packages/config)                   | [![NPM version][config-image]][config-url]                   | ![NPM downloads][config-download]          |
| [commitlint-config-gitmoji-monorepo](./packages/config-monorepo) | [![NPM version][config-monorepo-image]][config-monorepo-url] | ![NPM downloads][config-monorepo-download] |
| [conventional-changelog-gitmoji-config](./packages/changelog)    | [![NPM version][changelog-image]][changelog-url]             | ![NPM downloads][changelog-download]       |

[config-image]: http://img.shields.io/npm/v/commitlint-config-gitmoji.svg?style=flat-square&color=deepgreen&label=latest
[config-url]: http://npmjs.org/package/commitlint-config-gitmoji
[config-download]: https://img.shields.io/npm/dm/commitlint-config-gitmoji.svg?style=flat-square
[config-monorepo-image]: http://img.shields.io/npm/v/commitlint-config-gitmoji-monorepo.svg?style=flat-square&color=deepgreen&label=latest
[config-monorepo-url]: http://npmjs.org/package/commitlint-config-gitmoji-monorepo
[config-monorepo-download]: https://img.shields.io/npm/dm/commitlint-config-gitmoji-monorepo.svg?style=flat-square
[changelog-image]: http://img.shields.io/npm/v/conventional-changelog-gitmoji-config.svg?style=flat-square&color=deepgreen&label=latest
[changelog-url]: http://npmjs.org/package/conventional-changelog-gitmoji-config
[changelog-download]: https://img.shields.io/npm/dm/conventional-changelog-gitmoji-config.svg?style=flat-square

### Helper

| Packages                                         | Status                                     | Description                           |
| ------------------------------------------------ | ------------------------------------------ | ------------------------------------- |
| [commitlint-plugin-gitmoji](./packages/plugin)   | [![NPM version][plugin-image]][plugin-url] | commitlint plugin to add gitmoji rule |
| [@gitmoji/parser-opts](./packages/parser-opts)   | [![NPM version][parser-image]][parser-url] | parser opts of gitmoji styles commit  |
| [@gitmoji/commit-types](./packages/commit-types) | [![NPM version][types-image]][types-url]   | gitmoji commit types                  |

<!-- npm url -->

[plugin-image]: http://img.shields.io/npm/v/commitlint-plugin-gitmoji.svg?style=flat-square&color=deepgreen&label=latest
[plugin-url]: http://npmjs.org/package/commitlint-plugin-gitmoji
[parser-image]: http://img.shields.io/npm/v/@gitmoji/parser-opts.svg?style=flat-square&color=deepgreen&label=latest
[parser-url]: http://npmjs.org/package/@gitmoji/parser-opts
[types-image]: http://img.shields.io/npm/v/@gitmoji/commit-types.svg?style=flat-square&color=deepgreen&label=latest
[types-url]: http://npmjs.org/package/@gitmoji/commit-types

## About this Repo

The commitlint gitmoji repo is managed as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md); it's composed of many npm packages.

The original `commitlint-config-gitmoji` repo can be found in [packages/config](./packages/config).

## License

[MIT](./LICENSE) ® Arvin Xu
