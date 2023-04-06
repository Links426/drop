<template>
    <MyCard>
        <template #title>
            <div flex justify-between>
                <div text-20px font-500>🍃 欢迎回来，李宇恒</div>
                <div text-16px>🚀 甘肃省 白银市</div>
            </div>
        </template>
        <template #content>
            <a-divider :margin="16" />
            <div flex flex-wrap>
                <div
                    class="w-50% h-100px mb-10px flex-center"
                    :class="data.id % 2 === 0 ? 'main-bg-total-border' : ''"
                    v-for="data in mainTotalList"
                    :key="data.id"
                >
                    <div flex items-center w-200px>
                        <div
                            class="w-60px h-60px rounded mr-20px flex-center main-bg-avater"
                        >
                            <i class="iconfont" :class="data.icon"></i>
                        </div>
                        <div>
                            <div text-12px mb-6px>{{ data.name }}</div>
                            <a-statistic
                                :value="data.value"
                                :value-from="0"
                                :precision="2"
                                animation
                            >
                            </a-statistic>
                        </div>
                    </div>
                </div>
            </div>
            <a-divider :margin="32" />
            <div w-full>
                <div font-500 text-18px ml-16px>七日气候预测</div>
                <div h-300px>
                    <aEcharts :options="options" />
                </div></div></template
    ></MyCard>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
import aEcharts from '@/components/EChartsComponents/a-echarts.vue'

const mainTotalList: any = [
    { id: 0, name: '实时最高气温', icon: 'icon-renliziyuan', value: 24.6 },
    { id: 1, name: '实时最大持续风速', icon: 'icon-rizhi', value: 9.7 },
    { id: 2, name: '实时最低气温', icon: 'icon-shoucang', value: 5.12 },
    { id: 3, name: '实时最大阵风', icon: 'icon-fenxiang', value: 14.4 },
]
const options = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    legend: {
        data: [
            '七日降水量预测',
            '七日最高气温预测',
            '七日最大阵风预测',
            '七日最大持续风速预测',
            '七日能见度预测',
        ],
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['3-21', '3-22', '3-23', '3-24', '3-25', '3-26', '3-27'],
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],
    series: [
        {
            name: '七日降水量预测',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0,
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(128, 255, 165)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(1, 191, 236)',
                    },
                ]),
            },
            emphasis: {
                focus: 'series',
            },
            data: [8, 19, 4, 10, 9, 6, 12],
        },
        {
            name: '七日最高气温预测',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0,
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(0, 221, 255)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(77, 119, 255)',
                    },
                ]),
            },
            emphasis: {
                focus: 'series',
            },
            data: [21, 19, 10, 28, 21, 19, 24],
        },
        {
            name: '七日最大阵风预测',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0,
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(55, 162, 255)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(116, 21, 219)',
                    },
                ]),
            },
            emphasis: {
                focus: 'series',
            },
            data: [19.2, 10.1, 12.9, 8.3, 1.4, 9.2, 11.3],
        },
        {
            name: '七日最大持续风速预测',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0,
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 0, 135)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(135, 0, 157)',
                    },
                ]),
            },
            emphasis: {
                focus: 'series',
            },
            data: [10.1, 22.3, 10.8, 13.3, 4.2, 15.2, 19.3],
        },
        {
            name: '七日能见度预测',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0,
            },
            showSymbol: false,
            label: {
                show: true,
                position: 'top',
            },
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 191, 0)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(224, 62, 76)',
                    },
                ]),
            },
            emphasis: {
                focus: 'series',
            },
            data: [40.2, 45.1, 22.3, 50.2, 10.3, 16.3, 30.1],
        },
    ],
}
</script>

<style scoped>
.iconfont {
    font-size: 28px;
    color: rgb(var(--arcoblue-5));
}
.main-bg-avater {
    background: var(--color-neutral-1);
}
.main-bg-total-border {
    border-right: 1px solid var(--color-neutral-3);
}
</style>
