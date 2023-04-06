<template>
    <div>
        <InfoMessage mb-16px />
        <div flex>
            <InfoClasses mr-16px />

            <MyCard class="w-30%">
                <template #title>我的农作物</template>
                <template #content>
                    <div
                        v-for="room in classroomsList"
                        :key="room.id"
                        v-show="room.id < 4"
                        p-16px
                        class="flex items-center info-roomCard mb-12px rounded-6px"
                    >
                        <div
                            class="w-48px h-48px mr-10px rounded info-memberAvater flex-center"
                        >
                            <i class="iconfont icon-zhinanzhen"></i>
                        </div>
                        <div>
                            <div font-500 mb-6px>
                                {{ room.name }}
                            </div>
                            <div text-13px>共{{ room.total }}亩</div>
                        </div>
                    </div>
                    <div text-center><a-link>查看更多</a-link></div>
                </template>
            </MyCard>
        </div>
    </div>
</template>
<script setup lang="ts">
import InfoMessage from '@/views/personal/components/info-message.vue'

import InfoClasses from '@/views/personal/components/info-classes.vue'

const classroomsList = [
    { id: 0, name: '玉米', total: 10 },
    { id: 1, name: '小麦', total: 8 },
    { id: 2, name: '苹果', total: 3 },
    { id: 3, name: '红薯', total: 20 },
]
</script>

<style scoped>
.info-classCard {
    border: 1px solid var(--color-neutral-3);
}
.info-memberAvater {
    background-color: rgb(var(--arcoblue-5));
    color: white;
}
.infoTotal {
    color: var(--color-neutral-8);
}
.icon-zhinanzhen {
    font-size: 30px;
}
.info-roomCard {
    background: var(--color-neutral-2);
}
</style>
