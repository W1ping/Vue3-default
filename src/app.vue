<script setup>
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <el-button type="primary"><RouterLink to="/">Home</RouterLink></el-button>
        <el-button type="primary"><RouterLink to="/demo">Demo</RouterLink></el-button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
