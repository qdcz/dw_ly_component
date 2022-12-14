<template>
    <div>
        <VISelectV2 v-model="data.currentSelect" :list="data.dropDownList" mode="single" clearable showMore search
            @handleSelected="handleSelected" @handleClear="handleClear">
            <VISelectV2Option v-for="i in data.dropDownList" :key="i.value" :label="i.label" :value="i.value">
            </VISelectV2Option>
        </VISelectV2>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VISelectV2, VISelectV2Option } from '../../../../dist/component/all/index.full.min.mjs';
import '../../../../dist/component/all/index.css';
export default defineComponent({
    components: {
        VISelectV2, VISelectV2Option
    },
    setup() {
        const data = {
            currentSelect: "",
            dropDownList: [
                { value: 'xiamen', label: '厦门' },
                { value: 'fuzhou', label: '福州' },
                { value: 'zhangzhou', label: '漳州' },
                { value: 'sanming', label: '三明' },
                { value: 'longyan', label: '龙岩' },
                { value: 'pinghe', label: '平和' },
                { value: 'changtai', label: '长泰' },
                { value: 'quanzhou', label: '泉州' },
                { value: 'jinjiang', label: '晋江' },
                { value: 'yongchun', label: '永春' },
                { value: 'jiaomei', label: '角美' },
                { value: 'zhaoan', label: '诏安' },
                { value: 'dongshan', label: '东山' },
                { value: 'longhai', label: '龙海' },
                { value: 'zini', label: '紫泥' },
            ],
        }

        const handleSelected = function (v) {
            console.log('handleSelected', v);
        }
        const handleClear = function (v) {
            console.log('handleClear', v);
        }
        return {
            data,
            handleSelected,
            handleClear
        }
    },
})
</script>
<style lang="sass" scoped>

</style>
