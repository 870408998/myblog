import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "A1Dou",
    //   description: "A blog for A1Dou",
    // },
    "/": {
      lang: "zh-CN",
      title: "A1Dou",
      description: "A1Dou博客",
    },
  },

  theme,

  shouldPrefetch: false,
});
