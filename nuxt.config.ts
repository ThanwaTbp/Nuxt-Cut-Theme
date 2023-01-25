// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			// bodyAttrs: {
			// 	class: 'header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed',
			// 	id: 'kt_body'
			// },
			charset: "utf-8",
			titleTemplate: "%s | Nuxt 3",
			// titleTemplate: '%s - Nuxt 3',
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1, maximum-scale=5",
				},
				{
					name: "author",
					content: "THW",
				},
			],
			link: [
				{ rel: "icon", type: "image/png", href: "/favicon.ico" },
				{ rel: "stylesheet", href: "/css/style.bundle.css" },
				{ rel: "stylesheet", href: "/css/plugins.bundle.css" },
			],
			script: [
				{ src: "/js/plugins.bundle.js", body: true },
				{ src: "/js/scripts.bundle.js", body: true },
			],
		},
	},
	css: ["@/assets/css/custom.css"],
	plugins: [
		// 'plugins/multiselect.ts',
		"plugins/vue3-easy-data-table/index.ts",
		"plugins/apexcharts.client.ts",
		"plugins/datePicker.ts",
		"plugins/vuedraggable.ts",
	],
	modules: ["nuxt-icon", "@pinia/nuxt"],
});
