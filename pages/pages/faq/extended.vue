<script setup lang="ts">
useHead({
	title: 'Faq Extended',
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
			<!--begin::FAQ card-->
			<div class="card">
				<!--begin::Body-->
				<div class="card-body p-lg-15">
					<!--begin::Layout-->
					<div class="d-flex flex-column flex-lg-row">
						<!--begin::Sidebar-->
						<div class="flex-column flex-lg-row-auto w-100 w-lg-275px mb-10 me-lg-20">
							<!--begin::Catigories-->
							<div class="mb-15">
								<h4 class="text-dark mb-7">Categories</h4>
								<!--begin::Menu-->
								<div
									class="menu menu-rounded menu-column menu-title-gray-700 menu-state-title-primary menu-active-bg-light-primary fw-semibold">
									<!--begin::Item-->
									<div class="menu-item mb-1">
										<!--begin::Link-->
										<a href="#" class="menu-link py-3 active">Bootstrap Admin</a>
										<!--end::Link-->
									</div>
									<!--end::Item-->
									<!--begin::Item-->
									<div class="menu-item mb-1">
										<!--begin::Link-->
										<a href="#" class="menu-link py-3">Laravel App</a>
										<!--end::Link-->
									</div>
									<!--end::Item-->
									<!--begin::Item-->
									<div class="menu-item mb-1">
										<!--begin::Link-->
										<a href="#" class="menu-link py-3">Angular Dashbaord</a>
										<!--end::Link-->
									</div>
									<!--end::Item-->
									<!--begin::Item-->
									<div class="menu-item mb-1">
										<!--begin::Link-->
										<a href="#" class="menu-link py-3">VueJs Dashbaord</a>
										<!--end::Link-->
									</div>
									<!--end::Item-->
									<!--begin::Item-->
									<div class="menu-item mb-1">
										<!--begin::Link-->
										<a href="#" class="menu-link py-3">React Admin</a>
										<!--end::Link-->
									</div>
									<!--end::Item-->
									<!--begin::Item-->
									<div class="menu-item">
										<!--begin::Link-->
										<a href="#" class="menu-link py-3">Bootstrap Theme</a>
										<!--end::Link-->
									</div>
									<!--end::Item-->
								</div>
								<!--end::Menu-->
							</div>
							<!--end::Catigories-->
							<!--begin::Search blog-->
							<div class="mb-16">
								<h4 class="text-dark mb-7">Search Blog</h4>
								<!--begin::Input group-->
								<div class="position-relative">
									<!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
									<span class="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
												transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
											<path
												d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
												fill="currentColor" />
										</svg>
									</span>
									<!--end::Svg Icon-->
									<input type="text" class="form-control form-control-solid ps-10" name="search" value=""
										placeholder="Search" />
								</div>
								<!--end::Input group-->
							</div>
							<!--end::Search blog-->
							<!--begin::Recent posts-->
							<div class="m-0">
								<h4 class="text-dark mb-7">Recent Posts</h4>
								<!--begin::Item-->
								<div class="d-flex flex-stack mb-7">
									<!--begin::Symbol-->
									<div class="symbol symbol-60px symbol-2by3 me-4">
										<div class="symbol-label" style="background-image: url('/media/stock/600x400/img-1.jpg')"></div>
									</div>
									<!--end::Symbol-->
									<!--begin::Title-->
									<div class="m-0">
										<a href="#" class="text-dark fw-bold text-hover-primary fs-6">About Bootstrap Admin</a>
										<span class="text-gray-600 fw-semibold d-block pt-1 fs-7">We???ve been a focused on making a the
											sky</span>
									</div>
									<!--end::Title-->
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="d-flex flex-stack mb-7">
									<!--begin::Symbol-->
									<div class="symbol symbol-60px symbol-2by3 me-4">
										<div class="symbol-label" style="background-image: url('/media/stock/600x400/img-2.jpg')"></div>
									</div>
									<!--end::Symbol-->
									<!--begin::Title-->
									<div class="m-0">
										<a href="#" class="text-dark fw-bold text-hover-primary fs-6">A yellow sofa</a>
										<span class="text-gray-600 fw-semibold d-block pt-1 fs-7">We???ve been a focused on making a the
											sky</span>
									</div>
									<!--end::Title-->
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="d-flex flex-stack mb-7">
									<!--begin::Symbol-->
									<div class="symbol symbol-60px symbol-2by3 me-4">
										<div class="symbol-label" style="background-image: url('/media/stock/600x400/img-3.jpg')"></div>
									</div>
									<!--end::Symbol-->
									<!--begin::Title-->
									<div class="m-0">
										<a href="#" class="text-dark fw-bold text-hover-primary fs-6">Our Camra Mega Set</a>
										<span class="text-gray-600 fw-semibold d-block pt-1 fs-7">We???ve been a focused on making a the
											sky</span>
									</div>
									<!--end::Title-->
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="d-flex flex-stack">
									<!--begin::Symbol-->
									<div class="symbol symbol-60px symbol-2by3 me-4">
										<div class="symbol-label" style="background-image: url('/media/stock/600x400/img-4.jpg')"></div>
									</div>
									<!--end::Symbol-->
									<!--begin::Title-->
									<div class="m-0">
										<a href="#" class="text-dark fw-bold text-hover-primary fs-6">Time to cook and eat?</a>
										<span class="text-gray-600 fw-semibold d-block pt-1 fs-7">We???ve been a focused on making a the
											sky</span>
									</div>
									<!--end::Title-->
								</div>
								<!--end::Item-->
							</div>
							<!--end::Recent posts-->
						</div>
						<!--end::Sidebar-->
						<!--begin::Content-->
						<div class="flex-lg-row-fluid">
							<!--begin::Extended content-->
							<div class="mb-13">
								<!--begin::Content-->
								<div class="mb-15">
									<!--begin::Title-->
									<h4 class="fs-2x text-gray-800 w-bolder mb-6">Frequesntly Asked Questions</h4>
									<!--end::Title-->
									<!--begin::Text-->
									<p class="fw-semibold fs-4 text-gray-600 mb-2">First, a disclaimer ??? the entire process of writing a
										blog post often takes more than a couple of hours, even if you can type eighty words as per minute and
										your writing skills are sharp.</p>
									<!--end::Text-->
								</div>
								<!--end::Content-->
								<!--begin::Item-->
								<div class="mb-15">
									<!--begin::Title-->
									<h3 class="text-gray-800 w-bolder mb-4">Buying Product</h3>
									<!--end::Title-->
									<!--begin::Accordion-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle mb-0" data-bs-toggle="collapse"
											data-bs-target="#kt_job_8_1">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">How does it work?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_8_1" class="collapse show fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
										<!--begin::Separator-->
										<div class="separator separator-dashed"></div>
										<!--end::Separator-->
									</div>
									<!--end::Section-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
											data-bs-toggle="collapse" data-bs-target="#kt_job_8_2">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">Do I need a designer to use this Admin Theme ?
											</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_8_2" class="collapse fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
										<!--begin::Separator-->
										<div class="separator separator-dashed"></div>
										<!--end::Separator-->
									</div>
									<!--end::Section-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
											data-bs-toggle="collapse" data-bs-target="#kt_job_8_3">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">What do I need to do to start selling?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_8_3" class="collapse fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
										<!--begin::Separator-->
										<div class="separator separator-dashed"></div>
										<!--end::Separator-->
									</div>
									<!--end::Section-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
											data-bs-toggle="collapse" data-bs-target="#kt_job_8_4">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">How much does Extended license cost?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_8_4" class="collapse fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
									</div>
									<!--end::Section-->
									<!--end::Accordion-->
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="mb-15">
									<!--begin::Title-->
									<h3 class="text-gray-800 w-bolder mb-4">Buying Product</h3>
									<!--end::Title-->
									<!--begin::Accordion-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle mb-0" data-bs-toggle="collapse"
											data-bs-target="#kt_job_9_1">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">How does it work?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_9_1" class="collapse show fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
										<!--begin::Separator-->
										<div class="separator separator-dashed"></div>
										<!--end::Separator-->
									</div>
									<!--end::Section-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
											data-bs-toggle="collapse" data-bs-target="#kt_job_9_2">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">Do I need a designer to use this this Admin
												Theme?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_9_2" class="collapse fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
										<!--begin::Separator-->
										<div class="separator separator-dashed"></div>
										<!--end::Separator-->
									</div>
									<!--end::Section-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
											data-bs-toggle="collapse" data-bs-target="#kt_job_9_3">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">What do I need to do to start selling?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_9_3" class="collapse fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
										<!--begin::Separator-->
										<div class="separator separator-dashed"></div>
										<!--end::Separator-->
									</div>
									<!--end::Section-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
											data-bs-toggle="collapse" data-bs-target="#kt_job_9_4">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">How much does Extended license cost?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_9_4" class="collapse fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
									</div>
									<!--end::Section-->
									<!--end::Accordion-->
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="mb-0">
									<!--begin::Title-->
									<h3 class="text-gray-800 w-bolder mb-4">Installation</h3>
									<!--end::Title-->
									<!--begin::Accordion-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle mb-0" data-bs-toggle="collapse"
											data-bs-target="#kt_job_10_1">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">What platforms are compatible?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_10_1" class="collapse show fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
										<!--begin::Separator-->
										<div class="separator separator-dashed"></div>
										<!--end::Separator-->
									</div>
									<!--end::Section-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
											data-bs-toggle="collapse" data-bs-target="#kt_job_10_2">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">How many people can it support?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_10_2" class="collapse fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
										<!--begin::Separator-->
										<div class="separator separator-dashed"></div>
										<!--end::Separator-->
									</div>
									<!--end::Section-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
											data-bs-toggle="collapse" data-bs-target="#kt_job_10_3">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">How long is the warrianty?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_10_3" class="collapse fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
										<!--begin::Separator-->
										<div class="separator separator-dashed"></div>
										<!--end::Separator-->
									</div>
									<!--end::Section-->
									<!--begin::Section-->
									<div class="m-0">
										<!--begin::Heading-->
										<div class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
											data-bs-toggle="collapse" data-bs-target="#kt_job_10_4">
											<!--begin::Icon-->
											<div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
												<!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
												<span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
												<span class="svg-icon toggle-off svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
														<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
															transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
														<rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
													</svg>
												</span>
												<!--end::Svg Icon-->
											</div>
											<!--end::Icon-->
											<!--begin::Title-->
											<h4 class="text-gray-700 fw-bold cursor-pointer mb-0">How fast is the installation?</h4>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
										<!--begin::Body-->
										<div id="kt_job_10_4" class="collapse fs-6 ms-1">
											<!--begin::Text-->
											<div class="mb-4 text-gray-600 fw-semibold fs-6 ps-10">First, a disclaimer ??? the entire process of
												writing a blog post often takes more than a couple of hours, even if you can type eighty words as
												per minute and your writing skills are sharp.</div>
											<!--end::Text-->
										</div>
										<!--end::Content-->
									</div>
									<!--end::Section-->
									<!--end::Accordion-->
								</div>
								<!--end::Item-->
							</div>
							<!--end::Extended content-->
						</div>
						<!--end::Content-->
					</div>
					<!--end::Layout-->
					<!--begin::Card-->
					<div class="card mb-4 bg-light text-center">
						<!--begin::Body-->
						<div class="card-body py-12">
							<!--begin::Icon-->
							<a href="#" class="mx-4">
								<img src="/media/svg/brand-logos/facebook-4.svg" class="h-30px my-2" alt="" />
							</a>
							<!--end::Icon-->
							<!--begin::Icon-->
							<a href="#" class="mx-4">
								<img src="/media/svg/brand-logos/instagram-2-1.svg" class="h-30px my-2" alt="" />
							</a>
							<!--end::Icon-->
							<!--begin::Icon-->
							<a href="#" class="mx-4">
								<img src="/media/svg/brand-logos/github.svg" class="h-30px my-2" alt="" />
							</a>
							<!--end::Icon-->
							<!--begin::Icon-->
							<a href="#" class="mx-4">
								<img src="/media/svg/brand-logos/behance.svg" class="h-30px my-2" alt="" />
							</a>
							<!--end::Icon-->
							<!--begin::Icon-->
							<a href="#" class="mx-4">
								<img src="/media/svg/brand-logos/pinterest-p.svg" class="h-30px my-2" alt="" />
							</a>
							<!--end::Icon-->
							<!--begin::Icon-->
							<a href="#" class="mx-4">
								<img src="/media/svg/brand-logos/twitter.svg" class="h-30px my-2" alt="" />
							</a>
							<!--end::Icon-->
							<!--begin::Icon-->
							<a href="#" class="mx-4">
								<img src="/media/svg/brand-logos/dribbble-icon-1.svg" class="h-30px my-2" alt="" />
							</a>
							<!--end::Icon-->
						</div>
						<!--end::Body-->
					</div>
					<!--end::Card-->
				</div>
				<!--end::Body-->
			</div>
			<!--end::FAQ card-->
		</div>
		<!--end::Container-->
	</div>
</template>

<style scoped>

</style>