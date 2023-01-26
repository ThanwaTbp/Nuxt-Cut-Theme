<template>
	<div class="container">
		<div class="row">
			<div class="col-4"></div>
			<div class="col-4">
				<div class="position-relative mb-3">
					<input class="form-control bg-transparent" :type="passwordFieldType" v-model="password" placeholder="Password"
						name="password" />
					<span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
						data-kt-password-meter-control="visibility" @click="switchVisibility">
						<i v-if="passwordFieldType === 'text'" class="bi bi-eye-slash fs-2"></i>
						<i v-else class="bi bi-eye fs-2 .d-none"></i>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const password = ""
const passwordFieldType = ref("password")

function switchVisibility() {
	passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
	console.log(passwordFieldType.value)
}
</script>

<style scoped>

</style>