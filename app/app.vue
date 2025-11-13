<script setup lang="ts">
	import PageView from '~/components/common/PageView.vue'
	import MainView from '~/components/home/MainView.vue'
	import PageImage from '~/components/common/PageImage.vue'
	import PageSection from '~/components/common/PageSection.vue'
	import PageVideo from '~/components/common/PageVideo.vue'
	
	import PlanetOriginal from '~/images/proj1/first_export_1.mov'
	import GraphEditor from '~/images/proj1/graph_editor.png'
	import ExpressionEditor from '~/images/proj1/expression_editor.png'
	import TiltGrouping from '~/images/proj1/grouping.png'
	import NightTexture from '~/images/proj1/night_map.png'
	import DayTexture from '~/images/proj1/day_map.png'
	import CloudsTexture from '~/images/proj1/clouds.png'
	import AtmosphereTexture from '~/images/proj1/atmosphere_texture.png'
	import EarthStill from '~/images/proj1/solar_system_still.png'
	import EarthVideo from '~/images/proj1/solar_system_test.mp4'
	
	import Original from '~/images/proj2/original.webp'
	import Model1 from '~/images/proj2/Modeling.png'
	import Model2 from '~/images/proj2/Rivets.png'
	import Coins from '~/images/proj2/Coins.png'
	import Material1 from '~/images/proj2/Material1.png'
	import Material2 from '~/images/proj2/Material2.png'
	import Lighting from '~/images/proj2/Lighting.png'
	import TreasureVideo from '~/images/proj2/chest.mp4'
	import TreasureImage from '~/images/proj2/chest2.jpg'
	
	import BallSpiderVerseImage from '~/images/proj3/spiderverse.jpg'
	
	import BallStoryboardImage from '~/images/proj3/storyboard.jpg'
	import BallRiggingImage from '~/images/proj3/rigging.png'
	import BallAnimationImage from '~/images/proj3/animation.png'
	import BallAnimationImage2 from '~/images/proj3/animating2.png'
	import BallTextureImage from '~/images/proj3/texture.png'
	import BallTexturesImage from '~/images/proj3/textures.png'
	import BallSceneImage from '~/images/proj3/scene.png'
	import BallLightingImage from '~/images/proj3/lighting.png'
	import BallVideo from '~/images/proj3/ball_animation_sound_1.mp4'
	
	import RubeVideo from '~/images/proj4/rube_goldberg_final_1.mp4'
	import RubeCamera from '~/images/proj4/camera.png'
	
	const store = useStore()


</script>

<template>
	<Transition>
		<KeepAlive>
			<MainView v-if="!store.currentProject"/>
			
			<PageView v-else-if="store.currentProject === 'planet-animation'">
				<template #project>Project 1</template>
				<template #title>Planet Animation</template>
				<template #date>September 16, 2025</template>
				
				<PageSection>
					<template #title>Original Animation</template>
					This is my original animation from the tutorial.
					<PageVideo :video-src="PlanetOriginal"/>
				</PageSection>
				<PageSection>
					<template #title>Animating Orbit and Revolution</template>
					At first, I used the graph editor to keyframe the orbit and revolution of the planets.
					<PageImage :image-src="GraphEditor"/>
					This quickly became verrrrry tedious, especially when I wanted to edit the speed of
					orbits and whatnot. I also wanted to make the orbit speed and rotation semi realistic,
					which is difficult in the graph editor. Not to mention how clunky it was in the first place.
					<br>
					<br>
					So, I figured out how to use the expression editor, which was also pretty clunky but
					much easier than setting keyframes for this type of thing. I setup a multiplier
					so I could modify the speed of the whole animation with one number and set the orbit
					and rotation speeds using somewhat realistic values.
					<PageImage :image-src="ExpressionEditor"/>
				</PageSection>
				<PageSection>
					<template #title>Texturing!</template>
					I was honestly super motivated to make a good looking render, so I spent most of my time
					on this project on the texturing. I found realistic textures for all of the planets
					from a website and got a HDRi for the space background. I focused mostly on the Earth
					because I wanted some close up shots.
					<br>
					<br>
					Using Hypershade for the texturing seemed intuitive at first. I quickly realized Arnold
					is much better than Maya's default renderer and switched to Arnold textures, which were
					easy to use for the most part. Then, I tried to texture the 'night' area of the earth
					(the city lights on the unlit part of the Earth). It did not go well. I spent soooo
					much time watching tutorials and reading online why things that seemed like they should
					work just didn't. I ended up getting something that looked decent but not great.
					<PageImage :image-src="NightTexture"/>
					Then, I used the other texture maps for the Earth, including specular, bump map, normal map, and day
					map.
					I got cloud maps as well and added them to separate geometry that was slightly scaled
					above the earth.
					<PageImage :image-src="DayTexture"/>
					<PageImage :image-src="CloudsTexture"/>
					After lighting the Earth, it still didn't look right, so I looked into volumes to create
					an atmosphere. I couldn't get the Arnold volumes to work right, so I switched to using
					a surface texture. I used an aiFacingRatio, which I found in a tutorial, to add a blue tint
					to the edges of the Earth.
					<PageImage :image-src="AtmosphereTexture"/>
				</PageSection>
				<PageSection>
					<template #title>Final Rendering</template>
					<PageImage :image-src="EarthStill"/>
					<PageVideo :video-src="EarthVideo"/>
				</PageSection>
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
					I watched some videos on how they animated the movie and incorporated a few things into my
					animation,
					including animating on twos, dotted halftones, RGB glitch effects, and just the overall style
					and color theme of the movie (specifically the What's Up Danger scene!).
					
					<PageImage :image-src="BallSpiderVerseImage"/>
				</PageSection>
				<PageSection>
					<template #title>Storyboard</template>
					I wanted to animate a ball bouncing on top of buildings with the same aesthetic as the movie.
					<br>
					<br>
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
					<br>
					<br>
					I animated the cameras on ones so the camera movement was smooth but the character (the ball)
					movement was choppy.
					<PageImage :image-src="BallAnimationImage2"/>
					<PageImage :image-src="BallAnimationImage"/>
				</PageSection>
				<PageSection>
					<template #title>Texturing</template>
					For the buildings lights, I found a blocky texture online and combined it with the emission color
					for the lights,
					and scaled up the same texture for the emission level. For the other materials in the buildings,
					I created a glass texture that sat on geometry just outside of the lights, and an aiToon texture for
					the shell. The silhouette buildings are just stretched cubes with an aiToon texture.
					<br>
					<br>
					Into the Spider-Verse has dotted highlights and shadows which adds to the comic book style. I
					attempted
					to create my own in Maya with ball by using a shader I found online for the dots combined with an
					aiToon shader. The results weren't that impressive, so I added some dotted highlights in After
					Effects.
					<br>
					<br>
					For the portal, I used aiToonShaders with high emission, and added glitch effects in After Effects.
					<PageImage :image-src="BallTextureImage"/>
					<PageImage :image-src="BallTexturesImage"/>
				</PageSection>
				<PageSection>
					<template #title>Lighting and Scene</template>
					For the lighting, I used a few main lights and set up additional lights for each shot. I laid out my
					buildings (lit and silhouette) based on my camera positions. I ended up spending a lot of time
					tweaking
					all the building positions and shot-specific lights to get the shots I wanted.
					<PageImage :image-src="BallLightingImage"/>
					<PageImage :image-src="BallSceneImage"/>
				</PageSection>
				<PageSection>
					<template #title>Final Result</template>
					<PageVideo :video-src="BallVideo"/>
				</PageSection>
			</PageView>
			<PageView v-else-if="store.currentProject=='rube-goldberg'">
				<template #title>Rube Goldberg</template>
				<template #project>Project 4</template>
				<PageSection>
					<template #title>Animating</template>
					I simulated almost everything in this animation, with a few exceptions. Using Bullet, I created static rigid bodies for the ball to
					roll on, kinematic rigid bodies for the forces acting on objects (such as the piston on the ball), and dynamic
					rigid bodies for the ball and minecart. I added constraints to the minecart(s) so they moved how I wanted. The
					only time I keyframed the ball was at the end (as the ball falls into the cob web) to make a perfect loop.
				</PageSection>
				<PageSection>
					<template #title>Scene</template>
					My scene consisted mostly of rectangular prisms with a stone texture, some light sources, and
					a few other objects. The lava and torches use mesh lights to illuminate the cave, with some Arnold
					emission to highlight the actual surface of the light. I added several area lights with blue tints, positioned
					off camera, to light the rest of the scene and contrast the warm tint of the other lights.
				</PageSection>
				<PageSection>
					<template #title>Texturing</template>
					I kept most of the textures, excluding the ball, Minecraft themed. Most of the textures I created were
					just sourced from the real game, excluding the stone texture. For this texture plugged an aiCellNoise node
					into a ramp so I could control how dense I wanted the colors.
				</PageSection>
				<PageSection>
					<template #title>Camera</template>
					Initially, I linked the camera's x and y positions to the ball, but the camera was very jumpy looked
					unrealistic. So I created a motion path for the camera, but I didn't like the way it looked either because
					it wasn't 'locked' on the ball enough. I also didn't want to deal with editing the path as I
					changed the scene.
					<br><br>
					So, with a little help from ChatGPT, I created a script for the camera to follow the ball with spring-like
					motion (imagine attaching a spring to a point positioned at the ball's position x y position). I added
					a velocity attribute to the camera and updated it in the script every frame, then used the distance
					from the camera to the ball, combined with a dampening factor times the velocity to update the camera's
					position. I also incorporated the other balls (the ball that rolls on the pressure plate and the ball
					that comes out of the portal) by averaging them with the original ball's position when I wanted the
					camera to frame them, and interpolating to this average over a few frames for smoothness. This was a little
					complicated and took me some time, but turned out looking really good. I baked the frames for rendering
					purposes.
					<PageImage :image-src="RubeCamera"/>
				</PageSection>
				<PageSection>
					<template #title>Water</template>
					From what I can tell, Bullet does not support fluid dynamics. So, for the water dynamics, I created another expression.
					I know some basic physics, and I got the hang of the expression editor when animating the camera. I defined a buoyant
					force for the water column, and an applied force for the moving water. I applied these to the ball via the impulse attribute, then increased the
					linearDamping attribute of the ball so it looked like the ball was moving through a fluid. I set the forces and damping so they only
					turned on when inside the bounds of the water, which I defined using locators in the scene. Overall, this turned out
					well, although I think the ball bounced too much after it reached the top of the water column.
				</PageSection>
				<PageSection>
					<template #title>Final Render</template>
					Turn on sound, use headphones for better experience! Also, I had a lot of Z-fighting in this render (I overlapped a lot of geometry
					which created some flickering textures), so I am fixing that and re-rendering soon.
					<PageVideo :video-src="RubeVideo" loop/>
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
		
		--primary-color-values: 237, 167, 0;
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
