<template>
	<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start"
		class="menu-item here show py-2">
		<!--begin:Menu link-->
		<span class="menu-link menu-center">
			<span class="menu-icon me-0">
				<!-- <i class="fonticon-house fs-1"></i> -->
				<i class="bi bi-clipboard-data fs-1"></i>
			</span>
			<span class="menu-title" v-text="text"></span>
		</span>
		<!--end:Menu link-->
		<!--begin:Menu sub-->
		<div class="menu-sub menu-sub-dropdown px-2 py-4 w-250px mh-75 overflow-auto">
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu content-->
				<div class="menu-content">
					<span class="menu-section fs-5 fw-bolder ps-1 py-1">Home</span>
				</div>
				<!--end:Menu content-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Default</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/ecommerce">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">eCommerce</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/projects">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Projects</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/online-courses">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Online Courses</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" href="/dashboards/marketing">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Marketing</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/bidding">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Bidding</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/pos">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">POS System</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/call-center">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Call Center</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/logistics">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Logistics</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/website-analytics">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Website Analytics</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/finance-performance">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Finance Performance</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/store-analytics">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Store Analytics</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/social">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Social</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/delivery">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Delivery</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/crypto">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Crypto</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/school">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">School</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
			<!--begin:Menu item-->
			<div class="menu-item">
				<!--begin:Menu link-->
				<NuxtLink class="menu-link" exact-active-class="active" to="/dashboards/podcast">
					<span class="menu-bullet">
						<span class="bullet bullet-dot"></span>
					</span>
					<span class="menu-title">Podcast</span>
				</NuxtLink>
				<!--end:Menu link-->
			</div>
			<!--end:Menu item-->
		</div>
		<!--end:Menu sub-->
	</div>
</template>

<script setup lang="ts">
const text = "ข้อมูลสรุป"
</script>

<style scoped>

</style>