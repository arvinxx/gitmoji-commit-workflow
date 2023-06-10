import { typeMap } from '../transformer/typeDisplayName';
import finalizeContext from './index';

describe('finalizeContext', () => {
  const customConfig = {
    scopeDisplayName: {
      '*': 'all',
    },
    customTypeMap: {},
  };
  const context = {
    commitGroups: [
      {
        title: '✨ Features',
        commits: [
          {
            hash: '1234',
            subject: 'test commit',
            scope: 'test',
            title: '✨ Features',
            authorName: 'canisminor1990',
            authorEmail: 'i@canisminor.cc',
            authorAvatar: 'https://avatars.githubusercontent.com/u/17870709?v=4',
            authorUrl: 'https://api.github.com/users/canisminor1990',
          },
        ],
      },
    ],
    authors: [],
  };

  it('should transform commitGroups correctly', () => {
    const transformedContext = finalizeContext(customConfig)(context);
    expect(transformedContext).toMatchSnapshot();
  });

  it('should set subCommitScope correctly when it is defined in customConfig', () => {
    const customConfigWithSubCommitScope = {
      ...customConfig,
      scopeDisplayName: {
        '*': 'all',
        test: 'test',
      },
    };
    const transformedContext = finalizeContext(customConfigWithSubCommitScope)(context);
    expect(transformedContext.commitGroups[0].commits[0].first).toBe(true);
  });

  it('should set subCommitScope to null when it is not defined in customConfig', () => {
    const transformedContext = finalizeContext(customConfig)(context);
    expect(transformedContext.commitGroups[0].commits[0].first).toBe(true);
  });

  it('should set subtitle correctly when title contains emoji', () => {
    const contextWithTitleEmoji = {
      ...context,
      commitGroups: [
        {
          title: '✨ Features',
          commits: [],
        },
      ],
    };
    const transformedContext = finalizeContext(customConfig)(contextWithTitleEmoji);
    expect(transformedContext.commitGroups[0].subtitle).toBe("What's improved");
  });

  it('should set subtitle correctly when title contains en-US', () => {
    const contextWithTitleEnUS = {
      ...context,
      commitGroups: [
        {
          title: 'Features',
          commits: [],
        },
      ],
    };
    const transformedContext = finalizeContext(customConfig)({
      ...contextWithTitleEnUS,
      commitGroups: [
        {
          ...contextWithTitleEnUS.commitGroups[0],
          title: `Features ${typeMap['feat']['en-US']}`,
        },
      ],
    });
    expect(transformedContext.commitGroups[0].subtitle).toBe("What's improved");
  });

  it('should set subtitle correctly when title contains zh-CN', () => {
    const contextWithTitleZhCN = {
      ...context,
      commitGroups: [
        {
          title: 'Features',
          commits: [],
        },
      ],
    };
    const transformedContext = finalizeContext(customConfig)({
      ...contextWithTitleZhCN,
      commitGroups: [
        {
          ...contextWithTitleZhCN.commitGroups[0],
          title: `Features ${typeMap['feat']['zh-CN']}`,
        },
      ],
    });
    expect(transformedContext.commitGroups[0].subtitle).toBe("What's improved");
  });

  it('should sort commits correctly when subCommitScope is defined in customConfig', () => {
    const customConfigWithSubCommitScope = {
      ...customConfig,
      scopeDisplayName: {
        '*': 'all',
        test: 'test',
      },
    };
    const contextWithMultipleCommits = {
      ...context,
      commitGroups: [
        {
          title: '✨ Features',
          commits: [
            {
              hash: '1234',
              subject: 'test commit 1',
              scope: 'test',
              title: '✨ Features',
              authorName: 'canisminor1990',
              authorEmail: 'i@canisminor.cc',
              authorAvatar: 'https://avatars.githubusercontent.com/u/17870709?v=4',
              authorUrl: 'https://api.github.com/users/canisminor1990',
            },
            {
              hash: '5678',
              subject: 'test commit 2',
              scope: 'test',
              title: '✨ Features',
              authorName: 'canisminor1990',
              authorEmail: 'i@canisminor.cc',
              authorAvatar: 'https://avatars.githubusercontent.com/u/17870709?v=4',
              authorUrl: 'https://api.github.com/users/canisminor1990',
            },
          ],
        },
      ],
    };
    const transformedContext = finalizeContext(customConfigWithSubCommitScope)(
      contextWithMultipleCommits,
    );
    expect(transformedContext.commitGroups[0].commits[0].first).toBe(true);
    expect(transformedContext.commitGroups[0].commits[1].first).toBe(false);
  });

  it('should set first and last correctly when commits have the same scope', () => {
    const contextWithMultipleCommits = {
      ...context,
      commitGroups: [
        {
          title: '✨ Features',
          commits: [
            {
              hash: '1234',
              subject: 'test commit 1',
              scope: 'test',
              title: '✨ Features',
              authorName: 'canisminor1990',
              authorEmail: 'i@canisminor.cc',
              authorAvatar: 'https://avatars.githubusercontent.com/u/17870709?v=4',
              authorUrl: 'https://api.github.com/users/canisminor1990',
            },
            {
              hash: '5678',
              subject: 'test commit 2',
              scope: 'test',
              title: '✨ Features',
              authorName: 'canisminor1990',
              authorEmail: 'i@canisminor.cc',
              authorAvatar: 'https://avatars.githubusercontent.com/u/17870709?v=4',
              authorUrl: 'https://api.github.com/users/canisminor1990',
            },
          ],
        },
      ],
    };
    const transformedContext = finalizeContext(customConfig)(contextWithMultipleCommits);
    expect(transformedContext.commitGroups[0].commits[0].first).toBe(true);
    expect(transformedContext.commitGroups[0].commits[0].last).toBe(false);
    expect(transformedContext.commitGroups[0].commits[1].first).toBe(false);
    expect(transformedContext.commitGroups[0].commits[1].last).toBe(true);
  });

  it('should set author correctly when authorAvatar is not empty', () => {
    const contextWithAuthorNameEncode = {
      ...context,
      commitGroups: [
        {
          title: '✨ Features',
          commits: [
            {
              hash: '1234',
              subject: 'test commit',
              scope: 'test',
              title: '✨ Features',
              authorName: 'canisminor1990',
              authorEmail: 'i@canisminor.cc',
              authorAvatar: 'https://avatars.githubusercontent.com/u/17870709?v=4',
              authorUrl: 'https://api.github.com/users/canisminor1990',
            },
          ],
        },
      ],
    };
    const transformedContext = finalizeContext(customConfig)(contextWithAuthorNameEncode);
    expect(transformedContext.authors).toEqual([
      {
        authorAvatar: 'https://avatars.githubusercontent.com/u/17870709?v=4',
        authorEmail: 'i@canisminor.cc',
        authorName: 'canisminor1990',
        authorUrl: 'https://api.github.com/users/canisminor1990',
      },
    ]);
  });

  it('should not set author when authorAvatar is empty', () => {
    const contextWithoutAuthorNameEncode = {
      ...context,
      commitGroups: [
        {
          title: '✨ Features',
          commits: [
            {
              hash: '1234',
              subject: 'test commit',
              scope: 'test',
              title: '✨ Features',
              authorName: 'canisminor1990',
              authorEmail: 'i@canisminor.cc',
            },
          ],
        },
      ],
    };
    const transformedContext = finalizeContext(customConfig)(contextWithoutAuthorNameEncode);
    expect(transformedContext.authors).toEqual([]);
  });
});
