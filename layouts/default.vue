<script lang="ts" setup>
useHead({
	bodyAttrs: {
		class: 'header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed',
		id: 'kt_body'
	},
})
</script>

<template>
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
			<FrontAside />
			<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
				<!-- <FrontWrapperHeader /> -->
					<slot />
				<FrontWrapperFooter />
			</div>
		</div>
	</div>
	<Backtotop />
</template>

<style scoped>

</style>
