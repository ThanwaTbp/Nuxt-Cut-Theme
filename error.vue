<script setup lang="ts">
	// Page title
	const title = ref("404-ไม่พบหน้าที่เรียก")
	useHead({
		meta: [{ content: title }],
		titleTemplate: () => {
			return "404-ไม่พบหน้าที่เรียก";
		},
	})
</script>

<template>
	<Error404 />
</template>

<style scoped>

</style>