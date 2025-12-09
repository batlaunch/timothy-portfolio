<script setup lang="ts">
	
	import ProjectListItemView from '~/components/home/ProjectListItem.vue'
	import EarthVideo from '~/images/proj1/solar_export.mp4'
	import ChestVideo from '~/images/proj2/chest.mp4'
	import BallVideo from '~/images/proj3/ball_animation_sound_1.mp4'
	
	const projectListEl = useTemplateRef('mainEl')
	// const observerThreshold = useTemplateRef('observerThreshold')

	const selectedIndex = ref(0)

	onMounted(() => {
		const elements = Array.from(projectListEl.value!.children)

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					selectedIndex.value = elements.indexOf(entry.target)
					console.log('selected at', selectedIndex.value)
				}
			})
		}, {
			// Optional: Configure observer options
			// root: document.getElementById('main'), // defaults to the viewport
			// rootMargin: '-10% 0%', // no margin around the root
			threshold: 0.2 // trigger when 50% of the element is visible
		})

		for (const element of elements) {
			observer.observe(element)

		}
	})
	
	const colors = {
		earth: ['#366a32', '#3f89ff'],
		chest: ['#ffb04c', '#ff5c3b'],
		ball: ['#6656f7', '#4177ff']
	}

</script>

<template>
	<main id="main" ref="mainEl">
		<ProjectListItemView name="planet-animation" :image-src="EarthVideo" :selected="selectedIndex === 0" :colors="colors.earth">
			Planet Animation
			<template #details>
				Project 1
			</template>
		</ProjectListItemView>
		<ProjectListItemView name="treasure-chest" :image-src="ChestVideo" :selected="selectedIndex === 1" :colors="colors.chest">
			Treasure Chest
			<template #details>
				Project 2
			</template>
		</ProjectListItemView>
		<ProjectListItemView name="ball-animation" :image-src="BallVideo" :selected="selectedIndex === 2" :colors="colors.ball">
			Ball Animation
			<template #details>
				Project 3
			</template>
		</ProjectListItemView>
		
	</main>


</template>

<style scoped>
	.project-list-inner {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 3;
		padding: 50vh 48px;
		flex: 1 1 900px;
	}
	
	#main {
		overflow-y: auto;
		
		scroll-snap-type: y mandatory;
		
		height: 100%;
		width: 100%;
		
		scroll-behavior: smooth;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	
	#main::-webkit-scrollbar {
		display: none;
	}
</style>