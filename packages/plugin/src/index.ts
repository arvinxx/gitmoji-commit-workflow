import type { Plugin } from '@commitlint/types';
import emojiRule from './rule';

const plugin: Plugin = {
  rules: {
    'start-with-gitmoji': emojiRule,
  },
};

/**
 * Export single object, according to the CommonJS model. The CommonJS module is
 * explicitly used here as that's the kind of module commitlint requires for
 * plugins.
 */
export = plugin;
