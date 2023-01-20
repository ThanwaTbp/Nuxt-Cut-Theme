<template>
	<div class="text-center p-5">
		<button class="btn btn-primary" @click="toggle()">Modal Test</button>
		<div class="modal fade" id="modal-main">
			<div class="modal-dialog modal-dialog-centered" style="max-width: 600px">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Hello world!</h5>
						<button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body p-4">Modal 1</div>
					<div class="modal-footer">
						<button class="btn btn-outline-secondary" data-bs-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="text-center p-5">
		<button class="btn btn-primary" @click="toggle2()">Modal Test</button>
		<div class="modal fade" id="modal-sub">
			<div class="modal-dialog modal-dialog-centered" style="max-width: 600px">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Hello world!</h5>
						<button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body p-4">Modal 2</div>
					<div class="modal-footer">
						<button class="btn btn-outline-secondary" data-bs-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Modal } from "bootstrap";
const { $bootstrap } = useNuxtApp();

let modal: Modal;
let modal2: Modal;
onMounted(() => {
	modal = new $bootstrap.Modal(document.getElementById("modal-main") || '')
	modal2 = new $bootstrap.Modal(document.getElementById("modal-sub") || '')
})

const toggle = () => {
	modal.toggle();
}

const toggle2 = () => {
	modal2.toggle()
}


</script>