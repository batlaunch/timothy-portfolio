<script setup lang="ts">

</script>

<template>
	<nav id="side-bar">
		<div class="side-bar-inner">
			<div class="side-bar-item">
				<div class="image">
					<img id="profile-pic" src="@/images/profile.jpeg" alt="prof">
				</div>
				<h2 class="title">
					Timothy Cleveland
				</h2>
				<p class="details">
					My work for CSCI 417 Computer Animation
				</p>
			</div>
		</div>
	</nav>
	
</template>

<style scoped>
	#side-bar {
		/*background: var(--lifted-color);*/
		/*height: 100%;*/
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		/*Adds up to 1280px*/
		flex: 1 0 380px;
	}
	
	.side-bar-inner {
		display: flex;
		width: 380px;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		box-sizing: border-box;
		height: 100vh;
		position: sticky;
		top: 0;
		bottom: 0;
		
	}
	
	#profile-pic {
		width: 48px;
		height: 48px;
		border-radius: 100%;
		object-fit: contain;
	}
	
	.side-bar-item {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	
	.details {
		color: var(--neutral-60);
	}
</style>