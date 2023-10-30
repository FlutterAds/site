import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  base: '/site/',
  title: 'FlutterAds',
  description: '让你的 Flutter 应用广告收益翻倍',
  icon: "/icon.png",
  logo: "/logo.png",
  themeConfig: {
    search: false,
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/FlutterAds' },
    ],
    footer: {
      message: '© 2023 FlutterAds Team. All Rights Reserved.',
    },
    outlineTitle: '大纲',
    prevPageText: '上一页',
    nextPageText: '下一页',
  },
});

