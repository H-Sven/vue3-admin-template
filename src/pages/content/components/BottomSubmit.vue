<template>
  <div class="w-full">
    <div @click="onRefresh" class="w-full h-10 text-red-500 hover:bg-white/50 active:bg-white/80 flex my-2 cursor-pointer text-sm items-center justify-center border border-solid border-blue-500 bg-white">
      点击刷新数据
    </div>
    <el-form :model="form" label-width="auto">
      <el-form-item label="内容">
        <el-input v-model="form.name" placeholder="请输入内容" type="textarea" :autosize="{ minRows: 3, maxRows: 3 }" />
      </el-form-item>
      <el-form-item label="图片">
        <el-upload
          accept="image/*"
          ref="uploadRef"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :auto-upload="false"
        >
          <template #trigger>
            <el-button>
              选择图片
            </el-button>
          </template>
          <template #tip>
            <div class="el-upload__tip">
              只能选择jpg/png格式，且不超过500kb
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="老师">
        <el-select v-model="form.region" placeholder="请选择老师">
          <el-option label="老师1" value="teacher1" />
          <el-option label="老师2" value="teacher2" />
        </el-select>
      </el-form-item>
      <el-form-item class="mb-0">
        <el-button type="primary" @click="onSubmit" class="w-full">
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script  setup>
import { reactive } from "vue"

const emit = defineEmits(["submit", "refresh"])

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: ""
})

const uploadRef = ref(null)

function onSubmit() {
  console.log("submit!")
}

function onRefresh() {
  console.log("refresh!")
  emit("refresh")
}
</script>
