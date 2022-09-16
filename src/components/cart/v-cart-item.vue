<template>
	<div class="product-cart__img">
		<img :src="product.img" alt="image" />
	</div>
	<div class="product-cart__info info">
		<div class="info__item title">{{ product.title }}</div><pre>{{product.quantity}}</pre>
		<div class="info__item brand">{{ product.brand }}</div>
		<div class="info__item sizes">
			<span 
				v-for="s in product.sizes" 
				:key="s"
				:class="{selectedSize: product.selectedSize === s }"
			> 
				{{ s }}. 
			</span>
		</div>
		<div class="info__item colors">
			<span 
				v-for="c in product.colors" 
				:key="c"
				:class="{selectedColor: product.selectedColor === c }"
			> 
				{{ c }}. 
			</span>
		</div>
	</div>
	<div class="product-cart__quantity">
		<span class="btn-inc" @click="decrement">-</span>
		<span>{{ quantity }}</span>
		<span class="btn-dec" @click="increment">+</span>
	</div>
	<div class="product-cart__price">
		<p>{{ product.price * quantity }}</p>
	</div>
	<div class="product-cart__remove">
		<span @click="removeFromCart(product), onRemovePrice(totalPrice)"
			>Delate</span
		>
	</div>
	<br />
</template>




<script>
import { mapMutations, mapGetters } from "vuex";

export default {
	props: {
		product: {
			type: Object,
			require: true,
		},
	}, 
	data() {
		return {
			quantity: 1,
			totalPrice: this.product.price,
		};
	},
	computed: {
		...mapGetters(["getProductFromCart"]),
	},
	emits: ['removePrice', 'inc', 'dec'],
	methods: {
		...mapMutations(["removeFromCart", "incQuantityCart", "decQuantityCart"]),		
		onRemovePrice(data) {
			this.$emit("removePrice", data);
		},
		increment() {
			this.quantity += 1;
			this.totalPrice += this.product.price;
			this.$emit("inc", this.product.price);
			this.incQuantityCart(this.product.id);
		},
		decrement() {
			if (this.quantity > 1) {
				this.quantity -= 1;
				this.totalPrice -= this.product.price;
				this.$emit("dec", this.product.price);
				this.decQuantityCart(this.product.id);
			}
		},
	},
};
</script>


<style lang="scss" scope>
.btn-inc,
.btn-dec {
	margin: 0 10px;
	padding: 0 10px;
	font-size: 30px;
	color: black;
	cursor: pointer;
}
.product-cart__quantity {
	display: flex;
	align-items: center;
}
.info {
	&__item {
		margin-bottom: 10px;
	}
	.title {
		font-size: 22px;
		font-weight: 700;
	}
}
.selectedColor,
.selectedSize {
	padding: 2px;
	margin: 0 5px;
	color: brown;
	font-size: 18px;
	font-weight: 600;
	border: 1px solid rgba(165, 42, 42, 0.358);
}
</style>