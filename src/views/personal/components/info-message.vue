<template>
    <div class="w-full h-200px flex-center info-bg flex flex-col">
        <div
            class="info-avater w-64px h-64px rounded bg-white flex-center text-24px mb-16px"
        >
            A
        </div>
        <div mb-8px font-500 text-16px>李宇恒</div>
        <div flex items-center>
            <div mr-8px>
                <i class="iconfont icon-renliziyuan mr-4px"></i
                ><span>甘肃·白银</span>
            </div>
            <div>
                <i class="iconfont icon-zhinanzhen mr-4px"></i><span>个体</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.info-bg {
    background-image: url('@/assets/img/background.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.info-avater {
    background-color: rgb(var(--arcoblue-5));
    color: var(--color-neutral-1);
}
</style>
