<template>
	<div id="app" class="app-wrapper">
		<router-view></router-view>
	</div>
</template>

<script>
	import './assets/icons'
	export default {
		name: 'app',
		data() {
			return {

			}
		},
		mounted() {
          require.ensure([], () => {
            require('./assets/icons')
          }, 'async-icons')
		}
	}
</script>

<style lang="scss">
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-to {
		opacity: 0
	}
</style>
