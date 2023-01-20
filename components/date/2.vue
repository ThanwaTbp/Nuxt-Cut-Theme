<template>
	<Datepicker v-model="date" range multi-calendars locale="th" :format="format" placeholder="เลือกวันที่" :month-change-on-scroll="false" position="center" autoApply @update:modelValue="handleDate">
		<template #year="{ year }">
			{{(year + 543) }}
		</template>
		<template #input-icon>
			<Icon name="mdi:calendar-month" class="ms-2" size="18px" />
		</template>
	</Datepicker>
	<h4 class="mt-4">วันที่เลือก: {{ date }}</h4>
</template>

<script setup lang="ts">

const date = ref();

// onMounted(() => {
// 	const startDate = new Date();
// 	const endDate = new Date(new Date().setDate(startDate.getDate() + 7));

// 	// const year = startDate.getFullYear() + 543
// 	// console.log(year)
// 	// date.value = [startDate, endDate];
// })

const format = (date: any) => {
	const startDate = new Date();
	const endDate = new Date(new Date().setDate(startDate.getDate() + 7));

	const Sday = startDate.getDate()
	const Smonth = startDate.getMonth() + 1
	const Syear = startDate.getFullYear()

	const Eday = endDate.getDate()
	const Emonth = endDate.getMonth() + 1
	const Eyear = endDate.getFullYear()
	return `${Sday}/${Smonth}/${Syear + 543}` + ` - ` + `${Eday}/${Emonth}/${Eyear + 543}`
}
const handleDate = (modelData: null) => {
	date.value = modelData
	if (date.value != null) {
		console.log(date.value)
	}
}
</script>
