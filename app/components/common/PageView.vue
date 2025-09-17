<script setup lang="ts">
	import CloseIcon from '~/components/common/CloseIcon.vue'
	
	defineProps<{
		page?: boolean
	}>()
	
	const store = useStore()
</script>

<template>
	<main id="main">
		<nav id="side-bar">
			<div class="side-bar-inner">
				<slot name="side"/>
			</div>
		</nav>
		<div class="project-list">
			<slot name="content"/>
			<button v-if="page" class="exit-button" @click="store.currentProject = null">
				<CloseIcon/>
			</button>
		</div>
		<!--	  <div id="gradient"></div>-->
	</main>

</template>

<style scoped>
	.project-list {
		flex: 1 1 900px;
		padding: 64px 48px;
		box-sizing: border-box;
		position: relative;
	}
	
	#side-bar {
		/*background: var(--lifted-color);*/
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		/*Adds up to 1280px*/
		flex: 1 0 380px;
	}
	
	.side-bar-inner {
		padding: 112px 48px 48px 48px;
		display: flex;
		width: 380px;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		box-sizing: border-box;
		height: 100%;
		position: fixed;
		top: 0;
		
	}
	
	.exit-button {
		border: none;
		border-radius: 8px;
		background: var(--border-color);
		color: var(--neutral-color);
		width: 48px;
		height: 48px;
		cursor: pointer;
		position: absolute;
		right: 0;
		top: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>