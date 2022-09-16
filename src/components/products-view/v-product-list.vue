<template>
  <div class="products__column">
    <template v-for="(item, index) in items" :key="index">
      <template v-if="pageName === 'main'">      
        <div
          v-if="item.isMain" 
          class="products__item item-product"
          :class="{ _new: item.status == 'new', _sale: item.status == 'sale' }"
        >
          <div class="item-product__img _ibg">
            <router-link
              :to="{ name: 'Product', params: { slug: item.id } }"
              class="item-product__next"
            >
              <img :src="item.img" alt="img" />
            </router-link>  
          </div>
          <div class="item-product__content">
            <router-link
              :to="{ name: 'Product', params: { slug: item.id } }"
              class="item-product__next"
            >
              <h1 class="item-product__title">{{ item.title }}</h1>
            </router-link>
            <div class="item-product__price">{{ item.price.toLocaleString() }} sum</div>
            <p class="item-product__description">{{ item.subtitle }}</p>
            <div class="item-product__brand">{{ item.brand }}</div>
          </div>
          <!-- <div class="item-product__hover">
            <button
              class="item-product__btn _btn-white"
              @click="createToCart(item)"
            >
              Add to cart
            </button>
            <div class="item-product__action">
              <div class="item-product__share">
                <font-awesome-icon icon="share-nodes" />
                Share
              </div>
              <div class="item-product__favorite" @click="createToFavorite(item)">
                <font-awesome-icon icon="heart" />
                Like
              </div>
            </div>
            <router-link
              :to="{ name: 'Product', params: { slug: item.id } }"
              class="item-product__next"
            >
              <font-awesome-icon icon="arrow-right-long" />
            </router-link>
          </div> -->
          <div
            v-if="item.oldprice != ''"
            class="item-product__sale"
            :class="{
              'big-sale':
                Math.floor(
                  100 /
                    (parseInt(item.oldprice) /
                      (parseInt(item.oldprice) - parseInt(item.price)))
                ) > 20,
            }"
          >
            {{
              Math.floor(
                100 /
                  (parseInt(item.oldprice) /
                    (parseInt(item.oldprice) - parseInt(item.price)))
              )
            }}%
          </div>
        </div>
      </template>
      <div
        v-else 
        class="products__item item-product"
        :class="{ _new: item.status == 'new', _sale: item.status == 'sale' }"
      >
        <div class="item-product__img _ibg">
          <router-link
            :to="{ name: 'Product', params: { slug: item.id } }"
            class="item-product__next"
          >
            <img :src="item.img" alt="img" />
          </router-link>  
        </div>
        <div class="item-product__content">
          <router-link
            :to="{ name: 'Product', params: { slug: item.id } }"
            class="item-product__next"
          >
            <h1 class="item-product__title">{{ item.title }}</h1>
          </router-link>
          <div class="item-product__price">{{ item.price.toLocaleString() }} sum</div>
          <p class="item-product__description">{{ item.subtitle }}</p>
          <div class="item-product__brand">{{ item.brand }}</div>
        </div>
        <div
          v-if="item.oldprice != ''"
          class="item-product__sale"
          :class="{
            'big-sale':
              Math.floor(
                100 /
                  (parseInt(item.oldprice) /
                    (parseInt(item.oldprice) - parseInt(item.price)))
              ) > 20,
          }"
        >
          {{
            Math.floor(
              100 /
                (parseInt(item.oldprice) /
                  (parseInt(item.oldprice) - parseInt(item.price)))
            )
          }}%
        </div>
      </div>
    </template> 
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    items: {
      type: Array,
      require: true,
    },
    pageName: {
      type: String,
    }
  },
  methods: {
    ...mapMutations(["createToCart", "createToFavorite"]),    
  },
};
</script>
