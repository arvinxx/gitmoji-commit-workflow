import type { CommitTypes } from '@gitmoji/commit-types';
import type { Release } from 'semantic-release';

export interface ReleaseRule {
  type: CommitTypes;
  release: Release['type'];
}

export interface Options extends GitPluginOpts, NPMPluginOpts, GithubPluginOpts {
  releaseRules?: ReleaseRule[];
  changelogTitle?: string;
  changelogFile?: string;
  /**
   * 开启 npm 插件
   * @default true
   */
  enableNPM?: boolean;
  /**
   * 开启 github 插件
   * @default true
   */
  enableGithub?: boolean;
}

export interface GitPluginOpts {
  /**
   * The message for the release commit. See [message](#message).
   * @default :bookmark: chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}
   */
  message?: string;
  /**
   * Files to include in the release commit.
   * Set to `false` to disable adding files to the release commit. See [assets](#assets).
   * @default ['CHANGELOG.md', 'package.json']
   */
  gitAssets?: string[] | false;
}

export interface GithubPluginOpts {
  /**
   * The GitHub Enterprise endpoint.
   * @default `GH_URL` or `GITHUB_URL` environment variable.
   */
  githubUrl?: string;
  /**
   * The GitHub Enterprise API prefix.
   * @default  `GH_PREFIX` or `GITHUB_PREFIX` environment variable.
   */
  githubApiPathPrefix?: string;
  /**
   * An array of files to upload to the release. See [assets](#assets).
   * @default -
   */
  githubAssets?: string[];
  /**
   * The proxy to use to access the GitHub API. See [proxy](#proxy).
   * @default   `HTTP_PROXY` environment variable.
   */
  proxy?: string;
  /**
   * The comment to add to each issue and pull request resolved by the release. Set to `false` to disable commenting on issues and pull requests. See [successComment](#successcomment).
   * @default `:tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on [GitHub release](<github_release_url>)`
   */
  successComment?: string;
  /**
   * The content of the issue created when a release fails. Set to `false` to disable opening an issue when a release fails. See [failComment](#failcomment).
   * Friendly message with links to **semantic-release** documentation and support, with the list of errors that caused the release to fail.
   */
  failComment?: string;
  /**
   * The title of the issue created when a release fails. Set to `false` to disable opening an issue when a release fails.
   * @default `The automated release is failing 🚨`
   */
  failTitle?: string;
  /**
   * The [labels](https://help.github.com/articles/about-labels) to add to the issue created when a release fails. Set to `false` to not add any label.
   * @default `['semantic-release']`
   */
  labels?: string[];

  /**
   * The [assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users) to add to the issue created when a release fails.
   *
   */
  assignees?: string[];
  /**
   The [labels](https://help.github.com/articles/about-labels) to add to each issue and pull request resolved by the release. Set to `false` to not add any label. See [releasedLabels](#releasedlabels).
   * @default `['released<%= nextRelease.channel ? \` on @\${nextRelease.channel}\` : "" %>']-
   */
  releasedLabels?: string[];

  /**
   Will add release links to the GitHub Release. Can be `false`, `"bottom"` or `"top"`. See [addReleases](#addReleases).
   * @default `false`
   */
  addReleases?: boolean;
}

export interface NPMPluginOpts {
  /**
   *  Whether to publish the `npm` package to the registry. If `false` the `package.json` version will still be updated.
   *  `false` if the `package.json` [private](https://docs.npmjs.com/files/package.json#private) property is `true`,
   *  `true` otherwise
   */
  npmPublish?: boolean;
  /**
   *Directory path to publish.
   * default: `.`
   */
  pkgRoot?: string;
  tarballDir?: string | false;
}
