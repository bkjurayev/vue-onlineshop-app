<template>
	<VMainSlide />
	<VAdvantages />

	<section class="page__products products">
		<div class="products__container _container">
			<div class="products__header _main-title">
				<h1>Ommabop mahsulotlar</h1>
			</div>
			<div class="products__body">
				<VProductList :items="products" :pageName="'main'"/>

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
// import { ref } from 'vue'
import { onMounted } from "@vue/runtime-core";

import VMainSlide from "@/components/v-main-slide.vue";
import VAdvantages from "@/components/v-advantages.vue";
import VProductList from "@/components/products-view/v-product-list.vue";
import VPopularProducts from "@/components/v-popular-products.vue";
import VRecommendation from "@/components/v-recommendation.vue";
import VGallery from "@/components/v-gallery.vue";
import useProducts from "../composables/products";

const { isLoading, fetchProducts, products} = useProducts();

onMounted(() => {
    // if (!isLoaded.value) fetchEvents();
		fetchProducts()
});

</script>
