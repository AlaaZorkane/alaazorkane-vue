import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "@mdi/font/css/materialdesignicons.css";
import VueTypedJs from "vue-typed-js";

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueTypedJs);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
