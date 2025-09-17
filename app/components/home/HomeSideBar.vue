<script setup lang="ts">

import EmailIcon from '~/EmailIcon.vue'
import SideBarItem from '~/SideBarItem.vue'
</script>

<template>
	<SideBarItem>
		<template #image>
			<img id="profile-pic" src="@/images/profile.jpeg" alt="prof">
		</template>
		<template #title>Timothy Cleveland</template>
		<template #details>My work for CSCI 417 Computer Animation</template>
	</SideBarItem>
	
	<button class="bottom-button">
		<EmailIcon/>
	</button>
</template>

<style scoped>
	#profile-pic {
		width: 48px;
		height: 48px;
		border-radius: 100%;
		object-fit: contain;
	}
	
	.bottom-button {
		border: 1px solid var(--border-color);
		/*box-shadow: inset 0 0 3px var(--primary-color-20);*/
		background: none;
		color: var(--neutral-80);
		display: flex;
		padding: 12px 16px;
		border-radius: 8px;
		cursor: pointer;
		transition: 250ms;
		outline: none;
	}
	
	.bottom-button:hover {
		background: var(--hover-color);
		transform: translateY(-4px);
	}
</style>