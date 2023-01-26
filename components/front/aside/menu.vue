<script setup lang="ts">
// import sidebarItems from "./menuAside";
// const sidebarMenu = ref(sidebarItems)

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
	attribute: "data-theme",
	valueDark: "dark", // attribute value for dark mode
	valueLight: "light"
});
const toggleDark = useToggle(isDark)

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387")
function play() {
	audio.play()
}

interface IRoute {
	id: number;
	title: string;
	icon: string;
	to: string;
	children?: IRoute[];
}

const $route = useRoute();
const routes: IRoute[] = [
	{
		id: 0,
		title: "ข้อมูลสรุป",
		icon: "bi bi-clipboard-data fs-1",
		to: "/dashboards",
		children: [
			{
				subTitle: "Menu 1",
				subTo: "/dashboards/crypto"
			},
			{
				subTitle: "Menu 2",
				subTo: "/dashboards/pos"
			},
			{
				subTitle: "Menu 3",
				subTo: "/dashboards/social"
			},
		],
	},
	{
		id: 1,
		title: "สายทาง",
		icon: "bi bi-map fs-1",
		to: "/pages/user-profile",
		children: [
			{
				subTitle: "Menu 1",
				subTo: "/pages/user-profile/campaigns",
			},
		],
	},
	{
		id: 2,
		title: "อนุมัติข้อมูล",
		icon: "bi bi-list-check fs-1",
		to: "/datatable",
		children: [
			{
				subTitle: "Menu 1",
				subTo: "/datatable",
			}
		],
	},
	{
		id: 3,
		title: "รายงาน",
		icon: "bi bi-file-earmark-text fs1",
		to: "/pages/blog",
		children: [
			{
				subTitle: "Menu 1",
				subTo: "/pages/blog/home",
			}
		],
	},
	{
		id: 4,
		title: "ตั้งค่าระบบ",
		icon: "fonticon-setting fs-1",
		to: "/pages/social",
		children: [
			{
				subTitle: "Menu 1",
				subTo: "/pages/social/feeds",
			}
		],
	},
]
</script>

<template>
	<div class="hover-scroll-overlay-y mt-2 mt-lg-5 pe-lg-n1" data-kt-scroll="true" data-kt-scroll-height="auto"
		data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu"
		data-kt-scroll-offset="5px">
		<div
			class="menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-semibold"
			data-kt-menu="true">
			<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2" @click="toggleDark(), play()">
				<span class="menu-link menu-center">
					<span class="menu-icon me-0">
						<i :class="isDark != false ? 'bi bi-brightness-high-fill' : 'bi bi-moon-fill'"></i>
					</span>
					<span v-if="isDark === true" class="menu-title">Light</span>
					<span v-else class="menu-title">Dark</span>
				</span>
			</div>
			<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start"
				class="menu-item py-2" :class="{ 'here': $route.path.startsWith(item.to) }"
				v-for="(item, i) in routes" :key="i">
				<span class="menu-link menu-center">
					<span class="menu-icon me-0">
						<i :class="item.icon"></i>
					</span>
					<span class="menu-title">{{ item.title }}</span>
				</span>
				<div class="menu-sub menu-sub-dropdown px-2 py-4 w-250px mh-75 overflow-auto">
					<div class="menu-item">
						<div class="menu-content">
							<span class="menu-section fs-5 fw-bolder ps-1 py-1" v-text="item.title"></span>
						</div>
					</div>
					<div class="menu-item" v-for="(items, i) in item.children" :key="i">
						<NuxtLink class="menu-link" exact-active-class="active" :to="items.subTo">
							<span class="menu-bullet">
								<span class="bullet bullet-dot"></span>
							</span>
							<span class="menu-title">{{ items.subTitle }}</span>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@media (max-width: 991.98px) {
	.header-tablet-and-mobile-fixed .wrapper {
		padding-top: 0px !important;
	}
}

.aside-menu .menu>.menu-item.here>.menu-link {
	background-color: #242a44 !important;
	border-radius: 20px !important;
}

.aside {
	background-color: #181c32 !important;
}

.aside .aside-logo {
	background-color: #181c32 !important;
}

.menu>.menu-item.here>.menu-link .menu-icon i {
	color: #ad9d73 !important;
}

.menu-item .menu-link {
	padding: 0.65rem 0rem !important;
}

.aside-menu .menu>.menu-item.hover:not(.here)>.menu-link:not(.disabled):not(.active):not(.here) .menu-icon,
.aside-menu .menu>.menu-item.hover:not(.here)>.menu-link:not(.disabled):not(.active):not(.here) .menu-icon .svg-icon,
.aside-menu .menu>.menu-item.hover:not(.here)>.menu-link:not(.disabled):not(.active):not(.here) .menu-icon i,
.aside-menu .menu>.menu-item:not(.here)>.menu-link:hover:not(.disabled):not(.active):not(.here) .menu-icon,
.aside-menu .menu>.menu-item:not(.here)>.menu-link:hover:not(.disabled):not(.active):not(.here) .menu-icon .svg-icon,
.aside-menu .menu>.menu-item:not(.here)>.menu-link:hover:not(.disabled):not(.active):not(.here) .menu-icon i {
	color: #ad9d73 !important;
}

.menu-state-icon-primary .menu-item.hover:not(.here)>.menu-link:not(.disabled):not(.active):not(.here) .menu-icon,
.menu-state-icon-primary .menu-item.hover:not(.here)>.menu-link:not(.disabled):not(.active):not(.here) .menu-icon .svg-icon,
.menu-state-icon-primary .menu-item.hover:not(.here)>.menu-link:not(.disabled):not(.active):not(.here) .menu-icon i,
.menu-state-icon-primary .menu-item:not(.here) .menu-link:hover:not(.disabled):not(.active):not(.here) .menu-icon,
.menu-state-icon-primary .menu-item:not(.here) .menu-link:hover:not(.disabled):not(.active):not(.here) .menu-icon .svg-icon,
.menu-state-icon-primary .menu-item:not(.here) .menu-link:hover:not(.disabled):not(.active):not(.here) .menu-icon i {
	color: #ad9d73 !important;
}

.aside-menu .menu>.menu-item.show>.menu-link .menu-icon,
.aside-menu .menu>.menu-item.show>.menu-link .menu-icon .svg-icon,
.aside-menu .menu>.menu-item.show>.menu-link .menu-icon i {
	color: #ad9d73 !important;
}

primary .menu-item:not(.here) .menu-link:hover:not(.disabled):not(.active):not(.here) {
	color: #ad9d73 !important;
}

.user-menu {
	margin-top: 300px;
}

.user-menu .menu-link {
	width: 100% !important;
}

@media (max-width: 991.98px) {
	.user-menu {
		margin-top: 475px;
	}
}
</style>