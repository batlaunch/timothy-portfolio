<script setup lang="ts">
	
	import GotoIcon from '~/PlusIcon.vue'
	
	const props = defineProps(['name', 'imageSrc', 'selected'])
	
	const video = useTemplateRef('video')
	
	const {selected} = toRefs(props)
	watch(selected, value => {
		if (value) {
			if (video.value) {
				video.value.play()
			}
		} else {
			if (video.value) {
				video.value.pause()
			}
		}
	}, {immediate: true})
	
	const store = useStore()

</script>

<template>
	<div class="project" :class="{selected}">
		<div class="content">
			<p v-if="$slots.details" class="details">
				<slot name="details"/>
			</p>
			<h1><slot/></h1>


			<button class="common" @click="store.currentProject = props.name">
				See project
				<GotoIcon/>
			</button>
		</div>
		<video ref="video" class="project-hero" autoplay muted loop playsinline>
			<source src="@/images/project1-hero.mp4" type="video/webm">
		</video>
	</div>
</template>

<style scoped>
	.project {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 32px;
		/*background-color: rgba(0,0,0,1);*/
		
		aspect-ratio: 16/10;
		/*border: 1px solid var(--primary-color-20);*/
		/*box-shadow: 0 10px 200px var(--primary-color-20);*/
		/*background: var(--primary-color-5);*/
		/*box-shadow: inset 0 0 20px var(--primary-color-20);*/
		position: relative;
		display: flex;
		overflow: hidden;
		transition: 800ms;
		
		scroll-snap-align: center;
		
	}
	
	
	.project:before {
		position: absolute;
		inset: 0;
		content: '';
		background: rgba(0,0,0,0.4);
		z-index: -1;
	}
	
	.project:not(.selected) {
		opacity: 30%;
		transform: scale(0.9);
	}
	
	button.common {
		border: none;
		background-color: var(--primary-color);
		padding: 12px 24px;
		border-radius: 100px;
		cursor: pointer;
		font-size: 16px;
		font-weight: 500;
		margin-top: 32px;
		display: flex;
		align-items: center;
		gap: 8px;
		transition: 250ms;
	}
	
	button.common:hover {
		transform: scale(1.05);
	}
	
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
	}
	
	.details {
		color: var(--neutral-60);
		text-transform: uppercase;
		font-size: 14px;
		font-weight: 500;
	}
	
	/*.project:before {*/
	/*	position: absolute;*/
	/*	content: '';*/
	/*	position: absolute;*/
	/*	z-index: -1;*/
	/*	inset: 0;*/
	/*	background: var(--primary-color-5);*/
	/*}*/
	
	.project-hero {
		position: absolute;
		inset: 0;
		object-fit: cover;
		/*max-width: 100%;*/
		max-height: 100%;
		z-index: -2;
		
	}
</style>