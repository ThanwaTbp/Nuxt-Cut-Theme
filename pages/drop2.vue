<template>
	<div class="flex m-10">
		<draggable class="dragArea list-group w-full" :list="list" @change="log">
			<div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center" v-for="element in list"
				:key="element.name">
				{{ element.name }}
			</div>
		</draggable>
	</div>
	<draggable v-model="list">
		<transition-group>
			<div v-for="element in list" :key="element.id">{{ element.name }}</div>
		</transition-group>
	</draggable>
</template>

<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

// const enabled = true
// const	list = [
// 		{ name: 'John', id: 1 },
// 		{ name: 'Joao', id: 2 },
// 		{ name: 'Jean', id: 3 },
// 		{ name: 'Gerard', id: 4 },
// 		{ name: 'Thanwa', id: 5 },
// 		{ name: 'TBP', id: 6 },
// 	]
// const	dragging = false

// function log(event) {
// 	console.log(event)
// }

export default defineComponent({
	components: {
		draggable: VueDraggableNext,
	},
	data() {
		return {
			enabled: true,
			list: [
				{ name: 'John', id: 1 },
				{ name: 'Joao', id: 2 },
				{ name: 'Jean', id: 3 },
				{ name: 'Gerard', id: 4 },
				{ name: 'Thanwa', id: 5 },
				{ name: 'TBP', id: 6 },
			],
			dragging: false,
		}
	},
	methods: {
		log(event) {
			console.log(event)
		},
	},
})
</script>