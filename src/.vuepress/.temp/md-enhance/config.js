import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-title.scss";
import Mermaid from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("/Users/gaoxin/Documents/myCode/study/js/2022-nodejs/node/dir/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
        
  },
});
