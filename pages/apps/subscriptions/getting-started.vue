<script setup lang="ts">
useHead({
	title: 'Getting Start',
	meta: [
		{
			name: 'keywords',
			content: 'Content, Nuxt 3'
		},
		{
			name: 'Description',
			content: 'Nuxt 3,  THW'
		}
	]
})
</script>

<template>
	<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
		<!--begin::Container-->
		<div id="kt_content_container" class="container-xxl">
			<!--begin::Card-->
			<div class="card">
				<!--begin::Card body-->
				<div class="card-body p-0">
					<!--begin::Wrapper-->
					<div class="card-px text-center py-20 my-10">
						<!--begin::Title-->
						<h2 class="fs-2x fw-bold mb-10">Welcome to Subscriptions App</h2>
						<!--end::Title-->
						<!--begin::Description-->
						<p class="text-gray-400 fs-4 fw-semibold mb-10">There are no subscriptions added yet.
							<br />Kickstart your business by adding a your first subscription
						</p>
						<!--end::Description-->
						<!--begin::Action-->
						<NuxtLink to="/apps/subscriptions/add" class="btn btn-primary">Add Subscription</NuxtLink>
						<!--end::Action-->
					</div>
					<!--end::Wrapper-->
					<!--begin::Illustration-->
					<div class="text-center px-4">
						<img class="mw-100 mh-300px" alt="" src="/media/illustrations/sketchy-1/5.png" />
					</div>
					<!--end::Illustration-->
				</div>
				<!--end::Card body-->
			</div>
			<!--end::Card-->
		</div>
		<!--end::Container-->
	</div>
</template>


<style scoped>

</style>