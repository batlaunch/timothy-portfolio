<script setup lang="ts">
	
	import ProjectView from '~/ProjectView.vue'
	import EarthImage from '~/images/earth.jpg'
	
	const projectListEl = useTemplateRef('projectListEl')
	
	const selectedIndex = ref(0)
	
	onMounted(() => {
		const elements = Array.from(projectListEl.value!.children)
		
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					selectedIndex.value = elements.indexOf(entry.target)
				}
			})
		}, {
			// Optional: Configure observer options
			root: null, // defaults to the viewport
			rootMargin: '0px', // no margin around the root
			threshold: 0.5 // trigger when 50% of the element is visible
		})
		
		for (const element of elements) {
			observer.observe(element)
			
		}
	})

</script>

<template>
	<div class="project-list-inner" ref="projectListEl">
		<ProjectView name="planet-animation" :image-src="EarthImage" :selected="selectedIndex === 0">
			Planet Animation
			<template #details>
				Project 1
			</template>
		</ProjectView>
		<ProjectView :image-src="EarthImage" :selected="selectedIndex === 1">
			Project 2
		</ProjectView>
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