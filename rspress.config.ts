import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  base: '/site/',
  title: 'FlutterAds-致力于构建优质的 Flutter 广告插件',
  description: 'FlutterAds 致力于构建优质的 Flutter 广告插件，旨在为 Flutter 开发者提供一套完整的广告解决方案，帮助开发者快速对接广告变现，提升应用收益。主要产品有【Flutter 穿山甲广告、Flutter 短剧小视频、Flutter 广告监测】',
  icon: "/icon.png",
  logo: "/logo.png",
  themeConfig: {
    search: false,
    footer: {
      message: '<p><strong>2024 © FlutterAds <a href="https://beian.miit.gov.cn/" target="_blank">陕ICP备2023020053号-2</a></strong></p>',
    },
    outlineTitle: '目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/flutterads',
      },
    ],
  },
  route: {
    cleanUrls: true,
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

