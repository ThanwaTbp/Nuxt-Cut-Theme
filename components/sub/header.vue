<template>
	<div
		class="bg-body d-flex flex-column-auto justify-content-cenrer align-items-start gap-2 gap-lg-4 py-4 px-10 overflow-auto"
		id="kt_app_header_nav">
		<NuxtLink exact-active-class="active" to="/" class="flex-grow-1 mt-2">
			<!--begin::Svg Icon | path: icons/duotune/arrows/arr063.svg-->
			<span class="svg-icon svg-icon-2x svg-icon-gray-400">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor" />
					<path
						d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
						fill="currentColor" />
				</svg>
			</span>
			<!--end::Svg Icon-->
		</NuxtLink>
		<NuxtLink exact-active-class="active" to="/authentication/email/welcome-message"
			class="btn btn-icon flex-column btn-text-gray-500 btn-icon-gray-300 btn-active-text-gray-700 btn-active-icon-gray-500 rounded-3 h-60px w-60px h-lg-90px w-lg-90px fw-semibold">
			<i class="fonticon-hello fs-1 mb-2"></i>
			<span class="fs-8 fw-bold">Welcome
				<br />Message</span>
		</NuxtLink>
		<NuxtLink exact-active-class="active" to="/authentication/email/reset-password"
			class="btn btn-icon flex-column btn-text-gray-500 btn-icon-gray-300 btn-active-text-gray-700 btn-active-icon-gray-500 rounded-3 h-60px w-60px h-lg-90px w-lg-90px fw-semibold">
			<i class="fonticon-password fs-1 mb-2"></i>
			<span class="fs-8 fw-bold">Reset
				<br />Password</span>
		</NuxtLink>
		<NuxtLink exact-active-class="active" to="/authentication/email/subscription-confirmed"
			class="btn btn-icon flex-column btn-text-gray-500 btn-icon-gray-300 btn-active-text-gray-700 btn-active-icon-gray-500 rounded-3 h-60px w-60px h-lg-90px w-lg-90px fw-semibold">
			<i class="fonticon-alarm fs-1 mb-2"></i>
			<span class="fs-8 fw-bold">Subscription
				<br />Confirmed</span>
		</NuxtLink>
		<NuxtLink exact-active-class="active" to="/authentication/email/card-declined"
			class="btn btn-icon flex-column btn-text-gray-500 btn-icon-gray-300 btn-active-text-gray-700 btn-active-icon-gray-500 rounded-3 h-60px w-60px h-lg-90px w-lg-90px fw-semibold active bg-light border border-2">
			<i class="fonticon-card fs-1 mb-2"></i>
			<span class="fs-8 fw-bold">Card
				<br />Declined</span>
		</NuxtLink>
		<NuxtLink exact-active-class="active" to="/authentication/email/promo-1"
			class="btn btn-icon flex-column btn-text-gray-500 btn-icon-gray-300 btn-active-text-gray-700 btn-active-icon-gray-500 rounded-3 h-60px w-60px h-lg-90px w-lg-90px fw-semibold">
			<i class="fonticon-hourglass fs-1 mb-2"></i>
			<span class="fs-8 fw-bold">Promotion
				<br />Email 1</span>
		</NuxtLink>
		<NuxtLink exact-active-class="active" to="/authentication/email/promo-2"
			class="btn btn-icon flex-column btn-text-gray-500 btn-icon-gray-300 btn-active-text-gray-700 btn-active-icon-gray-500 rounded-3 h-60px w-60px h-lg-90px w-lg-90px fw-semibold">
			<i class="fonticon-image fs-1 mb-2"></i>
			<span class="fs-8 fw-bold">Promotion
				<br />Email 2</span>
		</NuxtLink>
		<NuxtLink exact-active-class="active" to="/authentication/email/promo-3"
			class="btn btn-icon flex-column btn-text-gray-500 btn-icon-gray-300 btn-active-text-gray-700 btn-active-icon-gray-500 rounded-3 h-60px w-60px h-lg-90px w-lg-90px fw-semibold">
			<i class="fonticon-send fs-1 mb-2"></i>
			<span class="fs-8 fw-bold">Promotion
				<br />Email 3</span>
		</NuxtLink>
		<NuxtLink exact-active-class="active" to="/authentication/email/card-declined?nav=0" class="flex-grow-1 text-end mt-2">
			<!--begin::Svg Icon | path: icons/duotune/general/gen034.svg-->
			<span class="svg-icon svg-icon-2x svg-icon-icon-gray-400">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
					<rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor" />
					<rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor" />
				</svg>
			</span>
			<!--end::Svg Icon-->
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>