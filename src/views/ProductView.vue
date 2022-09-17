<template>
  <div class="product-view _container">
    <VBreadcrumbs />

    <div class="product-view__product product">
      <div class="product__col images">
        <img :src="product.img" alt="">        
      </div>
      <div class="product__col characteristic">
        <div class="product__title">{{ product.title }}</div>
        <div class="product__views">17 ko'rildi</div>
        <div class="product__price">{{ product.price }} sum</div>
        <div class="product__colors">
          <h3>Ranglar</h3>
          <div class="product__colors__column">
            <div
              class="product__colors__col"
              :class="{ _active: productColor === color }"
              v-for="color in product.colors"
              :key="color"
              @click="selectProductColor(color)"
            >
              {{ color }}
            </div>
          </div>
        </div>
        <div class="product__sizes">
          <h3>O'lchamlar</h3>
          <div class="product__sizes__column">
            <div
              class="product__sizes__col"
              :class="{ _active: productSize === size }"
              v-for="size in product.sizes"
              :key="size"
              @click="selectProductSize(size)"
            >
              {{ size }}
            </div>
          </div>
        </div>
        <div class="product__btn">
          <div class="product__btn__cart" @click="createToCart">
            Savatga qo'shish
          </div>
          <!-- <div class="product__btn__favorite">
						<font-awesome-icon icon="heart" class="favorites-header__icon"></font-awesome-icon>
					</div> -->
        </div>
        <div class="product__btn-buy" @click="isOpenModal = !isOpenModal">
          Bir clickda sotib olish
        </div>
      </div>
    </div>
    <VModal :isOpenModal="isOpenModal" @close="closeModal">
      <h1>Hello</h1>
    </VModal>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import useProducts from "../composables/products";
import VModal from "@/components/modal/v-modal.vue";
import VBreadcrumbs from "@/components/breadcrumbs/v-breadcrumbs.vue";

const { isLoading, fetchProduct, product } = useProducts();

const route = useRoute();
const store = useStore();

const isOpenModal = ref(false);
const productColor = ref("");
const productSize = ref("");
const slug = ref(route.params.slug);
 
onMounted(() => {
  fetchProduct(parseInt(slug.value));
}); 
console.log(typeof slug.value);
// const product = computed(() => {
//   const res = []
//   res.push(products.value.find(item => item.id == slug.value))
//   return res
//   return [...res]
// });
const productForCart = {};

const closeModal = () => {
  isOpenModal.value = false;
};
const selectProductColor = (val) => {
  productColor.value = val;
};
const selectProductSize = (val) => {
  productSize.value = val;
};
const createToCart = () => {
  const res = product.value;
  if (productColor.value != "" && productSize.value != "") {
    res["selectedColor"] = productColor.value;
    res["selectedSize"] = productSize.value;
    res["quantity"] = 1;
    store.commit("createToCart", res);
  } else {
    alert("Iltimos rang va o'lchamni tanlang");
  }
};

watch(
  () => isOpenModal.value,
  (newValue) => {
    if (newValue == true) {
      document.body.classList = "_lock";
      document.addEventListener("keyup", closeModal);
    } else {
      // document.addEventListener("keyup", closeModal)
      document.body.classList = "";
    }
  }
);
// watch(
//   () => parseInt(route.params?.slug),
//   (newValue) => {
//     product.value = products.value.find((item) => item.id === newValue);
//   }
// );
</script>

