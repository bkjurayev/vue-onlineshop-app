<template>
  <div class="_container products-view-page">
    <div class="section-filter">
      <div class="section-filter__item sort">
        <div class="title">Sorting</div>
        <div class="section-filter__body">
          <select name="sorting" v-model="selectedSort">
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      <div class="section-filter__item brand">
        <div class="title">Brand</div>
        <div class="section-filter__body">
          <label class="checkbox" v-for="b in brands" :key="b">
            <input type="checkbox" :value="b" v-model="selectedBrand" />
            <Transition>
              <font-awesome-icon
                icon="check"
                v-if="ifSelectFilterOption(selectedBrand, b)"
                class="checkbox__icon"
              />
            </Transition>
            <span>{{ b }}</span>
          </label>
        </div>
      </div>
      <div class="section-filter__item size">
        <div class="title">Size</div>
        <div class="section-filter__body">
          <label class="checkbox" v-for="s in sizes" :key="s">
            <Transition>
              <font-awesome-icon
                icon="check"
                v-if="ifSelectFilterOption(selectedSize, s)"
                class="checkbox__icon"
              />
            </Transition>
            <input type="checkbox" :value="s" v-model="selectedSize" />
            <span>{{ s }}</span>
          </label>
        </div>
      </div>
      <div class="section-filter__item color">
        <div class="title">Color</div>
        <div class="section-filter__body">
          <label class="checkbox" v-for="c in colors" :key="c">
            <Transition>
              <font-awesome-icon
                icon="check"
                v-if="ifSelectFilterOption(selectedColor, c)"
                class="checkbox__icon"
              />
            </Transition>
            <input type="checkbox" :value="c" v-model="selectedColor" />
            <span>{{ c }}</span>
          </label>
        </div>
      </div>
      <fieldset class="section-filter__item filter-price">
        <div class="title">Price</div>
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
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import useProducts from "../composables/products";
import VProductList from "@/components/products-view/v-product-list.vue";

const { isLoading, fetchProducts, products } = useProducts();

const route = useRoute();
const slug = ref(route.params.slug);

const brands = ["adidas", "nike", "puma", "armani"];
const colors = ["black", "blue", "white", "silver", "pink"];
const sizes = ["38", "39", "40", "41", "42", "43"];

const selectedBrand = ref([]);
const selectedColor = ref([]);
const selectedSize = ref([]);
const selectedSort = ref("title");
const minPrice = ref(5000);
const maxPrice = ref(30000);

onMounted(() => {
  fetchProducts();
});
const sortedProducts = computed(() => {
  if (selectedSort.value === "title") {
    return [...filteredByPrice.value].sort((item1, item2) =>
      item1[selectedSort.value.toLowerCase()]?.localeCompare(
        item2[selectedSort.value.toLowerCase()]
      )
    );
  } else if (selectedSort.value === "price") {
    return [...filteredByPrice.value].sort((a, b) => a.price - b.price);
  } else {
    return filteredByPrice.value;
  }
});
const sortedProductsGender = computed(() => {
  if (!route.params?.slug) {
    return sortedProducts.value;
  } else {
    return [...sortedProducts.value].filter(
      (item) => item.gender === route.params?.slug
    );
  }
});

// start filter
const filteredProductsForBrand = computed(() => {
  if (selectedBrand.value.length > 0) {
    const res = [];
    selectedBrand.value.forEach((element) => {
      res.push(products.value.filter((item) => item.brand === element));
    });
    return res.reduce((oldValue, newValue, index) => {
      return [...oldValue, ...newValue];
    });
  } else {
    return products.value;
  }
});
const filteredBySize = computed(() => {
  if (selectedSize.value.length > 0) {
    const res = [];
    selectedSize.value.forEach((size) => {
      filteredProductsForBrand.value.forEach((item) => {
        if (item.sizes.find((el) => el === size)) {
          res.push(item);
        }
      });
    });
    return res;
  } else {
    return filteredProductsForBrand.value;
  }
});
const filteredByColor = computed(() => {
  if (selectedColor.value.length > 0) {
    const res = [];
    selectedColor.value.forEach((color) => {
      filteredBySize.value.forEach((item) => {
        if (item.colors.find((el) => el === color)) {
          res.push(item);
        }
      });
    });
    return res;
  } else {
    return filteredBySize.value;
  }
});
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
    return false;
  } else {
    return filter.find((item) => item === val);
  }
};
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
