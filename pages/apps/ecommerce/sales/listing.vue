<script setup lang="ts">

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
							<input type="text" data-kt-ecommerce-order-filter="search"
								class="form-control form-control-solid w-250px ps-14" placeholder="Search Order" />
						</div>
						<!--end::Search-->
					</div>
					<!--end::Card title-->
					<!--begin::Card toolbar-->
					<div class="card-toolbar flex-row-fluid justify-content-end gap-5">
						<!--begin::Flatpickr-->
						<div class="input-group w-250px">
							<input class="form-control form-control-solid rounded rounded-end-0" placeholder="Pick date range"
								id="kt_ecommerce_sales_flatpickr" />
							<button class="btn btn-icon btn-light" id="kt_ecommerce_sales_flatpickr_clear">
								<!--begin::Svg Icon | path: icons/duotune/arrows/arr088.svg-->
								<span class="svg-icon svg-icon-2">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect opacity="0.5" x="7.05025" y="15.5356" width="12" height="2" rx="1"
											transform="rotate(-45 7.05025 15.5356)" fill="currentColor" />
										<rect x="8.46447" y="7.05029" width="12" height="2" rx="1" transform="rotate(45 8.46447 7.05029)"
											fill="currentColor" />
									</svg>
								</span>
								<!--end::Svg Icon-->
							</button>
						</div>
						<!--end::Flatpickr-->
						<div class="w-100 mw-150px">
							<!--begin::Select2-->
							<select class="form-select form-select-solid" data-control="select2" data-hide-search="true"
								data-placeholder="Status" data-kt-ecommerce-order-filter="status">
								<option></option>
								<option value="all">All</option>
								<option value="Cancelled">Cancelled</option>
								<option value="Completed">Completed</option>
								<option value="Denied">Denied</option>
								<option value="Expired">Expired</option>
								<option value="Failed">Failed</option>
								<option value="Pending">Pending</option>
								<option value="Processing">Processing</option>
								<option value="Refunded">Refunded</option>
								<option value="Delivered">Delivered</option>
								<option value="Delivering">Delivering</option>
							</select>
							<!--end::Select2-->
						</div>
						<!--begin::Add product-->
						<NuxtLink to="/apps/ecommerce/catalog/add-product" class="btn btn-primary">Add Order</NuxtLink>
						<!--end::Add product-->
					</div>
					<!--end::Card toolbar-->
				</div>
				<!--end::Card header-->
				<!--begin::Card body-->
				<div class="card-body pt-0">
					<!--begin::Table-->
					<table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_sales_table">
						<!--begin::Table head-->
						<thead>
							<!--begin::Table row-->
							<tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
								<th class="w-10px pe-2">
									<div class="form-check form-check-sm form-check-custom form-check-solid me-3">
										<input class="form-check-input" type="checkbox" data-kt-check="true"
											data-kt-check-target="#kt_ecommerce_sales_table .form-check-input" value="1" />
									</div>
								</th>
								<th class="min-w-100px">Order ID</th>
								<th class="min-w-175px">Customer</th>
								<th class="text-end min-w-70px">Status</th>
								<th class="text-end min-w-100px">Total</th>
								<th class="text-end min-w-100px">Date Added</th>
								<th class="text-end min-w-100px">Date Modified</th>
								<th class="text-end min-w-100px">Actions</th>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12796</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">M</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Melody Macy</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$406.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-15">
									<span class="fw-bold">15/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-22">
									<span class="fw-bold">22/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12797</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-1.jpg" alt="Max Smith" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Max Smith</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Processing">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Processing</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$425.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-14">
									<span class="fw-bold">14/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-21">
									<span class="fw-bold">21/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12798</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-primary text-primary">N</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Neil Owen</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Pending">
									<!--begin::Badges-->
									<div class="badge badge-light-warning">Pending</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$392.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-17">
									<span class="fw-bold">17/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-20">
									<span class="fw-bold">20/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12799</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-5.jpg" alt="Sean Bean" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Sean Bean</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$311.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-13">
									<span class="fw-bold">13/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-19">
									<span class="fw-bold">19/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12800</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-success text-success">L</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Lucy Kunic</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$407.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-16">
									<span class="fw-bold">16/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-18">
									<span class="fw-bold">18/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12801</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">O</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$225.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-15">
									<span class="fw-bold">15/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-17">
									<span class="fw-bold">17/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12802</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-13.jpg" alt="John Miller" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">John Miller</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$242.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-15">
									<span class="fw-bold">15/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-16">
									<span class="fw-bold">16/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12803</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-12.jpg" alt="Ana Crown" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Ana Crown</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Expired">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Expired</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$377.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-09">
									<span class="fw-bold">09/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-15">
									<span class="fw-bold">15/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12804</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-5.jpg" alt="Sean Bean" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Sean Bean</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Cancelled">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Cancelled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$158.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-08">
									<span class="fw-bold">08/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-14">
									<span class="fw-bold">14/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12805</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">O</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$465.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-06">
									<span class="fw-bold">06/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-13">
									<span class="fw-bold">13/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12806</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">M</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Melody Macy</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Processing">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Processing</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$489.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-07">
									<span class="fw-bold">07/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-12">
									<span class="fw-bold">12/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12807</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-1.jpg" alt="Max Smith" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Max Smith</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$382.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-05">
									<span class="fw-bold">05/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-11">
									<span class="fw-bold">11/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12808</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-23.jpg" alt="Dan Wilson" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Dan Wilson</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Failed">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Failed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$137.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-04">
									<span class="fw-bold">04/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-10">
									<span class="fw-bold">10/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12809</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-21.jpg" alt="Ethan Wilder" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Ethan Wilder</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$86.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-05">
									<span class="fw-bold">05/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-09">
									<span class="fw-bold">09/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12810</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-23.jpg" alt="Dan Wilson" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Dan Wilson</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$152.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-04">
									<span class="fw-bold">04/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-08">
									<span class="fw-bold">08/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12811</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-6.jpg" alt="Emma Smith" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Smith</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Processing">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Processing</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$484.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-01">
									<span class="fw-bold">01/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-07">
									<span class="fw-bold">07/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12812</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-9.jpg" alt="Francis Mitcham" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Francis Mitcham</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Denied">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Denied</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$196.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-02">
									<span class="fw-bold">02/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-06">
									<span class="fw-bold">06/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12813</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">O</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$30.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-04">
									<span class="fw-bold">04/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-05">
									<span class="fw-bold">05/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12814</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">E</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Bold</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$288.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-11-01">
									<span class="fw-bold">01/11/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-04">
									<span class="fw-bold">04/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12815</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-25.jpg" alt="Brian Cox" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Brian Cox</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Pending">
									<!--begin::Badges-->
									<div class="badge badge-light-warning">Pending</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$149.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-31">
									<span class="fw-bold">31/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-03">
									<span class="fw-bold">03/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12816</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-primary text-primary">N</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Neil Owen</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$164.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-29">
									<span class="fw-bold">29/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-02">
									<span class="fw-bold">02/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12817</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-1.jpg" alt="Max Smith" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Max Smith</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$498.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-29">
									<span class="fw-bold">29/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-11-01">
									<span class="fw-bold">01/11/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12818</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-25.jpg" alt="Brian Cox" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Brian Cox</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$340.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-24">
									<span class="fw-bold">24/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-31">
									<span class="fw-bold">31/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12819</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-13.jpg" alt="John Miller" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">John Miller</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$419.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-25">
									<span class="fw-bold">25/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-30">
									<span class="fw-bold">30/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12820</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">O</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$357.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-25">
									<span class="fw-bold">25/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-29">
									<span class="fw-bold">29/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12821</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-13.jpg" alt="John Miller" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">John Miller</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$189.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-26">
									<span class="fw-bold">26/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-28">
									<span class="fw-bold">28/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12822</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-primary text-primary">N</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Neil Owen</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Cancelled">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Cancelled</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$125.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-26">
									<span class="fw-bold">26/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-27">
									<span class="fw-bold">27/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12823</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-12.jpg" alt="Ana Crown" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Ana Crown</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Processing">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Processing</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$232.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-22">
									<span class="fw-bold">22/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-26">
									<span class="fw-bold">26/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12824</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-primary text-primary">N</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Neil Owen</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$215.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-19">
									<span class="fw-bold">19/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-25">
									<span class="fw-bold">25/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12825</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-warning text-warning">C</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Mikaela Collins</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$374.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-17">
									<span class="fw-bold">17/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-24">
									<span class="fw-bold">24/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12826</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-25.jpg" alt="Brian Cox" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Brian Cox</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Processing">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Processing</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$33.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-18">
									<span class="fw-bold">18/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-23">
									<span class="fw-bold">23/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12827</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">O</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Expired">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Expired</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$33.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-21">
									<span class="fw-bold">21/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-22">
									<span class="fw-bold">22/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12828</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-info text-info">A</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Robert Doe</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$155.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-17">
									<span class="fw-bold">17/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-21">
									<span class="fw-bold">21/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12829</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">E</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Bold</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Failed">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Failed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$282.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-18">
									<span class="fw-bold">18/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-20">
									<span class="fw-bold">20/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12830</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-9.jpg" alt="Francis Mitcham" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Francis Mitcham</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Pending">
									<!--begin::Badges-->
									<div class="badge badge-light-warning">Pending</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$57.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-14">
									<span class="fw-bold">14/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-19">
									<span class="fw-bold">19/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12831</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-12.jpg" alt="Ana Crown" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Ana Crown</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Processing">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Processing</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$387.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-17">
									<span class="fw-bold">17/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-18">
									<span class="fw-bold">18/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12832</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-6.jpg" alt="Emma Smith" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Smith</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Pending">
									<!--begin::Badges-->
									<div class="badge badge-light-warning">Pending</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$188.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-14">
									<span class="fw-bold">14/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-17">
									<span class="fw-bold">17/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12833</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-info text-info">A</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Robert Doe</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$436.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-13">
									<span class="fw-bold">13/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-16">
									<span class="fw-bold">16/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12834</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">E</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Bold</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Delivered">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Delivered</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$306.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-08">
									<span class="fw-bold">08/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-15">
									<span class="fw-bold">15/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12835</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-13.jpg" alt="John Miller" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">John Miller</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$410.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-09">
									<span class="fw-bold">09/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-14">
									<span class="fw-bold">14/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12836</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-danger text-danger">E</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Emma Bold</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Processing">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Processing</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$265.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-11">
									<span class="fw-bold">11/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-13">
									<span class="fw-bold">13/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12837</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-25.jpg" alt="Brian Cox" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Brian Cox</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Failed">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Failed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$252.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-10">
									<span class="fw-bold">10/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-12">
									<span class="fw-bold">12/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12838</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-25.jpg" alt="Brian Cox" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Brian Cox</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$156.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-10">
									<span class="fw-bold">10/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-11">
									<span class="fw-bold">11/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12839</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-21.jpg" alt="Ethan Wilder" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Ethan Wilder</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Denied">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Denied</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$426.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-09">
									<span class="fw-bold">09/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-10">
									<span class="fw-bold">10/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12840</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-1.jpg" alt="Max Smith" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Max Smith</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$201.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-04">
									<span class="fw-bold">04/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-09">
									<span class="fw-bold">09/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12841</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-21.jpg" alt="Ethan Wilder" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Ethan Wilder</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$343.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-05">
									<span class="fw-bold">05/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-08">
									<span class="fw-bold">08/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12842</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-12.jpg" alt="Ana Crown" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Ana Crown</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Completed">
									<!--begin::Badges-->
									<div class="badge badge-light-success">Completed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$393.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-05">
									<span class="fw-bold">05/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-07">
									<span class="fw-bold">07/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12843</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-9.jpg" alt="Francis Mitcham" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Francis Mitcham</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Processing">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Processing</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$20.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-10-04">
									<span class="fw-bold">04/10/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-06">
									<span class="fw-bold">06/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12844</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label">
													<img src="/media/avatars/300-21.jpg" alt="Ethan Wilder" class="w-100" />
												</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Ethan Wilder</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Delivering">
									<!--begin::Badges-->
									<div class="badge badge-light-primary">Delivering</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$190.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-09-30">
									<span class="fw-bold">30/09/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-05">
									<span class="fw-bold">05/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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
								<!--begin::Order ID=-->
								<td data-kt-ecommerce-order-filter="order_id">
									<NuxtLink to="/apps/ecommerce/sales/details"
										class="text-gray-800 text-hover-primary fw-bold">12845</NuxtLink>
								</td>
								<!--end::Order ID=-->
								<!--begin::Customer=-->
								<td>
									<div class="d-flex align-items-center">
										<!--begin:: Avatar -->
										<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
											<NuxtLink to="/apps/user-management/users/view">
												<div class="symbol-label fs-3 bg-light-success text-success">L</div>
											</NuxtLink>
										</div>
										<!--end::Avatar-->
										<div class="ms-5">
											<!--begin::Title-->
											<NuxtLink to="/apps/user-management/users/view"
												class="text-gray-800 text-hover-primary fs-5 fw-bold">Lucy Kunic</NuxtLink>
											<!--end::Title-->
										</div>
									</div>
								</td>
								<!--end::Customer=-->
								<!--begin::Status=-->
								<td class="text-end pe-0" data-order="Failed">
									<!--begin::Badges-->
									<div class="badge badge-light-danger">Failed</div>
									<!--end::Badges-->
								</td>
								<!--end::Status=-->
								<!--begin::Total=-->
								<td class="text-end pe-0">
									<span class="fw-bold">$401.00</span>
								</td>
								<!--end::Total=-->
								<!--begin::Date Added=-->
								<td class="text-end" data-order="2022-09-28">
									<span class="fw-bold">28/09/2022</span>
								</td>
								<!--end::Date Added=-->
								<!--begin::Date Modified=-->
								<td class="text-end" data-order="2022-10-04">
									<span class="fw-bold">04/10/2022</span>
								</td>
								<!--end::Date Modified=-->
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
											<NuxtLink to="/apps/ecommerce/sales/details" class="menu-link px-3">View</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<NuxtLink to="/apps/ecommerce/sales/edit-order" class="menu-link px-3">Edit</NuxtLink>
										</div>
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
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