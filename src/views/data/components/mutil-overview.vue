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
                                show-group-separator
                                animation
                            >
                                <template #prefix>
                                    <icon-arrow-rise /> </template
                            ></a-statistic>
                        </div>
                    </div>
                </div>
                <div h-320px><AEcharts :options="dataOverviewOption" /></div
            ></template>
        </MyCard>
        <div class="flex flex-col w-30%">
            <MyCard h-200px mb-16px>
                <template #title>今日数据统计</template>
                <template #content
                    ><AEcharts :options="todaySummaryOption" /></template
            ></MyCard>
            <MyCard h-300px>
                <template #title>内容题材分布</template>
                <template #content
                    ><AEcharts :options="dataDistribution"
                /></template>
            </MyCard>
        </div>
    </div>

    <div flex h-200px w-full>
        <MyCard class="w-25% mr-16px"
            ><template #title>用户留存趋势</template
            ><template #content>
                <a-statistic
                    font-bold
                    :value-style="{ color: '#0fbf60' }"
                    :value="5670"
                    show-group-separator
                    animation
                >
                    <template #prefix> <icon-arrow-rise /> </template
                    ><template #suffix>%</template></a-statistic
                >
                <AEcharts :options="peopleLeaveTrend" /> </template
        ></MyCard>
        <MyCard class="w-25% mr-16px"
            ><template #title>用户留存量</template
            ><template #content>
                <a-statistic
                    font-bold
                    :value-style="{ color: '#0fbf60' }"
                    :value="5670"
                    show-group-separator
                    animation
                >
                    <template #prefix> <icon-arrow-rise /> </template
                    ><template #suffix>%</template></a-statistic
                >
                <AEcharts w-full :options="peopleLeaveNum" /></template
        ></MyCard>
        <MyCard class="w-25% mr-16px"
            ><template #title>用户留存趋势</template
            ><template #content>
                <a-statistic
                    font-bold
                    :value-style="{ color: '#0fbf60' }"
                    :value="5670"
                    show-group-separator
                    animation
                >
                    <template #prefix> <icon-arrow-rise /> </template
                    ><template #suffix>%</template></a-statistic
                >
                <AEcharts :options="peopleLeaveTrend" /></template
        ></MyCard>
        <MyCard class="w-25%"
            ><template #title>内容消费量</template
            ><template #content>
                <a-statistic
                    font-bold
                    :value-style="{ color: '#0fbf60' }"
                    :value="5670"
                    show-group-separator
                    animation
                >
                    <template #prefix> <icon-arrow-rise /> </template
                    ><template #suffix>%</template></a-statistic
                >
                <AEcharts w-full :options="peopleLeaveNum" /></template
        ></MyCard>
    </div>
</template>
<script setup lang="ts">
const dataOverviewList = [
    {
        id: 0,
        title: '内容生产量',
        value: 1902,
        backgroundClass: 'analyse-normal',
    },
    {
        id: 1,
        title: '内容点击量',
        value: 2445,
        backgroundClass: 'analyse-normal',
    },
    {
        id: 2,
        title: '内容曝光量',
        value: 3034,
        backgroundClass: 'analyse-special',
    },
    {
        id: 3,
        title: '活跃用户数',
        value: 945,
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],

    series: [
        {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            smooth: true,

            emphasis: {
                focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            smooth: true,
            emphasis: {
                focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            smooth: true,
            emphasis: {
                focus: 'series',
            },
            data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            smooth: true,
            areaStyle: {},
            emphasis: {
                focus: 'series',
            },
            data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
            name: 'Search Engine',
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
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
        data: ['India', 'China', 'World'],
    },
    series: [
        {
            name: '2012',
            type: 'bar',
            data: [1231, 1123, 981],
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

const peopleLeaveTrend = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            data: [124, 37, 901, 934, 1782, 2813, 1920],
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            data: [100, 283, 231, 182, 113, 123, 209, 283, 231, 182, 113, 123],
        },
    ],
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
