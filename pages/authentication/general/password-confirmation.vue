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
		<div class="card card-flush w-lg-650px py-5">
			<div class="card-body py-15 py-lg-20">
				<!--begin::Logo-->
				<div class="mb-14">
					<NuxtLink to="/" class="">
						<img alt="Logo" src="/media/logos/custom-2.svg" class="h-40px" />
					</NuxtLink>
				</div>
				<!--end::Logo-->
				<!--begin::Title-->
				<h1 class="fw-bolder text-gray-900 mb-5">Password is changed</h1>
				<!--end::Title-->
				<!--begin::Message-->
				<div class="fs-6 fw-semibold text-gray-500 mb-10">This is your opportunity to get creative
					<a href="#" class="link-primary fw-semibold">max@keenthemes.com</a>
					<br />that gives readers an idea
				</div>
				<!--end::Message-->
				<!--begin::Link-->
				<div class="mb-11">
					<NuxtLink to="auth/sign-in" class="btn btn-sm btn-primary">Sign
						in</NuxtLink>
				</div>
				<!--end::Link-->
				<!--begin::Illustration-->
				<div class="mb-0">
					<img src="/media/auth/ok.png" class="mw-100 mh-300px theme-light-show" alt="" />
					<img src="/media/auth/ok-dark.png" class="mw-100 mh-300px theme-dark-show" alt="" />
				</div>
				<!--end::Illustration-->
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
	background-image: url('/media/auth/bg6.jpg');
}

[data-theme="dark"] body {
	background-image: url('/media/auth/bg6-dark.jpg');
}
</style>