> 🚦 Lint your gitmoji commits

# commitlint-config-gitmoji

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/commitlint-config-gitmoji.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/commitlint-config-gitmoji
[download-image]: https://img.shields.io/npm/dm/commitlint-config-gitmoji.svg
[download-url]: https://npmjs.org/package/commitlint-config-gitmoji

Shareable `commitlint` config enforcing gitmoji commit message styles. Use with [commitlint](https://github.com/marionebl/commitlint) .

## Demo

TODO

## Getting started

### Install

Install dependencies

```sh
# use npm
npm i -D commitlint-config-gitmoji commitlint
```

or

```
# use pnpm
pnpm i -D commitlint-config-gitmoji commitlint
```

### Config

Add commitlint config for Gitmoji

```sh
echo "module.exports = {extends: ['gitmoji']};" > commitlint.config.js
```

## Commit style

### Structure

the Gitmoji Structure of commit styles is below

```
:gitmoji: type(scope?): subject
body?
footer?
```

### Example

```
:sparkles: feat(changelog): support chinese title

:bug: fix(config): fix a subject bug

:memo: docs: update README.md

:bulb: docs(plugin): update comments
```

## Detail Rules

### Problems

The following rules are considered problems for `gitmoji commit` and will yield a non-zero exit code when not met.

Consult [docs/rules](https://commitlint.js.org/#/) for a list of available rules.

#### type-enum

- **condition**: `type` is found in value
- **rule**: `always`
- **value**: Refer to [@gitmoji/commiy-types](../commit-types)

```sh
echo ":abc: some message" # fails
echo ":feat: some message" # passes
```

#### type-case

- **description**: `type` is in case `value`
- **rule**: `always`
- **value**: `lowerCase`

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
- **value**: `lowerCase`

```sh
echo ":art:(SCOPE) some message" # fails
echo ":art:(scope) some message" # passes
```

#### subject-case

- **condition**: `subject` must begin with `['sentence-case', 'start-case', 'pascal-case', 'upper-case']`
- **rule**: `always`

```sh
echo ":art:(scope) Some Message" # pass
echo ":art:(scope) some message" # Fails
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
- **value**: `.`

```sh
echo ":art: some message." # fails
echo ":art: some message" # passes
```

#### header-max-length

- **condition**: `header` has `value` or less characters
- **rule**: `always`
- **value**: `100`

```sh
echo ":art: some message that is way too long and breaks the line max-length by several characters" # fails
echo ":art: some message" # passes
```

## License

[MIT](../../LICENSE) ® Arvin Xu
