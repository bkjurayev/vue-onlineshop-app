<template>
	<VMainSlide />
	<VAdvantages />

	<section class="page__products products">
		<div class="products__container _container">
			<div class="products__header _main-title">
				<h1>Ommabop mahsulotlar</h1>
			</div>
			<div class="products__body">
				<VProductList :items="products" />

				<div class="products__bottom-btn">
					<router-link to="/products" class="_btn-white">Barchasini...</router-link>
				</div>
			</div>
		</div>
	</section>
	<VPopularProducts />
	<VRecommendation />
	<VGallery />
</template>

<script setup>
import { ref } from 'vue'

import VMainSlide from "@/components/v-main-slide.vue";
import VAdvantages from "@/components/v-advantages.vue";
import VProductList from "@/components/products-view/v-product-list.vue";
import VPopularProducts from "@/components/v-popular-products.vue";
import VRecommendation from "@/components/v-recommendation.vue";
import VGallery from "@/components/v-gallery.vue";

const products = ref([
	{
		id: 0,
		title: "Leviosa",
		subtitle: "Stylish cafe chair",
		price: 25000,
		img: require("../assets/img/sneakers/1.png"),
		oldprice: 30000,
		brand: "adidas",
		sizes: ['38', '41'],
		colors: ['blue'],
	},
	{
		id: 1,
		title: "Asiana",
		subtitle: "Stylish cafe chair",
		price: 29000,
		img: require("../assets/img/sneakers/2.png"),
		oldprice: 30000,
		brand: "nike",
		sizes: ['39', '41'],
		colors: ['white'],
	},
	{
		id: 2,
		title: "Syltherine",
		subtitle: "Stylish cafe chair",
		price: 15000,
		img: require("../assets/img/sneakers/3.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['40', '39'],
		colors: ['pink'],
	},
	{
		id: 3,
		title: "UzKebab Syltherine",
		subtitle: "Stylish cafe chair",
		price: 29000,
		img: require("../assets/img/sneakers/4.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '43'],
		colors: ['white', 'silver'],
	},
	{
		id: 4,
		title: "Leviosa",
		subtitle: "Stylish cafe chair",
		price: 13000,
		img: require("../assets/img/sneakers/5.png"),
		oldprice: "",
		brand: "adidas",
		sizes: ['42', '38'],
		colors: ['pink', 'silver'],
	},
	{
		id: 5,
		title: "Evos Leviosa",
		subtitle: "Stylish cafe chair",
		price: 23000,
		img: require("../assets/img/sneakers/6.png"),
		oldprice: "",
		brand: "nike",
		sizes: ['43', '39'],
		colors: ['blue', 'black'],
	},
	{
		id: 6,
		title: "Lolito",
		subtitle: "Stylish cafe chair",
		price: 20000,
		img: require("../assets/img/sneakers/7.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['38', '42'],
		colors: ['silver'],
	},
	{
		id: 7,
		title: "Famo Lolito",
		subtitle: "Stylish cafe chair",
		price: 25000,
		img: require("../assets/img/sneakers/8.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['39', '43'],
		colors: ['pink'],
	},
	{
		id: 8,
		title: "Respira",
		subtitle: "Minimalist fan",
		price: 11000,
		img: require("../assets/img/sneakers/9.png"),
		oldprice: "",
		brand: "adidas",
		sizes: ['40', '43'],
		colors: ['black', 'blue'],
	},
	{
		id: 9,
		title: "Elliz Respira",
		subtitle: "Minimalist fan",
		price: 24000,
		img: require("../assets/img/sneakers/10.png"),
		oldprice: "",
		brand: "nike",
		sizes: ['41', '38'],
		colors: ['pink', 'silver'],
	},
	{
		id: 10,
		title: "Syltherine",
		subtitle: "Stylish cafe chair",
		price: 16000,
		img: require("../assets/img/sneakers/11.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['42', '39'],
		colors: ['white'],
	},
	{
		id: 11,
		title: "Cten Syltherine",
		subtitle: "Stylish cafe chair",
		price: 20000,
		img: require("../assets/img/sneakers/12.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['43', '38'],
		colors: ['pink'],
	},
	{
		id: 12,
		title: "Leviosa",
		subtitle: "Stylish cafe chair",
		price: 10000,
		img: require("../assets/img/sneakers/1.png"),
		oldprice: 12000,
		brand: "adidas",
		sizes: ['38', '41'],
		colors: ['blue', 'black'],
	},
	{
		id: 13,
		title: "Beta Leviosa",
		subtitle: "Stylish cafe chair",
		price: 13000,
		img: require("../assets/img/sneakers/2.png"),
		oldprice: "",
		brand: "nike",
		sizes: ['39', '40'],
		colors: ['pink', 'silver'],
	},
	{
		id: 14,
		title: "Molito Yalla",
		subtitle: "Stylish cafe chair",
		price: 5500,
		img: require("../assets/img/sneakers/3.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['40', '39'],
		colors: ['white', 'blue'],
	},
	{
		id: 15,
		title: "Yalla Lolito",
		subtitle: "Stylish cafe chair",
		price: 14000,
		img: require("../assets/img/sneakers/4.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
	},
]);
</script>
