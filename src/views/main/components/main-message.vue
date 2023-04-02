<template>
    <div flex>
        <MyCard class="w-60%">
            <template #title>详细数据</template>

            <template #content>
                <a-radio-group type="button" mb-10px>
                    <a-radio value="small">初级题</a-radio>
                    <a-radio value="medium">中级题</a-radio>
                    <a-radio value="large">高级题</a-radio>
                </a-radio-group>
                <a-table
                    :columns="columns"
                    :data="data"
                    :filter-icon-align-left="alignLeft" /></template
        ></MyCard>
        <MyCard class="ml-16px w-40%">
            <template #title> 学生成绩概述</template>
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
        title: '题目',
        dataIndex: 'content',
    },
    {
        title: '错误量',
        dataIndex: 'address',
        sortable: {
            sortDirections: ['ascend', 'descend'],
        },
    },
    {
        title: '错误概率',
        dataIndex: 'email',
    },
]
const data = reactive([
    {
        key: '1',
        content: '请你说出 Vue3 的 算法',
        address: 322,
        email: '23%',
    },
    {
        key: '2',
        content: '请你说出 Vue3 的 算法',
        address: 302,
        email: '23%',
    },
    {
        key: '3',
        content: '请你说出 Vue3 的 算法',
        address: 255,
        email: '23%',
    },
    {
        key: '4',
        name: 'Ed Hellen',
        content: '请你说出 Vue3 的 算法',
        address: 123,
        email: '23%',
    },
    {
        key: '5',
        name: 'William Smith',
        content: '请你说出 Vue3 的 算法',
        address: 123,
        email: '23%',
    },
])
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
            name: 'Access From',
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
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
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
