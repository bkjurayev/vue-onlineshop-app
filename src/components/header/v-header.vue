<template>
	<header ref="observer" class="header" :class="{_scroll: scrolledHeader}">
		<div class="header__wrapper">
			<div class="header__container _container">
				<div class="header__body">
					<div class="header__main">
						<div class="header__main__logo">
							<router-link to="/"><h1>RIZO.</h1></router-link>
						</div>
						<div 
							class="header__main__menu menu"
							:class="{_active: showMenuBurger}"
						>
							<nav class="menu__body">
								<ul data-spollers="768,max" class="menu__list">
									<li class="menu__item">
										<router-link 
											:to="{name: 'Products', params: {slug: 'woman'}}" 										
											class="menu__link"
										>
											Ayollar
										</router-link>
									</li>
									<li class="menu__item">
										<router-link 
											:to="{name: 'Products', params: {slug: 'man'}}" 										
											class="menu__link"
										>
											Erkaklar
										</router-link>											
									</li>
									<li class="menu__item">
										<router-link 
											:to="{name: 'Products', params: {slug: 'children'}}" 										
											class="menu__link"
										>
											Bolalar
										</router-link>											
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="header__search">
						<font-awesome-icon
							icon="magnifying-glass"
							class="header__search__icon icon-md"
							@click="showSearchInput = !showSearchInput"
						></font-awesome-icon>
						<div 
							class="header__search__form search-form"
							:class="{_active: showSearchInput, _scrolled: scrolledHeader}"
						>
							<font-awesome-icon
								icon="magnifying-glass"
								class="header__search__icon"
							></font-awesome-icon>
							<input
								type="text"
								placeholder="Search for minimalist chair"
								class="search-form__input"
								v-model="searchQuery"
								@keyup.enter="onSearchInput"
							/>
							<div v-if="onInputSearchQuery" class="res-search">
								<div 
									v-for="item in onInputSearchQuery" 
									:key="item.id"
									class="res-search__item"									
								>
									<router-link 
										:to="{name: 'Product', params: {slug: item.id}}" 
										v-if="item.id <= 9"
									>
										<img :src="item.img" class="res-search__img" alt="">
										<span class="res-search__title">{{item.title}}</span>
										<span class="res-search__price">{{item.price}} sum</span>
									</router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="header__actions">
						<VFavorite/>
						
						<VCart/>

						<div class="header__actions__item user">
							<a href=""><img :src="require('../../assets/img/avatar.jpg')" alt="" /></a>
						</div>
					</div>
					<div class="header__menu-icon">
						<div 
							@click="showMenuBurger = !showMenuBurger"
							class="icon-menu"
							:class="{_active: showMenuBurger}"
						>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { onMounted } from 'vue'
import { ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'
import { computed, watch } from '@vue/runtime-core';

import VCart from '@/components/header/v-cart.vue'
import VFavorite from '@/components/header/v-favorite.vue'

const route = useRoute() 
const router = useRouter() 
const { x, y } = useWindowScroll()

const scrolledHeader = computed(() => {
	if (y.value >= 80) {
		return true
	}
})

const showMenuBurger = ref(false)
const showSearchInput = ref(false)
const searchQuery = ref('')
const products = ref([
	{
		id: 0,
		title: "Leviosa",
		subtitle: "Stylish cafe chair",
		price: "25000",
		img: require("../../assets/img/sneakers/1.png"),
		oldprice: "30000",
		brand: "Evos",
	},
	{
		id: 1,
		title: "Asiana",
		subtitle: "Stylish cafe chair",
		price: "29000",
		img: require("../../assets/img/sneakers/2.png"),
		oldprice: "30000",
		brand: "Evos",
	},
	{
		id: 2,
		title: "Syltherine",
		subtitle: "Stylish cafe chair",
		price: "15000",
		img: require("../../assets/img/sneakers/3.png"),
		oldprice: "",
		brand: "Uzkebab",
	},
	{
		id: 3,
		title: "UzKebab Syltherine",
		subtitle: "Stylish cafe chair",
		price: "29000",
		img: require("../../assets/img/sneakers/4.png"),
		oldprice: "",
		brand: "Uzkebab",
	},
	{
		id: 4,
		title: "Leviosa",
		subtitle: "Stylish cafe chair",
		price: "13000",
		img: require("../../assets/img/sneakers/5.png"),
		oldprice: "",
		brand: "Chopar",
	},
	{
		id: 5,
		title: "Evos Leviosa",
		subtitle: "Stylish cafe chair",
		price: "23000",
		img: require("../../assets/img/sneakers/6.png"),
		oldprice: "",
		brand: "Chopar",
	},
	{
		id: 6,
		title: "Lolito",
		subtitle: "Stylish cafe chair",
		price: "20000",
		img: require("../../assets/img/sneakers/7.png"),
		oldprice: "",
		brand: "Les aylas",
	},
	{
		id: 7,
		title: "Famo Lolito",
		subtitle: "Stylish cafe chair",
		price: "25000",
		img: require("../../assets/img/sneakers/8.png"),
		oldprice: "",
		brand: "Les aylas",
	},
	{
		id: 8,
		title: "Respira",
		subtitle: "Minimalist fan",
		price: "11000",
		img: require("../../assets/img/sneakers/9.png"),
		oldprice: "",
		brand: "Bellasimo",
	},
	{
		id: 9,
		title: "Elliz Respira",
		subtitle: "Minimalist fan",
		price: "24000",
		img: require("../../assets/img/sneakers/10.png"),
		oldprice: "",
		brand: "Bellasimo",
	},
	{
		id: 10,
		title: "Syltherine",
		subtitle: "Stylish cafe chair",
		price: "16000",
		img: require("../../assets/img/sneakers/11.png"),
		oldprice: "",
		brand: "Iris",
	},
	{
		id: 11,
		title: "Cten Syltherine",
		subtitle: "Stylish cafe chair",
		price: "20000",
		img: require("../../assets/img/sneakers/12.png"),
		oldprice: "",
		brand: "Iris",
	},
	{
		id: 12,
		title: "Leviosa",
		subtitle: "Stylish cafe chair",
		price: "9000",
		img: require("../../assets/img/sneakers/1.png"),
		oldprice: "12000",
		brand: "Alibaba",
	},
	{
		id: 13,
		title: "Beta Leviosa",
		subtitle: "Stylish cafe chair",
		price: "13000",
		img: require("../../assets/img/sneakers/2.png"),
		oldprice: "",
		brand: "Alibaba",
	},
	{
		id: 14,
		title: "Molito Yalla",
		subtitle: "Stylish cafe chair",
		price: "8000",
		img: require("../../assets/img/sneakers/3.png"),
		oldprice: "",
		brand: "Yalla",
	},
	{
		id: 15,
		title: "Yalla Lolito",
		subtitle: "Stylish cafe chair",
		price: "14000",
		img: require("../../assets/img/sneakers/4.png"),
		oldprice: "",
		brand: "Yalla",
	},
]);
const resSearch = ref([])
const observerRef = ref(null)

const onSearchInput = (e) => {
	router.push({name: 'Products', params: {slug: e.target.value}})
	searchQuery.value = ''
}

const onInputSearchQuery = computed(() => {
	if (searchQuery.value != '') {
		return products.value.filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
	}
})

const hideHandler = (event) => {	 
	 if (event.target.className != 'search-form__input') {
        searchQuery.value = ''
    }
};

onMounted(() => {
	document.addEventListener('click', hideHandler)
})

</script>



<style lang="scss">
	.res-search {
		top: 100%;
		left: 0;
		right: 0;
		position: absolute;
		background-color: #fff;
		box-shadow: 0px 14px 12px -8px rgb(0 0 0 / 25%);
		&__item {
			padding: 0 15px;
			margin-bottom: 10px;
			a {
				color: #000;				
				display: flex;
				align-items: center;
				justify-content: space-between;
			}			
			&:hover {
				background-color: rgb(229, 229, 229);
			}
		}
		&__img {
			max-width: 60px;
		}		
	}	
	.search-form {
		position: relative;
	}
</style>