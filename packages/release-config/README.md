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

## License

[MIT](../../LICENSE) ® Arvin Xu

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/semantic-release-config-gitmoji.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/semantic-release-config-gitmoji
[download-image]: https://img.shields.io/npm/dm/semantic-release-config-gitmoji.svg
[download-url]: https://npmjs.org/package/semantic-release-config-gitmoji
[semantic-release]: https://github.com/semantic-release/semantic-release
