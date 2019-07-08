> Lint your gitmoji commits

# commitlint-config-gitmoji

[English](./README.md) | [中文](./README_zh-cn.md)

Shareable `commitlint` config enforcing gitmoji.
Use with [@commitlint](https://github.com/marionebl/commitlint) .

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
echo "module.exports = {extends: ['./node_modules/commitlint-config-gitmoji']};" > commitlint.config.js
```

## Rules

### Problems

The following rules are considered problems for `gitmoji commit` and will yield a non-zero exit code when not met.

Consult [docs/rules](http://marionebl.github.io/commitlint/#/reference-rules) for a list of available rules.

#### type-enum

* **condition**: `type` is found in value
* **rule**: `always`
* **value**

```js
[
  ':art:',
  ':newspaper:',
  ':pencil:',
  ':memo:',
  ':zap:',
  ':fire:',
  ':books:',
  ':bug:',
  ':ambulance:',
  ':penguin:',
  ':apple:',
  ':checkered_flag:',
  ':robot:',
  ':green_ale:',
  ':tractor:',
  ':recycle:',
  ':white_check_mark:',
  ':microscope:',
  ':green_heart:',
  ':lock:',
  ':arrow_up:',
  ':arrow_down:',
  ':fast_forward:',
  ':rewind:',
  ':rotating_light:',
  ':lipstick:',
  ':wheelchair:',
  ':globe_with_meridians:',
  ':construction:',
  ':gem:',
  ':bookmark:',
  ':tada:',
  ':loud_sound:',
  ':mute:',
  ':sparkles:',
  ':speech_balloon:',
  ':bulb:',
  ':construction_worker:',
  ':chart_with_upwards_trend:',
  ':ribbon:',
  ':rocket:',
  ':heavy_minus_sign:',
  ':heavy_plus_sign:',
  ':wrench:',
  ':hankey:',
  ':leaves:',
  ':bank:',
  ':whale:',
  ':twisted_rightwards_arrows:',
  ':pushpin:',
  ':busts_in_silhouette:',
  ':children_crossing:',
  ':iphone:',
  ':clown_face:',
  ':ok_hand:',
  ':boom:',
  ':bento:',
  ':pencil2:',
  ':package:',
  ':alien:',
  ':truck:',
  ':age_facing_up:',
  ':busts_in_silhouette:',
  ':card_file_box:',
  ':loud-sound:',
  ':mute:',
  ':egg:',
  ':see-no-evil:',
  ':camera-flash:',
  ':alembic:',
  ':mag:',
  ':wheel-of-dharma:',
  ':label:',
],
```

```sh
echo ":abc: some message" # fails
echo ":bento: some message" # passes
```

#### type-case

* **description**: `type` is in case `value`
* **rule**: `always`
* **value**
  ```js
  "lowerCase";
  ```

```sh
echo ":ART: Format some code" # fails
echo ":art: Format some code" # passes
```

#### type-empty

* **condition**: `type` is empty
* **rule**: `never`

```sh
echo ": some message" # fails
echo ":fire: Delete some file" # passes
```

#### scope-case

* **condition**: `scope` is in case `value`
* **rule**: `always`

```js
"lowerCase";
```

```sh
echo ":art:(SCOPE) some message" # fails
echo ":art:(scope) some message" # passes
```

#### subject-case

* **condition**: `subject` must begin with `['sentence-case', 'start-case', 'pascal-case', 'upper-case']`
* **rule**: `always`

```sh
echo ":art:(scope) some Message" # Fails
echo ":art:(scope) Some message" # pass
```

#### subject-empty

* **condition**: `subject` is empty
* **rule**: `never`

```sh
echo ":art: " # fails
echo ":art: some message" # passes
```

#### subject-full-stop

* **condition**: `subject` ends with `value`
* **rule**: `never`
* **value**

```js
".";
```

```sh
echo ":art: some message." # fails
echo ":art: some message" # passes
```

#### header-max-length

* **condition**: `header` has `value` or less characters
* **rule**: `always`
* **value**

```js
72;
```

```sh
echo ":art: some message that is way too long and breaks the line max-length by several characters" # fails
echo ":art: some message" # passes
```

## parserPreset
```js
parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w*:)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    }
}
```
## Gitmoji Reference Sheet

| Emoji | Raw Emoji Code                | Description                                                                                                         |
| ----- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 🎨    | `:art:`                       | when improving the **format**/structure of the code                                                                 |
| 📰    | `:newspaper:`                 | when creating a **new file**                                                                                        |
| 📝    | `:pencil:`                    | when **performing minor changes/fixing** the code or language                                                       |
| 📝    | `:memo:`                      | when documenting source code.                                                                                       |
| ⚡️   | `:zap:`                       | when improving **performance**                                                                                      |
| 📚    | `:books:`                     | when writing **docs**                                                                                               |
| 🐛    | `:bug:`                       | when fixing a **bug**, with [`@FIXME`](https://github.com/slashsBin/styleguide-todo-grammar#bug-report) Comment Tag |
| 🚑    | `:ambulance:`                 | Critical hotfix.                                                                                                    |
| 🐧    | `:penguin:`                   | when fixing something on **Linux**                                                                                  |
| 🍎    | `:apple:`                     | when fixing something on **Mac OS**                                                                                 |
| 🏁    | `:checkered_flag:`            | when fixing something on **Windows**                                                                                |
| 🤖    | `:robot:`                     | Fixing something on Android.                                                                                        |
| 🍏    | `:green_ale:`                 | Fixing something on iOS.                                                                                            |
| 🔥    | `:fire:`                      | when **removing code** or files, _maybe_ with `@CHANGED` Comment Tag                                                |
| 🚜    | `:tractor:`                   | when **change file structure**. Usually together with 🎨                                                            |
| ♻️    | `:recycle:`                   | when **refactoring** code                                                                                           |
| ✅    | `:white_check_mark:`          | when adding **tests**                                                                                               |
| 🔬    | `:microscope:`                | when adding **code coverage**                                                                                       |
| 💚    | `:green_heart:`               | when fixing the **CI** build                                                                                        |
| 🔒    | `:lock:`                      | when dealing with **security**                                                                                      |
| ⬆️    | `:arrow_up:`                  | when upgrading **dependencies**                                                                                     |
| ⬇️    | `:arrow_down:`                | when downgrading **dependencies**                                                                                   |
| ⏩    | `:fast_forward:`              | when **forward-porting features** from an older version/branch                                                      |
| ⏪    | `:rewind:`                    | when **backporting features** from a newer version/branch or **Reverting** changes.                                 |
| 🚨    | `:rotating_light:`            | when removing **linter**/strict/deprecation warnings                                                                |
| 💄    | `:lipstick:`                  | when improving **UI**/Cosmetic                                                                                      |
| ♿️   | `:wheelchair:`                | when improving **accessibility**                                                                                    |
| 🌐    | `:globe_with_meridians:`      | when dealing with **globalization**/internationalization/i18n/g11n                                                  |
| 🚧    | `:construction:`              | **WIP**(Work In Progress) Commits, _maybe_ with `@REVIEW` Comment Tag                                               |
| 💎    | `:gem:`                       | New **Release**                                                                                                     |
| 🔖    | `:bookmark:`                  | Version **Tags**                                                                                                    |
| 🎉    | `:tada:`                      | **Initial** Commit                                                                                                  |
| 🔊    | `:loud_sound:`                | when Adding **Logs**                                                                                                |
| 🔇    | `:mute:`                      | when Reducing **Logs**                                                                                              |
| ✨    | `:sparkles:`                  | when introducing **New** Features                                                                                   |
| 💬    | `:speech_balloon:`            | When updating text and literals.                                                                                    |
| 💡    | `:bulb:`                      | New **Idea**, with `@IDEA` Comment Tag                                                                              |
| 👷    | `:construction_worker:`       | Adding CI build system.                                                                                             |
| 📈    | `:chart_with_upwards_trend:`  | Adding analytics or tracking code.                                                                                  |
| 🎀    | `:ribbon:`                    | Customer requested application **Customization**, with `@HACK` Comment Tag                                          |
| 🚀    | `:rocket:`                    | Anything related to Deployments/**DevOps**                                                                          |
| ➖    | `:heavy_minus_sign:`          | Removing a dependency.                                                                                              |
| ➕    | `:heavy_plus_sign:`           | Adding a dependency.                                                                                                |
| 🔧    | `:wrench:`                    | Changing configuration files.                                                                                       |
| 💩    | `:hankey:`                    | Writing **bad code** that needs to be improved.                                                                     |
| 🍃    | `:leaves:`                    | **MongoDB** Database specific (Migrations, Scripts, Extensions, ...)                                                |
| 🏦    | `:bank:`                      | **Generic Database** specific (Migrations, Scripts, Extensions, ...)                                                |
| 🐳    | `:whale:`                     | **Docker** Configuration                                                                                            |
| 🔀    | `:twisted_rightwards_arrows:` | Merging branches.                                                                                                   |
| 📌    | `:pushpin:`                   | Pinning dependencies to specific versions.                                                                          |
| 👥    | `:busts_in_silhouette:`       | Adding contributor(s).                                                                                              |
| 🚸    | `:children_crossing:`         | Improving user experience / usability.                                                                              |
| 🏗     | `:building_construction:`     | Making architectural changes.                                                                                       |
| 📱    | `:iphone:`                    | Working on responsive design.                                                                                       |
| 🤡    | `:clown_face:`                | Mocking things.                                                                                                     |
| 👌    | `:ok_hand:`                   | When updating code due to code review changes.                                                                      |
| 💥    | `:boom:`                      | Introducing breaking changes.                                                                                       |
| 🍱    | `:bento:`                     | Adding or updating assets.                                                                                          |
| ✏️    | `:pencil2:`                   | Fixing typos.                                                                                                       |
| 📦    | `:package:`                   | When updating compiled files or packages.                                                                           |
| 👽    | `:alien:`                     | Updating code due to external API changes.                                                                          |
| 🚚    | `:truck:`                     | Moving or renaming files.                                                                                           |
| 📄    | `:age_facing_up:`             | Adding or updating license.                                                                                         |
| 🗃    | `:card_file_box:`             | Performing database related changes.                                                                                |
| 🔊    | `:loud_sound:`                | Adding logs.                                                                                                        |
| 🔇    | `:mute:`                      | Removing logs.                                                                                                      |                                                                                             |                                                                             |
| 🥚    | `:egg:`                       | Adding an easter egg.                                                                                               |
| 🙈    | `:see_no_evil:`               | Adding or updating a .gitignore file                                                                                |
| 📸    | `:camera_flash:`              | Adding or updating snapshots                                                                                        |
| ⚗     | `:alembic:`                   | Experimenting new things                                                                                            |
| 🔍    | `:mag:`                       | Improving SEO                                                                                                       |
| ☸️    | `:wheel_of_dharma:`           | Work about Kubernetes                                                                                               |
| 🏷️    | `:label:`                     | Adding or updating types (Flow, TypeScript)                                                                         |
