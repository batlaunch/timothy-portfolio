<script setup lang="ts">
	
	import ProjectListItemView from '~/components/home/ProjectListItem.vue'
	import EarthVideo from '~/images/proj1/solar_export.mp4'
	import ChestVideo from '~/images/proj2/chest.mp4'
	
	const projectListEl = useTemplateRef('projectListEl')
	const observerThreshold = useTemplateRef('observerThreshold')
	
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
			threshold: 0.5 // trigger when 50% of the element is visible
		})
		
		for (const element of elements) {
			observer.observe(element)
			
		}
	})

</script>

<template>
	<div ref="projectListEl" class="project-list-inner">
		<ProjectListItemView name="planet-animation" :image-src="EarthVideo" :selected="selectedIndex === 0">
			Planet Animation
			<template #details>
				Project 1
			</template>
		</ProjectListItemView>
		<ProjectListItemView name="treasure-chest" :image-src="ChestVideo" :selected="selectedIndex === 1">
			Treasure Chest
			<template #details>
				Project 2
			</template>
		</ProjectListItemView>
	</div>


</template>

<style scoped>
	.project-list-inner {
		display: flex;
		flex-direction: column;
		gap: 48px;
		max-width: 900px;
		position: relative;
		z-index: 3;
		padding: 50vh 48px;
		flex: 1 1 900px;
	}
	
	.observer-threshold {
		position: fixed;
		top: 50%;
		height: 2px;
		background: red;
		left: 0;
		right: 0;
	}
	
	/*.project-list-inner:before {*/
	/*	z-index: -1;*/
	/*	content: '';*/
	/*	background: var(--primary-color);*/
	/*	position: absolute;*/
	/*	inset: 0;*/
	/*	border-radius: 100%;*/
	/*	filter: blur(400px);*/
	/*	opacity: 20%;*/
	/*}*/
</style>