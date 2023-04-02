<template>
    <router-view></router-view>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
provide('echarts', echarts)
</script>

<style scoped>
.main-bg {
    background: var(--color-bg-2);
    color: var(--color-neutral-10);
}
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
