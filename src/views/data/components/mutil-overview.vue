<template>
    <div flex mb-16px>
        <MyCard class="w-70% mr-16px">
            <template #title>数据总览</template>
            <template #content>
                <div flex>
                    <div
                        class="w-25% mr-20px p-16px rounded-2px flex"
                        v-for="data in dataOverviewList"
                        :key="data.id"
                        :class="data.backgroundClass"
                    >
                        <div>
                            <div font-500 mb-12px>{{ data.title }}</div>

                            <a-statistic
                                font-bold
                                :value="data.value"
                                :precision="2"
                                show-group-separator
                                animation
                            >
                                <template #prefix>
                                    <icon-arrow-rise /> </template
                                ><template #suffix>%</template></a-statistic
                            >
                        </div>
                    </div>
                </div>
                <div h-320px><AEcharts :options="dataOverviewOption" /></div
            ></template>
        </MyCard>
        <div class="flex flex-col w-30%">
            <MyCard h-200px mb-16px>
                <template #title>上周库存统计(斤)</template>
                <template #content
                    ><AEcharts :options="todaySummaryOption" /></template
            ></MyCard>
            <MyCard h-300px>
                <template #title>市场信息概况</template>
                <template #content
                    ><AEcharts :options="dataDistribution"
                /></template>
            </MyCard>
        </div>
    </div>

    <div flex h-200px w-full>
        <MyCard class="w-25% mr-16px"
            ><template #title>市场土豆消费量(吨)(较上周)</template
            ><template #content>
                <a-statistic
                    font-bold
                    :value-style="{ color: '#0fbf60' }"
                    :value="12"
                    show-group-separator
                    animation
                >
                    <template #prefix> <icon-arrow-rise /> </template
                    ><template #suffix>%</template></a-statistic
                >
                <AEcharts :options="potatoCustomTrend" /> </template
        ></MyCard>
        <MyCard class="w-25% mr-16px"
            ><template #title>市场白菜消费量(吨)(较上周)</template
            ><template #content>
                <a-statistic
                    font-bold
                    :value-style="{ color: '#0fbf60' }"
                    :value="2"
                    show-group-separator
                    animation
                >
                    <template #prefix> <icon-arrow-rise /> </template
                    ><template #suffix>%</template></a-statistic
                >
                <AEcharts w-full :options="peopleLeaveNum" /></template
        ></MyCard>
        <MyCard class="w-25% mr-16px"
            ><template #title>市场洋葱消费量(吨)(较上周)</template
            ><template #content>
                <a-statistic
                    font-bold
                    :value-style="{ color: '#0fbf60' }"
                    :value="3"
                    show-group-separator
                    animation
                >
                    <template #prefix> <icon-arrow-rise /> </template
                    ><template #suffix>%</template></a-statistic
                >
                <AEcharts :options="onionCustomTrend" /></template
        ></MyCard>
        <MyCard class="w-25%"
            ><template #title>市场上海青消费量(吨)(较上周)</template
            ><template #content>
                <a-statistic
                    font-bold
                    :value-style="{ color: '#0fbf60' }"
                    :value="8"
                    show-group-separator
                    animation
                >
                    <template #prefix> <icon-arrow-rise /> </template
                    ><template #suffix>%</template></a-statistic
                >
                <AEcharts w-full :options="shangHaiVegetableNum" /></template
        ></MyCard>
    </div>
</template>
<script setup lang="ts">
const dataOverviewList = [
    {
        id: 0,
        title: '土豆价格(较上周)',
        value: 12.08,
        backgroundClass: 'analyse-normal',
    },
    {
        id: 1,
        title: '白菜价格(较上周)',
        value: 8.1,
        backgroundClass: 'analyse-normal',
    },
    {
        id: 2,
        title: '洋葱价格(较上周)',
        value: 4.3,
        backgroundClass: 'analyse-special',
    },
    {
        id: 3,
        title: '青菜(较上周)',
        value: 3.3,
        backgroundClass: 'analyse-total',
    },
]

const dataOverviewOption = {
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
        show: false,
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
            data: ['3.21', '3.22', '3.23', '3.24', '3.25', '3.26', '3.27'],
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],

    series: [
        {
            name: '土豆单价(元/斤)',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            smooth: true,

            emphasis: {
                focus: 'series',
            },
            data: [0.63, 0.78, 0.71, 0.75, 0.8, 0.81, 0.71],
        },
        {
            name: '白菜单价(元/斤)',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            smooth: true,
            emphasis: {
                focus: 'series',
            },
            data: [0.31, 0.28, 0.3, 0.33, 0.28, 0.37, 0.33],
        },
        {
            name: '洋葱价格(元/斤)',
            type: 'line',
            stack: 'Total',
            smooth: true,
            emphasis: {
                focus: 'series',
            },
            data: [0.45, 0.46, 0.41, 0.35, 0.38, 0.49, 0.38],
        },

        {
            name: '青菜价格(元/斤)',
            type: 'line',
            stack: 'Total',
            smooth: true,
            label: {
                show: true,
                position: 'top',
            },
            areaStyle: {},
            emphasis: {
                focus: 'series',
            },
            data: [0.56, 0.49, 0.45, 0.67, 0.66, 0.58, 0.51],
        },
    ],
}

const todaySummaryOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    label: {
        show: false,
    },

    emphasis: {
        label: {
            show: false,
        },
    },
    grid: {
        top: '1%',
        left: '12%',
        containLabel: false,
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
    },
    yAxis: {
        type: 'category',
        data: ['土豆', '洋葱', '白菜'],
    },
    series: [
        {
            name: '库存量',
            type: 'bar',
            data: [313, 182, 55],
        },
    ],
}

const dataDistribution = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        show: false,
    },

    radar: {
        // shape: 'circle',
        indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 },
        ],
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                    name: 'Allocated Budget',
                },
                {
                    value: [5000, 14000, 28000, 26000, 42000, 21000],
                    name: 'Actual Spending',
                },
            ],
        },
    ],
}

const potatoCustomTrend = {
    xAxis: {
        type: 'category',
        data: ['3.21', '3.22', '3.23', '3.24', '3.25', '3.26', '3.27'],
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
    grid: {
        top: '1%',
        containLabel: false,
    },
    series: [
        {
            data: [234, 211, 198, 197, 221, 213, 209],
            type: 'line',
            smooth: true,
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

const onionCustomTrend = {
    xAxis: {
        type: 'category',
        data: ['3.21', '3.22', '3.23', '3.24', '3.25', '3.26', '3.27'],
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
    grid: {
        top: '1%',
        containLabel: false,
    },
    series: [
        {
            data: [58.1, 49.34, 51.1, 56.6, 45.4, 41.12, 48.49],
            type: 'line',
            smooth: true,
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
const peopleLeaveNum = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '',
    },
    xAxis: [
        {
            type: 'category',
            data: ['3.21', '3.22', '3.23', '3.24', '3.25', '3.26', '3.27'],
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
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [58, 49, 51, 56, 45, 41, 48],
        },
    ],
}

const shangHaiVegetableNum = {
    xAxis: {
        type: 'category',
        data: ['3.21', '3.22', '3.23', '3.24', '3.25', '3.26', '3.27'],
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
    grid: {
        top: '1%',
        containLabel: false,
    },
    series: [
        {
            data: [49.1, 38.45, 37.56, 33.12, 36.15, 40.01, 41.23],
            type: 'line',
            smooth: true,
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
</style>
