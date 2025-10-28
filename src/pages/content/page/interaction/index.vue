<template>
  <div class="app-container h-full w-full flex flex-col justify-between">
    <div class="flex-1">
      互动模块
    </div>
    <BottomSubmit @submit="onSubmit" @refresh="onRefresh" />
  </div>
</template>

<script setup>
import BottomSubmit from "@/pages/content/components/BottomSubmit.vue"

function onSubmit() {
  console.log("submit!")
}

function onRefresh() {
  console.log("refresh!")
}
</script>
