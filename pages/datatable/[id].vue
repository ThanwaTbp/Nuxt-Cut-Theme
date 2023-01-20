<template>
	<pre>
		{{ coin.data }}
	</pre>
	<!-- <h1>{{ product.topic }}</h1> -->
</template>

<script setup lang="ts">

const axios = useAxios()
const route = useRoute()
const { data: coin } = await axios.get(`assets/${route.params.id}`)

// อ่าน id ที่ส่งมา
// console.log(route.params.id)
// อ่านข้อมูลจาก API ด้วย useFetch
// const title = ref('')
// const coin = ref()

// let url = `https://api.coincap.io/v2/assets/${route.params.id}`
// fetch(url)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		let cryptocurrencies = data
// 		title.value = cryptocurrencies.data.name
// 		coin.value = data
// 	})

// const url2 = await $fetch(`https://komgrip.co.th/coincap/assets/${route.params.id}`)


useHead({
	title: coin.data.name,
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