import { Plugin } from '@commitlint/types';
import emojiRule from './emoji-rule';

const plugin: Plugin = {
  rules: {
    'start-with-gitmoji': emojiRule,
  },
};

export = plugin;
