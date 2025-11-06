<script setup lang="ts">

import ProjectList from '~/components/home/ProjectList.vue'
</script>

<template>
	
	<main id="main">
		<ProjectList/>
	</main>


</template>

<style scoped>
	#main {
		overflow-y: auto;
		
		scroll-snap-type: y mandatory;
		
		height: 100%;
		width: 100%;
		
		scroll-behavior: smooth;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	
	#main::-webkit-scrollbar {
		display: none;
	}
	
</style>