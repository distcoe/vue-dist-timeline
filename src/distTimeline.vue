<template>
  <div class="timeline">
    <swiper :options="swiperOption">
      <swiper-slide v-for="swiperItem in swiperItems" :key="swiperItem" style="text-align: center">
        <div @click="chooseDataTime(swiperItem)">
          <div class="swiper-item" v-bind:class="{selected: dataTime === swiperItem}"></div>
          {{swiperItem}}
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <hr style="width:70%;height:1px;border:none;border-top:1px solid #DCE1E4;margin:-26.5px auto" />
  </div>
</template>
<script>
export default {
  name: "timeline",
  props: {
    currentTime: {
      type: Number,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dataTime: this.currentTime,
      swiperOption: {
        grabCursor: true,
        slidesPerView: 6,
        slidesPerGroup: 3,
        spaceBetween: 14,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next"
      }
    };
  },
  computed: {
    swiperItems() {
      return this.data;
    }
  },
  methods: {
    chooseDataTime(swiperItem) {
      this.dataTime = swiperItem;
      this.$emit("chooseDataTime", swiperItem);
    }
  },
  components: {
    // swiper,
    // swiperSlide
  }
};
</script>

<style scoped>
.timeline {
  width: 100%;
}

.selected {
  width: 15px !important;
  height: 15px !important;
  border: 4px solid #19508a;
  background: #fff !important;
  margin-top: -2px !important;
}
</style>

<style>
.timeline .swiper-item {
  width: 10px;
  height: 10px;
  line-height: 10px;
  border-radius: 20px;
  background: #19508a;
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
}

.timeline .swiper-container {
  position: static;
  width: 80%;
  margin: 0 auto;
}

.timeline .swiper-wrapper {
  padding: 0 !important;
  margin-top: 10px;
}

.timeline .swiper-button-prev,
.timeline .swiper-button-next {
  height: 20px;
  top: 42px;
}
</style>
