<template>
  <div class="indexline">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <swiper-slide v-for="(item, index) in indicator" :key="index" class="slide">
        <swiperItem :option="item" :index="index" :clickedIndex="clickedIndex"></swiperItem>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import swiperItem from './swiperItem';

export default {
  name: "indexline",
  props: {
    indicator: {
      type: Array,
      required: true
    },
    initClickedIndex: {
      type: Number,
      required: true
    },
    EventBus: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      clickedIndex: this.initClickedIndex,
      notNextTick: true,
      swiperOption: {
        // swiper options 所有的配置同swiper官方api配置
        grabCursor: true,
        height: 72,
        // slidesPerView: 'auto',
        slidesPerView: 5,
        spaceBetween: 6,
        slidesPerGroup: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  watch: {
    initClickedIndex() {
      this.clickedIndex = this.initClickedIndex;
      this.$refs.mySwiper.swiper.activeIndex = this.clickedIndex;
    },
  },
  mounted() {
    this.$refs.mySwiper.swiper.on('click', this.goAnchor);
  },
  methods: {
    goAnchor() {
      const clickedIndex = this.$refs.mySwiper.swiper.clickedIndex;
      const msg = {
        selector: `#anchor${clickedIndex}`,
      };
      this.clickedIndex = clickedIndex;
      this.EventBus.$emit('goAnchor', msg);
    },
    /** get all attributes  所有可在页面设计器中设置的属性 */
    getAttributes() {
      return [{
        attributeDisplayName: '宽度',
        attributeName: 'width',
        attributeValue: '200px',
      },
      {
        attributeDisplayName: '高度',
        attributeName: 'height',
        attributeValue: '150px',
      },
      {
        attributeDisplayName: 'TOP',
        attributeName: 'top',
        attributeValue: '0',
      },
      {
        attributeDisplayName: 'LEFT',
        attributeName: 'left',
        attributeValue: '0',
      },
      {
        attributeDisplayName: '堆叠顺序',
        attributeName: 'zIndex',
        attributeValue: '1',
      },
      {
        attributeDisplayName: '绑定数据类型',
        attributeName: 'dataType',
        attributeValue: '0',
      },
      {
        attributeDisplayName: '数据更新周期',
        attributeName: 'refreshInterval',
        attributeValue: '0',
      },
      {
        attributeDisplayName: '静态数据',
        attributeName: 'staticData',
        attributeValue: ' ',
      },
      {
        attributeDisplayName: '数据API地址',
        attributeName: 'dataUrl',
        attributeValue: ' ',
      },
      {
        attributeDisplayName: '默认静态数据',
        attributeName: 'defaultData',
        attributeValue: '[{"x":["2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12"],"y":[120,132,101,134,90,230,210],"legend":"检修一班"},{"x":["2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12"],"y":[320,302,301,334,390,330,320],"legend":"检修二班"}]',
      },
      {
        attributeDisplayName: '数据转换格式',
        attributeName: 'defaultDataBind',
        attributeValue: ' ',
      }];
    },
    /** get all event config */
    getComponentEventConfig() {
      return [{
        eventTarget: 'default',
        dataMethod: 'getDefaultData',
        eventType: ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseup', 'mouseover', 'mouseout'],
      }];
    },
    /** data handler */
    getDefaultData() {
      return this.data;
    },
    /** data handler */
    /** get all actions */
    getComponentAction() {
      return [{
        action: 'getData',
        parameter: '',
      },
      ];
    },
    /** compoments action begin */

    /** compoments action end */
  },
  components: {
    swiperItem,
  },
};
</script>
<style>
.indexline .swiper-container {
  position: static;
  width: 92%;
}

.indexline .swiper-wrapper {
  padding: 10px!important;
}
</style>

<style scoped>
.indexline {
  background: #f5f5f5;
  height: 90px;
  position: relative;
}

.indexline .slide {
  width: 220px!important;
}
</style>
