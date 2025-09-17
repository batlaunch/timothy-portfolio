<script setup lang="ts">

</script>

<template>
	<div class="side-bar-item">
		<div class="image">
			<slot name="image"/>
		</div>
		<h3 class="title">
			<slot name="title"/>
		</h3>
		<p class="details">
			<slot name="details"/>
		</p>
	</div>
</template>

<style scoped>
	.side-bar-item {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	
	.details {
		color: var(--neutral-60);
	}
</style>