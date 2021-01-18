<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> [English](./README.md) | 中文

# commitlint-config-gitmoji

🎉 为你的 gitmoji 风格的 commit 添加 Lint 检查

Shareable `commitlint` config enforcing gitmoji.
需要搭配 [commitlint](https://github.com/marionebl/commitlint) 使用。

## Demo 演示

TODO

## 开始使用

1. 安装依赖

```sh
# use npm
npm i -D commitlint-config-gitmoji @commitlint/core

# use yarn
yarn add -D commitlint-config-gitmoji @commitlint/core
```

2. 添加 commitlint 的配置

```sh
echo "module.exports = {extends: ['gitmoji']};" > .commitlintrc.js
```

## 规则

### 潜在的问题

下面的规则根据 `gitmoji commit` 中潜在的问题制定。如果没有问题则会以 non-zero exit code 结束。

Consult [docs/rules](http://marionebl.github.io/commitlint/#/reference-rules) for a list of available rules.
\_\_

#### type-enum

- **condition**: `type` 需要从确定的值中选择
- **rule**: `always`
- **value** 来自 [gitmoji](https://github.com/carloscuesta/gitmoji) [JSON](https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json)

示例：

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

## 解析器

```js
module.exports = {
  // ...
  parserPreset: {
    parserOpts: {
      // 正则测试地址: https://regex101.com/r/YxXWi5/5
      headerPattern: /^(?::\w*:\s)?(?<type>\w*)(?:\((?<scope>._)\))?!?:\s(?<subject>[\s\w]_\w)\s?(?<ticket>#\d\*)?\$/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    },
  },
};
```
