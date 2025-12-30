<script setup lang="ts">
	import PageView from '~/components/common/PageView.vue'
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
	import HeaderView from '~/components/home/HeaderView.vue'
	import ProjectList from '~/components/home/ProjectList.vue'
	
	import RubeVideo from '~/images/proj4/rube_goldberg_final_1.mp4'
	import RubeCamera from '~/images/proj4/camera.png'
	
	import DominoDominoes from '~/images/proj5/dominoes.png'
	import DominoTextures from '~/images/proj5/textures.png'
	import DominoDynamics from '~/images/proj5/dynamics.png'
	import DominoRender from '~/images/proj5/render.png'
	import DominoGrid from '~/images/proj5/grid.png'
	import DominoPlayblastAll from '~/images/proj5/playblast_all.mp4'
	import DominoPlayblastCamera from '~/images/proj5/playblast_camera.mp4'
	import DominoExport from '~/images/proj5/export1.mp4'
	
	
	import FinalStoryboard from '~/images/final_project/storyboard.jpg'
	import FinalEnvironment from '~/images/final_project/environment.png'
	import FinalTent from '~/images/final_project/tent.png'
	import FinalFavela from '~/images/final_project/favela.png'
	import FinalIndustrial from '~/images/final_project/industrial.png'
	import FinalCity from '~/images/final_project/city.png'
	import FinalLighting from '~/images/final_project/lighting.jpg'
	import FinalVideo from '~/images/final_project/final_wide.mp4'
	
	
	const store = useStore()


</script>

<template>
	<HeaderView/>
	<ProjectList/>
	<Transition>
		
			<PageView v-if="store.currentProject === 'planet-animation'">
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
			<PageView v-else-if="store.currentProject=='dominoes'">
				<template #title>Dominoes</template>
				<template #project>Project 5</template>
				<PageSection>
					My idea was to create a video using the dots, or pips, on the dominoes, as they are falling. I wanted a 3d grid of dominoes, with the Y axis
					representing the Y in the video, the Z axis representing the X in the video, and the X axis representing the current frame. The dominoes fall
					along the X axis, and as each YZ plane of dominoes fall, their pips light up with the current frame of the video.
					<br><br>
					I think this was a little ambitious. In addition, I don't think it even looked that cool anyways. The project itself has been done for a while
					now, but I still do not have a final render. I have attempted to render around 6 times on the
					lab machines (Maya doesn't have GPU drivers for macOS, and this would never render on a CPU), including
					multiple times before Thanksgiving break (where I couldn't even get the project to load on the lab machines), once over Thanksgiving break (I spent
					around 6 hours trying to render on the lab machines remotely on the command line via ssh, with basically infinite issues), and several times
					after Thanksgiving break after making changes to reduce the amount of geometry. So far, I've only gotten 100 frames to render in total
					due to crashing.
				</PageSection>
				<PageSection>
					<template #title>Creating the Scene</template>
					To create the scene, I wrote code that created several variations of dominoes with beveled edges, pips, and dividers. I made the pips
					and the divider in actual geometry rather than with shaders for reasons that I explain in the textures section. I used an ID node
					to randomize the order of the variations.
					<br><br>
					
					<PageImage :image-src="DominoDominoes"/>
					<PageImage :image-src="DominoGrid"/>
				</PageSection>
				<PageSection>
					<template #title>Dynamics</template>
					I experimented with MASH Dynamics for a while, but it didn't meet my needs. For my animation, I needed the whole grid of dominoes
					to fall in perfect synchrony, which the MASH Dynamics node is not meant for. I DID test it for a long time, so please
					don't give me points off because I "didn't implement MASH dynamics". Instead, I created a MASH Python node that roughly simulated
					the falling animation by updating the rotation and position (so it rotates on an anchor point) based on the domino's x position and the current frame.
					I also used a MASH Color node, NOT for color, but as a data channel from the Python node to Arnold, as I could control the value in the Python node
					and read the value in Arnold. I used it to signal which domino was currently falling via the red channel, and which dominoes had already
					fallen via the green channel.
					<PageImage :image-src="DominoDynamics"/>
				</PageSection>
				<PageSection>
					<template #title>Textures</template>
					My idea was to create a video using the dominoes, where each pip is a 'pixel', each plane in a grid is a frame, and each frame
					lights up as the dominoes in it are falling.
					<br><br>
					I first experimented with the MASH Color node to color a pip texture on the dominoes. Because the color node can only color on an per-instance basis,
					all the pips in single domino would have to be the same color. Using this method, the images weren't detailed enough with the amount
					of dominoes my computer could handle. So, to create per-pip lighting, I created the pips using real geometry and projected the image onto them.
					To do this, I created a UV coordinate using a samplerInfo node, which I piped into some aiRanges to map Z and Y coordinates to UV coords.
					Then I setup an image sequence to display the video. I decided to make the dominoes out of glass so the pip-lighting was visible from the camera.
					<br><br>
					To highlight only the dominoes that were currently falling, I created a second fully transparent texture and assigned it to an aiLayerShader
					to mix it with the original 'lit' texture. To control which one is showing, I used the MASH Color node that I talked about in the dynamics
					section, which was simply data channel between the Python node and Arnold. I used an aiUserDataColor node to receive the data from the Python node (essentially),
					and used the red channel to control the visibility of the pip.
					<PageImage :image-src="DominoTextures"/>
					<PageImage :image-src="DominoRender"/>
				
				</PageSection>
				<PageSection>
					<template #title>Refactoring!</template>
					My original project simply did not work. While trying to playblast my animation, I figured out it wasn't even Arnold
					that was crashing the renders, it was just amount of geometry in my scene. Turning off cache helped immediately,
					and it made the system actually usable (each frame took about 2 seconds, so maya was using all its resources
					just trying to cache). However, even the playblasts were still crashing.
					<br><br>
					To lighten the load on Maya, I had a few options. The most obvious of these was reducing the number of dominoes.
					I played around with Y and Z counts to find the smallest grid that still showed the video projection clearly enough.
					I settled on halving the Y and Z counts, so only a quarter of the dominoes remained.
					<br><br>
					Switching my MASH node to an Instancer instead of a ReproMesh was an option to speed things up, but after some research I couldn't use it.
					The Instancer bypasses a significant amount of functionality
					to boost performance, including the CPV attribute, which the color node uses to send information to Arnold. Unfortunately,
					I still needed the green channel to fade the dominoes out in Arnold after they fell (even with a clear glassy texture,
					there's still plenty of distortion when enough dominoes stacked up. Also, for my performance trick of only rendering
					30 'frames' of dominoes at a time, they needed to fade out before being removed to avoid looking jarring).
					<br><br>
					Another option was reducing the beveling on the dominoes. I lowered the subdivisions on both bevels, but didn't remove the beveling
					completely. A bevel with just one subdivision looks much better than no bevel at all. This helped, but not as much as my next change.
					<br><br>
					While I did need pips for every domino, I only needed the current 'frame' to have them visible. Originally, I just hid the pips
					I didn't need using the opacity option in my Arnold shader, but they were still all in the scene. So, I modified my Python node
					and ID node in mash to fully remove the pips when they weren't needed. I created an extra domino, this one with no pips.
					I sampled it in my instancer as well. Then, I wanted the ID node to randomly choose dominoes with pips for only the current 'frame',
					and use the pipless domino for all others. The only way to get this level of granularity over the ID node would be using a falloff, which
					would be a nightmare (I'd have to keyframe an object to perfectly match the rate the dominoes fall at). Instead, I let the ID node
					make all the dominoes random, then in the Python node I overwrote the outId attribute on my OpenMASH object to be the blank domino
					for all dominos not in the frame. This attribute is not documented anywhere of course... as per usual with Maya... but it is easily
					findable with the __dict__ attribute.
					<br><br>
					With all these changes, the scene worked much better. It wasn't smooth, but it was renderable and playblastable. Here are the playblasts
					of my final animation.
					<PageVideo :video-src="DominoPlayblastAll"/>
					<PageVideo :video-src="DominoPlayblastCamera"/>
				</PageSection>
				<PageSection>
					<template #title>Final Render</template>
					<span>
						I used the intro scene from Cars 1:
						<a href="https://www.youtube.com/watch?v=sXRAtBX5HRw">https://www.youtube.com/watch?v=sXRAtBX5HRw</a>. Turn on volume!
						I'm rendering more frames right now...
						<br><br>
						With more time I would've added more camera angles. I think the animation is cool but
						a little hard to understand what's happening without some different angles.
						
					</span>
					<PageVideo :video-src="DominoExport"/>
				</PageSection>
			
			</PageView>
			<PageView v-else-if="store.currentProject === 'final'">
				<template #title>The Pattern</template>
				<template #project>Final Project</template>
				<PageSection>
					<template #title>Storyboard</template>
					My idea was to show the progression of a civilization from nature,
					then a first settlement, then factories, then a city, then war and
					total destruction, and finally back to nature again. The idea is
					we build these large civilizations from scratch then end up killing
					ourselves with our own technology.
					<PageImage :image-src="FinalStoryboard"/>
				</PageSection>
				<PageSection>
					<template #title>Environment</template>
					In this project, I mainly focused on the environment. I started with
					the foreground elements, which included a hill with some grass. I learned
					how to model mainly using the sculpt tool to make a small hill. I found some
					grass models online and created a Bifrost network to replicate the grass
					variations on the hill mesh. I actually had to redo this in MASH (which I
					avoided because Bifrost looked like it had some performance benefits) because
					the lab machines didn't have the plugin installed.
					<br><br>
					For the main landscape, I used the same method as with the small hill, which meant
					creating a large, heavily subdivided rectangle and modeling it with the sculpt tool.
					I sculpted the general shape of the landscape with a regular brush, then I added
					texture with a pattern brush. I also created an indent for a stream, which I filled
					in using the sweep mesh tool on a path. I also added a few trees which I found online.
					<br><br>
					Originally, I tried to make mountains myself, but I couldn't get them to look good. I
					searched online instead and found some that I liked and fit my environment well. These
					actually weren't models, rather a set of deformer maps with texture maps, so I applied
					the deformer maps some subdivided rectangles. I modified the maps manually a bit so
					they flattened out at the base and matched the rest of my landscape.
					<PageImage :image-src="FinalEnvironment"/>
				</PageSection>
				<PageSection>
					<template #title>Modeling</template>
					For each scene in my animation I created separate models for the civilization.
					<br><br>
					I modeled the tent myself. I made the frame from a few rectangles. For the fabric,
					I applied a bend deformer to a subdivided rectangle, then used the sculpt tool to
					give it a fabric look. I staked the fabric with a few rectangles. For the fire,
					I found log models online and created an area light for the fire. Overall, I was really
					happy with how the tent turned out. Although it was simple and easy to make, I think
					it looked good and stylistically fit well with my scene.
					<PageImage :image-src="FinalTent"/>
					I also modeled this set of favela-like buildings myself. I created scaled cubes with holes
					for windows, then stacked them and added roofs and poles for support. I also lit the buildings
					from the inside. This turned out decent,
					however with more time I would've added more details such as exterior props, more variation
					and detail to the buildings, and maybe a central plaza.
					<PageImage :image-src="FinalFavela"/>
					I did not model the industrial buildings myself. I found some low-poly models with textures,
					which was perfect for what I needed. I did, however, add window lighting to these buildings
					in my main scene using area lights reflected off the (non-transparent) windows.
					<PageImage :image-src="FinalIndustrial"/>
					I found a model for the city online. I redid the neon lighting and modified the layout some,
					but beyond that I kept the models the same.
					<PageImage :image-src="FinalCity"/>
				</PageSection>
				<PageSection>
					<template #title>Lighting</template>
					I went through a few iterations of lighting. I started with a physical sky (which is just
					a skydome with a texture). It looked horrible. I realized I needed some atmosphere.
					For some reason, skydomes don't work with Arnold atmospheres, so I switched to using
					area lights. The lighting looked much better with the atmosphere. For some of the scenes where
					I still wanted a blue sky, such as the nature scene, I used a combination of a skydome with
					the area lights to I had both a blue sky and an atmosphere.
					<PageImage :image-src="FinalLighting"/>
				</PageSection>
				<PageSection>
					<template #title>Final render</template>
					I didn't quite get to finish my render. I couldn't finish the project during finals season
					and I can't render at home because remote rendering on the lab machines isn't available
					and it would take days per scene on my laptop without a GPU.
					<br><br>
					I added some camera dolly, but it was far too slow and isn't noticeable. If I had rendered
					again I would've increased the dolly speed which would've made this much more cinematic in my
					opinion.
					<PageVideo :video-src="FinalVideo"/>
				</PageSection>
			</PageView>
		
	
	
	</Transition>

</template>

<style scoped>
	.v-enter-active {
		transition: 250ms;
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
	
	a {
		color: #61aeee;
	}
	
	body {
	
	}
	
	html {
		/*overflow: hidden;*/
		
	}
	
	button {
		font-family: 'Inter';
		transition: transform 300ms;
	}
	
	button:hover {
		transform: scale(1.1);
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
