<script lang="ts" setup></script>

<template>
	<div id="kt_aside" class="aside overflow-visible pb-5 pt-5 pt-lg-0" data-kt-drawer="true" data-kt-drawer-name="aside"
		data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
		data-kt-drawer-width="{default:'80px', '300px': '100px'}" data-kt-drawer-direction="start"
		data-kt-drawer-toggle="#kt_aside_mobile_toggle">
		<!--begin::Brand-->
		<FrontAsideBrand />
		<!--end::Brand-->
		<!--begin::Aside menu-->
		<div class="aside-menu flex-column-fluid" id="kt_aside_menu">
			<!--begin::Aside Menu-->
			<FrontAsideMenu />
			<!--end::Aside Menu-->
		</div>
		<!--end::Aside menu-->
		<!--begin::Footer-->
		<FrontAsideFooter />
		<!--end::Footer-->
	</div>
</template>

<style scoped></style>
