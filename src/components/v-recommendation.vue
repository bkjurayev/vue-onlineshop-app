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
						class="mySwiper"
					>
						<swiper-slide>
							<div class="slider-tips__slide tips-slide">
								<div class="tips-slide__img _ibg">
									<img :src="require('../assets/img/sushi-images/tips-slider/1.jpg')" alt="Images" />
								</div>
								<div class="tips-slide__content">
									<h1 class="tips-slide__content__title">
										How to create a living room to love
									</h1>
									<p class="tips-slide__content__date">20 jan 2020</p>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slider-tips__slide tips-slide">
								<div class="tips-slide__img _ibg">
									<img :src="require('../assets/img/sushi-images/tips-slider/2.jpg')" alt="Images" />
								</div>
								<div class="tips-slide__content">
									<h1 class="tips-slide__content__title">
										How to create a living room to love
									</h1>
									<p class="tips-slide__content__date">20 jan 2020</p>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slider-tips__slide tips-slide">
								<div class="tips-slide__img _ibg">
									<img :src="require('../assets/img/sushi-images/tips-slider/3.jpg')" alt="Images" />
								</div>
								<div class="tips-slide__content">
									<h1 class="tips-slide__content__title">
										How to create a living room to love
									</h1>
									<p class="tips-slide__content__date">20 jan 2020</p>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slider-tips__slide tips-slide">
								<div class="tips-slide__img _ibg">
									<img :src="require('../assets/img/sushi-images/tips-slider/4.jpg')" alt="Images" />
								</div>
								<div class="tips-slide__content">
									<h1 class="tips-slide__content__title">
										How to create a living room to love
									</h1>
									<p class="tips-slide__content__date">20 jan 2020</p>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slider-tips__slide tips-slide">
								<div class="tips-slide__img _ibg">
									<img :src="require('../assets/img/sushi-images/tips-slider/5.jpg')" alt="Images" />
								</div>
								<div class="tips-slide__content">
									<h1 class="tips-slide__content__title">
										How to create a living room to love
									</h1>
									<p class="tips-slide__content__date">20 jan 2020</p>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slider-tips__slide tips-slide">
								<div class="tips-slide__img _ibg">
									<img :src="require('../assets/img/sushi-images/tips-slider/6.jpg')" alt="Images" />
								</div>
								<div class="tips-slide__content">
									<h1 class="tips-slide__content__title">
										How to create a living room to love
									</h1>
									<p class="tips-slide__content__date">20 jan 2020</p>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slider-tips__slide tips-slide">
								<div class="tips-slide__img _ibg">
									<img :src="require('../assets/img/sushi-images/tips-slider/7.jpg')" alt="Images" />
								</div>
								<div class="tips-slide__content">
									<h1 class="tips-slide__content__title">
										How to create a living room to love
									</h1>
									<p class="tips-slide__content__date">20 jan 2020</p>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slider-tips__slide tips-slide">
								<div class="tips-slide__img _ibg">
									<img :src="require('../assets/img/sushi-images/tips-slider/8.jpg')" alt="Images" />
								</div>
								<div class="tips-slide__content">
									<h1 class="tips-slide__content__title">
										How to create a living room to love
									</h1>
									<p class="tips-slide__content__date">20 jan 2020</p>
								</div>
							</div>
						</swiper-slide>
					</swiper>
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
		const onSwiper = (swiper) => {};
		const onSlideChange = () => {};
		return {
			onSwiper,
			onSlideChange,
			modules: [Navigation, Pagination, Scrollbar, A11y, EffectFade],
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