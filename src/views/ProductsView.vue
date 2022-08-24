<template>
	<div class="_container products-view-page">
		<div class="section-filter">
			<div class="section-filter__sort">
				<div class="title">Sorting</div>				

				<select name="sorting" v-model="selectedSort">
					<option value="title">Title</option>
					<option value="price">Price</option>
				</select>
				
			</div>	
			<div class="section-filter__brand">
				<div class="title">Brand</div>				
				<label 
					class="checkbox"
					v-for="b in brands"
					:key="b"
				>
					<input type="checkbox" :value="b" v-model="selectedBrand">
					<Transition>
						<font-awesome-icon icon="check" v-if="ifSelectFilterOption(selectedBrand, b)" class="checkbox__icon"/>
					</Transition>
					<span>{{b}}</span>
				</label>
			</div>
			<div class="section-filter__size">
				<div class="title">Size</div>
				<label 
					class="checkbox"
					v-for="s in sizes"
					:key="s"
				>
					<Transition>
						<font-awesome-icon icon="check" v-if="ifSelectFilterOption(selectedSize, s)" class="checkbox__icon"/>
					</Transition>	
					<input type="checkbox" :value="s" v-model="selectedSize">
					<span>{{s}}</span>
				</label>
			</div>
			<div class="section-filter__color">
				<div class="title">Color</div>
				<label 
					class="checkbox"
					v-for="c in colors"
					:key="c"
				>
					<Transition>
						<font-awesome-icon icon="check" v-if="ifSelectFilterOption(selectedColor, c)" class="checkbox__icon"/>
					</Transition>	
					<input type="checkbox" :value="c" v-model="selectedColor">
					<span>{{c}}</span>
				</label>
			</div>					
			<fieldset class="filter-price">
				<div class="price-field">
					<input
						type="range"
						min="5000"
						max="30000"
						id="lower"
						v-model.number="minPrice"
						@change="controllRange"
					/>
					<input
						type="range"
						min="5000"
						max="30000"
						id="upper"
						v-model.number="maxPrice"
						@change="controllRange"
					/>
				</div>
				<div class="price-wrap">
					<button class="clear-price" @click="onClearPriceList">Clear</button>
					<div class="price-container">
						<div class="price-wrap-1">
							<label for="one">{{ minPrice }}$</label>
							<!-- <input id="one"/> -->
						</div>
						<div class="price-wrap_line">-</div>
						<div class="price-wrap-2">
							<label for="two">{{ maxPrice }}$</label>
							<!-- <input id="two"/> -->
						</div>
					</div>
				</div>
			</fieldset>
		</div>
		<VProductList :items="sortedProductsGender" />
	</div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import VProductList from "@/components/products-view/v-product-list.vue";

const route = useRoute();
const slug = ref(route.params.slug);

const brands = ['adidas', 'nike', 'puma', 'armani']
const colors = ['black', 'blue', 'white', 'silver', 'pink']
const sizes = ['38', '39', '40', '41', '42', '43',]

const selectedBrand = ref([])
const selectedColor = ref([])
const selectedSize = ref([])
const selectedSort = ref('title')
const minPrice = ref(5000);
const maxPrice = ref(30000);

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

const sortedProducts = computed(() => {
	if (selectedSort.value === 'title') {
		return [...filteredByPrice.value].sort((item1, item2) => 
		item1[selectedSort.value.toLowerCase()]?.localeCompare(
			item2[selectedSort.value.toLowerCase()]
		))								
	} else if (selectedSort.value === 'price') {
		return [...filteredByPrice.value].sort((a, b) => a.price - b.price)
	} else {
		return filteredByPrice.value
	}	
});
const sortedProductsGender = computed(() => {
	if (!route.params?.slug) {
		return sortedProducts.value
	} else {		
		return [...sortedProducts.value].filter(item => item.gender === route.params?.slug)		
	}
});

// start filter
const filteredProductsForBrand = computed(() => {	
	if (selectedBrand.value.length > 0) {
		const res = []
		selectedBrand.value.forEach(element => {
			res.push(products.value.filter(item => item.brand === element))
		});
		return res.reduce((oldValue, newValue, index,) => {
			return [...oldValue, ...newValue]
		})
	} else {
		return products.value;
	}
});
const filteredBySize = computed(() => {
	if (selectedSize.value.length > 0) {
		const res = []
		selectedSize.value.forEach(size => {
			filteredProductsForBrand.value.forEach(item => {
				if (item.sizes.find(el => el === size)) {
					res.push(item)
				}
			})
		})
		return res
	} else {
		return filteredProductsForBrand.value
	}
})
const filteredByColor = computed(() => {
	if (selectedColor.value.length > 0) {
		const res = []
		selectedColor.value.forEach(color => {
			filteredBySize.value.forEach(item => {
				if (item.colors.find(el => el === color)) {
					res.push(item)					
				}
			})
		})
		return res
	} else {
		return filteredBySize.value
	}
})
const filteredByPrice = computed(() => {
	if (minPrice.value < maxPrice.value) {
		return filteredByColor.value.filter(
			(item) => item.price >= minPrice.value && item.price <= maxPrice.value
		);
	} else {
		return filteredByColor.value;
	}
});

const ifSelectFilterOption = (filter, val) => {
	if (filter.length == 0) {
		return false
	} else {
		return filter.find(item => item === val)	
	}
}
const controllRange = () => {
	if (minPrice.value > maxPrice.value) {
		let res = minPrice.value;
		minPrice.value = maxPrice.value;
		maxPrice.value = res;
	}
};
const onClearPriceList = () => {
	minPrice.value = 5000;
	maxPrice.value = 30000;
};
</script>



<style lang="scss" scoped>
.products-view-page {
	display: flex;
	padding-top: 150px;
}
.section-filter {
	color: black;
	flex: 0 1 20%;
	&__brand,
	&__size,
	&__color,
	&__sort {
		display: flex;
		flex-direction: column;
		.title {
			font-size: 18px;
			font-weight: 600;
			margin: 30px 0;
		}
		.checkbox {
			padding-left: 14px;
			margin: 0 0 20px 20px;
			position: relative;
			input {
				opacity: 0;
			}			
			&::before {
				content: '';
				top: 0;
				left: 0;
				width: 18px;
				height: 18px;
				cursor: pointer;
				position: absolute;
				border: 2px solid #cdcdcd;
			}
			&__icon {
				top: 0;
				left: 0;
				width: 18px;
				height: 18px;
				cursor: pointer;
				position: absolute;
			}
		}
	}
	/* we will explain what these classes do next! */
	.v-enter-active,
	.v-leave-active {
	transition: opacity 0.5s ease;
	}
	.v-enter-from,
	.v-leave-to {
	opacity: 0;
	}
}
.products__column {
	flex: 1 1 auto;
}

//===============================================
// Price range
//===============================================
.filter-price {
	width: 220px;
	border: 0;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.price-title {
	position: relative;
	color: #fff;
	font-size: 14px;
	line-height: 1.2em;
	font-weight: 400;
	background: #d58e32;
	padding: 10px;
}

.price-container {
	padding: 5px;
	display: flex;
	margin-left: 25px;
	border: 1px solid #ccc;
}

.price-field {
	position: relative;
	width: 100%;
	height: 36px;
	box-sizing: border-box;
	padding-top: 15px;
	padding-left: 0px;
}

.price-field input[type="range"] {
	position: absolute;
}

/* Reset style for input range */

.price-field input[type="range"] {
	width: 100%;
	height: 7px;
	border: 1px solid #000;
	outline: 0;
	box-sizing: border-box;
	border-radius: 5px;
	pointer-events: none;
	-webkit-appearance: none;
}

.price-field input[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none;
}

.price-field input[type="range"]:active,
.price-field input[type="range"]:focus {
	outline: 0;
}

.price-field input[type="range"]::-ms-track {
	width: 188px;
	height: 2px;
	border: 0;
	outline: 0;
	box-sizing: border-box;
	border-radius: 5px;
	pointer-events: none;
	background: transparent;
	border-color: transparent;
	color: red;
	border-radius: 5px;
}

/* Style toddler input range */

.price-field input[type="range"]::-webkit-slider-thumb {
	/* WebKit/Blink */
	position: relative;
	-webkit-appearance: none;
	margin: 0;
	border: 0;
	outline: 0;
	border-radius: 50%;
	height: 10px;
	width: 10px;
	margin-top: -4px;
	background-color: #fff;
	cursor: pointer;
	cursor: pointer;
	pointer-events: all;
	z-index: 100;
}

.price-field input[type="range"]::-moz-range-thumb {
	/* Firefox */
	position: relative;
	appearance: none;
	margin: 0;
	border: 0;
	outline: 0;
	border-radius: 50%;
	height: 10px;
	width: 10px;
	margin-top: -5px;
	background-color: #fff;
	cursor: pointer;
	cursor: pointer;
	pointer-events: all;
	z-index: 100;
}

.price-field input[type="range"]::-ms-thumb {
	/* IE */
	position: relative;
	appearance: none;
	margin: 0;
	border: 0;
	outline: 0;
	border-radius: 50%;
	height: 10px;
	width: 10px;
	margin-top: -5px;
	background-color: #242424;
	cursor: pointer;
	cursor: pointer;
	pointer-events: all;
	z-index: 100;
}

/* Style track input range */

.price-field input[type="range"]::-webkit-slider-runnable-track {
	/* WebKit/Blink */
	width: 188px;
	height: 2px;
	cursor: pointer;
	background: #555;
	border-radius: 5px;
}

.price-field input[type="range"]::-moz-range-track {
	/* Firefox */
	width: 188px;
	height: 2px;
	cursor: pointer;
	background: #242424;
	border-radius: 5px;
}

.price-field input[type="range"]::-ms-track {
	/* IE */
	width: 188px;
	height: 2px;
	cursor: pointer;
	background: #242424;
	border-radius: 5px;
}

/* Style for input value block */

.price-wrap {
	display: flex;
	color: #242424;
	font-size: 14px;
	line-height: 1.2em;
	font-weight: 400;
	margin-bottom: 0px;
}

.price-wrap-1,
.price-wrap-2 {
	display: flex;
	margin-left: 0px;
}

.price-title {
	margin-right: 5px;
}

.price-wrap_line {
	margin: 6px 0px 5px 5px;
}

.price-wrap #one,
.price-wrap #two {
	width: 30px;
	text-align: right;
	margin: 0;
	padding: 0;
	margin-right: 2px;
	background: 0;
	border: 0;
	outline: 0;
	color: #242424;
	font-family: "Karla", "Arial", sans-serif;
	font-size: 14px;
	line-height: 1.2em;
	font-weight: 400;
}

.price-wrap label {
	text-align: right;
	margin-top: 6px;
	padding-left: 5px;
}

/* Style for active state input */

.price-field input[type="range"]:hover::-webkit-slider-thumb {
	box-shadow: 0 0 0 0.5px #242424;
	transition-duration: 0.3s;
}

.price-field input[type="range"]:active::-webkit-slider-thumb {
	box-shadow: 0 0 0 0.5px #242424;
	transition-duration: 0.3s;
}
</style>