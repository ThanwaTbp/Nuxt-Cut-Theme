<script setup lang="ts">
useHead({
	title: 'Utilities',
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
				<div class="card-body">
					<!--begin::Heading-->
					<div class="card-px text-center pt-15 pb-15">
						<!--begin::Title-->
						<h2 class="fs-2x fw-bold mb-0">New Card Modal Example</h2>
						<!--end::Title-->
						<!--begin::Description-->
						<p class="text-gray-400 fs-4 fw-semibold py-7">Click on the below buttons to launch
							<br />a new card example.
						</p>
						<!--end::Description-->
						<!--begin::Action-->
						<a href="#" class="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal"
							data-bs-target="#kt_modal_new_card">Add New Card</a>
						<!--end::Action-->
					</div>
					<!--end::Heading-->
					<!--begin::Illustration-->
					<div class="text-center pb-15 px-5">
						<img src="/media/illustrations/sketchy-1/6.png" alt="" class="mw-100 h-200px h-sm-325px" />
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