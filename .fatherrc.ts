import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    output: { path: 'public/dist', filename: 'index' },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'antd-style': 'antd-style',
    },

    chainWebpack: (memo) => {
      // use https://github.com/systemjs/systemjs to dynamic load
      memo.output.libraryTarget('system');
      return memo;
    },
  },
});
