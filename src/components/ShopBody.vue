<template>
  <main class="main">
    <ShopItemsList />
    <transition name="modal_animate">
      <Cart v-show="showCart" />
    </transition>
  </main>
</template>

<script>
import ShopItemsList from "@/components/ShopItemsList.vue";
import Cart from "@/components/Cart.vue";

import { mapState, mapMutations } from "vuex";

export default {
  name: "ShopBody",
  data() {
    return {
      width: 0,
    };
  },
  components: {
    ShopItemsList,
    Cart,
  },
  computed: {
    ...mapState({
      showCart: (state) => state.showCart,
    }),
  },
  methods: {
    ...mapMutations(["updateModalState"]),
    updateWidth() {
      this.width = window.innerWidth;
    },
    checkCartState() {
      if (screen.width < 1199) {
        this.updateModalState(false);
      } else {
        this.updateModalState(true);
      }
    },
  },
  created() {
    this.checkCartState();
    window.addEventListener("resize", this.updateWidth);
  },
  watch: {
    width(value) {
      if (value > 1199) {
        this.updateModalState(true);
      }
    },
    showCart() {
      if (this.showCart) {
        document.body.style.overflow = "hidden";
        return;
      }
      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style lang="scss">
main {
  display: flex;
  min-height: 100vh;
}

@media (max-width: 1199px) {
  .modal_animate-enter-active {
    animation: slideInDown 1s;
  }
  .modal_animate-leave-active {
    animation: slideOutUp 1s;
  }
  .main {
    margin-top: 81px;
  }
}

@keyframes slideInDown {
  0% {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    transform: translateZ(0);
  }
}

@keyframes slideOutUp {
  0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(0, -100%, 0);
    visibility: hidden;
  }
}
</style>
