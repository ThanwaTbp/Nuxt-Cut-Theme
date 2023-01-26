<template>
	<div class="aside-footer flex-column-auto" id="kt_aside_footer">
		<div class="d-flex justify-content-center">
			<!-- <div
				class="menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-semibold"
				data-kt-menu="true">
				<NuxtLink to="/account/overview" data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
					data-kt-menu-placement="right-start" class="menu-item  py-2"
					:class="{ 'here': $route.path.startsWith('/account') }">
					<span class="menu-link menu-center">
						<span class="menu-icon me-0">
							<i class="fonticon-user-2 fs-1"></i>
						</span>
					</span>
					<span class="menu-link menu-center p-0">ธันวา</span>
				</NuxtLink>
			</div> -->
			<div
				class="menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-semibold"
				data-kt-menu="true">
			
				<NuxtLink to="/account/overview" data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
					data-kt-menu-placement="right-start" class="menu-item .here .show py-2"
					:class="{ 'here': $route.path.startsWith('/account') }">
					<span class="menu-link menu-center">
						<span class="menu-icon me-0">
							<i class="fonticon-user-2 fs-1"></i>
						</span>
						<span class="menu-title text-center">ธันวา</span>
					</span>
				</NuxtLink>
			</div>
		</div>
	</div>
	<!-- <span class="menu-title text-white text-center">ธันวา</span> -->
</template>

<script setup lang="ts">
const $route = useRoute();
</script>

<style scoped>
.aside-footer .menu>.menu-item.here>.menu-link {
	background-color: #242a44 !important;
	border-radius: 20px !important;
}

.menu-state-icon-primary .menu-item.here>.menu-link .menu-icon,
.menu-state-icon-primary .menu-item.here>.menu-link .menu-icon .svg-icon,
.menu-state-icon-primary .menu-item.here>.menu-link .menu-icon i {
	color: #ad9d73 !important;
}

.menu-state-title-primary .menu-item.here>.menu-link .menu-title {
	color: #ad9d73 !important;
}

.menu-state-title-primary .menu-item.hover:not(.here)>.menu-link:not(.disabled):not(.active):not(.here),
.menu-state-title-primary .menu-item:not(.here) .menu-link:hover:not(.disabled):not(.active):not(.here) {
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

.menu-state-title-primary .menu-item.hover:not(.here)>.menu-link:not(.disabled):not(.active):not(.here) .menu-title,
.menu-state-title-primary .menu-item:not(.here) .menu-link:hover:not(.disabled):not(.active):not(.here) .menu-title {
	color: #ad9d73 !important;
}
</style>