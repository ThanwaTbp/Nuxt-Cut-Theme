import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import "@/plugins/vue3-easy-data-table/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("DataTable", Vue3EasyDataTable);
});