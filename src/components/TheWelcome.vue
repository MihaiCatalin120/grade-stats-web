<script setup>
import UploadGrades from './UploadGrades.vue';
</script>

<template>
  <div class="page-spacing">
    <h4>Upload your file* here:</h4>
    <p>*Note: only csv supported at the moment</p>
    <UploadGrades />
  </div>
</template>

<style scoped>
.page-spacing {
  padding-inline: 50px;
  padding-top: 100px;
}

p {
  font-size: 12px;
}
</style>
