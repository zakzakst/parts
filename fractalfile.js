'use strict';

// node moduleの読み込み
const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

// タイトル設定
fractal.set('project.title', 'パーツ集');

// 各種ファイルのディレクトリ設定
fractal.components.set('path', path.join(__dirname, '/src/components'));
fractal.components.set('label', 'コンポーネント');
fractal.docs.set('path', path.join(__dirname, '/src/docs'));
fractal.docs.set('label', 'パーツ集について');
fractal.web.set('static.path', path.join(__dirname, '/src/public'));

// カスタムオプション設定
const options = {
  skin: 'white',
  styles: [
    'default',
    '/settings/fractal-fix.css',
  ],
  nav: [
    'docs',
    'components',
  ],
  panels: [
    'html',
    'resources',
    'notes',
  ],
  lang: 'ja',
};
fractal.web.theme(mandelbrot(options));

/* Pugテンプレートの利用 */
fractal.components.engine('@rsm/fractal-pug-adapter');
fractal.components.set('ext', '.pug');

// 出力ファイルのディレクトリ設定
fractal.web.set('builder.dest', __dirname + '/docs');
