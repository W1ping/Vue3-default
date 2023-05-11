<script setup>
  import { useStoreDemo } from '@/store/demo.js'

  const msg = ref('demoMsg')
  const storeDemo = useStoreDemo()
  const buttonClick = () => {
    storeDemo.counter++
  }
</script>

<template>
    <div class="demo">
        <h1 class="demo__header">{{ msg }}</h1>
        <div
            class="flex w-200 justify-between"
            text="white 14">
            <div class="bg-black w-50 h-50">
                自定义 icon <icon-demo-logo />
            </div>
            <div class="bg-red w-50 h-50 text-12">
                图标库icon
                <icon-mdi:alpha-j/>
                <icon-mdi:alpha-y/>
                <icon-mdi:alpha-q/>
            </div>
        </div>
        <div class="demo__store bg-blue color-white w-50 h-50 p-10">
            <el-button type="danger" @click="buttonClick" class="mb-10">
                demoStore.counter++
            </el-button>
            <div class="demo__store__counter">
                demoStore.counter: {{ storeDemo.counter }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.demo {
  &__header {
    color: red;
  }
  &__store {
  }
}
</style>