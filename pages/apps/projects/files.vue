<script setup lang="ts">
useHead({
	title: 'Files',
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
			<!--begin::Navbar-->
			<div class="card">
				<div class="card-body pt-9 pb-0">
					<!--begin::Details-->
					<div class="d-flex flex-wrap flex-sm-nowrap mb-6">
						<!--begin::Image-->
						<div
							class="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
							<img class="mw-50px mw-lg-75px" src="/media/svg/brand-logos/volicity-9.svg" alt="image" />
						</div>
						<!--end::Image-->
						<!--begin::Wrapper-->
						<div class="flex-grow-1">
							<!--begin::Head-->
							<div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
								<!--begin::Details-->
								<div class="d-flex flex-column">
									<!--begin::Status-->
									<div class="d-flex align-items-center mb-1">
										<NuxtLink to="#" class="text-gray-800 text-hover-primary fs-2 fw-bold me-3">CRM Dashboard</NuxtLink>
										<span class="badge badge-light-success me-auto">In Progress</span>
									</div>
									<!--end::Status-->
									<!--begin::Description-->
									<div class="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400">#1 Tool to get started with Web Apps
										any Kind & size</div>
									<!--end::Description-->
								</div>
								<!--end::Details-->
								<!--begin::Actions-->
								<div class="d-flex mb-4">
									<NuxtLink to="#" class="btn btn-sm btn-bg-light btn-active-color-primary me-3" data-bs-toggle="modal"
										data-bs-target="#kt_modal_users_search">Add User</NuxtLink>
									<NuxtLink to="#" class="btn btn-sm btn-primary me-3" data-bs-toggle="modal"
										data-bs-target="#kt_modal_new_target">Add Target</NuxtLink>
									<!--begin::Menu-->
									<div class="me-0">
										<button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click"
											data-kt-menu-placement="bottom-end">
											<i class="bi bi-three-dots fs-3"></i>
										</button>
										<!--begin::Menu 3-->
										<div
											class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
											data-kt-menu="true">
											<!--begin::Heading-->
											<div class="menu-item px-3">
												<div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
											</div>
											<!--end::Heading-->
											<!--begin::Menu item-->
											<div class="menu-item px-3">
												<NuxtLink to="#" class="menu-link px-3">Create Invoice</NuxtLink>
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item px-3">
												<NuxtLink to="#" class="menu-link flex-stack px-3">Create Payment
													<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip"
														title="Specify a target name for future usage and reference"></i></NuxtLink>
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item px-3">
												<NuxtLink to="#" class="menu-link px-3">Generate Bill</NuxtLink>
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
												<NuxtLink to="#" class="menu-link px-3">
													<span class="menu-title">Subscription</span>
													<span class="menu-arrow"></span>
												</NuxtLink>
												<!--begin::Menu sub-->
												<div class="menu-sub menu-sub-dropdown w-175px py-4">
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<NuxtLink to="#" class="menu-link px-3">Plans</NuxtLink>
													</div>
													<!--end::Menu item-->
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<NuxtLink to="#" class="menu-link px-3">Billing</NuxtLink>
													</div>
													<!--end::Menu item-->
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<NuxtLink to="#" class="menu-link px-3">Statements</NuxtLink>
													</div>
													<!--end::Menu item-->
													<!--begin::Menu separator-->
													<div class="separator my-2"></div>
													<!--end::Menu separator-->
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<div class="menu-content px-3">
															<!--begin::Switch-->
															<label class="form-check form-switch form-check-custom form-check-solid">
																<!--begin::Input-->
																<input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked"
																	name="notifications" />
																<!--end::Input-->
																<!--end::Label-->
																<span class="form-check-label text-muted fs-6">Recuring</span>
																<!--end::Label-->
															</label>
															<!--end::Switch-->
														</div>
													</div>
													<!--end::Menu item-->
												</div>
												<!--end::Menu sub-->
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item px-3 my-1">
												<NuxtLink to="#" class="menu-link px-3">Settings</NuxtLink>
											</div>
											<!--end::Menu item-->
										</div>
										<!--end::Menu 3-->
									</div>
									<!--end::Menu-->
								</div>
								<!--end::Actions-->
							</div>
							<!--end::Head-->
							<!--begin::Info-->
							<div class="d-flex flex-wrap justify-content-start">
								<!--begin::Stats-->
								<div class="d-flex flex-wrap">
									<!--begin::Stat-->
									<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
										<!--begin::Number-->
										<div class="d-flex align-items-center">
											<div class="fs-4 fw-bold">29 Jan, 2022</div>
										</div>
										<!--end::Number-->
										<!--begin::Label-->
										<div class="fw-semibold fs-6 text-gray-400">Due Date</div>
										<!--end::Label-->
									</div>
									<!--end::Stat-->
									<!--begin::Stat-->
									<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
										<!--begin::Number-->
										<div class="d-flex align-items-center">
											<!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg-->
											<span class="svg-icon svg-icon-3 svg-icon-danger me-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)"
														fill="currentColor" />
													<path
														d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
											<div class="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="75">0</div>
										</div>
										<!--end::Number-->
										<!--begin::Label-->
										<div class="fw-semibold fs-6 text-gray-400">Open Tasks</div>
										<!--end::Label-->
									</div>
									<!--end::Stat-->
									<!--begin::Stat-->
									<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
										<!--begin::Number-->
										<div class="d-flex align-items-center">
											<!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
											<span class="svg-icon svg-icon-3 svg-icon-success me-2">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)"
														fill="currentColor" />
													<path
														d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
														fill="currentColor" />
												</svg>
											</span>
											<!--end::Svg Icon-->
											<div class="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="15000"
												data-kt-countup-prefix="$">0</div>
										</div>
										<!--end::Number-->
										<!--begin::Label-->
										<div class="fw-semibold fs-6 text-gray-400">Budget Spent</div>
										<!--end::Label-->
									</div>
									<!--end::Stat-->
								</div>
								<!--end::Stats-->
								<!--begin::Users-->
								<div class="symbol-group symbol-hover mb-3">
									<!--begin::User-->
									<div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
										<span class="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
									</div>
									<!--end::User-->
									<!--begin::User-->
									<div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
										<img alt="Pic" src="/media/avatars/300-11.jpg" />
									</div>
									<!--end::User-->
									<!--begin::User-->
									<div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
										<img alt="Pic" src="/media/avatars/300-7.jpg" />
									</div>
									<!--end::User-->
									<!--begin::User-->
									<div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
										<img alt="Pic" src="/media/avatars/300-20.jpg" />
									</div>
									<!--end::User-->
									<!--begin::User-->
									<div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
										<span class="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
									</div>
									<!--end::User-->
									<!--begin::User-->
									<div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
										<img alt="Pic" src="/media/avatars/300-2.jpg" />
									</div>
									<!--end::User-->
									<!--begin::User-->
									<div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
										<span class="symbol-label bg-info text-inverse-info fw-bold">P</span>
									</div>
									<!--end::User-->
									<!--begin::User-->
									<div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
										<img alt="Pic" src="/media/avatars/300-12.jpg" />
									</div>
									<!--end::User-->
									<!--begin::All users-->
									<NuxtLink to="#" class="symbol symbol-35px symbol-circle" data-bs-toggle="modal"
										data-bs-target="#kt_modal_view_users">
										<span class="symbol-label bg-dark text-inverse-dark fs-8 fw-bold" data-bs-toggle="tooltip"
											data-bs-trigger="hover" title="View more users">+42</span>
									</NuxtLink>
									<!--end::All users-->
								</div>
								<!--end::Users-->
							</div>
							<!--end::Info-->
						</div>
						<!--end::Wrapper-->
					</div>
					<!--end::Details-->
					<div class="separator"></div>
					<!--begin::Nav-->
					<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
						<!--begin::Nav item-->
						<li class="nav-item">
							<a class="nav-link text-active-primary py-5 me-6"
								href="/apps/projects/project">Overview</a>
						</li>
						<!--end::Nav item-->
						<!--begin::Nav item-->
						<li class="nav-item">
							<a class="nav-link text-active-primary py-5 me-6"
								href="/apps/projects/targets">Targets</a>
						</li>
						<!--end::Nav item-->
						<!--begin::Nav item-->
						<li class="nav-item">
							<a class="nav-link text-active-primary py-5 me-6"
								href="/apps/projects/budget">Budget</a>
						</li>
						<!--end::Nav item-->
						<!--begin::Nav item-->
						<li class="nav-item">
							<a class="nav-link text-active-primary py-5 me-6" href="/apps/projects/users">Users</a>
						</li>
						<!--end::Nav item-->
						<!--begin::Nav item-->
						<li class="nav-item">
							<a class="nav-link text-active-primary py-5 me-6 active"
								href="/apps/projects/files">Files</a>
						</li>
						<!--end::Nav item-->
						<!--begin::Nav item-->
						<li class="nav-item">
							<a class="nav-link text-active-primary py-5 me-6"
								href="/apps/projects/activity">Activity</a>
						</li>
						<!--end::Nav item-->
						<!--begin::Nav item-->
						<li class="nav-item">
							<a class="nav-link text-active-primary py-5 me-6"
								href="/apps/projects/settings">Settings</a>
						</li>
						<!--end::Nav item-->
					</ul>
					<!--end::Nav-->
				</div>
			</div>
			<!--end::Navbar-->
			<!--begin::Toolbar-->
			<div class="d-flex flex-wrap flex-stack my-5">
				<!--begin::Heading-->
				<h3 class="fw-bold my-2">Project Files
					<span class="fs-6 text-gray-400 fw-semibold ms-1">+590</span>
				</h3>
				<!--end::Heading-->
				<!--begin::Controls-->
				<div class="d-flex my-2">
					<!--begin::Search-->
					<div class="d-flex align-items-center position-relative me-4">
						<!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
						<span class="svg-icon svg-icon-3 position-absolute translate-middle-y top-50 ms-4">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
									transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
								<path
									d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
									fill="currentColor" />
							</svg>
						</span>
						<!--end::Svg Icon-->
						<input type="text" id="kt_filter_search"
							class="form-control form-control-sm form-control-solid bg-body fw-semibold fs-7 w-150px ps-11"
							placeholder="Search" />
					</div>
					<!--end::Search-->
					<NuxtLink to="/apps/file-manager/folders" class='btn btn-primary btn-sm fw-bolder'>File
						Manager</NuxtLink>
				</div>
				<!--end::Controls-->
			</div>
			<!--end::Toolbar-->
			<!--begin::Row-->
			<div class="row g-6 g-xl-9 mb-6 mb-xl-9">
				<!--begin::Col-->
				<div class="col-md-6 col-lg-4 col-xl-3">
					<!--begin::Card-->
					<div class="card h-100">
						<!--begin::Card body-->
						<div class="card-body d-flex justify-content-center text-center flex-column p-8">
							<!--begin::Name-->
							<NuxtLink to="/apps/file-manager/files"
								class="text-gray-800 text-hover-primary d-flex flex-column">
								<!--begin::Image-->
								<div class="symbol symbol-60px mb-5">
									<img src="/media/svg/files/pdf.svg" class="theme-light-show" alt="" />
									<img src="/media/svg/files/pdf-dark.svg" class="theme-dark-show" alt="" />
								</div>
								<!--end::Image-->
								<!--begin::Title-->
								<div class="fs-5 fw-bold mb-2">Project Reqs..</div>
								<!--end::Title-->
							</NuxtLink>
							<!--end::Name-->
							<!--begin::Description-->
							<div class="fs-7 fw-semibold text-gray-400">3 days ago</div>
							<!--end::Description-->
						</div>
						<!--end::Card body-->
					</div>
					<!--end::Card-->
				</div>
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-md-6 col-lg-4 col-xl-3">
					<!--begin::Card-->
					<div class="card h-100">
						<!--begin::Card body-->
						<div class="card-body d-flex justify-content-center text-center flex-column p-8">
							<!--begin::Name-->
							<NuxtLink to="/apps/file-manager/files"
								class="text-gray-800 text-hover-primary d-flex flex-column">
								<!--begin::Image-->
								<div class="symbol symbol-60px mb-5">
									<img src="/media/svg/files/doc.svg" class="theme-light-show" alt="" />
									<img src="/media/svg/files/doc-dark.svg" class="theme-dark-show" alt="" />
								</div>
								<!--end::Image-->
								<!--begin::Title-->
								<div class="fs-5 fw-bold mb-2">CRM App Docs..</div>
								<!--end::Title-->
							</NuxtLink>
							<!--end::Name-->
							<!--begin::Description-->
							<div class="fs-7 fw-semibold text-gray-400">3 days ago</div>
							<!--end::Description-->
						</div>
						<!--end::Card body-->
					</div>
					<!--end::Card-->
				</div>
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-md-6 col-lg-4 col-xl-3">
					<!--begin::Card-->
					<div class="card h-100">
						<!--begin::Card body-->
						<div class="card-body d-flex justify-content-center text-center flex-column p-8">
							<!--begin::Name-->
							<NuxtLink to="/apps/file-manager/files"
								class="text-gray-800 text-hover-primary d-flex flex-column">
								<!--begin::Image-->
								<div class="symbol symbol-60px mb-5">
									<img src="/media/svg/files/css.svg" class="theme-light-show" alt="" />
									<img src="/media/svg/files/css-dark.svg" class="theme-dark-show" alt="" />
								</div>
								<!--end::Image-->
								<!--begin::Title-->
								<div class="fs-5 fw-bold mb-2">User CRUD Styles</div>
								<!--end::Title-->
							</NuxtLink>
							<!--end::Name-->
							<!--begin::Description-->
							<div class="fs-7 fw-semibold text-gray-400">4 days ago</div>
							<!--end::Description-->
						</div>
						<!--end::Card body-->
					</div>
					<!--end::Card-->
				</div>
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-md-6 col-lg-4 col-xl-3">
					<!--begin::Card-->
					<div class="card h-100">
						<!--begin::Card body-->
						<div class="card-body d-flex justify-content-center text-center flex-column p-8">
							<!--begin::Name-->
							<NuxtLink to="/apps/file-manager/files"
								class="text-gray-800 text-hover-primary d-flex flex-column">
								<!--begin::Image-->
								<div class="symbol symbol-60px mb-5">
									<img src="/media/svg/files/ai.svg" class="theme-light-show" alt="" />
									<img src="/media/svg/files/ai-dark.svg" class="theme-dark-show" alt="" />
								</div>
								<!--end::Image-->
								<!--begin::Title-->
								<div class="fs-5 fw-bold mb-2">Product Logo</div>
								<!--end::Title-->
							</NuxtLink>
							<!--end::Name-->
							<!--begin::Description-->
							<div class="fs-7 fw-semibold text-gray-400">5 days ago</div>
							<!--end::Description-->
						</div>
						<!--end::Card body-->
					</div>
					<!--end::Card-->
				</div>
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-md-6 col-lg-4 col-xl-3">
					<!--begin::Card-->
					<div class="card h-100">
						<!--begin::Card body-->
						<div class="card-body d-flex justify-content-center text-center flex-column p-8">
							<!--begin::Name-->
							<NuxtLink to="/apps/file-manager/files"
								class="text-gray-800 text-hover-primary d-flex flex-column">
								<!--begin::Image-->
								<div class="symbol symbol-60px mb-5">
									<img src="/media/svg/files/sql.svg" class="theme-light-show" alt="" />
									<img src="/media/svg/files/sql-dark.svg" class="theme-dark-show" alt="" />
								</div>
								<!--end::Image-->
								<!--begin::Title-->
								<div class="fs-5 fw-bold mb-2">Orders backup</div>
								<!--end::Title-->
							</NuxtLink>
							<!--end::Name-->
							<!--begin::Description-->
							<div class="fs-7 fw-semibold text-gray-400">1 week ago</div>
							<!--end::Description-->
						</div>
						<!--end::Card body-->
					</div>
					<!--end::Card-->
				</div>
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-md-6 col-lg-4 col-xl-3">
					<!--begin::Card-->
					<div class="card h-100">
						<!--begin::Card body-->
						<div class="card-body d-flex justify-content-center text-center flex-column p-8">
							<!--begin::Name-->
							<NuxtLink to="/apps/file-manager/files"
								class="text-gray-800 text-hover-primary d-flex flex-column">
								<!--begin::Image-->
								<div class="symbol symbol-60px mb-5">
									<img src="/media/svg/files/xml.svg" class="theme-light-show" alt="" />
									<img src="/media/svg/files/xml-dark.svg" class="theme-dark-show" alt="" />
								</div>
								<!--end::Image-->
								<!--begin::Title-->
								<div class="fs-5 fw-bold mb-2">UTAIR CRM API Co..</div>
								<!--end::Title-->
							</NuxtLink>
							<!--end::Name-->
							<!--begin::Description-->
							<div class="fs-7 fw-semibold text-gray-400">2 weeks ago</div>
							<!--end::Description-->
						</div>
						<!--end::Card body-->
					</div>
					<!--end::Card-->
				</div>
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-md-6 col-lg-4 col-xl-3">
					<!--begin::Card-->
					<div class="card h-100">
						<!--begin::Card body-->
						<div class="card-body d-flex justify-content-center text-center flex-column p-8">
							<!--begin::Name-->
							<NuxtLink to="/apps/file-manager/files"
								class="text-gray-800 text-hover-primary d-flex flex-column">
								<!--begin::Image-->
								<div class="symbol symbol-60px mb-5">
									<img src="/media/svg/files/tif.svg" class="theme-light-show" alt="" />
									<img src="/media/svg/files/tif-dark.svg" class="theme-dark-show" alt="" />
								</div>
								<!--end::Image-->
								<!--begin::Title-->
								<div class="fs-5 fw-bold mb-2">Tower Hill App..</div>
								<!--end::Title-->
							</NuxtLink>
							<!--end::Name-->
							<!--begin::Description-->
							<div class="fs-7 fw-semibold text-gray-400">3 weeks ago</div>
							<!--end::Description-->
						</div>
						<!--end::Card body-->
					</div>
					<!--end::Card-->
				</div>
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-md-6 col-lg-4 col-xl-3">
					<!--begin::Card-->
					<div class="card h-100 flex-center bg-light-primary border-primary border border-dashed p-8">
						<!--begin::Image-->
						<img src="/media/svg/files/upload.svg" class="mb-5" alt="" />
						<!--end::Image-->
						<!--begin::Link-->
						<NuxtLink to="#" class="text-hover-primary fs-5 fw-bold mb-2">File Upload</NuxtLink>
						<!--end::Link-->
						<!--begin::Description-->
						<div class="fs-7 fw-semibold text-gray-400">Drag and drop files here</div>
						<!--end::Description-->
					</div>
					<!--end::Card-->
				</div>
				<!--end::Col-->
			</div>
			<!--end:Row-->
		</div>
		<!--end::Container-->
	</div>
</template>


<style scoped>

</style>