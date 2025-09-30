<script setup lang="ts">

import SideBar from '~/components/home/SideBar.vue'
import ProjectList from '~/components/home/ProjectList.vue'
</script>

<template>
	
	<main id="main">
		<div class="main-inner">
			<SideBar/>
			<ProjectList/>
		</div>
	</main>


</template>

<style scoped>
	.project-list {
		flex: 1 1 900px;
		/*padding: 50vh 48px;*/
		box-sizing: border-box;
		position: relative;
	}
	
	#main {
		overflow-y: auto;
		
		scroll-snap-type: y mandatory;
		
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		
		scroll-behavior: smooth;
		scrollbar-width: none;
		-ms-overflow-style: none;
		
		/*padding: 200px 0;*/
	}
	
	#main::-webkit-scrollbar {
		display: none;
	}
	
	.main-inner {
		max-width: 1280px;
		display: flex;
		flex: 1 1 1280px;
		/*height: 100%;*/
		align-items: stretch;
	}
	
	/*#side-bar {*/
	/*	!*background: var(--lifted-color);*!*/
	/*	!*height: 100%;*!*/
	/*	display: flex;*/
	/*	flex-direction: column;*/
	/*	align-items: flex-end;*/
	/*	!*Adds up to 1280px*!*/
	/*	flex: 1 0 380px;*/
	/*	!*position: sticky;*!*/
	/*	!*top: 0;*!*/
	/*}*/
	
	/*.side-bar-inner {*/
	/*	!*padding: 112px 48px 48px 48px;*!*/
	/*	padding: 48px;*/
	/*	display: flex;*/
	/*	width: 380px;*/
	/*	flex-direction: column;*/
	/*	justify-content: center;*/
	/*	gap: 32px;*/
	/*	align-items: flex-start;*/
	/*	box-sizing: border-box;*/
	/*	height: 100vh;*/
	/*	position: sticky;*/
	/*	top: 0;*/
	/*	*/
	/*}*/
</style>