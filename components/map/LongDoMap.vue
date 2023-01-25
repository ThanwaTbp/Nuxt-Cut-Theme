<template>
	<div id="longdo-map"></div>
</template>

<script setup lang="ts">
import { usePositionsStore } from "~~/store/positionXY";

const positionStore = usePositionsStore();
const emit = defineEmits(["loaded"]);

const longdo = ref(null);
const map = ref(null);
const longdoMapApiKey = "f38639d33e37f4e422cd8085d997d55f";
const scriptMapId = "longdo-map-script";
const mapClassContainer = "longdo-map-class-container";
const scriptMap: Object = ref(null);

const addMapScript = () => {
	scriptMap.value = document.createElement("script");
	scriptMap.value.src = `https://api.longdo.com/map/?key=${longdoMapApiKey}`;
	scriptMap.value.id = scriptMapId;
	document.body.appendChild(scriptMap.value);

	scriptMap.value.onload = () => {
		longdo.value = window.longdo;
		map.value = new longdo.value.Map({
			placeholder: document.querySelector("#longdo-map"),
		});
		map.value.Event.bind("ready", () => {
			emit("loaded", longdo.value, map.value);
		});
	};
};

watchEffect(() => {
	if (map.value) {
		map.value.location({
			lon: positionStore.positions.lon,
			lat: positionStore.positions.lat,
		});
		// console.log(positionStore.positions.lon, positionStore.positions.lat);
		map.value.zoom(18);
	}
});

onBeforeMount(() => {
	addMapScript();
});

onBeforeUnmount(() => {
	const scriptM = document.getElementById(scriptMapId);
	scriptM.parentNode.removeChild(scriptM);
	longdo.value = null;
	map.value = null;
});
</script>

<style scoped>
#longdo-map {
	width: 100vh;
	/* height: 100%; */
	height: 815px !important;
}
</style>
