<template>
  <div class="swiperItem" :class="{selectedItem: clickedIndex === index}">
    <Row>
      <Col span="6" class="icon">
      <!-- <img :src="icon" alt=""> -->
      <i :class='`iconfont ${icon}`'></i>
      </Col>
      <Col span="18">
      <Row class="remark">
        <p class="remarkline">{{remark}}</p>
      </Row>
      <!-- <Row>
        <span class="changeData">{{changeData}}</span>
        <span class="changeText">{{changeText}}</span>
        <i class="changeStatus" :class="[statusIcon.class1, statusIcon.class2]" :style="{ color: statusIcon.color, fontSize: statusIcon.size + 'px'}"></i>
      </Row> -->
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  props: ["option", "index", "clickedIndex"],
  data() {
    return {};
  },
  computed: {
    statusIcon() {
      return this.option.statusIcon;
    },
    remark() {
      return this.option.remark;
    },
    icon() {
      return this.option.icon;
    },
    changeNumber() {
      if (this.option.changeNumber) {
        return this.option.changeNumber.split(",");
      }
      return [];
    },
    changeData() {
      if (this.changeNumber.length > 0) {
        return this.changeNumber[0];
      }
      return "";
    },
    changeText() {
      if (this.changeNumber.length > 1) {
        return this.changeNumber[1];
      }
      return "";
    }
  }
};
</script>

<style scoped>
.swiperItem {
  width: 218px;
  height: 72px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px #dcdcdc;
}

.swiperItem:hover {
  position: relative;
  box-shadow: 0 0 15px rgba(2, 166, 240, 0.5);
}

.selectedItem {
  position: relative;
  transition: border linear 0.2s, box-shadow linear 0.5s;
  box-shadow: 0 0 15px rgba(2, 166, 240, 0.5);
  border: 1px solid #02a6f0;
  border-radius: 10px;
}

.icon {
  text-align: center;
  padding-top: 17px;
}

.icon img {
  width: 40px;
  height: 40px;
}

.remark {
  margin-top: 16px;
}

.remarkline {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 140px;
  font-size: 14px;
}

.changeStatus {
  position: absolute;
  right: 10px;
  top: -15px;
}

.changeData {
  font-size: 20px;
  color: #0068b7;
}

.changeText {
  font-size: 14px;
  color: #0068b7;
}
</style>
