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
				<div class="card card-flush py-5">
					<div class="card-body py-15 py-lg-20">
						<!--begin::Logo-->
						<h1 class="fw-bold fs-2qx text-gray-800 mb-7">Your account is deactivated</h1>
						<!--end::Logo-->
						<!--begin::Message-->
						<div class="fw-semibold fs-3 text-muted mb-15">Plan your blog post by choosing a topic creating
							<br />an outline and checking facts.
						</div>
						<!--end::Message-->
						<!--begin::Action-->
						<div class="text-center">
							<NuxtLink to="/" class="btn btn-lg btn-primary fw-bold">Go to homepage</NuxtLink>
						</div>
						<!--end::Action-->
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

</style>