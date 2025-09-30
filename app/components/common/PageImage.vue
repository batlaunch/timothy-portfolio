<script setup lang="ts">
	const props = defineProps(['imageSrc'])
</script>

<template>
	<img class="page-image" :src="imageSrc" alt="img">
</template>

<style scoped>
	.page-image {
		width: calc(100% + 64px);
		margin: 0 -32px;
		border-radius: 16px;
	}
</style>