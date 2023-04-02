<template>
    <MyCard>
        <template #title
            ><div text-16px font-500 mb-16px>错题汇总</div></template
        >
        <template #content><a-table :columns="columns" :data="data" /></template
    ></MyCard>
</template>
<script setup lang="ts">
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
    {
        key: '6',
        name: 'William Smith',
        content: '请你说出 Vue3 的 算法',
        address: 123,
        email: '23%',
    },
    {
        key: '6',
        name: 'William Smith',
        content: '请你说出 Vue3 的 算法',
        address: 123,
        email: '23%',
    },
    {
        key: '6',
        name: 'William Smith',
        content: '请你说出 Vue3 的 算法',
        address: 123,
        email: '23%',
    },
    {
        key: '6',
        name: 'William Smith',
        content: '请你说出 Vue3 的 算法',
        address: 123,
        email: '23%',
    },
])
</script>

<style scoped></style>
