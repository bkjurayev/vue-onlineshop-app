<template>
	<div class="header__actions__item favorites-header">
		<font-awesome-icon icon="heart" class="favorites-header__icon"></font-awesome-icon>
	</div> 
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore()

const favorites = computed(() => store.getters.getFavoriteFromCart)

</script>