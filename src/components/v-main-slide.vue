<template>
  <section class="page__main-slider main-slider">
    <div class="main-slider__container _container">
      <div class="main-slider__body">
        <!-- Slider main content -->
        <div class="main-slider__content content-main">
          <div class="content-main__title">
            Eng yaxshilari faqat siz uchun!
          </div>
          <div class="content-main__text">
            Endi do'konma do'kon yurib qimmatli vaqtingizni yo'qotishga hojat yo'q.
            Tanlang biz siz uchun yetkazib beramiz!
          </div>
          <a
            href=""
            data-da=".main-slider__body,991.98"
            class="content-main__btn _btn-orange"
            >Shop Now</a
          >
        </div>
        <div class="main-slider__slider slider-main">
          <div class="slider-main__body _swiper">
            <swiper
              :modules="modules"
              :slidesPerView="1"
              :spaceBetween="20"
              :loop="true"
              :loopFillGroupWithBlank="true"
              :breakpoints="{
                '300': {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },                
              }"
              navigation
              class="mySwiper"
            >
              <swiper-slide>
                <div class="slider-main__slide">
                  <div class="slider-main__image _igb">
                    <img
                      :src="require('../assets/img/main-slider/09.jpg')"
                      alt=""
                    />
                  </div>
                  <a
                    href=""
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-x="-100%"
                    class="slider-main__content"
                  >
                    <div class="slider-main__title">Bohauss</div>
                    <div class="slider-main__text">Luxury big sofa 2-seat</div>
                    <div class="slider-main__price icon-next-content">
                      Rp 17.000.000
                    </div>
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="slider-main__slide">
                  <div class="slider-main__image _igb">
                    <img
                      :src="require('../assets/img/main-slider/010.jpg')"
                      alt=""
                    />
                  </div>
                  <a
                    href=""
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-x="-100%"
                    class="slider-main__content"
                  >
                    <div class="slider-main__title">Bohauss</div>
                    <div class="slider-main__text">Luxury big sofa 2-seat</div>
                    <div class="slider-main__price icon-next-content">
                      Rp 17.000.000
                    </div>
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="slider-main__slide">
                  <div class="slider-main__image _igb">
                    <img
                      :src="require('../assets/img/main-slider/011.jpg')"
                      alt=""
                    />
                  </div>
                  <a
                    href=""
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-x="-100%"
                    class="slider-main__content"
                  >
                    <div class="slider-main__title">Bohauss</div>
                    <div class="slider-main__text">Luxury big sofa 2-seat</div>
                    <div class="slider-main__price icon-next-content">
                      Rp 17.000.000
                    </div>
                  </a>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, EffectFade],
    };
  },
};
</script>

<style lang="scss" scope>
.slider-main {
  .swiper-slide-active {
    .slider-main__content {
      transition: opacity 1s ease;
    }
  }
  .swiper-slide-next {
    .slider-main__content {
      opacity: 0;
    }
  }
  .swiper-slide-prev {
    .slider-main__content {
      opacity: 0;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 22px;
  }
  .swiper-button-prev {
    right: 52px;
    left: auto;
  }
  &__slide,
  &__image {
    height: 100%;
  }
  &__image {
    img {
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
