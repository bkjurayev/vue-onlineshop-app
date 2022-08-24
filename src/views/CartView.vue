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
			<h1 class="contact__title">3. Contact Info</h1>
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
					return `<b>ID:</b>${item.id} <b>Title:</b>${item.title} <b>Price:</b>${item.price} <b>Select color:</b>${item.selectedColor} <b>Select size:</b>${item.selectedSize} <b>Gender:</b>${item.gender}`						
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


<style lang="scss" scope>
.cart {
	padding-top: 150px;
	&__title,
	.delivery__title,
	.contact__title,
	.pay__title {
		margin: 30px 0;
		font-size: 38px;
		font-weight: 800;
	}
	&__subtotal {
		margin: 20px 0;
		font-size: 24px;
		font-weight: 700;
		display: flex;
		color: black;
		justify-content: flex-end;
	}
	&__btn {
		margin: 15px 0 50px 0;
		cursor: pointer;
	}
}
.product-cart {
	color: black;
	font-weight: 600;
	padding: 4px 10px;
	margin-bottom: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid rgb(209, 209, 209);
	&__title {
		font-size: 24px;
	}
	&__img {
		img {
			max-width: 150px;
		}
	}
	&__remove {
		color: rgb(77, 0, 0);
	}
}
.delivery {
	&__item {
		color: black;
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 10px;
		label {
			margin-left: 10px;
		}
	}	
	&__description {
		width: 50%;
		padding-top: 20px;
		color: black;
		line-height: 20px;
	}
}
.contact {
	width: max-content;
	&__input {
		margin: 20px 0;
		padding-left: 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		label {
			color: #000;
			margin-right: 10px;
		}
		input {
			padding: 5px 10px;
			outline: none;
			border: 1px solid #000;
		}
	}
}

</style>