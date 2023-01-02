# semantic-release-config-gitmoji

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

shareable [semantic-release][semantic-release] configuration for gitmoji commit style

## How to use

### Basic Usage

```js
// .releaserc.js
module.exports = {
  extends: ['semantic-release-config-gitmoji'],
};
```

### Create your config

use this in monorepo

```js
// .releaserc.js
const { createConfig } = require('semantic-release-config-gitmoji/lib/createConfig');

const config = createConfig({ monorepo: true });

module.exports = config;
```

## createConfig params

### Common Options

| name           | type            | optional | default        | description |
| -------------- | --------------- | -------- | -------------- | ----------- |
| releaseRules   | `ReleaseRule[]` | `true`   | `n/a`          |             |
| changelogTitle | `string`        | `true`   | `# Changelog`  |             |
| changelogFile  | `string`        | `true`   | `CHANGELOG.md` |             |

### Git Params

| name      | type     | optional   | default                                                                              | description                                                                                                                 |
| --------- | -------- | ---------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| message   | `string` | `true`     | `:bookmark: chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}` | The message for the release commit. See [message](#message).                                                                |
| gitAssets | `false`  | `string[]` | `['CHANGELOG.md', 'package.json']`                                                   | Files to include in the release commit.Set to `false` to disable adding files to the release commit. See [assets](#assets). |

### Github Params

| name         | type      | optional | default | description      |
| ------------ | --------- | -------- | ------- | ---------------- |
| enableGithub | `boolean` | `true`   | `true`  | 开启 github 插件 |

### NPM Params

| name       | type      | optional | default | description                                                                                                                                                                                                                                        |
| ---------- | --------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enableNPM  | `boolean` | `true`   | `true`  | 开启 npm 插件                                                                                                                                                                                                                                      |
| npmPublish | `boolean` | `true`   | `n/a`   | Whether to publish the `npm` package to the registry. If `false` the `package.json` version will still be updated. `false` if the `package.json` [private](https://docs.npmjs.com/files/package.json#private) property is `true`, `true` otherwise |
| pkgRoot    | `string`  | `true`   | `n/a`   | Directory path to publish. default: `.`                                                                                                                                                                                                            |
| tarballDir | `string`  | `false`  | `true`  | `n/a`                                                                                                                                                                                                                                              |
| monorepo   | `boolean` | `true`   | `n/a`   | 如果是 Monorepo 仓库发布 npm 包，使用 "@semrel-extra/npm" 替代官方包 if using monorepo, use "@semrel-extra/npm" instead of the official package                                                                                                    |

# GithubPluginOpts

| name                | type       | optional | default                                                                        | description                                                                                                                                                                                                                   |
| ------------------- | ---------- | -------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| githubUrl           | `string`   | `true`   | `GH_URL` or `GITHUB_URL` environment variable.                                 | The GitHub Enterprise endpoint.                                                                                                                                                                                               |
| githubApiPathPrefix | `string`   | `true`   | `GH_PREFIX` or `GITHUB_PREFIX` environment variable.                           | The GitHub Enterprise API prefix.                                                                                                                                                                                             |
| githubAssets        | `string[]` | `true`   | `-`                                                                            | An array of files to upload to the release. See [assets](#assets).                                                                                                                                                            |
| proxy               | `string`   | `true`   | ``HTTP_PROXY` environment variable.`                                           | The proxy to use to access the GitHub API. See [proxy](#proxy).                                                                                                                                                               |
| successComment      | `string`   | `true`   | ``:tada: This issue has been resolved in version ${nextRelease.version} :tada: | The release is available on [GitHub release](github_release_url) The [assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users) to add to the issue created when a release fails. |

## License

[MIT](../../LICENSE) ® Arvin Xu

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/semantic-release-config-gitmoji.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/semantic-release-config-gitmoji
[download-image]: https://img.shields.io/npm/dm/semantic-release-config-gitmoji.svg
[download-url]: https://npmjs.org/package/semantic-release-config-gitmoji
[semantic-release]: https://github.com/semantic-release/semantic-release
