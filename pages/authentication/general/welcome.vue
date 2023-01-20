<script setup lang="ts">
definePageMeta({
	layout: "nolayout",
})
useHead({
	title: 'title',
	bodyAttrs: {
		class: 'app-blank',
		id: 'kt_body'
	},
	meta: [
		{
			name: 'keywords',
			content: 'Content, Nuxt 3'
		},
		{
			name: 'Description',
			content: 'Nuxt 3,  THW'
		},
	]
})
</script>

<template>
	<div class="d-flex flex-column flex-root">
<!--begin::Authentication - Signup Welcome Message -->
<div class="d-flex flex-column flex-center flex-column-fluid">
	<!--begin::Content-->
	<div class="d-flex flex-column flex-center text-center p-10">
		<!--begin::Wrapper-->
		<div class="card card-flush w-md-650px py-5">
			<div class="card-body py-15 py-lg-20">
				<!--begin::Logo-->
				<div class="mb-7">
					<NuxtLink to="/" class="">
						<img alt="Logo" src="/media/logos/custom-2.svg" class="h-40px" />
					</NuxtLink>
				</div>
				<!--end::Logo-->
				<!--begin::Title-->
				<h1 class="fw-bolder text-gray-900 mb-5">Welcome to Metronic</h1>
				<!--end::Title-->
				<!--begin::Text-->
				<div class="fw-semibold fs-6 text-gray-500 mb-7">This is your opportunity to get creative and make a name
					<br />that gives readers an idea
				</div>
				<!--end::Text-->
				<!--begin::Illustration-->
				<div class="mb-0">
					<img src="/media/auth/welcome.png" class="mw-100 mh-300px theme-light-show" alt="" />
					<img src="/media/auth/welcome-dark.png" class="mw-100 mh-300px theme-dark-show" alt="" />
				</div>
				<!--end::Illustration-->
				<!--begin::Link-->
				<div class="mb-0">
					<NuxtLink to="/" class="btn btn-sm btn-primary">Go To Dashboard</NuxtLink>
				</div>
				<!--end::Link-->
			</div>
		</div>
		<!--end::Wrapper-->
	</div>
	<!--end::Content-->
</div>
<!--end::Authentication - Signup Welcome Message-->
	</div>
</template>


<style scoped>
body {
	background-image: url('/media/auth/bg8.jpg');
}

[data-theme="dark"] body {
	background-image: url('/media/auth/bg8-dark.jpg');
}
</style>