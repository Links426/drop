<template>
    <MyCard>
        <template #title>
            <div text-16px font-500 mb-16px>农业分析</div>
        </template>
        <template #content>
            <div flex h-134px>
                <!-- 访问人数 -->
                <div
                    class="w-25% mr-20px p-16px rounded-2px flex analyse-normal"
                >
                    <div>
                        <div font-500 mb-24px>农作物种植产量变化趋势</div>
                        <div text-24px font-bold mb-4px>98.7万吨</div>
                        <div>
                            <span>较去年</span
                            ><span font-bold ml-8px class="increase"
                                ><span>+</span>1.3万吨</span
                            >
                        </div>
                    </div>

                    <div flex-1 flex-center h-100px>
                        <AEcharts :options="totalPeople" />
                    </div>
                </div>
                <!-- 内容发布量 -->
                <div
                    class="w-25% mr-20px p-16px rounded-2px flex analyse-special"
                >
                    <div>
                        <div font-500 mb-24px>农作物种植面积变化趋势</div>
                        <div text-24px font-bold mb-4px>12256</div>
                        <div>
                            <span>较昨日</span
                            ><span font-bold ml-8px class="increase"
                                ><span>+</span>206</span
                            >
                        </div>
                    </div>

                    <div h-100px flex-1>
                        <AEcharts w-full :options="publishNum" />
                    </div>
                </div>

                <!-- 评论总量 -->
                <div
                    class="w-25% mr-20px p-16px rounded-2px flex analyse-total"
                >
                    <div>
                        <div font-500 mb-24px>七天土豆单价走势</div>
                        <div text-24px font-bold mb-4px>0.78</div>
                        <div>
                            <span>较昨日</span
                            ><span font-bold ml-8px class="increase"
                                ><span>+</span>0.23</span
                            >
                        </div>
                    </div>

                    <div h-100px flex-1>
                        <AEcharts :options="potatoPrice" />
                    </div>
                </div>

                <div
                    class="w-25% mr-20px p-16px rounded-2px flex analyse-normal"
                >
                    <div>
                        <div font-500 mb-24px>市场蔬菜种类</div>
                        <div text-24px font-bold mb-4px>18 种</div>
                        <div>
                            <span>较昨日</span
                            ><span font-bold ml-8px class="increase"
                                ><span>+</span>2</span
                            >
                        </div>
                    </div>

                    <div h-100px flex-1>
                        <AEcharts :options="vegetablesType" />
                    </div>
                </div>
            </div>
        </template>
    </MyCard>
</template>
<script setup lang="ts">
import AEcharts from '@/components/EChartsComponents/a-echarts.vue'
const totalPeople = {
    xAxis: {
        type: 'category',
        data: ['2016', '2017', '2018', '2019', '2020'],
        axisTick: {
            show: false, //刻度线
        },
        axisLine: {
            show: false, //隐藏y轴
        },
        axisLabel: {
            show: false, //隐藏刻度值
        },
        splitLine: { show: false },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false, //刻度线
        },
        axisLine: {
            show: false, //隐藏y轴
        },
        axisLabel: {
            show: false, //隐藏刻度值
        },
        splitLine: { show: false },
    },
    series: [
        {
            data: [93.9, 94.3, 95.1, 96.5, 98.9],
            type: 'line',
            smooth: true,
            name: '产量（万吨)',
        },
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
}
const publishNum = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '',
    },
    xAxis: [
        {
            type: 'category',
            data: ['2016', '2017', '2018', '2019', '2020'],
            axisTick: {
                show: false, //刻度线
            },
            axisLine: {
                show: false, //隐藏y轴
            },
            axisLabel: {
                show: false, //隐藏刻度值
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false, //刻度线
            },
            axisLine: {
                show: false, //隐藏y轴
            },
            axisLabel: {
                show: false, //隐藏刻度值
            },
            splitLine: { show: false },
        },
    ],
    series: [
        {
            name: '面积(万亩)',
            type: 'bar',
            barWidth: '60%',
            data: [541.8, 542.1, 543.2, 540.8, 564.7],
        },
    ],
}

const vegetablesType = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        show: false,
    },
    series: [
        {
            name: '种类',
            type: 'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 2,
                borderColor: '#fff',
                borderWidth: 1,
            },
            label: {
                show: false,
            },

            emphasis: {
                label: {
                    show: false,
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: '0.09', name: '红薯' },
                { value: '0.11', name: '土豆' },
                { value: '0.08', name: '白菜' },
                { value: '0.02', name: '茄子' },
                { value: '0.06', name: '芋头' },
                { value: '0.12', name: '豆角' },
                { value: '0.05', name: '莲藕' },
                { value: '0.01', name: '小白菜' },
                { value: '0.04', name: '菠菜' },
                { value: '0.06', name: '芹菜' },
                { value: '0.04', name: '紫菜' },
                { value: '0.06', name: '菠菜' },
                { value: '0.09', name: '莴苣' },
                { value: '0.08', name: '竹笋' },
            ],
        },
    ],
}

const potatoPrice = {
    xAxis: {
        type: 'category',
        data: ['3-21', '3-22', '3-23', '3-24', '3-25'],
        axisTick: {
            show: false, //刻度线
        },
        axisLine: {
            show: false, //隐藏y轴
        },
        axisLabel: {
            show: false, //隐藏刻度值
        },
        splitLine: { show: false },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false, //刻度线
        },
        axisLine: {
            show: false, //隐藏y轴
        },
        axisLabel: {
            show: false, //隐藏刻度值
        },
        splitLine: { show: false },
    },
    series: [
        {
            data: [0.63, 0.78, 0.71, 0.75, 0.8],
            type: 'line',
            smooth: true,
            name: '单价(元/斤)',
        },
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
}
</script>

<style scoped>
.analyse-normal {
    background: linear-gradient(
        180deg,
        rgb(var(--arcoblue-1)) -3%,
        rgb(var(--arcoblue-1)) 100%
    );
}
.analyse-special {
    background: linear-gradient(
        180deg,
        rgb(var(--green-1)) 2%,
        rgb(var(--green-1)) 100%
    );
}
.analyse-total {
    background: linear-gradient(
        180deg,
        rgb(var(--red-1)) -3%,
        rgb(var(--red-1)) 100%
    );
}
.decrease {
    color: rgb(var(--red-5));
}
.increase {
    color: rgb(var(--green-6));
}
</style>
