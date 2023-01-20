<template>
	<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi bi-patch-check fs-3"></i>
				</span>
				<span class="menu-title">Projects</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/projects/list">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">My Projects</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/projects/project">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">View Project</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/projects/targets">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Targets</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/projects/budget">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Budget</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/projects/users">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Users</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/projects/files">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Files</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/projects/activity">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Activity</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/projects/settings">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Settings</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi bi-cart fs-3"></i>
				</span>
				<span class="menu-title">eCommerce</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
					class="menu-item menu-lg-down-accordion">
					<!--begin:Menu link-->
					<span class="menu-link py-3">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Catalog</span>
						<span class="menu-arrow"></span>
					</span>
					<!--end:Menu link-->
					<!--begin:Menu sub-->
					<div
						class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/catalog/products">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Products</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/catalog/categories">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Categories</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/catalog/add-product">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Add Product</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/catalog/edit-product">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Edit Product</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/catalog/add-category">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Add Category</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/catalog/edit-category">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Edit Category</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
					</div>
					<!--end:Menu sub-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div data-kt-menu-trigger="click" class="menu-item menu-accordion menu-sub-indention">
					<!--begin:Menu link-->
					<span class="menu-link py-3">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Sales</span>
						<span class="menu-arrow"></span>
					</span>
					<!--end:Menu link-->
					<!--begin:Menu sub-->
					<div class="menu-sub menu-sub-accordion">
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/sales/listing">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Orders Listing</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/sales/details">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Order Details</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/sales/add-order">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Add Order</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/sales/edit-order">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Edit Order</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
					</div>
					<!--end:Menu sub-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div data-kt-menu-trigger="click" class="menu-item menu-accordion menu-sub-indention">
					<!--begin:Menu link-->
					<span class="menu-link py-3">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Customers</span>
						<span class="menu-arrow"></span>
					</span>
					<!--end:Menu link-->
					<!--begin:Menu sub-->
					<div class="menu-sub menu-sub-accordion">
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/customers/listing">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Customers Listing</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/customers/details">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Customers Details</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
					</div>
					<!--end:Menu sub-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div data-kt-menu-trigger="click" class="menu-item menu-accordion menu-sub-indention">
					<!--begin:Menu link-->
					<span class="menu-link py-3">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Reports</span>
						<span class="menu-arrow"></span>
					</span>
					<!--end:Menu link-->
					<!--begin:Menu sub-->
					<div class="menu-sub menu-sub-accordion">
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/reports/view">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Products Viewed</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/reports/sales">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Sales</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/reports/returns">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Returns</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/reports/customer-orders">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Customer Orders</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/reports/shipping">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Shipping</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
					</div>
					<!--end:Menu sub-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/ecommerce/settings">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Settings</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi bi-hr fs-3"></i>
				</span>
				<span class="menu-title">Support Center</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/support-center/overview">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Overview</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
					class="menu-item menu-lg-down-accordion">
					<!--begin:Menu link-->
					<span class="menu-link py-3">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Tickets</span>
						<span class="menu-arrow"></span>
					</span>
					<!--end:Menu link-->
					<!--begin:Menu sub-->
					<div
						class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/support-center/tickets/list">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Ticket List</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/support-center/tickets/view">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Ticket View</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
					</div>
					<!--end:Menu sub-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
					class="menu-item menu-lg-down-accordion">
					<!--begin:Menu link-->
					<span class="menu-link py-3">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Tutorials</span>
						<span class="menu-arrow"></span>
					</span>
					<!--end:Menu link-->
					<!--begin:Menu sub-->
					<div
						class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/support-center/tutorials/list">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Tutorials List</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/support-center/tutorials/post">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Tutorials Post</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
					</div>
					<!--end:Menu sub-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/support-center/faq">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">FAQ</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/support-center/licenses">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Licenses</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/support-center/contact">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Contact Us</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi bi-people fs-3"></i>
				</span>
				<span class="menu-title">User Management</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
					class="menu-item menu-lg-down-accordion">
					<!--begin:Menu link-->
					<span class="menu-link py-3">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Users</span>
						<span class="menu-arrow"></span>
					</span>
					<!--end:Menu link-->
					<!--begin:Menu sub-->
					<div
						class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/user-management/users/list">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Users List</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/user-management/users/view">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">View User</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
					</div>
					<!--end:Menu sub-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
					class="menu-item menu-lg-down-accordion">
					<!--begin:Menu link-->
					<span class="menu-link py-3">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Roles</span>
						<span class="menu-arrow"></span>
					</span>
					<!--end:Menu link-->
					<!--begin:Menu sub-->
					<div
						class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/user-management/roles/list">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Roles List</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/user-management/roles/view">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">View Roles</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
					</div>
					<!--end:Menu sub-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/user-management/permissions">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Permissions</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi bi-calendar3-event fs-3"></i>
				</span>
				<span class="menu-title">Contacts</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/contacts/getting-started">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Getting Started</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/contacts/add-contact">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Add Contact</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/contacts/edit-contact">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Edit Contact</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/contacts/view-contact">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">View Contact</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi bi-cart2 fs-3"></i>
				</span>
				<span class="menu-title">Subscriptions</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/subscriptions/getting-started">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Getting Started</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/subscriptions/list">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Subscription List</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/subscriptions/add">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Add Subscription</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/subscriptions/view">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">View Subscription</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi bi-printer fs-3"></i>
				</span>
				<span class="menu-title">Customers</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/customers/getting-started">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Getting Started</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/customers/list">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Customer Listing</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/customers/view">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Customer Details</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi bi-hr fs-3"></i>
				</span>
				<span class="menu-title">Invoice Management</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
					class="menu-item menu-lg-down-accordion">
					<!--begin:Menu link-->
					<span class="menu-link py-3">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Profile</span>
						<span class="menu-arrow"></span>
					</span>
					<!--end:Menu link-->
					<!--begin:Menu sub-->
					<div
						class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/invoices/view/invoice-1">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Invoice 1</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/invoices/view/invoice-2">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Invoice 2</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
						<!--begin:Menu item-->
						<div class="menu-item">
							<!--begin:Menu link-->
							<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/invoices/view/invoice-3">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">Invoice 3</span>
							</NuxtLink>
							<!--end:Menu link-->
						</div>
						<!--end:Menu item-->
					</div>
					<!--end:Menu sub-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/invoices/create">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Create Invoice</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi bi-folder-check fs-3"></i>
				</span>
				<span class="menu-title">File Manager</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/file-manager/folders">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Folders</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/file-manager/files">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Files</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/file-manager/blank">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Blank Directory</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/file-manager/settings">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Settings</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi bi-envelope fs-3"></i>
				</span>
				<span class="menu-title">Inbox</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/inbox/listing">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Messages</span>
						<span class="menu-badge">
							<span class="badge badge-light-success">3</span>
						</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/inbox/compose">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Compose</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/inbox/reply">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">View & Reply</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"
			class="menu-item menu-lg-down-accordion">
			<!--begin:Menu link-->
			<span class="menu-link py-3">
				<span class="menu-icon">
					<i class="bi-chat-left fs-3"></i>
				</span>
				<span class="menu-title">Chat</span>
				<span class="menu-arrow"></span>
			</span>
			<!--end:Menu link-->
			<!--begin:Menu sub-->
			<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/chat/private">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Private Chat</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/chat/group">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Group Chat</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
				<!--begin:Menu item-->
				<div class="menu-item">
					<!--begin:Menu link-->
					<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/chat/drawer">
						<span class="menu-bullet">
							<span class="bullet bullet-dot"></span>
						</span>
						<span class="menu-title">Drawer Chat</span>
					</NuxtLink>
					<!--end:Menu link-->
				</div>
				<!--end:Menu item-->
			</div>
			<!--end:Menu sub-->
		</div>
		<!--end:Menu item-->
		<!--begin:Menu item-->
		<div class="menu-item">
			<!--begin:Menu link-->
			<NuxtLink exact-active-class="active" class="menu-link py-3" to="/apps/calendar">
				<span class="menu-icon">
					<i class="bi bi-calendar3-event fs-3"></i>
				</span>
				<span class="menu-title">Calendar</span>
			</NuxtLink>
			<!--end:Menu link-->
		</div>
		<!--end:Menu item-->
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>