<template>
	<Datepicker v-model="date" locale="th" :format="format" placeholder="เลือกวัน" modelType="yyyy-MM-dd HH:mm:ss"
		position="center" autoApply @update:modelValue="handleDate">
		<template #year="{ year }">
			{{(year + 543) }}
		</template>
	</Datepicker>
	<h4 class="mt-4">วันที่เลือก: {{ date }}</h4>
</template>

<script setup lang="ts">
const date = ref()
const format = (date: any) => {
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	const hour = date.getHours()
	const min = date.getMinutes()
	const sec = date.getSeconds()
	return `${day}/${month}/${year + 543}`
}
const handleDate = (modelData: null) => {
	date.value = modelData
	if (date.value != null) {
		console.log(date.value)
	}
}
</script>

<style scoped>

</style>