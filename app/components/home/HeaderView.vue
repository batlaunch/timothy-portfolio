<script setup lang="ts">

</script>

<template>
	<nav id="header">
		<img id="profile-pic" src="@/images/profile.jpeg" alt="prof">
		<div class="header-text-container">
			<div class="header-text">
				<h3 class="title">
					Timothy Cleveland
				</h3>
				<p class="details">
					CSCI 417 Computer Animation
				</p>
			</div>
		</div>
		
	
	</nav>

</template>

<style scoped>
	#header {
		--spring-easing: linear(
			0, 0, 0.01, 0.03, 0.06, 0.11, 0.22 7%, 0.6 14%, 0.7, 0.79, 0.87, 0.93, 0.98,
			1.01, 1.03, 1.04, 1.04, 1.05, 1.04 42%, 1.01 56%, 1 64% 100%
		);
		--spring-easing-damped: linear(
			0, 0, 0.01, 0.02, 0.05, 0.09, 0.19 8%, 0.52 16%, 0.62, 0.71, 0.78, 0.84, 0.89,
			0.93, 0.96, 0.98, 0.99, 1, 1.01 55% 60%, 1 83%, 1
		);
		--spring-duration: 1.167s;
	}
	
	#header {
		/*background: var(--lifted-color);*/
		/*height: 100%;*/
		position: fixed;
		top: 16px;
		display: flex;
		flex-direction: row;
		align-items: center;
		z-index: 10;
		left: 16px;
		translate: 0;
		border-radius: 60px;
		padding: 8px;
		--header-border-color: rgba(var(--primary-color-values), 0.2);
		border: 1px solid transparent;
		/*box-shadow: 0 1px 10px 0px rgba(var(--primary-color-values), 0.2);*/
		animation: popup 8s var(--spring-easing);
		overflow: hidden;
		
	}
	
	@keyframes popup {
		0%, 10%, 90% {
			/*transform: translate(-50%, calc(-100% - 16px)) scale(0.6);*/
			translate: -50% 0;
			scale: 0;
			filter: blur(10px);
			left: 50%;
			border-color: transparent;
			background: transparent;
			top: 16px;
		}
		20%, 80% {
			translate: -50% 0;
			scale: 1;
			left: 50%;
			border-color: transparent;
			background: transparent;
			filter: none;
			opacity: 1;
			
		}
		35%, 75% {
			background: black;
			border-color: var(--header-border-color);
			
		}
		91% {
			border-color: transparent;
			/*translate: 0 calc(-100% - 16px);*/
			translate: none;
			left: 16px;
		}
		100% {
			translate: 0;
		}
	}
	
	@keyframes popup-content {
		20%, 90% {
			width: 0;
			opacity: 0;
		}
		21% {
			opacity: 0;
		}
		35%, 75% {
			width: 200px;
			opacity: 1;
			/*scale: 0.8;*/
		}

	}
	
	@keyframes popup-content-inner {
		21%, 95% {
			scale: 0.8;
			
		}
		35%, 90% {
			scale: 1;
		}
	}
	
	.header-text-container {
		box-sizing: border-box;
		width: 0;
		animation: popup-content 8s var(--spring-easing);
		opacity: 0;
	}
	
	.header-text {
		display: flex;
		flex-direction: column;
		gap: 8px;
		white-space: nowrap;
		padding-left: 16px;
		animation: popup-content-inner 8s var(--spring-easing);
		
	}
	
	h3 {
		font-size: 14px;
		line-height: 1;
	}
	
	#profile-pic {
		width: 36px;
		height: 36px;
		border-radius: 100%;
		object-fit: contain;
		animation: profile-pic 8s step-start;
	}
	
	@keyframes profile-pic {
		0%, 90% {
			width: 48px;
			height: 48px;
		}
		91% {
		
		}
	}
	
	.details {
		color: var(--neutral-60);
		font-size: 12px;
		line-height: 1;
	}
</style>