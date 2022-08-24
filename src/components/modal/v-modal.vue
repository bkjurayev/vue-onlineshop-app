<template>
	<div 
		class="modal"
		v-if="isOpenModal"
		@click="close"
	>
		<div class="modal__body" @click="close">
			<div class="modal__content" @click.stop>
			
				<slot/>

			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		isOpenModal: {
			type: Boolean,
			default: false
		}
	},	
	methods: {
		close(event) {
			this.$emit('close', event)
		}
	}
}

</script>

<style lang="scss">
	.modal {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 50;
		position: fixed;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.4);
		&__body {
			width: 100%;
			height: 100%;
			display: flex;
			overflow: hidden;
			align-items: center;
			justify-content: center;	
			@supports ((-webkit-backdrop-filter: blur(31px)) or (backdrop-filter: blur(31px))) {
				background-color: rgba(58, 58, 58, 0.3);
				backdrop-filter: blur(2px);
			}
		}
		&__content {
			width: 400px;
			height: 400px;
			border-radius: 5px;
			background-color: #fff;
		}
	}
</style>