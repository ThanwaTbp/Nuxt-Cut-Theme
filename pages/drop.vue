<script setup lang="ts">
import { stat } from 'fs';
import { reactive, watch } from 'vue';
import { useDropzone } from 'vue3-dropzone';


const state = reactive({
	files: [],
});

function generateURL(file: any) {
	let fileSrc = URL.createObjectURL(file);
	setTimeout(() => {
		URL.revokeObjectURL(fileSrc);
	}, 1000);
	return fileSrc;
}

const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
	onDrop,
})

watch(state, () => {
	console.log('state', state);
})

watch(isDragActive, () => {
	console.log('isDragActive', isDragActive.value, rest)
})

function onDrop(acceptFiles: any, rejectReasons: any) {
	console.log(acceptFiles);
	console.log(rejectReasons);
	state.files = acceptFiles
}

function handleClickDeleteFile(index: any) {
	state.files.splice(index, 1)
}

function addClick() {
	console.log()
}

const imggg = 'https://devahoy.com/_next/image?url=%2Fstatic%2Fimages%2Fdevahoy-logo.png&w=64&q=75'
</script>

<template>
	<div class="p-5">
		<div v-if="state.files.length > 0" class="files">
			<div class="file-item" v-for="(file, index) in state.files" :key="index">
				<img class="preview-img" :src="generateURL(file)" />
				<span>{{ file['name'] }}</span>
				<span>{{ Math.round(file['size'] / 1000).toFixed(2) + ' ' + "KB" }}</span>
				<span class="btn btn-danger btn-sm" @click="handleClickDeleteFile(index)">Delete</span>
			</div>
		</div>
		<div v-else class="dropzone" v-bind="getRootProps()">
			<div class="border" :class="{
				isDragActive,
			}">
				<input v-bind="getInputProps()" />
				<p v-if="isDragActive">Drop the files here ...</p>
				<p v-else>Drag and drop files here, or Click to select files</p>
			</div>
		</div>
		<button class="btn btn-primary" @click="addClick()">Add</button>
	</div>
</template>

<style lang="scss" scoped>
.dropzone,
.files {
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	padding: 10px;
	border-radius: 8px;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
		rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	font-size: 12px;
	line-height: 1.5;
}

.border {
	border: 2px dashed #ccc;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	transition: all 0.3s ease;
	background: var(--kt-body-bg) !important;

	&.isDragActive {
		border: 2px dashed #ffb300;
		background: rgb(255 167 18 / 20%);
	}
}

.file-item {
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: rgb(255 167 18 / 20%);
	padding: 7px;
	padding-left: 15px;
	margin-top: 10px;

	&:first-child {
		margin-top: 0;
	}
}
.preview-img {
	width: 50px;
	height: 50px;
	border-radius: 5px;
	border: 1px solid #a2a2a2;
	background-color: #a2a2a2;
}
</style>
