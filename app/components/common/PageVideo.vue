<script setup lang="ts">
	import PauseIcon from '~/components/common/icons/PauseIcon.vue'
	import PlayIcon from '~/components/common/icons/PlayIcon.vue'
	
	const props = defineProps(['videoSrc', 'loop'])
	
	const video = useTemplateRef('video')
	
	const { playing } = useMediaControls(video, {
	
	})
	
	onMounted(() => {
		const source = document.createElement('source');

		source.setAttribute('src', props.videoSrc);
		source.setAttribute('type', 'video/mp4');
		video.value!.appendChild(source)
	})
</script>

<template>
	<div class="video-container">
		<video ref="video" class="page-video" muted controls :loop="loop">
<!--			<source src="../../images/project1-hero.mp4" type="video/webm">-->
		</video>
<!--		<div class="controls" @click="playing = !playing">-->
<!--			<div v-if="playing">-->
<!--				<PauseIcon/>-->
<!--			</div>-->
<!--			<div v-else>-->
<!--				<PlayIcon/>-->
<!--			</div>-->
<!--		</div>-->
	</div>
	
</template>

<style scoped>
	.page-video {
		width: calc(100% + 64px);
		margin: 0 -32px;
		border-radius: 16px;
		position: relative;
	}
	
	.video-container {
		position: relative;
	}
	
	.controls {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transform: scale(0.9);
		transition: 150ms;
	}
	
	.video-container:hover .controls {
		opacity: 1;
		transform: none;
	}
	
	.controls > div {
		width: 96px;
		height: 96px;
		border-radius: 100%;
		background: rgba(0,0,0,1);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.controls svg {
		/*width: 32px;*/
		/*height: 32px;*/
		transform: scale(2.5);
		color: var(--neutral-color);
	}
	
	.controls * {
	
	}
</style>