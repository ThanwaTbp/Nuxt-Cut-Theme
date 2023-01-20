<template>
	<div class="menu-active-bg px-4 px-lg-0">
		<!--begin:Tabs nav-->
		<div class="d-flex w-100 overflow-auto">
			<ul class="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
				<!--begin:Nav item-->
				<li class="nav-item mx-lg-1">
					<a class="nav-link py-3 py-lg-6 active text-active-primary" href="#" data-bs-toggle="tab"
						data-bs-target="#kt_app_header_menu_pages_pages">General</a>
				</li>
				<!--end:Nav item-->
				<!--begin:Nav item-->
				<li class="nav-item mx-lg-1">
					<a class="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab"
						data-bs-target="#kt_app_header_menu_pages_account">Account</a>
				</li>
				<!--end:Nav item-->
				<!--begin:Nav item-->
				<li class="nav-item mx-lg-1">
					<a class="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab"
						data-bs-target="#kt_app_header_menu_pages_authentication">Authentication</a>
				</li>
				<!--end:Nav item-->
				<!--begin:Nav item-->
				<li class="nav-item mx-lg-1">
					<a class="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab"
						data-bs-target="#kt_app_header_menu_pages_utilities">Utilities</a>
				</li>
				<!--end:Nav item-->
				<!--begin:Nav item-->
				<li class="nav-item mx-lg-1">
					<a class="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab"
						data-bs-target="#kt_app_header_menu_pages_widgets">Widgets</a>
				</li>
				<!--end:Nav item-->
			</ul>
		</div>
		<!--end:Tabs nav-->
		<!--begin:Tab content-->
		<div class="tab-content py-4 py-lg-8 px-lg-7">
			<!--begin:Tab pane-->
			<div class="tab-pane active w-lg-1000px" id="kt_app_header_menu_pages_pages">
				<!--begin:Row-->
				<div class="row">
					<!--begin:Col-->
					<div class="col-lg-8">
						<!--begin:Row-->
						<div class="row">
							<!--begin:Col-->
							<div class="col-lg-3 mb-6 mb-lg-0">
								<!--begin:Menu heading-->
								<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">User Profile</h4>
								<!--end:Menu heading-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/pages/user-profile/overview" class="menu-link">
										<span class="menu-title">Overview</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/pages/user-profile/projects" class="menu-link">
										<span class="menu-title">Projects</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/pages/user-profile/campaigns" class="menu-link">
										<span class="menu-title">Campaigns</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/pages/user-profile/documents" class="menu-link">
										<span class="menu-title">Documents</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/pages/user-profile/followers" class="menu-link">
										<span class="menu-title">Followers</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/pages/user-profile/activity" class="menu-link">
										<span class="menu-title">Activity</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
							</div>
							<!--end:Col-->
							<!--begin:Col-->
							<div class="col-lg-3 mb-6 mb-lg-0">
								<!--begin:Menu section-->
								<div class="mb-6">
									<!--begin:Menu heading-->
									<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate</h4>
									<!--end:Menu heading-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/about" class="menu-link">
											<span class="menu-title">About</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/team" class="menu-link">
											<span class="menu-title">Our Team</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/contact" class="menu-link">
											<span class="menu-title">Contact Us</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/licenses" class="menu-link">
											<span class="menu-title">Licenses</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/sitemap" class="menu-link">
											<span class="menu-title">Sitemap</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end:Menu section-->
								<!--begin:Menu section-->
								<div class="mb-0">
									<!--begin:Menu heading-->
									<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Careers</h4>
									<!--end:Menu heading-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/careers/list" class="menu-link">
											<span class="menu-title">Careers List</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/careers/apply" class="menu-link">
											<span class="menu-title">Careers Apply</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end:Menu section-->
							</div>
							<!--end:Col-->
							<!--begin:Col-->
							<div class="col-lg-3 mb-6 mb-lg-0">
								<!--begin:Menu section-->
								<div class="mb-6">
									<!--begin:Menu heading-->
									<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">FAQ</h4>
									<!--end:Menu heading-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/faq/classic" class="menu-link">
											<span class="menu-title">FAQ Classic</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/faq/extended" class="menu-link">
											<span class="menu-title">FAQ Extended</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end:Menu section-->
								<!--begin:Menu section-->
								<div class="mb-6">
									<!--begin:Menu heading-->
									<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Blog</h4>
									<!--end:Menu heading-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/blog/home" class="menu-link">
											<span class="menu-title">Blog Home</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/blog/post" class="menu-link">
											<span class="menu-title">Blog Post</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end:Menu section-->
								<!--begin:Menu section-->
								<div class="mb-0">
									<!--begin:Menu heading-->
									<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Pricing</h4>
									<!--end:Menu heading-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/pricing/column" class="menu-link">
											<span class="menu-title">Column Pricing</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/pricing/table" class="menu-link">
											<span class="menu-title">Table Pricing</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end:Menu section-->
							</div>
							<!--end:Col-->
							<!--begin:Col-->
							<div class="col-lg-3 mb-6 mb-lg-0">
								<!--begin:Menu section-->
								<div class="mb-0">
									<!--begin:Menu heading-->
									<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Social</h4>
									<!--end:Menu heading-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/social/feeds" class="menu-link">
											<span class="menu-title">Feeds</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/social/activity" class="menu-link">
											<span class="menu-title">Activty</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/social/followers" class="menu-link">
											<span class="menu-title">Followers</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/pages/social/settings" class="menu-link">
											<span class="menu-title">Settings</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end:Menu section-->
							</div>
							<!--end:Col-->
						</div>
						<!--end:Row-->
					</div>
					<!--end:Col-->
					<!--begin:Col-->
					<div class="col-lg-4">
						<img src="/media/stock/600x600/img-82.jpg" class="rounded mw-100" alt="" />
					</div>
					<!--end:Col-->
				</div>
				<!--end:Row-->
			</div>
			<!--end:Tab pane-->
			<!--begin:Tab pane-->
			<div class="tab-pane w-lg-600px" id="kt_app_header_menu_pages_account">
				<!--begin:Row-->
				<div class="row">
					<!--begin:Col-->
					<div class="col-lg-5 mb-6 mb-lg-0">
						<!--begin:Row-->
						<div class="row">
							<!--begin:Col-->
							<div class="col-lg-6">
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/account/overview" class="menu-link">
										<span class="menu-title">Overview</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/account/settings" class="menu-link">
										<span class="menu-title">Settings</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/account/security" class="menu-link">
										<span class="menu-title">Security</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/account/activity" class="menu-link">
										<span class="menu-title">Activity</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/account/billing" class="menu-link">
										<span class="menu-title">Billing</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
							</div>
							<!--end:Col-->
							<!--begin:Col-->
							<div class="col-lg-6">
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/account/statements" class="menu-link">
										<span class="menu-title">Statements</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/account/referrals" class="menu-link">
										<span class="menu-title">Referrals</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/account/api-keys" class="menu-link">
										<span class="menu-title">API Keys</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
								<!--begin:Menu item-->
								<div class="menu-item p-0 m-0">
									<!--begin:Menu link-->
									<NuxtLink exact-active-class="active" to="/account/logs" class="menu-link">
										<span class="menu-title">Logs</span>
									</NuxtLink>
									<!--end:Menu link-->
								</div>
								<!--end:Menu item-->
							</div>
							<!--end:Col-->
						</div>
						<!--end:Row-->
					</div>
					<!--end:Col-->
					<!--begin:Col-->
					<div class="col-lg-7">
						<img src="/media/stock/900x600/46.jpg" class="rounded mw-100" alt="" />
					</div>
					<!--end:Col-->
				</div>
				<!--end:Row-->
			</div>
			<!--end:Tab pane-->
			<!--begin:Tab pane-->
			<div class="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_authentication">
				<!--begin:Row-->
				<div class="row">
					<!--begin:Col-->
					<div class="col-lg-3 mb-6 mb-lg-0">
						<!--begin:Menu section-->
						<div class="mb-6">
							<!--begin:Menu heading-->
							<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate Layout</h4>
							<!--end:Menu heading-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/auth/sign-in" class="menu-link">
									<span class="menu-title">Sign-in</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/auth/sign-up" class="menu-link">
									<span class="menu-title">Sign-up</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/auth/two-steps" class="menu-link">
									<span class="menu-title">Two-steps</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/auth/reset-password" class="menu-link">
									<span class="menu-title">Reset Password</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/auth/new-password" class="menu-link">
									<span class="menu-title">New Password</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
						</div>
						<!--end:Menu section-->
						<!--begin:Menu section-->
						<div class="mb-0">
							<!--begin:Menu heading-->
							<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Overlay Layout</h4>
							<!--end:Menu heading-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/overlay/sign-in" class="menu-link">
									<span class="menu-title">Sign-in</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/overlay/sign-up" class="menu-link">
									<span class="menu-title">Sign-up</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/overlay/two-steps" class="menu-link">
									<span class="menu-title">Two-steps</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/overlay/reset-password" class="menu-link">
									<span class="menu-title">Reset Password</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/overlay/new-password" class="menu-link">
									<span class="menu-title">New Password</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
						</div>
						<!--end:Menu section-->
					</div>
					<!--end:Col-->
					<!--begin:Col-->
					<div class="col-lg-3 mb-6 mb-lg-0">
						<!--begin:Menu section-->
						<div class="mb-6">
							<!--begin:Menu heading-->
							<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Creative Layout</h4>
							<!--end:Menu heading-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/creative/sign-in" class="menu-link">
									<span class="menu-title">Sign-in</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/creative/sign-up" class="menu-link">
									<span class="menu-title">Sign-up</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/creative/two-steps" class="menu-link">
									<span class="menu-title">Two-steps</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/creative/reset-password" class="menu-link">
									<span class="menu-title">Reset Password</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/creative/new-password" class="menu-link">
									<span class="menu-title">New Password</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
						</div>
						<!--end:Menu section-->
						<!--begin:Menu section-->
						<div class="mb-6">
							<!--begin:Menu heading-->
							<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Fancy Layout</h4>
							<!--end:Menu heading-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/fancy/sign-in" class="menu-link">
									<span class="menu-title">Sign-in</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/fancy/sign-up" class="menu-link">
									<span class="menu-title">Sign-up</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/fancy/two-steps" class="menu-link">
									<span class="menu-title">Two-steps</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/fancy/reset-password" class="menu-link">
									<span class="menu-title">Reset Password</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/layouts/fancy/new-password" class="menu-link">
									<span class="menu-title">New Password</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
						</div>
						<!--end:Menu section-->
					</div>
					<!--end:Col-->
					<!--begin:Col-->
					<div class="col-lg-3 mb-6 mb-lg-0">
						<!--begin:Menu section-->
						<div class="mb-0">
							<!--begin:Menu heading-->
							<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General</h4>
							<!--end:Menu heading-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/extended/multi-steps-sign-up" class="menu-link">
									<span class="menu-title">Multi-steps Sign-up</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/extended/two-factor-auth" class="menu-link">
									<span class="menu-title">Two Factor Auth</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/general/welcome" class="menu-link">
									<span class="menu-title">Welcome Message</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/general/verify-email" class="menu-link">
									<span class="menu-title">Verify Email</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/extended/coming-soon" class="menu-link">
									<span class="menu-title">Coming Soon</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/general/password-confirmation" class="menu-link">
									<span class="menu-title">Password Confirmation</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/general/account-deactivated" class="menu-link">
									<span class="menu-title">Account Deactivation</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/general/error-404" class="menu-link">
									<span class="menu-title">Error 404</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/general/error-500" class="menu-link">
									<span class="menu-title">Error 500</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
						</div>
						<!--end:Menu section-->
					</div>
					<!--end:Col-->
					<!--begin:Col-->
					<div class="col-lg-3 mb-6 mb-lg-0">
						<!--begin:Menu section-->
						<div class="mb-0">
							<!--begin:Menu heading-->
							<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Email Templates</h4>
							<!--end:Menu heading-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/email/welcome-message" class="menu-link">
									<span class="menu-title">Welcome Message</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/email/reset-password" class="menu-link">
									<span class="menu-title">Reset Password</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/email/subscription-confirmed" class="menu-link">
									<span class="menu-title">Subscription Confirmed</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/email/card-declined" class="menu-link">
									<span class="menu-title">Credit Card Declined</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/email/promo-1" class="menu-link">
									<span class="menu-title">Promo 1</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/email/promo-2" class="menu-link">
									<span class="menu-title">Promo 2</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item p-0 m-0">
								<!--begin:Menu link-->
								<NuxtLink exact-active-class="active" to="/authentication/email/promo-3" class="menu-link">
									<span class="menu-title">Promo 3</span>
								</NuxtLink>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
						</div>
						<!--end:Menu section-->
					</div>
					<!--end:Col-->
				</div>
				<!--end:Row-->
			</div>
			<!--end:Tab pane-->
			<!--begin:Tab pane-->
			<div class="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities">
				<!--begin:Row-->
				<div class="row">
					<!--begin:Col-->
					<div class="col-lg-7">
						<!--begin:Row-->
						<div class="row">
							<!--begin:Col-->
							<div class="col-lg-4 mb-6 mb-lg-0">
								<!--begin:Menu section-->
								<div class="mb-0">
									<!--begin:Menu heading-->
									<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General Modals</h4>
									<!--end:Menu heading-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/general/invite-friends" class="menu-link">
											<span class="menu-title">Invite Friends</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/general/view-users" class="menu-link">
											<span class="menu-title">View Users</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/general/select-users" class="menu-link">
											<span class="menu-title">Select Users</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/general/upgrade-plan" class="menu-link">
											<span class="menu-title">Upgrade Plan</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/general/share-earn" class="menu-link">
											<span class="menu-title">Share & Earn</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/forms/new-target" class="menu-link">
											<span class="menu-title">New Target</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/forms/new-card" class="menu-link">
											<span class="menu-title">New Card</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/forms/new-address" class="menu-link">
											<span class="menu-title">New Address</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/forms/create-api-key" class="menu-link">
											<span class="menu-title">Create API Key</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/forms/bidding" class="menu-link">
											<span class="menu-title">Bidding</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end:Menu section-->
							</div>
							<!--end:Col-->
							<!--begin:Col-->
							<div class="col-lg-4 mb-6 mb-lg-0">
								<!--begin:Menu section-->
								<div class="mb-6">
									<!--begin:Menu heading-->
									<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Advanced Modals</h4>
									<!--end:Menu heading-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/wizards/create-app" class="menu-link">
											<span class="menu-title">Create App</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/wizards/create-campaign" class="menu-link">
											<span class="menu-title">Create Campaign</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/wizards/create-account" class="menu-link">
											<span class="menu-title">Create Business Acc</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/wizards/create-project" class="menu-link">
											<span class="menu-title">Create Project</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/wizards/top-up-wallet" class="menu-link">
											<span class="menu-title">Top Up Wallet</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/wizards/offer-a-deal" class="menu-link">
											<span class="menu-title">Offer a Deal</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/wizards/two-factor-authentication" class="menu-link">
											<span class="menu-title">Two Factor Auth</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end:Menu section-->
								<!--begin:Menu section-->
								<div class="mb-0">
									<!--begin:Menu heading-->
									<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Search</h4>
									<!--end:Menu heading-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/search/horizontal" class="menu-link">
											<span class="menu-title">Horizontal</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/search/vertical" class="menu-link">
											<span class="menu-title">Vertical</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/search/users" class="menu-link">
											<span class="menu-title">Users</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/search/select-location" class="menu-link">
											<span class="menu-title">Select Location</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end:Menu section-->
							</div>
							<!--end:Col-->
							<!--begin:Col-->
							<div class="col-lg-4 mb-6 mb-lg-0">
								<!--begin:Menu section-->
								<div class="mb-0">
									<!--begin:Menu heading-->
									<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Wizards</h4>
									<!--end:Menu heading-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/wizards/horizontal" class="menu-link">
											<span class="menu-title">Horizontal</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/wizards/vertical" class="menu-link">
											<span class="menu-title">Vertical</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/wizards/two-factor-authentication" class="menu-link">
											<span class="menu-title">Two Factor Auth</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/wizards/create-app" class="menu-link">
											<span class="menu-title">Create App</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/wizards/create-campaign" class="menu-link">
											<span class="menu-title">Create Campaign</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/wizards/create-account" class="menu-link">
											<span class="menu-title">Create Account</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/wizards/create-project" class="menu-link">
											<span class="menu-title">Create Project</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/modals/wizards/top-up-wallet" class="menu-link">
											<span class="menu-title">Top Up Wallet</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div class="menu-item p-0 m-0">
										<!--begin:Menu link-->
										<NuxtLink exact-active-class="active" to="/utilities/wizards/offer-a-deal" class="menu-link">
											<span class="menu-title">Offer a Deal</span>
										</NuxtLink>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end:Menu section-->
							</div>
							<!--end:Col-->
						</div>
						<!--end:Row-->
					</div>
					<!--end:Col-->
					<!--begin:Col-->
					<div class="col-lg-5 pe-lg-5">
						<img src="/media/stock/600x600/img-84.jpg" class="rounded mw-100" alt="" />
					</div>
					<!--end:Col-->
				</div>
				<!--end:Row-->
			</div>
			<!--end:Tab pane-->
			<!--begin:Tab pane-->
			<div class="tab-pane w-lg-500px" id="kt_app_header_menu_pages_widgets">
				<!--begin:Row-->
				<div class="row">
					<!--begin:Col-->
					<div class="col-lg-4 mb-6 mb-lg-0">
						<!--begin:Menu item-->
						<div class="menu-item p-0 m-0">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" to="/widgets/lists" class="menu-link">
								<span class="menu-title">Lists</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item p-0 m-0">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" to="/widgets/statistics" class="menu-link">
								<span class="menu-title">Statistics</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item p-0 m-0">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" to="/widgets/charts" class="menu-link">
								<span class="menu-title">Charts</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item p-0 m-0">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" to="/widgets/mixed" class="menu-link">
								<span class="menu-title">Mixed</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item p-0 m-0">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" to="/widgets/tables" class="menu-link">
								<span class="menu-title">Tables</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item p-0 m-0">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" to="/widgets/feeds" class="menu-link">
								<span class="menu-title">Feeds</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
					</div>
					<!--end:Col-->
					<!--begin:Col-->
					<div class="col-lg-8">
						<img src="/media/stock/900x600/44.jpg" class="rounded mw-100" alt="" />
					</div>
					<!--end:Col-->
				</div>
				<!--end:Row-->
			</div>
			<!--end:Tab pane-->
		</div>
		<!--end:Tab content-->
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>