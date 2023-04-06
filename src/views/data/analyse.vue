<template>
    <div>
        <TotalBoard mb-16px />
        <div flex>
            <TypeBoard mr-16px class="w-60%" /><AnaLyseList class="w-60%" />
        </div>
    </div>
</template>
<script setup lang="ts">
import TotalBoard from '@/views/data/components/analyse-totalBoard.vue'
import TypeBoard from '@/views/data/components/analyse-typeBoard.vue'
import AnaLyseList from '@/views/data/components/analyse-list.vue'
</script>

<style scoped>
.decrease {
    color: rgb(var(--red-5));
}
.increase {
    color: rgb(var(--green-6));
}
</style>
