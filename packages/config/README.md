<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> English | [中文](./README.zh-CN.md)

# commitlint-config-gitmoji

🎉 Lint your gitmoji commits

Shareable `commitlint` config enforcing gitmoji.
Use with [commitlint](https://github.com/marionebl/commitlint) .

## Demo

TODO

## Getting started

1 - Install dependencies

```sh
# use npm
npm i -D commitlint-config-gitmoji @commitlint/core

# use yarn
yarn add -D commitlint-config-gitmoji @commitlint/core
```

2 - Add commitlint config for Gitmoji

```sh
echo "module.exports = {extends: ['gitmoji']};" > commitlint.config.js
```

## Rules

### Problems

The following rules are considered problems for `gitmoji commit` and will yield a non-zero exit code when not met.

Consult [docs/rules](http://marionebl.github.io/commitlint/#/reference-rules) for a list of available rules.

#### type-enum

- **condition**: `type` is found in value
- **rule**: `always`
- **value** From [gitmoji](https://github.com/carloscuesta/gitmoji) [JSON](https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json)

```sh
echo ":abc: some message" # fails
echo ":bento: some message" # passes
```

#### type-case

- **description**: `type` is in case `value`
- **rule**: `always`
- **value**

  ```js
  'lowerCase';

  ```

```sh
echo ":ART: Format some code" # fails
echo ":art: Format some code" # passes
```

#### type-empty

- **condition**: `type` is empty
- **rule**: `never`

```sh
echo ": some message" # fails
echo ":fire: Delete some file" # passes
```

#### scope-case

- **condition**: `scope` is in case `value`
- **rule**: `always`

```js
'lowerCase';

```

```sh
echo ":art:(SCOPE) some message" # fails
echo ":art:(scope) some message" # passes
```

#### subject-case

- **condition**: `subject` must begin with `['sentence-case', 'start-case', 'pascal-case', 'upper-case']`
- **rule**: `always`

```sh
echo ":art:(scope) some Message" # Fails
echo ":art:(scope) Some message" # pass
```

#### subject-empty

- **condition**: `subject` is empty
- **rule**: `never`

```sh
echo ":art: " # fails
echo ":art: some message" # passes
```

#### subject-full-stop

- **condition**: `subject` ends with `value`
- **rule**: `never`
- **value**

```js
'.';

```

```sh
echo ":art: some message." # fails
echo ":art: some message" # passes
```

#### header-max-length

- **condition**: `header` has `value` or less characters
- **rule**: `always`
- **value**

```js
72;
```

```sh
echo ":art: some message that is way too long and breaks the line max-length by several characters" # fails
echo ":art: some message" # passes
```

## parserPreset

```js
module.exports = {
  // ...
  parserPreset: {
    parserOpts: {
      // Test URL: https://regex101.com/r/YxXWi5/5
      headerPattern: /^(?::\w*:\s)?(?<type>\w*)(?:\((?<scope>._)\))?!?:\s(?<subject>[\s\w]_\w)\s?(?<ticket>#\d\*)?\$/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    },
  },
};
```
