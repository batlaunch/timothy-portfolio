<script setup lang="ts">

</script>

<template>
	<nav id="side-bar">
		<div class="side-bar-inner">
			<slot/>
		</div>
	</nav>
</template>

<style scoped>
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
</style>