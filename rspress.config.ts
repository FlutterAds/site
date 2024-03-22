import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  base: '/site/',
  title: 'FlutterAds',
  description: 'Flutter GroMore Pro 版，让你的 App 广告收益翻倍',
  icon: "/icon.png",
  logo: "/logo.png",
  themeConfig: {
    search: false,
    footer: {
      message: '© FlutterAds Team. All Rights Reserved.',
    },
    outlineTitle: '目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
  },
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          attrs: {
            src: 'https://flutterads.github.io/site/js/clarity.js',
          },
        }
      ],
    },
  },
});

