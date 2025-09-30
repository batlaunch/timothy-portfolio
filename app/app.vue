<script setup lang="ts">
	import PageView from '~/components/common/PageView.vue'
	import MainView from '~/components/home/MainView.vue'
	import PageImage from '~/components/common/PageImage.vue'
	import PageSection from '~/components/common/PageSection.vue'
	import PageVideo from '~/components/common/PageVideo.vue'
	
	const store = useStore()
	
	import Original from '~/images/proj2/original.webp'
	import Model1 from '~/images/proj2/Modeling.png'
	import Model2 from '~/images/proj2/Rivets.png'
	import Coins from '~/images/proj2/Coins.png'
	import Material1 from '~/images/proj2/Material1.png'
	import Material2 from '~/images/proj2/Material2.png'
	import Lighting from '~/images/proj2/Lighting.png'
	import TreasureVideo from '~/images/proj2/chest.mp4'
	import TreasureImage from '~/images/proj2/chest2.jpg'

</script>

<template>
	<Transition>
		<KeepAlive>
			<MainView v-if="!store.currentProject"/>
			
			<PageView v-else-if="store.currentProject === 'planet-animation'">
				<template #project>Project 1</template>
				<template #title>Planet Animation</template>
				<template #date>September 16, 2025</template>
				
				<PageImage/>
<!--				-->
<!--				<PageSection>-->
<!--					<template #title>Original Animation</template>-->
<!--					This is my original animation from the tutorial-->
<!--					-->
<!--					<PageVideo/>-->
<!--				</PageSection>-->
<!--				<PageSection>-->
<!--					<template #title>Animating Orbit and Revolution</template>-->
<!--					To animate the orbit and revolution of the planets, I used the expression editor in maya-->
<!--					since it's easier to manage than keyframes. I used semi-realistic orbit speeds and added a-->
<!--					time offset so the planets aren't lined up in the initial frame. I grouped each planet-->
<!--					twice, one group for orbit and one group for revolution on a tilt. I rotated each tilt group-->
<!--					by their respective tilts so revolution stays on an axis.-->
<!--				</PageSection>-->
			</PageView>
			<PageView v-else-if="store.currentProject === 'treasure-chest'">
				<template #project>Project 2</template>
				<template #title>Treasure Chest</template>
				<template #date>September 30, 2025</template>
				
				<PageSection>
					<template #title>Reference Image</template>
					This is the reference treasure chest I used
					
					<PageImage :imageSrc="Original"/>
				</PageSection>
				<PageSection>
					<template #title>Modeling</template>
					To model the chest, I used separate geometry for each piece. I created the frame first using primitives,
					then added details such as creating rivets and adding bevels.
					<PageImage :imageSrc="Model1"/>
					<PageImage :imageSrc="Model2"/>
				</PageSection>
				<PageSection>
					<template #title>Coins</template>
					To model the coins, MASH to simulate the coins falling. Then I baked the simulation at the final frame
					into geometry. I found a texture for them online.
					<PageImage :imageSrc="Coins"/>
				</PageSection>
				<PageSection>
					<template #title>Texturing</template>
					For the wood, coins, and leather, I found texture maps online and plugged in the color, roughness, and normal
					in Hypershade. For the metal, I adjusted values in the AIStandardSurface and added a grunge map to the roughness.
					<PageImage :imageSrc="Material1"/>
					<PageImage :imageSrc="Material2"/>
				</PageSection>
				<PageSection>
					<template #title>Lighting</template>
					For the lighting, I used three lights, one behind, one overhead, and one inside the chest. I altered the colors
					to match the reference image as best I could. I also added some atmosphere to add some depth.
					<PageImage :imageSrc="Lighting"/>
				</PageSection>
				<PageSection>
					<template #title>Final Result</template>
					<PageVideo :videoSrc="TreasureVideo"/>
					<PageImage :imageSrc="TreasureImage"/>
				</PageSection>
			</PageView>
		</KeepAlive>
		
	
	</Transition>

</template>

<style scoped>
	.v-enter-active {
		transition: 250ms 250ms;
		position: absolute;
		inset: 0;
	}
	
	.v-leave-active {
		transition: 250ms;
		position: absolute;
		inset: 0;
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
		overflow: hidden;
	}
	
	body {
	}
	
	html {
		/*overflow: hidden;*/
		
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
	
	#__nuxt {
		height: 100%;
		display: flex;
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
