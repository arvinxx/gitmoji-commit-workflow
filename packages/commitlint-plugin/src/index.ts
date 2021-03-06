import type { Plugin } from '@commitlint/types';
import emojiRule from './rule';

const plugin: Plugin = {
  rules: {
    'start-with-gitmoji': emojiRule,
  },
};

export default plugin;
