<template>
  <div class="about">
    <h1>This is an about page</h1>
      <van-tag type="success">标签</van-tag>
  </div>
</template>

<script>
import { Tag } from 'vant'
export default {
  components: {
    [Tag.name]: Tag
  }
}
</script>
