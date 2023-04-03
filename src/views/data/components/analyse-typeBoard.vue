<template>
  <MyCard
    ><template #title><div text-16px font-500 mb-16px>农产品单价市场浮动</div></template>
    <template #content>
      <div h-440px><AEcharts :options="typeOption" /></div></template
  ></MyCard>
</template>
<script setup lang="ts">
import {floor2} from '@/utils/floor';

var xAxisData: string[] = [];
var data1: any[] = [];
var data2: any[] = [];
var data3: any[] = [];
var data4: any[] = [];
for (var i = 0; i < 30; i++) {
  xAxisData.push('3月 ' + (i + 1) + '日');
  data1.push(floor2(0.45));
  data2.push(floor2(0.34));
  data3.push(floor2(0.55));
  data4.push(floor2(0.78));
}
const typeOption = {
  legend: {
    data: ['洋葱单价(元)', '白菜单价(元)', '土豆单价(元)', '西瓜平均单价(元)'],
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
      name: '洋葱单价(元)',
      type: 'bar',
      data: data1,
      emphasis: {
        focus: 'series',
      },
      animationDelay: function (idx) {
        return idx * 10;
      },
    },
    {
      name: '白菜单价(元)',
      type: 'bar',
      data: data2,
      emphasis: {
        focus: 'series',
      },
      animationDelay: function (idx) {
        return idx * 10 + 100;
      },
    },
    {
      name: '土豆单价(元)',
      type: 'bar',
      data: data3,
      emphasis: {
        focus: 'series',
      },
      animationDelay: function (idx) {
        return idx * 10 + 100;
      },
    },
    {
      name: '西瓜单价(元)',
      type: 'bar',
      data: data4,
      emphasis: {
        focus: 'series',
      },
      animationDelay: function (idx) {
        return idx * 10 + 100;
      },
    },
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx) {
    return idx * 5;
  },
};
</script>

<style scoped></style>
