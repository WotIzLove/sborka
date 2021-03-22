<template>
  <div class="product-list-wrapper">
    <div v-if="loading" class="loader-main">
      <Loader v-if="loading" />
    </div>
    <div v-else v-for="item in shopItems" :key="item.id" class="product-list">
      <ShopItem
        :id="item.id"
        :title="item.title"
        :price="item.price"
        :img-path="item.imgPath"
        @click="addBuy"
      />
    </div>
  </div>
</template>

<script>
import ShopItem from "@/components/ShopItem.vue";
import Loader from "@/components/Loader.vue";

import api from "api";
import { mapActions } from "vuex";

export default {
  name: "ShopItemsLists",
  data() {
    return {
      loading: true,
      shopItems: [],
    };
  },
  components: {
    ShopItem,
    Loader,
  },
  async created() {
    this.shopItems = await api.fetchShopItems().then((data) => data);
    this.loading = false;
  },
  methods: {
    ...mapActions(["addBuyItem"]),
    addBuy(id) {
      const buyItem = this.shopItems.find((item) => item.id === id);
      this.addBuyItem(buyItem);
    },
  },
};
</script>

<style lang="scss">
.loader-main {
  margin: 0 auto;
}

.product-list-wrapper {
  max-width: 890px;
  padding: 10%;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
}

.product-list {
  margin-bottom: 50px;
  width: calc(33.3333% - 71px);
  padding: 29px 15px 15px;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
}

@media (max-width: 1600px) {
  .product-list {
      width: calc(50% - 71px);
      max-width: 289px;
  }
}

@media (max-width: 1199px) {
  .product-list-wrapper {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .product-list {
      width: 218px;
  }
  .product-list-wrapper {
    justify-content: center;
  }
}
</style>
