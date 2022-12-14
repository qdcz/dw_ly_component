<template>
	<div class='container'>
		<div>
			<dw-select-v2 v-model="selectData_current" :dynamicCss="selectData_dynamicCss"
				:list="selectData_dropDownList" mode="single" clearable showMore search @handleSelected="handleSelected"
				@handleClear="handleClear">
				<dw-select-v2-option v-for="i in selectData_dropDownList" :key="i.value" :label="i.label"
					:value="i.value">
				</dw-select-v2-option>
			</dw-select-v2>
		</div>
	</div>
</template>
<script lang="ts">
export default {
	name: "demo",
	data() {
		return {
			/**
			 * input组件数据
			 */
			inputData_value: "",

			/**
			 * radio组件数据
			 */
			radioData_null: null,
			radioData_null1: null,
			radioData_null2: "on",
			radioData: 3,

			/**
			 * pagination组件数据
			 */
			paginationData_currentPage: 1,
			paginationData_currentPage1: 1,

			/**
			 * time-picker组件数据
			 */
			timePickerData_current: "23:59:59",
			timePickerData_dynamicCss: {
				margin: "10px",
			},

			/**
			 * select-v2组件数据
			 */
			selectData_current: "",
			aaaaa: "666",
			selectData_dropDownList: [
				{ value: "xiamen", label: "厦门" },
				{ value: "fuzhou", label: "福州" },
				{ value: "zhangzhou", label: "漳州" },
				{ value: "sanming", label: "三明" },
				{ value: "longyan", label: "龙岩" },
				{ value: "pinghe", label: "平和" },
				{ value: "changtai", label: "长泰" },
				{ value: "quanzhou", label: "泉州" },
				{ value: "jinjiang", label: "晋江" },
				{ value: "yongchun", label: "永春" },
				{ value: "jiaomei", label: "角美" },
				{ value: "zhaoan", label: "诏安" },
				{ value: "dongshan", label: "东山" },
				{ value: "longhai", label: "龙海" },
				{ value: "zini", label: "紫泥" },
			],
			selectData_dynamicCss: {},
			selectData_current1: [],
			selectData_dynamicCss1: {},
			selectData_dynamicCss2: {},
			selectData_dynamicCss3: {
				"input-width": "500",
			},
			selectData_current2: [],
			selectData_current3: [],
			selectData: [],
			selectData1: [],
			selectData2: [],
			selectData3: [],

			data: {
				label: "测试翻页文本效果",
				id: 1000,
			},
			cardButtons: [
				{
					label: "北京大学",
				},
				{
					label: "清华大学",
				},
				{
					label: "上海交通大学",
				},
				{
					label: "浙江大学",
				},
				{
					label: "华中科技大学",
				},
				{
					label: "南京大学",
				},
				{
					label: "西安交通大学",
				},
				{
					label: "复旦大学",
				},
				{
					label: "科学技术大学",
				},
				{
					label: "天津大学",
				},
			],
			color: "#677d93", //['#c9d9e8', '#00c48f'],
			duration: 0.5,
			size: 16,
			gutter: 10,

			curSelect: {
				name: "我是一个默认数据",
				id: 1000,
			},
			curSelect1: "",
			curSelect2: [{ name: "我是选中数据", id: 1000 }],
			curSelect3: [],
		};
	},
	mounted() {
		let i = 0;

		setInterval(() => {
			(this as any).data.label = `${i++}测试翻页文本效果`;
		}, 12000);

		setInterval(() => {
			(this as any).gutter = Math.floor(Math.random() * 100);
		}, 3000);

		this.renderSelectData();
	},
	methods: {
		labelFn(data: any) {
			console.log(data);
		},
		clickFn(e: any) {
			const child = document.querySelector(":root") as HTMLElement;
			// // console.log(getComputedStyle(child).getPropertyValue('--color-primary'));
			child?.style.setProperty("--color-primary", "purple");
		},

		/**
		 * radio
		 */
		onRadioDataChange(e) {
			console.log("event:radioValueUpdate", e);
		},

		/**
		 * pagination
		 */
		paginationFn_sizeChange(e) {
			console.log("event:paginationSizeChange", e);
		},
		paginationFn_currentChange(e) {
			console.log("event:paginationCurrentChange", e);
		},

		/**
		 * select
		 */
		handleSelected(v) {
			console.log("handleSelected", v);
		},
		handleClear() {
			console.log("handleClear");
		},
		renderSelectData() {
			this.selectData = new Array(50).fill(0).map((i) => {
				return { id: Math.random(), name: "我是列表" + Math.random() };
			});
			this.selectData1 = new Array(50).fill(0).map((i) => {
				return { id: Math.random(), name: "我是列表" + Math.random() };
			});
			this.selectData2 = new Array(50).fill(0).map((i) => {
				return { id: Math.random(), name: "我是列表" + Math.random() };
			});
			this.selectData3 = new Array(50).fill(0).map((i) => {
				return { id: Math.random(), name: "我是列表" + Math.random() };
			});
		},
	},
};
</script>
<style lang="scss">
html,
body {
	padding: 0px;
	margin: 0px;
}

.container{
	padding: 10px 6px;
}


</style>
