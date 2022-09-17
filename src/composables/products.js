// import { getAll } from "@/api/events";
import { readonly, ref } from "vue";
// import { afterChange } from "./locale";

const isLoading = ref(false);
const isLoaded = ref(false);
const products = ref([]);
const product = ref([]);
const productList = ref([
	{
		id: 0,		
		slug: '',
		is_active: true,
		type: '',
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
		rating: '',
		isMain: false
	},
	{
		id: 1,
		slug: '',
		is_active: true,
		type: '',
		title: "Asiana",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 29000,
		img: require("../assets/img/sneakers/2.png"),
		oldprice: "30000",
		brand: "nike",
		sizes: ['39', '41'],
		colors: ['white'],
		gender: 'man',
		rating: '',
		isMain: true
	},
	{
		id: 2,
		slug: '',
		is_active: true,
		type: '',
		title: "Syltherine",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 15000,
		img: require("../assets/img/sneakers/3.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['40', '39'],
		colors: ['pink'],
		gender: 'woman',
		rating: '',
		isMain: false
	},
	{
		id: 3,
		slug: '',
		is_active: true,
		type: '',
		title: "UzKebab Syltherine",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 29000,
		img: require("../assets/img/sneakers/4.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '43'],
		colors: ['white', 'silver'],
		gender: 'woman',
		rating: '',
		isMain: true
	},
	{
		id: 4,
		slug: '',
		is_active: true,
		type: '',
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
		rating: '',
		isMain: false
	},
	{
		id: 5,
		slug: '',
		is_active: true,
		type: '',
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
		rating: '',
		isMain: true
	},
	{
		id: 6,
		slug: '',
		is_active: true,
		type: '',
		title: "Lolito",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 20000,
		img: require("../assets/img/sneakers/7.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['38', '42'],
		colors: ['silver'],
		gender: 'children',
		rating: '',
		isMain: false
	},
	{
		id: 7,
		slug: '',
		is_active: true,
		type: '',
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
		rating: '',
		isMain: true
	},
	{
		id: 8,
		slug: '',
		is_active: true,
		type: '',
		title: "Respira",
		subtitle: "Minimalist fan",
		description: 'test',
		price: 11000,
		img: require("../assets/img/sneakers/9.png"),
		oldprice: "",
		brand: "adidas",
		sizes: ['40', '43'],
		colors: ['black', 'blue'],
		gender: 'man',
		rating: '',
		isMain: false
	},
	{
		id: 9,
		slug: '',
		is_active: true,
		type: '',
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
		rating: '',
		isMain: true
	},
	{
		id: 10,
		slug: '',
		is_active: true,
		type: '',
		title: "Syltherine",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 16000,
		img: require("../assets/img/sneakers/11.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['42', '39'],
		colors: ['white'],
		gender: 'man',
		rating: '',
		isMain: false
	},
	{
		id: 11,
		slug: '',
		is_active: true,
		type: '',
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
		rating: '',
		isMain: true
	},
	{
		id: 12,
		slug: '',
		is_active: true,
		type: '',
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
		rating: '',
		isMain: false
	},
	{
		id: 13,
		slug: '',
		is_active: true,
		type: '',
		title: "Beta Leviosa",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 13000,
		img: require("../assets/img/sneakers/2.png"),
		oldprice: "",
		brand: "nike",
		sizes: ['39', '40'],
		colors: ['pink', 'silver'],
		gender: 'man',
		rating: '',
		isMain: true
	},
	{
		id: 14,
		slug: '',
		is_active: true,
		type: '',
		title: "Molito Yalla",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 5500,
		img: require("../assets/img/products/pants/2.png"),
		oldprice: "",
		brand: "puma",
		sizes: ['40', '39'],
		colors: ['white', 'blue'],
		gender: 'man',
		rating: '',
		isMain: false
	},
	{
		id: 15,
		slug: '',
		is_active: true,
		type: '',
		title: "Pants",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 18000,
		img: require("../assets/img/products/pants/1.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'man',
		rating: '',
		isMain: true
	},
	{
		id: 16,
		slug: '',
		is_active: true,
		type: '',
		title: "Yalla Lolito",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/sneakers/4.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'children',
		rating: '',
		isMain: false
	},
	{
		id: 17,
		slug: '',
		is_active: true,
		type: 'recomendation',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/pants/1.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'man',
		rating: '',
		isMain: true
	},
	{
		id: 18,
		slug: '',
		is_active: true,
		type: 'recomendation',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/pants/2.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'man',
		rating: '',
		isMain: false
	},
	{
		id: 19,
		slug: '',
		is_active: true,
		type: 'recomendation',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/pants/4.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'man',
		rating: '',
		isMain: true
	},
	{
		id: 20,
		slug: '',
		is_active: true,
		type: 'recomendation',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/women/01.jpg"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'woman',
		rating: '',
		isMain: false
	},
	{
		id: 21,
		slug: '',
		is_active: true,
		type: 'recomendation',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/women/02.jpg"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'woman',
		rating: '',
		isMain: true
	},
	{
		id: 22,
		slug: '',
		is_active: true,
		type: 'recomendation',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/women/03.jpg"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'woman',
		rating: '',
		isMain: false
	},
	{
		id: 23,
		slug: '',
		is_active: true,
		type: 'special',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/women/women-shoes.jpg"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'woman',
		rating: '',
		isMain: true
	},
	{
		id: 24,
		slug: '',
		is_active: true,
		type: 'special',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/women/women-shoes-2.png"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'woman',
		rating: '',
		isMain: true
	},
	{
		id: 25,
		slug: '',
		is_active: true,
		type: 'special',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/women/women-shoes-3.jpeg"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'woman',
		rating: '',
		isMain: true
	},
	{
		id: 26,
		slug: '',
		is_active: true,
		type: 'special',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/women/women-shoes-4.jpeg"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'woman',
		rating: '',
		isMain: true
	},
	{
		id: 27,
		slug: '',
		is_active: true,
		type: 'special',
		title: "Drees",
		subtitle: "Stylish cafe chair",
		description: 'test',
		price: 14000,
		img: require("../assets/img/products/women/women-shoes-5.jpg"),
		oldprice: "",
		brand: "armani",
		sizes: ['41', '38'],
		colors: ['white', 'black'],
		gender: 'woman',
		rating: '',
		isMain: true
	},
]);

const fetchProducts = () => {
  isLoading.value = true
  products.value = productList.value
  // await getAll().then((res) => {
  //   products.value = res.data
  //   isLoading.value = false
  //   isLoaded.value = true
  // }).catch((reason) => error.value = reason)
}
const fetchProduct = (isSlugId) => {
  isLoading.value = true
  product.value = productList.value.find(item => item.id === isSlugId)
}
export default function useProducts() {
  return {
			fetchProduct,
      fetchProducts,
      product: readonly(product),
      products: readonly(products),
      isLoading: readonly(isLoading),
      isLoaded: readonly(isLoaded),
      // error: readonly(error),
  };

}
