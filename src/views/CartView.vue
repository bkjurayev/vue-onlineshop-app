<template>
	<div class="cart _container">
		<div class="cart__products-list" v-if="getProductFromCart.length != 0">
			<h1 class="cart__title">1. Your Order</h1>
			<div
				class="cart__item product-cart"
				v-for="product in getProductFromCart"
				:key="product.id"
			>
				<VCartItem @removePrice="removePrice" @inc="inc" @dec="dec" :product="product" />
			</div>
			<div class="cart__subtotal">
				<span><small>Subtotal: </small> {{ totalPrice }}</span>
			</div>
		</div>
		<div class="cart__message" v-else>
			<div class="message">Cart is empty</div>
		</div>		
		<div class="cart__delivery delivery">
			<h1 class="delivery__title">2. Yetkazib berish hizmati</h1>
			<div class="delivery__item">
				<input type="radio" name="city" value="Andijon shahar bo'ylab" v-model="delevery"/>
				<label for="city">Andijon shahar bo'ylab: <span>24 soat mobaynida yetkazib berish</span></label>
			</div>
			<div class="delivery__item">
				<input type="radio" name="district" value="Andijonda tumanlararo" v-model="delevery"/>
				<label for="district">Andijonda tumanlararo: <span>48 soat mobaynida yetkazib berish</span></label>
			</div>			
		</div>
		<div class="cart__contact contact">
			<h1 class="contact__title">3. Bog'lanish</h1>
			<div class="contact__input">
				<label for="name">Ism</label>
				<input type="text" name="name" v-model="inputName">
			</div>						
			<div class="contact__input">
				<label for="surname">Sharifingiz</label>
				<input type="text" name="surname" v-model="inputSurname">
			</div>						
			<div class="contact__input">
				<label for="phone">Phone</label>
				<input type="number" name="phone" v-model="inputPhone">
			</div>						
		</div>	
		<div 
			class="cart__btn _btn-orange"
			@click="onClickSendToTg"
		>
			Tovarni rasmiylashtirish
		</div>
	</div>
</template>
    

<script>
import axios from "axios";
import { useRoute } from 'vue-router'
import { mapGetters } from "vuex";
import VCartItem from "@/components/cart/v-cart-item.vue";
import { ref } from "vue";

export default {
	data() {
		return {
			totalPrice: 0,
			inputName: '',
			inputSurname: '',
			inputPhone: '',
			delevery: '',
		};
	},
	setup() {
		const TOKEN = "5336070499:AAFrn3cc5vInWMLnqbqHB7uC9BZRuxXk7dE";
		const CHAT_ID = "-1001792646372";
		const URI_API = `https://api.telegram.org/bot5336070499:AAFrn3cc5vInWMLnqbqHB7uC9BZRuxXk7dE/sendMessage`;
		const loading = ref(false);

		return {TOKEN,CHAT_ID,URI_API,loading,};
	},
	computed: {
		...mapGetters(["getProductFromCart"]),
	},
	mounted() {
		this.allPrice();		
	},	
	methods: {		
		allPrice() {
			this.getProductFromCart.map((val) => this.totalPrice += val.price);
		},
		inc(val) {
			this.totalPrice += val;
		},
		dec(val) {
			this.totalPrice -= val;
		},
		removePrice(val) {
			this.totalPrice -= val;
		},
		onClickSendToTg() {			
			if (this.inputName && this.inputSurname && this.inputPhone && this.delevery) {
				this.loading = true;
				const res = this.getProductFromCart.map(item => {
					return `<b>ID:</b>${item.id} <b>Title:</b>${item.title} <b>Price:</b>${item.price} <b>Quantity:</b>${item.quantity} <b>Select color:</b>${item.selectedColor} <b>Select size:</b>${item.selectedSize} <b>Gender:</b>${item.gender}`						
				})	
				axios
					.post(this.URI_API, {
						chat_id: this.CHAT_ID,
						parse_mode: "html",
						text: res + `\n<b>Name:</b>${this.inputName}\n<b>Surname:</b>${this.inputSurname}\n<b>Phone:</b>${this.inputPhone}\n<b>Delevery:</b>${this.delevery}`,		
					})
					.then(() => {
						this.loading = false;
					});					
				window.location.assign('/')
			} else {				
				alert("Iltimos barcha malumotlarni ko'rsating")
			}
		},
	},
	components: {
		VCartItem,
	},
};
</script>