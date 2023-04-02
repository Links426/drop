<template>
    <MyCard
        ><template #title
            ><div text-16px font-500 mb-16px>内容发布比例</div></template
        >
        <template #content>
            <div h-440px><AEcharts :options="typeOption" /></div></template
    ></MyCard>
</template>
<script setup lang="ts">
var xAxisData: string[] = []
var data1: string | number[] = []
var data2: string | number[] = []
for (var i = 0; i < 100; i++) {
    xAxisData.push('A' + i)
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
}
const typeOption = {
    legend: {
        data: ['bar', 'bar2'],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    xAxis: {
        data: xAxisData,
        splitLine: {
            show: false,
        },
    },
    yAxis: {},
    series: [
        {
            name: 'bar',
            type: 'bar',
            data: data1,
            emphasis: {
                focus: 'series',
            },
            animationDelay: function (idx) {
                return idx * 10
            },
        },
        {
            name: 'bar2',
            type: 'bar',
            data: data2,
            emphasis: {
                focus: 'series',
            },
            animationDelay: function (idx) {
                return idx * 10 + 100
            },
        },
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5
    },
}
</script>

<style scoped></style>
