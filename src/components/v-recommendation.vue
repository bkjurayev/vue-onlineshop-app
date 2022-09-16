<template>
  <section class="page__tips tips">
    <div class="tips__container _container">
      <div class="tips__title _main-title">
        <h1>Nozik didlilar uchun</h1>
      </div>
      <div class="tips__slider slider-tips">
        <div class="slider-tips__body _swiper">
          <swiper
            :modules="modules"
            :slidesPerView="3"
            :spaceBetween="32"
            :loop="true"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="{
              '300': {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              '400': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '640': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              '991.98': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }"
            class="mySwiper"
          >
          <template v-for="product in products" :key="product.id">
              <swiper-slide v-if="product.type === 'special'">
                <div class="slider-tips__slide tips-slide">
                  <div class="tips-slide__img _ibg">
                    <router-link :to="{ name: 'Product', params: { slug: product.id } }">
                      <img :src="product.img" alt="Images" />
                    </router-link>
                  </div>
                  <div class="tips-slide__content">
                    <router-link :to="{ name: 'Product', params: { slug: product.id } }">
                      <h1 class="tips-slide__content__title">
                        {{ product.title }}
                      </h1>
                      <p class="tips-slide__content__date">20 jan 2020</p>
                    </router-link>
                  </div>
                </div>
              </swiper-slide>
            </template>>  
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import useProducts from "../composables/products";

// import Swiper core and required modules
import { EffectFade } from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {};

    onMounted(() => {
      // if (!isLoaded.value) fetchEvents();
      fetchProducts()
    });
    const { isLoading, fetchProducts, products } = useProducts();

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, EffectFade],
      products,
    };
  },
};
</script>

<style lang="scss" scope>
.slider-tips {
  .swiper {
    position: inherit;
  }
  .swiper-initialized {
    padding: 22px 0;
  }
  .swiper-pagination {
    bottom: 2px;
    justify-content: center;
  }
}
</style>
