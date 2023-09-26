import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/vuePressNext_副本/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/vuePressNext_副本/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
