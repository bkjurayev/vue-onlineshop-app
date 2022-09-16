<template>
	<div class="header__actions__item cart-header">
		<font-awesome-icon icon="cart-shopping" class="cart-header__icon" @click.stop="isOpenCart = !isOpenCart"/>
		<span class="cart-header__quantity">{{products.length}}</span>
		<div 
			class="cart-header__list"
			v-if="isOpenCart"
			@click.stop
		>
			<div 
				class="cart-header__item"
				v-for="item in products" 
				:key="item.id"
			>
				<div class="cart-header__img">
					<img :src="item.img" alt="Image">
				</div>
				<div class="cart-header__info">
					<p>{{item.title}} </p>
					<p>{{item.price}}</p>
				</div>
				<!-- <div class="cart-header__btn">
					<img src="../../assets/img/icons/close.png" alt="">
				</div> -->
			</div>
			<router-link to="/cart" class="cart-header__list__btn _btn-white">Checkout</router-link>
		</div>
	</div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "@vue/runtime-core"
import { mapGetters, useStore } from 'vuex'
	
	const store = useStore()

	const isOpenCart = ref(false)
	// const {removeFromCart} = store.commit(['removeFromCart'])
	const products = computed(() => store.getters.getProductFromCart)
	
	const hideHandler = (event) => {
		if (event?.keyCode == 27 || event.type == "click") {
			isOpenCart.value = false;
		}
	};
	onMounted(() => {
		document.addEventListener("click", hideHandler);
		document.addEventListener("keyup", hideHandler);
	});
	onUnmounted(() => {
		document.removeEventListener("click", hideHandler);
		document.removeEventListener("keyup", hideHandler);
	});

</script>