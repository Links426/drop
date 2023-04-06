<template>
    <div class="p-20px main-bg">
        <div class="title">
            <slot name="title"></slot>
        </div>

        <slot name="content"></slot>
    </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.main-bg {
    background: var(--color-bg-2);
    color: var(--color-neutral-10);
}
.title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
}
</style>
