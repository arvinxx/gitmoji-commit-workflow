import { defineConfig } from 'father';

export default defineConfig({
  cjs: { output: 'lib' },
  extraBabelPlugins: ['add-module-exports'],
});
