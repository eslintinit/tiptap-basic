import Vue from "vue";
import vueCustomElement from "vue-custom-element";
import App from "./App.vue";

Vue.use(vueCustomElement);

Vue.config.productionTip = false;

Vue.customElement("tiptap-react", App);

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
