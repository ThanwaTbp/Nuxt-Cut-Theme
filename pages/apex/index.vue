<template>
	<ClientOnly>
		<div class="row">
			<div class="col-6 text-center">
				<div id="chart1">
					<apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
				</div>
				<button type="button" class="btn btn-primary" @click="updateChart">Click</button>
			</div>
			<div class="col-6 text-center">
				<div id="chart2">
					<apexchart type="bar" height="350" :options="chartOptions2" :series="series2"></apexchart>
				</div>
				<button type="button" class="btn btn-primary" @click="updateChart2">Click</button>
			</div>
		</div>
	</ClientOnly>
</template>

<!-- <script setup lang="ts">

const series = [{
	name: "Desktops",
	data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}]
const	chartOptions = {
	chart: {
		id: "chart1",
		height: 350,
			type: 'line',
				zoom: {
			enabled: false
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'straight'
	},
	title: {
		text: 'Product Trends by Month',
			align: 'left'
	},
	grid: {
		row: {
			colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
		},
	},
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
}

const series2 = [{
	name: 'Inflation',
	data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}]
const	chartOptions2 = {
	chart: {
		id: "chart2",
		height: 350,
			type: 'bar',
            },
	plotOptions: {
		bar: {
			borderRadius: 10,
				dataLabels: {
				position: 'top', // top, center, bottom
                },
		}
	},
	dataLabels: {
		enabled: true,
			formatter: function (val: any) {
				return val + "%";
			},
		offsetY: -20,
			style: {
			fontSize: '12px',
				colors: ["#304758"]
		}
	},

	xaxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			position: 'top',
				axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		},
		crosshairs: {
			fill: {
				type: 'gradient',
					gradient: {
					colorFrom: '#D8E3F0',
						colorTo: '#BED1E6',
							stops: [0, 100],
								opacityFrom: 0.4,
									opacityTo: 0.5,
                  }
			}
		},
		tooltip: {
			enabled: true,
              }
	},
	yaxis: {
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false,
              },
		labels: {
			show: false,
				formatter: function (val: any) {
					return val + "%";
				}
		}

	},
	title: {
		text: 'Monthly Inflation in Argentina, 2002',
			floating: true,
				offsetY: 330,
					align: 'center',
						style: {
			color: '#444'
		}
	}
}

function updateChart() {
	const max = 90;
	const min = 20;
	const newData = series[0].data.map(() => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	})

	const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]

	// Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
	const chartOptions: any = {
		colors: [colors[Math.floor(Math.random() * colors.length)]],
	}
	// In the same way, update the series option
	const series: any = [
		{
			data: newData,
		},
	]
}
</script> -->

<script lang="ts">
export default {
	data: function () {
		return {
			chartOptions: {
				chart: {
					id: "chart1",
				},
				xaxis: {
					categories: [2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567],
				},
			},
			chartOptions2: {
				chart: {
					id: "chart2",
				},
				xaxis: {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
				},
			},
			series: [
				{
					name: "series1",
					data: [10, 80, 55, 70, 49, 60, 90, 21],
				},
				// {
				// 	name: "series2",
				// 	data: [30, 40, 45, 50, 49, 60, 70, 81],
				// },
			],
			series2: [
				{
					name: "series2",
					data: [30, 40, 45, 50, 49, 60, 70, 81],
				},
			],
		};
	},
	methods: {
		updateChart() {
			const max = 90;
			const min = 20;
			const newData = this.series[0].data.map(() => {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			});

			const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

			// Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
			this.chartOptions = {
				colors: [colors[Math.floor(Math.random() * colors.length)]],
			};
			// In the same way, update the series option
			this.series = [
				{
					data: newData,
				},
			];
		},
		updateChart2() {
			const max = 90;
			const min = 20;
			const newData = this.series2[0].data.map(() => {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			});

			const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

			// Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
			this.chartOptions2 = {
				colors: [colors[Math.floor(Math.random() * colors.length)]],
			};
			// In the same way, update the series option
			this.series2 = [
				{
					data: newData,
				},
			];
		},
	},
};
</script>