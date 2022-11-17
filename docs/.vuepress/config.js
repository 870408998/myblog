import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: "主页",
        link: "/",
      },
      // NavbarGroup
      {
        text: "前端学习",
        children: [
          {
            text: "nodeJs",
            link: "/markdown/nodejs",
          },
          {
            text: "JavaScript",
            link: "/",
          },
        ],
      },
      // 字符串 - 页面文件路径
      // "/docs/markdown/nodejs.md",
      "/docs/README.md",
    ],
  }),
});
