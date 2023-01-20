<template>
	<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
		<div id="kt_content_container" class="container-xxl">

			<div class="card card-flush">
				<div class="card-header align-items-center py-5 gap-2 gap-md-5">
					<!--begin::Card title-->
					<h1>Cryptocurrencies</h1>
					<div class="card-title">
						<!--begin::Search-->
						<div class="d-flex align-items-center position-relative my-1">
							<!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
							<span class="svg-icon svg-icon-1 position-absolute ms-4">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
										transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
									<path
										d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
										fill="currentColor"></path>
								</svg>
							</span>
							<!--end::Svg Icon-->
							<input type="text" data-kt-ecommerce-product-filter="search" class="form-control form-control-solid w-250px ps-14"
								v-model="searchField" placeholder="ค้นหาเหรียญ">
						</div>
						<!--end::Search-->
					</div>
					<!--end::Card title--><!--begin::Card toolbar-->
				</div>
				<div class="card-body pt-0">
					<DataTable
						:headers="headers" 
						:items="items" 
						:search-field="searchField" 
						:search-value="searchValue"
						:rows-items="[5, 10, 25, 50, 100]" 
						:server-items-length="serverItemsLength" 
						ref="dataTable"
						rows-per-page-message="จำนวนแถว :" 
						rows-of-page-separator-message="จาก" 
						empty-message="ไม่พบข้อมูล"
						v-model:server-options="serverOptions" 
						v-model:items-selected="itemsSelected" 
						:loading="loading"
						show-index
						buttons-pagination
						theme-color="#009ef7"
						table-class-name="customize-table"
						header-text-direction="center"
						body-text-direction="center"
					>
					
						<!-- <template #header-checkbox="item">
							<div class="form-check form-check-sm form-check-custom form-check-solid">
								<input class="form-check-input" type="checkbox" data-kt-check="true"
									data-kt-check-target="#kt_ecommerce_products_table .form-check-input" />
							</div>
						</template> -->
						<template #item-symbol="item">
							<b>{{ item.symbol }}</b>
						</template>
						<template #item-changePercent24Hr="item">
							<h4 :class="item.changePercent24Hr > 0 ? 'text-success mb-0' : 'text-danger mb-0'">
								<b>{{ parseFloat(item.changePercent24Hr).toFixed(2) }}</b>
							</h4>
						</template>
						<template #item-priceUsd="item">
							<b class="text-success">$</b> {{ parseFloat(item.priceUsd).toFixed(2) }}
						</template>
						<template #item-operation="item">
							<NuxtLink :to="`/datatable/${item.id}`"
								class="btn btn-icon btn-active-light-info w-30px h-30px w-md-40px h-md-40px">
								<i class="bi bi-info-circle-fill fs-2"></i>
							</NuxtLink>
						</template>
					</DataTable>
				</div>
			</div>
		</div>
	</div>

</template>

<script lang="ts" setup>

import type { Header, Item, ServerOptions, ClickRowArgument } from 'vue3-easy-data-table'
const headers: Header[] = [
	// { text: "Check", value: "checkbox" },
	{ text: "ID", value: "id" },
	{ text: "Symbol", value: "symbol" },
	{ text: "Name", value: "name" },
	{ text: "PriceUsd", value: "priceUsd", sortable: true },
	{ text: "ChangePercent24Hr", value: "changePercent24Hr", sortable: true },
	{ text: "Operation", value: "operation", },
]

const items = ref<Item[]>([])
const itemsSelected: Item[] = ref([]);

const searchField: any = ref('')
const searchValue = ref()

const serverItemsLength = ref(0)
const serverOptions = ref<ServerOptions>({
	page: 1,
	rowsPerPage: 10,
	sortBy: searchField,
})

const loading = ref(false)

const loadFromApi = async () => {
	loading.value = true

	const { page, rowsPerPage, sortBy, sortType } = serverOptions.value
	// const { data, error, pending, refresh } = await useFetch<any[]>('https://api.coincap.io/v2/assets')

	// if (error.value) {
	// 	throw createError(error.value as Error)
	// }

	let url = `https://api.coincap.io/v2/assets?limit=${rowsPerPage}&offset=${(page - 1) * rowsPerPage}`
	if (sortBy == 'undefined') {
		url = url
	} else {
		url = `https://api.coincap.io/v2/assets?limit=${rowsPerPage}&offset=${(page - 1) * rowsPerPage}&search=${sortBy}`
	}


	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			let cryptocurrencies = data
			items.value = cryptocurrencies.data
			serverItemsLength.value = 100
			loading.value = false
		})
}

// อ่านข้อมูลจาก API ด้วย useFetch
// const { data: products, pending } = await useFetch('https://www.itgenius.co.th/sandbox_api/mrta_flutter_api/public/api/news')


loadFromApi()

watch(
	serverOptions,
	(value) => {
		loadFromApi()
	},
	{ deep: true }
)

</script>

<style scoped>

</style>