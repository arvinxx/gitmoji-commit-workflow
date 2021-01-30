# conventional-changelog-gitmoji-config

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

sharable conventional changelog configuration for gitmoji style commit

## Configuration File

`conventional-changelog-gitmoji-config` uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig#cosmiconfigsync) to find and load your configuration object. Starting from the current working directory, it looks for the following possible sources:

- a `changelog` property in `package.json`
- a `.changelogrc` file
- a `changelog.config.js` file exporting a JS object

The `.changelogrc` file (without extension) can be in JSON or YAML format. You can add a filename extension to help your text editor provide syntax checking and highlighting:

- .changelogrc.json
- .changelogrc.yaml / .changelogrc.yml
- .changelogrc.js

The configuration object has the following signature:

```typescript
interface ChangelogConfig {
  /**
   * map the scope to display name
   *
   * for example
   * {
   *     'config': 'commitlint-gitmoji-config'
   * }
   * will map all config 'scope' to 'commitlint-gitmoji-config' in the changelog
   * @default { }
   */
  scopeDisplayName?: Record<string, string>;
  /**
   * display types
   * @default undefined
   */
  displayTypes?: string[];
  /**
   * whether to include emoji in title
   * @default true
   */
  withEmoji?: boolean;
  /**
   * title language
   * @default en-US
   */
  titleLanguage?: 'en-US' | 'zh-CN';
  /**
   * whether to show author
   * @default false
   */
  showAuthor?: boolean;
}
```

## License

[MIT](../../LICENSE) ® Arvin Xu

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/conventional-changelog-gitmoji-config.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/conventional-changelog-gitmoji-config
[download-image]: https://img.shields.io/npm/dm/conventional-changelog-gitmoji-config.svg
[download-url]: https://npmjs.org/package/conventional-changelog-gitmoji-config
