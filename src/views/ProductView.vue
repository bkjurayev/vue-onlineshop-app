<template>
	<div class="product-view _container">
		
		<VBreadcrumbs/>
	
		<div class="product-view__product product">
			<div class="product__col images">
				<img :src="product.img" alt="Image">
			</div>
			<div class="product__col characteristic">
				<div class="product__title">{{product.title}}</div>
				<div class="product__views">17 ko'rildi</div>
				<div class="product__price">{{product.price}} sum</div>
				<div class="product__colors">
					<h3>Ranglar</h3>
					<div class="product__colors__column">						
						<div 
							class="product__colors__col"
							:class="{_active: productColor === color}"
							v-for="color in product.colors"
							:key="color"
							@click="selectProductColor(color)"
						>
							{{color}}
						</div>
						
					</div>
				</div>
				<div class="product__sizes">
					<h3>O'lchamlar</h3>
					<div class="product__sizes__column">
						
						<div 
							class="product__sizes__col"
							:class="{_active: productSize === size}"
							v-for="size in product.sizes"
							:key="size"
							@click="selectProductSize(size)"
						>
							{{size}}
						</div>
						
					</div>
				</div>
				<div class="product__btn">
					<div 
						class="product__btn__cart" 
						@click="createToCart"						
					>
						Savatga qo'shish
					</div>					
					<div class="product__btn__favorite">
						<font-awesome-icon icon="heart" class="favorites-header__icon"></font-awesome-icon>
					</div>
				</div>
				<div 
					class="product__btn-buy"
					@click="isOpenModal = !isOpenModal"
				>
					Bir clickda sotib olish
				</div>
			</div>
		</div>	
		<VModal 
			:isOpenModal="isOpenModal"
			@close="closeModal"
		>
			<h1>Hello</h1>
		</VModal>
	</div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from "vuex";
import VModal from '@/components/modal/v-modal.vue'
import VBreadcrumbs from '@/components/breadcrumbs/v-breadcrumbs.vue'

const route = useRoute()
const store = useStore()

const isOpenModal = ref(false)
const productColor = ref('')
const productSize = ref('')

const products = ref([
	{
		id: 0,
		title: "Leviosa",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 25000,
		img: require("../assets/img/sneakers/1.png"),
		oldprice: "30000",
		brand: "adidas",
		sizes: ['38', '41'],
		colors: ['blue'],
		gender: 'man',
		rating: ''
	},
	{
		id: 1,
		title: "Asiana",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 29000,
		img: require("../assets/img/sneakers/2.png"),
		oldprice: "30000",
		brand: "nike",
		sizes: ['39', '41'],
		colors: ['white'],
		gender: 'woman',
		rating: ''
	},
	{
		id: 2,
		title: "Syltherine",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 15000,
		img: require("../assets/img/sneakers/3.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['40', '39'],
		colors: ['pink'],
		gender: 'children',
		rating: ''
	},
	{
		id: 3,
		title: "UzKebab Syltherine",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 29000,
		img: require("../assets/img/sneakers/4.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '43'],
		colors: ['white', 'silver'],
		gender: 'man',
		rating: ''
	},
	{
		id: 4,
		title: "Leviosa",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 13000,
		img: require("../assets/img/sneakers/5.png"),
		oldprice: "",
		brand: "adidas",
		sizes: ['42', '38'],
		colors: ['pink', 'silver'],
		gender: 'woman',
		rating: ''
	},
	{
		id: 5,
		title: "Evos Leviosa",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 23000,
		img: require("../assets/img/sneakers/6.png"),
		oldprice: "",
		brand: "nike",
		sizes: ['43', '39'],
		colors: ['blue', 'black'],
		gender: 'children',
		rating: ''
	},
	{
		id: 6,
		title: "Lolito",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 20000,
		img: require("../assets/img/sneakers/7.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['38', '42'],
		colors: ['silver'],
		gender: 'man',
		rating: ''
	},
	{
		id: 7,
		title: "Famo Lolito",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 25000,
		img: require("../assets/img/sneakers/8.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['39', '43'],
		colors: ['pink'],
		gender: 'woman',
		rating: ''
	},
	{
		id: 8,
		title: "Respira",
		subtitle: "Minimalist fan",
		description: 'test',
		price: 11000,
		img: require("../assets/img/sneakers/9.png"),
		oldprice: "",
		brand: "adidas",
		sizes: ['40', '43'],
		colors: ['black', 'blue'],
		gender: 'children',
		rating: ''
	},
	{
		id: 9,
		title: "Elliz Respira",
		subtitle: "Minimalist fan",
		description: 'test',
		price: 24000,
		img: require("../assets/img/sneakers/10.png"),
		oldprice: "",
		brand: "nike",
		sizes: ['41', '38'],
		colors: ['pink', 'silver'],
		gender: 'man',
		rating: ''
	},
	{
		id: 10,
		title: "Syltherine",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 16000,
		img: require("../assets/img/sneakers/11.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['42', '39'],
		colors: ['white'],
		gender: 'woman',
		rating: ''
	},
	{
		id: 11,
		title: "Cten Syltherine",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 20000,
		img: require("../assets/img/sneakers/12.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['43', '38'],
		colors: ['pink'],
		gender: 'children',
		rating: ''
	},
	{
		id: 12,
		title: "Leviosa",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 10000,
		img: require("../assets/img/sneakers/1.png"),
		oldprice: "12000",
		brand: "adidas",
		sizes: ['38', '41'],
		colors: ['blue', 'black'],
		gender: 'man',
		rating: ''
	},
	{
		id: 13,
		title: "Beta Leviosa",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 13000,
		img: require("../assets/img/sneakers/2.png"),
		oldprice: "",
		brand: "nike",
		sizes: ['39', '40'],
		colors: ['pink', 'silver'],
		gender: 'woman',
		rating: ''
	},
	{
		id: 14,
		title: "Molito Yalla",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 5500,
		img: require("../assets/img/sneakers/3.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['40', '39'],
		colors: ['white', 'blue'],
		gender: 'children',
		rating: ''
	},
	{
		id: 15,
		title: "Yalla Lolito",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/sneakers/4.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'man',
		rating: ''
	},
]);
const product = ref(products.value.find(item => item.id === parseInt(route.params?.slug)))
const productForCart = {}

const closeModal = () => {
	isOpenModal.value = false
}
const selectProductColor = (val) => {
	productColor.value = val
}
const selectProductSize = (val) => {
	productSize.value = val
}

const createToCart = () => {
	const res = product.value
	if (productColor.value != '' && productSize.value != '') {
		res['selectedColor'] = productColor.value 
		res['selectedSize'] = productSize.value 
		res['quantity'] = 1 
		store.commit('createToCart', res)
	} else {
		alert("Iltimos rang va o'lchamni tanlang")
	}
}

watch(
	() => isOpenModal.value,
	(newValue) => {
		if (newValue == true) {
			document.body.classList = '_lock'
			document.addEventListener("keyup", closeModal);
		} else {
			// document.addEventListener("keyup", closeModal)
			document.body.classList = ''
		}
	}
)
watch(
	() => parseInt(route.params?.slug),
	(newValue) => {
		product.value = products.value.find(item => item.id === newValue)
	}
)
</script>


<style lang="scss">
.product-view {
	margin-top: 140px;	
}
.categories {
	&__column {
		display: flex;
		margin-bottom: 50px;
		justify-content: center;
	}
	&__col {
		color: rgb(39, 39, 39);
		font-weight: 600;
	}
	&__col:not(:last-child) {
		margin-right: 20px;			
	}
}
.product {
	display: flex;
	div {
		color: #3A3A3A;
		font-weight: 600;
		margin-bottom: 20px;
	}
	&__title {
		color: #000;
		font-size: 34px;
	}	
	&__views {
		line-height: 20px;
		display: inline-flex;	
		border-bottom: 1px dashed;
	}
	&__price {
		padding-bottom: 30px;
	}
	&__colors {
		&__column {
			display: flex;
			justify-content: flex-start;
		}
		&__col {
			margin: 10px 0;
			padding: 4px 6px;
			font-size: 14px;
			cursor: pointer;
			margin-right: 10px;
			border: 1px solid #3A3A3A;
			&._active {
				background-color: #00b305;
			}
		}
	}
	&__sizes {
		&__column {
			display: flex;
			justify-content: flex-start;
		}
		&__col {
			padding: 8px;
			margin: 10px 0;
			font-size: 14px;
			cursor: pointer;
			margin-right: 10px;
			color: #fff!important;
			background-color: #000;
			border: 1px solid #fff;
			box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 30%);
			&._active {
				background-color: #00b305;
			}
		}
	}
	&__btn {
		display: flex;
		&__cart {
			font-size: 14px;
			cursor: pointer;
			margin-right: 20px;
			padding: 12px 40px;
			align-items: center;
			display: inline-flex;
			color: #fff!important;
			background-color: #000;
		}
		&__favorite {			
			display: flex;
			cursor: pointer;
			padding: 0 12px;
			align-items: center;
			border: 1px solid #000;			
		}
	}
	&__btn-buy {
		font-size: 14px;
		cursor: pointer;
		margin-right: 20px;
		padding: 12px 40px;
		align-items: center;
		display: inline-flex;
		color: #fff!important;
		background-color: #000;
	}
}	
.images {
	flex: 0 1 65%;
	padding: 0 40px;
	img {
		width: 100%;
	}
}
.characteristic {
	flex: 1 1 auto;
}
</style>