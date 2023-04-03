<template>
    <div>
        <MyCard mb-16px>
            <template #content>
                <div flex pl-40px>
                    <a-avatar
                        :size="70"
                        :trigger-icon-style="{ color: '#3491FA' }"
                        :auto-fix-font-size="false"
                        class="setting-userAvater"
                    >
                        <template #trigger-icon>
                            <IconCamera />
                        </template>
                    </a-avatar>
                    <a-descriptions
                        ml-50px
                        :data="userData"
                        size="medium"
                        :column="1"
                    />
                    <a-descriptions
                        ml-50px
                        :data="userData1"
                        size="medium"
                        :column="1"
                    />
                </div>
            </template>
        </MyCard>
    </div>
</template>
<script setup lang="ts">
const userData = [
    {
        label: '用户名:',
        value: '李宇恒',
    },
    {
        label: '账号ID:',
        value: '18312319912',
    },
    {
        label: '注册时间:',
        value: '2023-4-1 12:10:00',
    },
]
const userData1 = [
    {
        label: '实名认证:',
        value: '已认证',
    },
    {
        label: '账号ID:',
        value: '150******00',
    },
]

const enterPrise = [
    {
        label: '用户名:',
        value: '李宇恒 老师',
    },
    {
        label: '账号ID:',
        value: '18312319912',
    },
    {
        label: '注册时间:',
        value: '2023-4-1 12:10:00',
    },
]
</script>

<style scoped>
.setting-userAvater {
    background-color: rgb(var(--arcoblue-6));
    background-image: url('@/assets/img/background.png');
    background-size: contain;
}

.enterPriseBg {
    background: var(--color-neutral-2);
}
</style>
