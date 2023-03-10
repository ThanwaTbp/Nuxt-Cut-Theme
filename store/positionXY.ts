import { defineStore } from "pinia";

export const usePositionsStore = defineStore("positions", () => {
	//state
	const positionData: any = [
		{
			id: 1,
			kmStart: "0+000",
			kmEnd: "1+000",
			lat: 13.814726244686398,
			lon: 100.51732790995302,
		},
		{
			id: 2,
			kmStart: "1+000",
			kmEnd: "2+000",
			lat: 13.815899978195125,
			lon: 100.51867091061811,
		},
		{
			id: 3,
			kmStart: "2+000",
			kmEnd: "3+000",
			lat: 13.816209712440548,
			lon: 100.51902344829273,
		},
		{
			id: 4,
			kmStart: "3+000",
			kmEnd: "4+000",
			lat: 13.81682265901758,
			lon: 100.5197117361576,
		},
		{
			id: 5,
			kmStart: "4+000",
			kmEnd: "5+000",
			lat: 13.818019204321347,
			lon: 100.52104130684535,
		},
		// {
		// 	id: 6,
		// 	kmStart: "4+000",
		// 	kmEnd: "5+000",
		// 	lat: 13.818019204321347,
		// 	lon: 100.52104130684535,
		// },
		// {
		// 	id: 7,
		// 	kmStart: "4+000",
		// 	kmEnd: "5+000",
		// 	lat: 13.818019204321347,
		// 	lon: 100.52104130684535,
		// },
		// {
		// 	id: 8,
		// 	kmStart: "4+000",
		// 	kmEnd: "5+000",
		// 	lat: 13.818019204321347,
		// 	lon: 100.52104130684535,
		// },
		// {
		// 	id: 9,
		// 	kmStart: "4+000",
		// 	kmEnd: "5+000",
		// 	lat: 13.818019204321347,
		// 	lon: 100.52104130684535,
		// },
		// {
		// 	id: 10,
		// 	kmStart: "4+000",
		// 	kmEnd: "5+000",
		// 	lat: 13.818019204321347,
		// 	lon: 100.52104130684535,
		// },
	];
	const positions: any = reactive({ lon: 100, lat: 16 });

	//actions
	const changePositions = (item: Object) => {
		positions.lon = item.lon;
		positions.lat = item.lat;
		// console.log(positions.lon, positions.lat);
	};
	return { positionData, changePositions, positions };
});
