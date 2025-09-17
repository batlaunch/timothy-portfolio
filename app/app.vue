<script setup lang="ts">
	import ProjectList from '~/ProjectList.vue'
	import PageView from '~/components/common/PageView.vue'
	
	const store = useStore()
	
</script>

<template>
	<Transition>
		<PageView v-if="!store.currentProject">
			<template #side>
				<HomeSideBar/>
			</template>
			<template #content>
				<ProjectList/>
			</template>
		</PageView>
		
		<PageView v-else-if="store.currentProject === 'planet-animation'" page>
			<template #side>
				hello
			</template>
			<template #content>
				<h1>Content</h1>
			</template>
		</PageView>
		
	</Transition>
	
</template>

<style scoped>
	#main {
		display: flex;
		height: 100%;
		align-items: stretch;
		max-width: 1280px;
		margin: auto;
	}
	
	.v-enter-active {
		transition: 250ms 250ms;
	}
	
	.v-leave-active {
		transition: 250ms;
	}
	
	.v-enter-from,
	.v-leave-to {
		transform: scale(0.9);
		opacity: 0;
	}
	
</style>

<style>
	html, body {
		width: 100%;
		height: 100%;
		margin: 0;
		background: var(--base-color);
		color: var(--neutral-color);
		line-height: 1.6em;
		font-family: 'Inter';
		font-weight: 400;
	}
	
	body {
	}
	
	html {
		/*overflow: hidden;*/
		overflow: scroll;
		scroll-snap-type: y mandatory;
		
	}
	
	button {
		font-family: 'Inter'
	}
	
	#gradient {
		position: fixed;
		left: 0px;
		top: -100px;
		right: 0;
		/*bottom: 0;*/
		background: var(--primary-color);
		height: 200px;
		border-radius: 100%;
		filter: blur(200px);
		opacity: 20%;
	}
	
	:root {
		--base-color: #000;
		--lifted-color: #141414;
		
		--neutral-color: #fff;
		--neutral-80: rgba(255, 255, 255, 0.8);
		--neutral-60: rgba(255, 255, 255, 0.6);
		--border-color: rgba(255, 255, 255, 0.1);
		--hover-color: rgba(255, 255, 255, 0.05);
		
		--primary-color: rgba(237, 167, 0, 1);
		--primary-color-20: rgba(237, 167, 0, 0.2);
		--primary-color-5: rgba(237, 167, 0, 0.05);
	}
	
	h1, h2, h3, h4, h5, h6 {
		font-weight: 600;
		letter-spacing: 0.02rem;
		margin: 0;
	}
	
	p {
		margin: 0;
	}
	
	h3 {
		font-size: 1.5rem;
	}
	
	@font-face {
		font-family: 'Inter';
		src: url('../public/Inter-Variable.ttf');
		font-weight: 100 900;
		
	}
</style>
