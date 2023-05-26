import { createApp } from 'vue'
import App from "./App.vue";

import testPlugin from "./plugin.test.js"; //testing mixins

createApp({
  render: (h) => h(App),
}).use(testPlugin).mount("#app");
