<script setup lang="ts">
	import PageView from '~/components/common/PageView.vue'
	import MainView from '~/components/home/MainView.vue'
	import PageImage from '~/components/common/PageImage.vue'
	import PageSection from '~/components/common/PageSection.vue'
	import PageVideo from '~/components/common/PageVideo.vue'
	
	import Original from '~/images/proj2/original.webp'
	import Model1 from '~/images/proj2/Modeling.png'
	import Model2 from '~/images/proj2/Rivets.png'
	import Coins from '~/images/proj2/Coins.png'
	import Material1 from '~/images/proj2/Material1.png'
	import Material2 from '~/images/proj2/Material2.png'
	import Lighting from '~/images/proj2/Lighting.png'
	import TreasureVideo from '~/images/proj2/chest.mp4'
	import TreasureImage from '~/images/proj2/chest2.jpg'
	
	import BallSpiderverseImage from '~/images/proj3/spiderverse.jpg'
	
	const store = useStore()
	import BallStoryboardImage from '~/images/proj3/storyboard.jpg'
	import BallRiggingImage from '~/images/proj3/rigging.png'
	import BallAnimationImage from '~/images/proj3/animation.png'
	import BallAnimationImage2 from '~/images/proj3/animating2.png'
	import BallTextureImage from '~/images/proj3/texture.png'
	import BallTexturesImage from '~/images/proj3/textures.png'
	import BallSceneImage from '~/images/proj3/scene.png'
	import BallLightingImage from '~/images/proj3/lighting.png'
	import BallVideo from '~/images/proj3/ball_animation_sound_1.mp4'
	
	

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
				<template #date>October 16, 2025</template>
				
				<PageSection>
					<template #title>Reference Image</template>
					This is the reference treasure chest I used
					
					<PageImage :image-src="Original"/>
				</PageSection>
				<PageSection>
					<template #title>Modeling</template>
					To model the chest, I used separate geometry for each piece. I created the frame first using
					primitives,
					then added details such as creating rivets and adding bevels.
					<PageImage :image-src="Model1"/>
					<PageImage :image-src="Model2"/>
				</PageSection>
				<PageSection>
					<template #title>Coins</template>
					To model the coins, MASH to simulate the coins falling. Then I baked the simulation at the final
					frame
					into geometry. I found a texture for them online.
					<PageImage :image-src="Coins"/>
				</PageSection>
				<PageSection>
					<template #title>Texturing</template>
					For the wood, coins, and leather, I found texture maps online and plugged in the color, roughness,
					and normal
					in Hypershade. For the metal, I adjusted values in the AIStandardSurface and added a grunge map to
					the roughness.
					<PageImage :image-src="Material1"/>
					<PageImage :image-src="Material2"/>
				</PageSection>
				<PageSection>
					<template #title>Lighting</template>
					For the lighting, I used three lights, one behind, one overhead, and one inside the chest. I altered
					the colors
					to match the reference image as best I could. I also added some atmosphere to add some depth.
					<PageImage :image-src="Lighting"/>
				</PageSection>
				<PageSection>
					<template #title>Final Result</template>
					<PageVideo :video-src="TreasureVideo"/>
					<PageImage :image-src="TreasureImage"/>
				</PageSection>
			</PageView>
			<PageView v-else-if="store.currentProject === 'ball-animation'">
				<template #project>Project 3</template>
				<template #title>Ball Animation</template>
				<template #date>October 16, 2025</template>
				
				<PageSection>
					<template #title>Inspiration</template>
					I wanted the style of my animation to be similar to the movie Spider-Man: Into the Spider-Verse.
					I watched some videos on how they animated the movie and incorporated a few things into my animation,
					including animating on twos, dotted halftones, RGB glitch effects, and just the overall style
					and color theme of the movie (specifically the What's Up Danger scene!).
					
					<PageImage :image-src="BallSpiderverseImage"/>
				</PageSection>
				<PageSection>
					<template #title>Storyboard</template>
					I wanted to animate a ball bouncing on top of buildings with the same aesthetic as the movie.
					<br><br>
					After my presentation, I added more time to my animation created a "plot", so I
					made a new storyboard with an extra scene and a portal.
					<PageImage :image-src="BallStoryboardImage"/>
				</PageSection>				
				<PageSection>
					<template #title>Rigging</template>
					I used a lattice with control points to control the squash and stretch of the ball. This
					gave me full control over things such as the rotation of the squash and stretch.
					<PageImage :image-src="BallRiggingImage"/>
				</PageSection>
				<PageSection>
					<template #title>Animation</template>
					I animated the ball with pose to pose and learned how to use a motion path to see
					the path of the keyframes. The animators in Into the Spider-Verse animated the characters
					on twos, so attempted doing that. I manually created step keyframes every other frame
					so the ball "paused" after each frame of movement.
					<br><br>
					I animated the cameras on ones so the camera movement was smooth but the character (the ball)
					movement was choppy.
					<PageImage :image-src="BallAnimationImage2"/>
					<PageImage :image-src="BallAnimationImage"/>
				</PageSection>
				<PageSection>
					<template #title>Texturing</template>
					For the buildings lights, I found a blocky texture online and combined it with the emission color for the lights,
					and scaled up the same texture for the emission level. For the other materials in the buildings,
					I created a glass texture that sat on geometry just outside of the lights, and an aiToon texture for
					the shell. The silhouette buildings are just stretched cubes with an aiToon texture.
					<br><br>
					Into the Spider-Verse has dotted highlights and shadows which adds to the comic book style. I attempted
					to create my own in Maya with ball by using a shader I found online for the dots combined with an
					aiToon shader. The results weren't that impressive, so I added some dotted highlights in After Effects.
					<br><br>
					For the portal, I used aiToonShaders with high emission, and added glitch effects in After Effects.
					<PageImage :image-src="BallTextureImage"/>
					<PageImage :image-src="BallTexturesImage"/>
				</PageSection>
				<PageSection>
					<template #title>Lighting and Scene</template>
					For the lighting, I used a few main lights and set up additional lights for each shot. I laid out my
					buildings (lit and silhouette) based on my camera positions. I ended up spending a lot of time tweaking
					all the building positions and shot-specific lights to get the shots I wanted.
					<PageImage :image-src="BallLightingImage"/>
					<PageImage :image-src="BallSceneImage"/>
				</PageSection>
				<PageSection>
					<template #title>Final Result</template>
					<PageVideo :video-src="BallVideo"/>
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
		
		--primary-color-values: 237,167,0;
		/*--primary-color-values: 56, 59, 252;*/
		--primary-color: rgba(var(--primary-color-values), 1);
		--primary-color-20: rgba(var(--primary-color-values), 0.2);
		--primary-color-5: rgba(var(--primary-color-values), 0.05);
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
