import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "推荐",
    icon: "icon-chrome",
    prefix: "/zh/recommend/",
    children: [
      { text: "网站", icon: "edit", link: "sites" },
      { text: "解决方案", icon: "edit", link: "good" },
      { text: "chrome插件", icon: "edit", link: "chrome_plugins" },
    ],
  },
  {
    text: "WebGl",
    icon: "guide",
    prefix: "/zh/WebGl/",
    children: [{ text: "ThreeJs", icon: "edit", link: "ThreeJs" }],
  },
  {
    text: "教程",
    icon: "guide",
    prefix: "/zh/guide/",
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
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "苹果",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "edit", link: "1" },
          { text: "苹果2", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "edit",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "edit", link: "cherry" },
      { text: "火龙果", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
]);
