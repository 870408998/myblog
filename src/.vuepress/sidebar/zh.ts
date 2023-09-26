import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "推荐",
      icon: "icon-chrome",
      prefix: "recommend/",
      children: [
        { text: "网站", icon: "edit", link: "sites" },
        { text: "解决方案", icon: "edit", link: "good" },
        { text: "chrome插件", icon: "edit", link: "chrome_plugins" },
      ],
    },
    {
      text: "WebGl",
      icon: "icon-chrome",
      prefix: "/zh/WebGl/",
      children: [{ text: "ThreeJs", icon: "edit", link: "ThreeJs" }],
    },

    {
      text: "教程",
      icon: "note",
      prefix: "guide/",
      children: [
        {
          text: "NodeJs",
          icon: "edit",
          prefix: "nodejs/",
          children: [
            {
              text: "Koa 后台项目搭建",
              icon: "edit",
              link: "koa_nodejs",
            },
            {
              text: "Express 后台 API 项目",
              icon: "edit",
              link: "express_nodejs",
            },
            { text: "自动部署与构建", icon: "edit", link: "jenkins" },
            {
              text: "前端项目搭建与规范",
              icon: "edit",
              link: "project_specification",
            },
          ],
        },
      ],
    },
    {
      text: "案例",
      icon: "enum",
      prefix: "/zh/enum/",
      children: [
        {
          text: "CSS动画",
          icon: "css",
          link: "animation",
        },
      ],
    },
  ],
  // "/zh/": [
  //   "",
  //   {
  //     text: "如何使用",
  //     icon: "creative",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文章",
  //     icon: "note",
  //     prefix: "posts/",
  //     children: "structure",
  //   },
  //   "intro",
  //   "slides",
  // ],
});
