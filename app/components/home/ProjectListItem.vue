<script setup lang="ts">
	
	import GotoIcon from '~/PlusIcon.vue'
	
	const props = defineProps(['name', 'imageSrc', 'selected', 'colors'])
	
	const video = useTemplateRef('video')
	
	
	const {selected, colors} = toRefs(props)
	watch(selected, value => {
		if (value) {
			console.log('selected')
			if (video.value) {
				video.value.play()
			}
		} else {
			if (video.value) {
				video.value.pause()
			}
		}
	})
	
	onMounted(() =>{
		console.log(colors)
	// 	console.log(props.imageSrc)
	// 	console.log(video.value.children[0])
	// 	let source = document.createElement('source');
	//
	// 	source.setAttribute('src', props.imageSrc);
	// 	source.setAttribute('type', 'video/mp4');
	// 	video.value.appendChild(source)
	// 	console.log(video.value.children)
	// 	// video.value.children[0].src = props.imageSrc
	// 	if (selected!.value) {
	// 		video?.value.play()
	// 	}
	})
	
	const store = useStore()
	
	const shadowColor = computed(() => `linear-gradient(to right, ${colors?.value[0]}, ${colors?.value[1]})`)


</script>

<template>
	<div class="project" :class="{selected}">
		<div class="content">
			<p v-if="$slots.details" class="details">
				<slot name="details"/>
			</p>
			<h1 class="title">
				<slot/>
			</h1>
			
			
			<button class="glass" @click="store.currentProject = props.name">
				See project
				<GotoIcon/>
			</button>
		</div>
		<div class="video-container">
			<video ref="video" class="project-hero" muted loop playsinline autoplay>
				<source :src="imageSrc" type="video/mp4">
			</video>
		</div>
	
	</div>
</template>

<style scoped>
	.project {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		transition: 800ms;
		scroll-snap-align: center;
		z-index: 5;
	}
	
	.project:not(.selected) {
		transform: scale(0.85);
		opacity: 0.4;
	}
	
	.video-container {
		position: absolute;
		inset: 60px 100px;
		z-index: -1;
		display: flex;
		background: black;
		max-width: 1200px;
		margin: auto;
	}
	.video-container:before {
		position: absolute;
		z-index: -2;
		inset: 40px;
		filter: blur(100px);
		opacity: 0.6;
		transition: opacity 1000ms;
		content: '';
		background: v-bind(shadowColor);
		transform: translateY(20px);
		/*background: white;*/
		
	}
	
	@media screen and (max-width: 600px) {
		.video-container {
			inset: 0;
		}
		
		.selected .project-hero {
			border-radius: 0 !important;
		}
	}
	
	.project:not(.selected) .video-container:before {
		opacity: 0;
		
		/*background: linear-gradient(to right, blue, green);*/
		
		
	}
	
	.title {
		font-size: 2.25rem;
	}
	
	/*.project:before {*/
	/*	position: absolute;*/
	/*	inset: 0;*/
	/*	content: '';*/
	/*	background: rgba(0, 0, 0, 0.4);*/
	/*	z-index: -1;*/
	/*}*/
	
	/*.project:not(.selected) {*/
	/*	opacity: 30%;*/
	/*	transform: scale(0.9);*/
	/*}*/
	
	button.common {
		border: none;
		background-color: rgba(var(--primary-color-values), 0.8);
		padding: 16px 24px;
		border-radius: 100px;
		cursor: pointer;
		font-size: 16px;
		font-weight: 500;
		margin-top: 32px;
		display: flex;
		align-items: center;
		gap: 8px;
		transition: 250ms;
		/*color: white;*/
		/*border: 1px solid rgba(255,255,255,0.2);*/
		box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.3),
		inset -1px -1px 0px rgba(0, 0, 0, 0.3),
		inset 0 0 8px rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(8px);
	}
	
	@property --c1 {
		syntax: '<color>';
		inherits: false;
		initial-value: #dddddd;
	}
	
	@property --c2 {
		syntax: '<color>';
		inherits: false;
		initial-value: #555555;
	}
	
	@property --c3 {
		syntax: '<color>';
		inherits: false;
		initial-value: #333333;
	}
	
	button.glass {
		appearance: none;
		position: relative;
		border: none;
		padding: 1.25rem 2rem;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(4px);
		color: white;
		border-radius: 2rem;
		cursor: pointer;
		font-size: 16px;
		font-weight: 500;
		margin-top: 32px;
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: 32px;
		
		box-shadow:
			inset 1px 1px 0px rgba(255, 255, 255, 0.5),  /* Highlight top left */
			inset 4px 4px 8px rgba(255, 204, 0, 0.3),  /* Glow top left */
			inset -1px -1px 0px rgba(255, 162, 85, 0.2),
			inset -4px -4px 8px rgba(255, 184, 113, 0.2),
			inset 0px 0px 24px rgba(255, 87, 0, 0.2),
			0 8px 32px 0 rgba(255, 140, 46, 0.2);
		
		
	}
	
	button.glass:before {
		/*content: '';*/
		/*position: absolute;*/
		/*!*   z-index: -1; *!*/
		/*pointer-events: none;*/
		/*inset: 0px;*/
		
		/*border-radius: inherit;*/
		/*!* padding is the border width *!*/
		/*padding: 2px;*/
		/*background: linear-gradient(*/
		/*	to bottom right,*/
		/*	var(--c1) 0%,*/
		/*	var(--c3) 33%,*/
		/*	var(--c2) 62%,*/
		/*	var(--c3) 100%*/
		/*);*/
		/*-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);*/
		/*mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);*/
		/*-webkit-mask-composite: xor;*/
		/*mask-composite: exclude;*/
		/*transition: --c1 300ms ease, --c2 300ms ease, --c3 300ms ease;*/
		/*box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 1);*/
		
	}
	
	
	/*button.common:hover {*/
	/*	transform: scale(1.05);*/
	/*}*/
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		position: relative;
		z-index: 7;
		animation: parallax linear;
		animation-timeline: view();
		
	}
	
	.content:before {
		position: absolute;
		inset: -50px;
		background: rgba(0, 0, 0, 0.4);
		z-index: -1;
		content: '';
		filter: blur(40px);
	}
	
	.details {
		color: var(--neutral-60);
		text-transform: uppercase;
		font-size: 14px;
		font-weight: 600;
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
		inset: 0;
		height: 100%;
		object-fit: cover;
		width: 100%;
		filter: brightness(0.7);
		border-radius: 32px;
		
	}
	
	@keyframes parallax {
		from {
			translate: 0 200px;
		}
		to {
			translate: 0 -200px;
		}
	}
</style>