<template>
	<section class="page__rooms rooms">
		<div class="rooms__container _container">
			<div class="rooms__wrapper">
				<div class="rooms__body body-rooms">
					<h1 class="body-rooms__title">50+ mahsulot tavsiya qilish </h1>
					<p class="body-rooms__description">
						Biz sizga yangi ko'rinish yaratishda tavsiyalar beramiz!
					</p>
					<div class="body-rooms__btn">
						<a href="" class="_btn-orange">Ko'proq bilish...</a>
					</div>
				</div>
				<div class="rooms__slider slider-rooms">
					<div class="slider-rooms__body _swiper">
						<swiper
							:modules="modules"
							:slidesPerView="2"
							:spaceBetween="32"
							:loop="true"
							:pagination="{
								clickable: true,
							}"
							navigation
							class="mySwiper"
						>
							<swiper-slide>
								<div class="slider-rooms__slide rooms-slide">
									<div class="rooms-slide__img _ibg">
										<img
											:src="require('../assets/img/sushi-images/rooms-slider/1.jpg')"
											alt="Image"
										/>
									</div>
									<div
										class="rooms-slide__content"
										data-swiper-parallax-opacity="0"
										data-swiper-parallax-x="-100%"
									>
										<div class="rooms-slide__label label">
											<span class="label__number">01</span>
											<span class="label__line"></span>
											<span class="label__text">Bed Room</span>
										</div>
										<h2 class="rooms-slide__title">Inner Peace</h2>
										<a href="" class="rooms-slide__icon icon-next-content"></a>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-rooms__slide rooms-slide">
									<div class="rooms-slide__img _ibg">
										<img
											:src="require('../assets/img/sushi-images/rooms-slider/4.jpg')"
											alt="Image"
										/>
									</div>
									<div
										class="rooms-slide__content"
										data-swiper-parallax-opacity="0"
										data-swiper-parallax-x="-100%"
									>
										<div class="rooms-slide__label label">
											<span class="label__number">03</span>
											<span class="label__line"></span>
											<span class="label__text">Bed Room</span>
										</div>
										<h2 class="rooms-slide__title">Inner Peace</h2>
										<a href="" class="rooms-slide__icon icon-next-content"></a>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-rooms__slide rooms-slide">
									<div class="rooms-slide__img _ibg">
										<img
											:src="require('../assets/img/sushi-images/rooms-slider/3.jpg')"
											alt="Image"
										/>
									</div>
									<div
										class="rooms-slide__content"
										data-swiper-parallax-opacity="0"
										data-swiper-parallax-y="-100%"
									>
										<div class="rooms-slide__label label">
											<span class="label__number">03</span>
											<span class="label__line"></span>
											<span class="label__text">Bed Room</span>
										</div>
										<h2 class="rooms-slide__title">Inner Peace</h2>
										<a href="" class="rooms-slide__icon icon-next-content"></a>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-rooms__slide rooms-slide">
									<div class="rooms-slide__img _ibg">
										<img
											:src="require('../assets/img/sushi-images/rooms-slider/5.jpg')"
											alt="Image"
										/>
									</div>
									<div
										class="rooms-slide__content"
										data-swiper-parallax-opacity="0"
										data-swiper-parallax-x="-100%"
									>
										<div class="rooms-slide__label label">
											<span class="label__number">01</span>
											<span class="label__line"></span>
											<span class="label__text">Bed Room</span>
										</div>
										<h2 class="rooms-slide__title">Inner Peace</h2>
										<a href="" class="rooms-slide__icon icon-next-content"></a>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-rooms__slide rooms-slide">
									<div class="rooms-slide__img _ibg">
										<img
											:src="require('../assets/img/sushi-images/rooms-slider/2.jpg')"
											alt="Image"
										/>
									</div>
									<div
										class="rooms-slide__content"
										data-swiper-parallax-opacity="0"
										data-swiper-parallax-x="-100%"
									>
										<div class="rooms-slide__label label">
											<span class="label__number">01</span>
											<span class="label__line"></span>
											<span class="label__text">Bed Room</span>
										</div>
										<h2 class="rooms-slide__title">Inner Peace</h2>
										<a href="" class="rooms-slide__icon icon-next-content"></a>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-rooms__slide rooms-slide">
									<div class="rooms-slide__img _ibg">
										<img
											:src="require('../assets/img/sushi-images/rooms-slider/6.jpg')"
											alt="Image"
										/>
									</div>
									<div
										class="rooms-slide__content"
										data-swiper-parallax-opacity="0"
										data-swiper-parallax-x="-100%"
									>
										<div class="rooms-slide__label label">
											<span class="label__number">01</span>
											<span class="label__line"></span>
											<span class="label__text">Bed Room</span>
										</div>
										<h2 class="rooms-slide__title">Inner Peace</h2>
										<a href="" class="rooms-slide__icon icon-next-content"></a>
									</div>
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
	.slider-rooms {
		.swiper-slide-active {
			.rooms-slide__img {
				min-height: 600px;
			}
			.rooms-slide__content {
				transition: opacity 1s ease;
			}
		}
		.swiper-slide-next {
			.rooms-slide__img {
				min-height: 500px;
			}
			.rooms-slide__content {
				opacity: 0;
			}
		}
		.swiper-slide-prev {		
			.rooms-slide__content {
				opacity: 0;
			}
		}
		.swiper-button-prev {
			display: none;
		}
		.swiper-pagination {
			padding-right: 200px;
		}	
	}
</style>