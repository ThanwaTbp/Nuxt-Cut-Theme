<template>
	<div class="text-end back-top">
		<button class="btn btn-icon btn-info" style="border-radius: 25px" @click.native="scrollToTop">
			<i class="bi bi-arrow-up fs-4"></i>
		</button>
	</div>
</template>

<script setup lang="ts">
function scrollToTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}
</script>

<style scoped>
.back-top {
	position: fixed;
	cursor: pointer;
	z-index: 105;
	justify-content: center;
	align-items: center;
	width: 36px;
	height: 36px;
	bottom: 40px;
	right: 20px;
	transition: color .2s ease;
	border-radius: 0.475rem;
}
</style>