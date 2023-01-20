<template>
	<div class="hover-scroll-overlay-y my-2 my-lg-5 pe-lg-n1" id="kt_aside_menu_wrapper" data-kt-scroll="true"
		data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
		data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu" data-kt-scroll-offset="5px">
		<!--begin::Menu-->
		<div
			class="menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-semibold"
			id="#kt_aside_menu" data-kt-menu="true">
			<!--begin:Menu item-->
			<FrontAsideSubmenuMenu1 />
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<FrontAsideSubmenuMenu2 />
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<FrontAsideSubmenuMenu3 />
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<FrontAsideSubmenuMenu4 />
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<FrontAsideSubmenuMenu5 />
			<!--end:Menu item-->
		</div>
		<!--end::Menu-->
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>