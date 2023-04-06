<template>
    <div flex>
        <MyCard class="w-60%">
            <template #title>详细数据</template>

            <template #content>
                <a-radio-group type="button" mb-10px default-value="large">
                    <a-radio value="small">当前月</a-radio>
                    <a-radio value="medium">本周</a-radio>
                    <a-radio value="large">当日</a-radio>
                </a-radio-group>
                <a-table
                    :columns="columns"
                    :data="data"
                    :filter-icon-align-left="alignLeft" /></template
        ></MyCard>
        <MyCard class="ml-16px w-40%">
            <template #title>农田作物概述</template>
            <template #content>
                <div h-360px><aEcharts :options="options" /></div
            ></template>
        </MyCard>
    </div>
</template>
<script setup lang="ts">
const alignLeft = ref(false)

const columns: any = [
    {
        title: '序号',
        dataIndex: 'key',
        sortable: {
            sortDirections: ['ascend', 'descend'],
        },
    },
    {
        title: '名称',
        dataIndex: 'content',
    },
    {
        title: '价格(元/斤)',
        dataIndex: 'price',
        sortable: {
            sortDirections: ['ascend', 'descend'],
        },
    },
    {
        title: '产品描述',
        dataIndex: 'email',
    },
]
const data = [
    {
        key: '1',
        content: '冀张薯8号混装',
        price: 1.0,
        email: '当前在本地零售，当地零售价格为1.5元/市斤，需求量有限，急需外销。%',
    },
    {
        key: '2',
        content: '青薯9号四两起步通货',
        price: 1.05,
        email: '甘肃土豆，销售期是10--11--12--1-2--3--4月份，行情稍微上涨几分钱，还大量有货，薯形状好，无虫眼，无机械伤，无青头，无鼠咬，无畸形，欢迎各位老板各位，代办代发代收',
    },
    {
        key: '3',
        content: '晚秋黄梨香水梨果子',
        price: 1.02,
        email: '本人是甘肃省会宁县头寨镇的，我是一位农民代办化心香水梨多少年了，有看见的老板需要了联系我',
    },
    {
        key: '4',
        content: '紫皮黄皮洋葱70',

        price: 0.45,
        email: '红皮和黄皮的价格略有上涨，随着市场的需求和货量的增大，预计未来价格走势仍然是走高',
    },
    {
        key: '5',
        content: '硒砂瓜12斤起步',
        price: 0.6,
        email: '甘肃靖远石缝瓜口感良好耐运输糖度13.5,近期天气晴好,市场走货量大',
    },
]
const options = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '5%',
        left: 'center',
    },
    series: [
        {
            name: '农田作物分布',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 32, name: '小麦', unit: '亩' },
                { value: 18, name: '玉米', unit: '亩' },
                { value: 23, name: '红枣', unit: '亩' },
                { value: 12, name: '苹果', unit: '亩' },
                { value: 4, name: '水稻', unit: '亩' },
            ],
        },
    ],
}
</script>
<style>
.pointer {
    cursor: pointer;
}
</style>
