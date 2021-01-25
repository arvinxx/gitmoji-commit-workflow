# @gitmoji/commit-types

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

Gitmoji styles commit types

## Signature

```typescript
type CommitTypes =
  | 'feat'           // Introducing new features
  | 'fix'            // Fixing a bug
  | 'refactor'       // Refactoring code (Not Introducing features or fix)
  | 'docs'           // add documents
  | 'test'           // Adding unit tests or e2e test
  | 'perf'           // Improving performance
  | 'revert'         // Reverting changes or commits
  | 'style'          // Updating the UI and style files
  | 'build'          // build artifacts
  | 'ci'             // working about CI build system
  | 'wip'            // Work in progress
  | 'chore';         // Work with configuration or other stuff
```

## License

[MIT](../../LICENSE) ® Arvin Xu

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/@gitmoji/commit-types.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/@gitmoji/commit-types
[download-image]: https://img.shields.io/npm/dm/@gitmoji/commit-types.svg
[download-url]: https://npmjs.org/package/@gitmoji/commit-types
