import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/site/',
  title: 'FlutterAds',
  description: '让你的 Flutter 应用广告收益翻倍',
  icon: "https://raw.githubusercontent.com/FlutterAds/site/master/logo/flutterads_logo_square.png",
  logo: "https://raw.githubusercontent.com/FlutterAds/site/master/logo/flutterads_logo.png",
  themeConfig: {
    search: false,
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/FlutterAds' },
    ],
    footer: {
      message: '© 2023 FlutterAds Team. All Rights Reserved.',
    },
    prevPageText: '上一页',
    nextPageText: '下一页',
  },
});

