import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  title: 'FlutterAds',
  description: 'Flutter GroMore Pro 版，让你的 App 广告收益翻倍',
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

