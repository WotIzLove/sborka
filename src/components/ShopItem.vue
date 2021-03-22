<template>
  <div class="product">
    <img class="product__img" :src="parsedImgPath" :alt="title" />
    <h3 class="product__title">{{ title }}</h3>
    <div class="product__info">
      <button class="product__buy" @click="$emit('click', id)"></button>
      <span class="product__price">$ {{ price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    imgPath: {
      type: String,
      required: true,
    },
  },
  computed: {
    parsedImgPath() {
      return require(`@/assets/mockImg/${this.id}.png`);
    },
  },
};
</script>

<style lang="scss">

/* Product */

.product {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  &__title {
    max-width: 165px;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    margin-bottom: 13px;
  }
  &__info {
    display: flex;
    align-items: center;
    margin-top: auto;
  }
  &__img {
    max-width: 228px;
    height: auto;
    margin-bottom: 41px;
  }
  &__buy {
    height: 40px;
    width: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 3px;
    background: url("./../assets/trash.svg") no-repeat 50% #3366ff;
  }
  &__price {
    margin-left: 15px;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
