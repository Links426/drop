<template>
    <div
        class="p-16px rounded-2px info-classCard flex flex-col justify-between"
    >
        <div>
            <div font-500 mb-8px><slot name="title"></slot></div>
            <div><slot name="discription"></slot></div>
        </div>

        <div><slot name="content"></slot></div>
    </div>
</template>
<script setup lang="ts"></script>

<style scoped></style>
