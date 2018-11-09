<template>
  <div class="about">
    <h1>This is an about page</h1>
      <van-tag type="success">标签</van-tag>
      <div class="text">马上报名体验</div>
      <van-circle
              v-model="currentRate"
              :rate="30"
              :speed="100"
              :text="text"
      />
  </div>
</template>

<script>
import { Tag, Circle } from 'vant'
export default {
  components: {
    [Tag.name]: Tag,
    [Circle.name]: Circle
  },
  data () {
    return {
      currentRate: 0
    }
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
    .text {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100px;
        line-height: 100px;
        color: #fff;
        background: #ef5350;
        font-size: 36px;
    }
</style>
