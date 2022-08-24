<template>
	<div class="breadcrumbs">
		<div class="breadcrumbs__item">
			<router-link to="/">Home</router-link>
		</div>
		<font-awesome-icon icon="arrow-right-long" class="breadcrumbs__icon"/>
		<div 
			class="breadcrumbs__item"
			v-if="route.name == 'Product'"
		>
			<router-link to="/products">Product-list</router-link>			
		</div>
		<font-awesome-icon 
			icon="arrow-right-long" 
			class="breadcrumbs__icon"
			v-if="route.name == 'Product'"
		/>
		<div class="breadcrumbs__item">
			<router-link :to="{name: route.name, params: route.path}">{{route.name}}</router-link>			
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

</script>



<style lang="scss">
	.breadcrumbs {
		color: #3A3A3A;		
		&__item {
			position: relative;
			display: inline-flex;
		}
		&__icon {
			color: #878787;
			margin: 0 15px;
		}
		a {
			color: #3A3A3A;
		}
	}
</style>