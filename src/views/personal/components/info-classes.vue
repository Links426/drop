<template>
    <MyCard class="w-70%"
        ><template #title>主要供货商</template>
        <template #content>
            <div class="flex flex-wrap">
                <BorderCard
                    class="h-126px w-31% mb-12px"
                    v-for="classes in classList"
                    :key="classes.id"
                    :class="classes.id + (1 % 3) === 0 ? '' : 'mr-8px'"
                >
                    <template #title>{{ classes.name }}</template>
                    <template #discription>{{ classes.time }}</template>
                    <template #content>
                        <div flex>
                            <div flex items-center>
                                <a-avatar-group>
                                    <a-avatar
                                        v-for="avater in 4"
                                        :size="28"
                                        class="avaterBg"
                                        ><i
                                            class="iconfont icon-renliziyuan"
                                        ></i
                                    ></a-avatar>
                                </a-avatar-group>
                                <span class="infoTotal ml-8px"
                                    >体量：{{ classes.total }}人</span
                                >
                            </div>
                        </div>
                    </template>
                </BorderCard>
            </div>
        </template></MyCard
    >
</template>
<script setup lang="ts">
const classList = [
    {
        id: 0,
        name: '白银宝丽酒店',
        time: '白银市白银区',
        total: 283,
    },
    {
        id: 1,
        name: '白银市龙华酒店',
        time: '白银市白银区',
        total: '350+',
    },
    {
        id: 2,
        name: '白银市舱英酒店',
        time: '白银市会宁县',
        total: '500+',
    },
    {
        id: 3,
        name: '白银市雄鹰酒店',
        time: '白银市平川区',
        total: '200+',
    },
    {
        id: 4,
        name: '世纪大饭店',
        time: '白银市平川区',
        total: '100+',
    },
    {
        id: 5,
        name: '和平饭店',
        time: '白银市白银区',
        total: '300+',
    },
    {
        id: 6,
        name: '好味道饭店',
        time: '白银市白银区',
        total: '100+',
    },
]
</script>

<style scoped>
.info-classCard {
    border: 1px solid var(--color-neutral-3);
}

.infoTotal {
    color: var(--color-neutral-8);
}
.avaterBg {
    background-color: rgb(var(--orange-3));
}
.avaterClassBg {
    background-color: rgb(var(--arcoblue-3));
}
</style>
