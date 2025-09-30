<script setup lang="ts">
</script>

<template>
	<section class="page-section">
		<h3 class="section-title">
			<slot name="title"/>
		</h3>
		<div class="section-content">
			<slot/>
		</div>
		
	</section>
</template>

<style scoped>
	.page-section {
		display: flex;
		flex-direction: column;
		margin: 32px 0;
	}
	
	.page-section:last-child {
		padding-bottom: 128px;
	}
	
	.section-title {
		margin-bottom: 16px;
	}
	
	.section-content {
		color: var(--neutral-60);
		letter-spacing: 0.03rem;
		display: flex;
		flex-direction: column;
		gap: 16px;
		line-height: 1.5;
	}
</style>