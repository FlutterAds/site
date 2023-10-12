import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'FlutterAds',
  description: '让你的 Flutter 应用广告收益翻倍',
  icon: "/flutterads_icon.png",
  logo: {
    light: "/flutterads_logo.png",
    dark: "/flutterads_logo.png",
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/FlutterAds' },
    ],
  },
});
