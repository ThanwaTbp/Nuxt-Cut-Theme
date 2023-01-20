<script setup lang="ts">
useHead({
	title: 'product',
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
			<!--begin::Products-->
			<div class="card card-flush">
				<!--begin::Card header-->
				<div class="card-header align-items-center py-5 gap-2 gap-md-5">
					<!--begin::Card title-->
					<div class="card-title">
						<!--begin::Search-->
						<div class="d-flex align-items-center position-relative my-1">
							<!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
							<span class="svg-icon svg-icon-1 position-absolute ms-4">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
										transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
									<path
										d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
										fill="currentColor" />
								</svg>
							</span>
							<!--end::Svg Icon-->
							<input type="text" data-kt-ecommerce-product-filter="search"
								class="form-control form-control-solid w-250px ps-14" placeholder="Search Product" />
						</div>
						<!--end::Search-->
					</div>
					<!--end::Card title-->
					<!--begin::Card toolbar-->
					<div class="card-toolbar flex-row-fluid justify-content-end gap-5">
						<div class="w-100 mw-150px">
							<!--begin::Select2-->
							<select class="form-select form-select-solid" data-control="select2" data-hide-search="true"
								data-placeholder="Status" data-kt-ecommerce-product-filter="status">
								<option></option>
								<option value="all">All</option>
								<option value="published">Published</option>
								<option value="scheduled">Scheduled</option>
								<option value="inactive">Inactive</option>
							</select>
							<!--end::Select2-->
						</div>
						<!--begin::Add product-->
						<NuxtLink to="/apps/ecommerce/catalog/add-product" class="btn btn-primary">Add Product</NuxtLink>
						<!--end::Add product-->
					</div>
					<!--end::Card toolbar-->
				</div>
				<!--end::Card header-->
				<!--begin::Card body-->
				<div class="card-body pt-0">
					<!--begin::Table-->
					<table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_products_table">
						<!--begin::Table head-->
						<thead>
							<!--begin::Table row-->
							<tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
								<th class="w-10px pe-2">
									<div class="form-check form-check-sm form-check-custom form-check-solid me-3">
										<input class="form-check-input" type="checkbox" data-kt-check="true"
											data-kt-check-target="#kt_ecommerce_products_table .form-check-input" value="1" />
									</div>
								</th>
								<th class="min-w-200px">Product</th>
								<th class="text-end min-w-100px">SKU</th>
								<th class="text-end min-w-70px">Qty</th>
								<th class="text-end min-w-100px">Price</th>
								<th class="text-end min-w-100px">Rating</th>
								<th class="text-end min-w-100px">Status</th>
								<th class="text-end min-w-70px">Actions</th>
							</tr>
							<!--end::Table row-->
						</thead>
						<!--end::Table head-->
						<!--begin::Table body-->
						<tbody class="fw-semibold text-gray-600">
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/1.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 1</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02374007</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="39">
									<span class="fw-bold ms-3">39</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">216</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/2.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 2</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01285004</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="17">
									<span class="fw-bold ms-3">17</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">77</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/3.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 3</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01673009</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="13">
									<span class="fw-bold ms-3">13</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">132</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/4.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 4</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01285001</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="41">
									<span class="fw-bold ms-3">41</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">43</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/5.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 5</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02269001</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="50">
									<span class="fw-bold ms-3">50</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">250</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/6.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 6</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03602003</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="2">
									<span class="badge badge-light-warning">Low stock</span>
									<span class="fw-bold text-warning ms-3">2</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">238</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/7.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 7</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02620008</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="50">
									<span class="fw-bold ms-3">50</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">34</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/8.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 8</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03738009</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="28">
									<span class="fw-bold ms-3">28</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">131</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/9.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 9</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02690006</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="13">
									<span class="fw-bold ms-3">13</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">35</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/10.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 10</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03458004</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="33">
									<span class="fw-bold ms-3">33</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">168</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/11.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 11</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">04969002</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="4">
									<span class="badge badge-light-warning">Low stock</span>
									<span class="fw-bold text-warning ms-3">4</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">267</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/12.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 12</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01340001</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="50">
									<span class="fw-bold ms-3">50</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">216</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/13.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 13</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01763009</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="34">
									<span class="fw-bold ms-3">34</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">85</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/14.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 14</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02113006</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="24">
									<span class="fw-bold ms-3">24</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">271</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/15.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 15</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03618003</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="11">
									<span class="fw-bold ms-3">11</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">24</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/16.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 16</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01301003</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="34">
									<span class="fw-bold ms-3">34</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">133</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/17.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 17</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02343004</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="0">
									<span class="badge badge-light-danger">Sold out</span>
									<span class="fw-bold text-danger ms-3">0</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">189</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/18.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 18</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02272004</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="21">
									<span class="fw-bold ms-3">21</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">244</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/19.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 19</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03694006</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="42">
									<span class="fw-bold ms-3">42</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">125</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/20.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 20</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02616008</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="0">
									<span class="badge badge-light-danger">Sold out</span>
									<span class="fw-bold text-danger ms-3">0</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">145</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/21.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 21</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01743003</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="10">
									<span class="fw-bold ms-3">10</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">227</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/22.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 22</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">04643005</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="1">
									<span class="badge badge-light-warning">Low stock</span>
									<span class="fw-bold text-warning ms-3">1</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">291</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/23.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 23</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02943007</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="24">
									<span class="fw-bold ms-3">24</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">267</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/24.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 24</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">04656007</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="10">
									<span class="fw-bold ms-3">10</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">59</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/25.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 25</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03517002</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="21">
									<span class="fw-bold ms-3">21</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">223</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/26.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 26</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01198008</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="32">
									<span class="fw-bold ms-3">32</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">157</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/27.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 27</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">04839003</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="33">
									<span class="fw-bold ms-3">33</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">176</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/28.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 28</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03983007</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="43">
									<span class="fw-bold ms-3">43</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">75</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/29.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 29</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02635005</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="23">
									<span class="fw-bold ms-3">23</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">64</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/30.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 30</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02633002</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="47">
									<span class="fw-bold ms-3">47</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">101</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/31.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 31</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03104006</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="41">
									<span class="fw-bold ms-3">41</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">278</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/32.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 32</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">04760003</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="27">
									<span class="fw-bold ms-3">27</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">52</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/33.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 33</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02786009</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="43">
									<span class="fw-bold ms-3">43</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">236</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/34.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 34</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">04728009</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="42">
									<span class="fw-bold ms-3">42</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">249</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/35.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 35</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03419002</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="5">
									<span class="badge badge-light-warning">Low stock</span>
									<span class="fw-bold text-warning ms-3">5</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">47</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/36.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 36</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02970009</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="20">
									<span class="fw-bold ms-3">20</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">13</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/37.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 37</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02802003</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="22">
									<span class="fw-bold ms-3">22</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">165</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/38.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 38</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">04344004</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="39">
									<span class="fw-bold ms-3">39</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">202</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/39.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 39</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02264001</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="38">
									<span class="fw-bold ms-3">38</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">224</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/40.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 40</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02576004</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="32">
									<span class="fw-bold ms-3">32</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">170</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/41.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 41</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02897007</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="6">
									<span class="badge badge-light-warning">Low stock</span>
									<span class="fw-bold text-warning ms-3">6</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">144</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/42.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 42</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03783004</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="46">
									<span class="fw-bold ms-3">46</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">194</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/43.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 43</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">04430009</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="11">
									<span class="fw-bold ms-3">11</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">43</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/44.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 44</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01904004</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="43">
									<span class="fw-bold ms-3">43</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">209</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Inactive">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Inactive</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/45.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 45</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02263003</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="42">
									<span class="fw-bold ms-3">42</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">125</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-4">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/46.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 46</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">04938007</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="18">
									<span class="fw-bold ms-3">18</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">98</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/47.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 47</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01287007</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="10">
									<span class="fw-bold ms-3">10</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">81</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/48.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 48</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">03583002</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="31">
									<span class="fw-bold ms-3">31</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">142</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-5">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Published">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Published</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/49.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 49</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">01792003</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="50">
									<span class="fw-bold ms-3">50</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">104</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
							<!--begin::Table row-->
							<tr>
								<!--begin::Checkbox-->
								<td>
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" value="1" />
									</div>
								</td>
								<!--end::Checkbox-->
								<!--begin::Category=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin::Thumbnail-->
										<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="symbol symbol-50px">
											<span class="symbol-label"
												style="background-image:url(/media//stock/ecommerce/50.gif);"></span>
										</NuxtLink>
										<!--end::Thumbnail-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/ecommerce/catalog/edit-product"
												class="text-gray-800 text-hover-primary fs-5 fw-bold"
												data-kt-ecommerce-product-filter="product_name">Product 50</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Category=-->
								<!--begin::SKU=-->
								<td class="text-end pe-0">
									<span class="fw-bold">02411001</span>
								</td>
								<!--end::SKU=-->
								<!--begin::Qty=-->
								<td class="text-end pe-0" data-order="39">
									<span class="fw-bold ms-3">39</span>
								</td>
								<!--end::Qty=-->
								<!--begin::Price=-->
								<td class="text-end pe-0">140</td>
								<!--end::Price=-->
								<!--begin::Rating-->
								<td class="text-end pe-0" data-order="rating-3">
									<div class="rating justify-content-end">
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label checked">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
										<div class="rating-label">
											<!--begin::Svg Icon | path: icons/duotune/general/gen029.svg-->
											<span class="svg-icon svg-icon-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
										</div>
									</div>
								</td>
								<!--end::Rating-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Scheduled">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Scheduled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Action=-->
								<td class="text-end">
									<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
										data-kt-menu-placement="bottom-end">Actions
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
										<span class="svg-icon svg-icon-5 m-0">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
													fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon--></a>
									<!--begin::Menu-->
									<div
										class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
										data-kt-menu="true">
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/catalog/edit-product" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::Menu-->
								</td>
								<!--end::Action=-->
							</tr>
							<!--end::Table row-->
						</tbody>
						<!--end::Table body-->
					</table>
					<!--end::Table-->
				</div>
				<!--end::Card body-->
			</div>
			<!--end::Products-->
		</div>
		<!--end::Container-->
	</div>
</template>


<style scoped>

</style>