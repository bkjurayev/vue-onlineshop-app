<!-- <template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg"/></swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>    
  </swiper>
  <swiper
    @swiper="
      () => {
        console.log('bekzod');
      }
    "
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg"/></swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide>    
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>    
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let thumbsSwiper = null;

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper = swiper;
      console.log("test");
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #eee;
}

.swiper {
  width: 100%;
  height: 300px;
  margin: 20px 0;
}
</style> -->
