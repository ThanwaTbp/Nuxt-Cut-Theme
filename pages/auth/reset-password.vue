<script setup lang="ts">
definePageMeta({
	layout: "nolayout",
})
</script>

<template>
	<div class="d-flex flex-column flex-root">
		<!--begin::Authentication - Password reset -->
		<div class="d-flex flex-column flex-lg-row flex-column-fluid">
			<!--begin::Body-->
			<div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
				<!--begin::Form-->
				<div class="d-flex flex-center flex-column flex-lg-row-fluid">
					<!--begin::Wrapper-->
					<div class="w-lg-500px p-10">
						<!--begin::Form-->
						<form class="form w-100" novalidate="novalidate" id="kt_password_reset_form"
							data-kt-redirect-url="/auth/new-password" action="#">
							<!--begin::Heading-->
							<div class="text-center mb-10">
								<!--begin::Title-->
								<h1 class="text-dark fw-bolder mb-3">Forgot Password ?</h1>
								<!--end::Title-->
								<!--begin::Link-->
								<div class="text-gray-500 fw-semibold fs-6">Enter your email to reset your password.</div>
								<!--end::Link-->
							</div>
							<!--begin::Heading-->
							<!--begin::Input group=-->
							<div class="fv-row mb-8">
								<!--begin::Email-->
								<input type="text" placeholder="Email" name="email" autocomplete="off"
									class="form-control bg-transparent" />
								<!--end::Email-->
							</div>
							<!--begin::Actions-->
							<div class="d-flex flex-wrap justify-content-center pb-lg-0">
								<button type="button" id="kt_password_reset_submit" class="btn btn-primary me-4">
									<!--begin::Indicator label-->
									<span class="indicator-label">Submit</span>
									<!--end::Indicator label-->
									<!--begin::Indicator progress-->
									<span class="indicator-progress">Please wait...
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									<!--end::Indicator progress-->
								</button>
								<NuxtLink to="/auth/sign-in" class="btn btn-light">Cancel</NuxtLink>
							</div>
							<!--end::Actions-->
						</form>
						<!--end::Form-->
					</div>
					<!--end::Wrapper-->
				</div>
				<!--end::Form-->
				<!--begin::Footer-->
				<div class="d-flex flex-center flex-wrap px-5">
					<!--begin::Links-->
					<div class="d-flex fw-semibold text-primary fs-base">
						<NuxtLink to="/pages/team" class="px-5" target="_blank">Terms</NuxtLink>
						<NuxtLink to="/pages/pricing/column" class="px-5" target="_blank">Plans</NuxtLink>
						<NuxtLink to="/pages/contact" class="px-5" target="_blank">Contact Us</NuxtLink>
					</div>
					<!--end::Links-->
				</div>
				<!--end::Footer-->
			</div>
			<!--end::Body-->
			<!--begin::Aside-->
			<div class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
				style="background-image: url(/media/misc/auth-bg.png)">
				<!--begin::Content-->
				<div class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
					<!--begin::Logo-->
					<NuxtLink to="/index" class="mb-0 mb-lg-12">
						<img alt="Logo" src="/media/logos/custom-1.png" class="h-60px h-lg-75px" />
					</NuxtLink>
					<!--end::Logo-->
					<!--begin::Image-->
					<img class="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
						src="/media/misc/auth-screens.png" alt="" />
					<!--end::Image-->
					<!--begin::Title-->
					<h1 class="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">Fast, Efficient and Productive</h1>
					<!--end::Title-->
					<!--begin::Text-->
					<div class="d-none d-lg-block text-white fs-base text-center">In this kind of post,
						<a href="#" class="opacity-75-hover text-warning fw-bold me-1">the blogger</a>introduces a person they???ve
						interviewed
						<br />and provides some background information about
						<a href="#" class="opacity-75-hover text-warning fw-bold me-1">the interviewee</a>and their
						<br />work following this is a transcript of the interview.
					</div>
					<!--end::Text-->
				</div>
				<!--end::Content-->
			</div>
			<!--end::Aside-->
		</div>
		<!--end::Authentication - Password reset-->
	</div>
</template>


<style scoped>

</style>