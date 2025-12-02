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
	import CodeView from '~/components/common/CodeView.vue'
	
	import DominoDominoes from '~/images/proj5/dominoes.png'
	import DominoTextures from '~/images/proj5/textures.png'
	import DominoDynamics from '~/images/proj5/dynamics.png'
	import DominoRender from '~/images/proj5/render.png'
	import DominoGrid from '~/images/proj5/grid.png'
	
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
					the falling animation by updating the rotation and position (so it rotates on an anchor point) based on the dominoe's x position and the current frame.
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
					<template #title>Code</template>
					Code I executed directly in maya:
					<CodeView>
						<pre>
# =====================
# ==== dominoes.py ====
# =====================

'''
This commented script adds the scripts directory to the path and imports the run function

import sys, os
import maya.cmds as cmds

# Get the current Maya project root
project_root = cmds.workspace(q=True, rd=True)

# Build the path to the scripts directory
scripts_path = os.path.join(project_root, "scripts")

# Add it if not already present
if scripts_path not in sys.path:
sys.path.insert(0, scripts_path)

print("Scripts path added:", scripts_path)

from dominoes import run

'''


import main
import importlib

def run():
    importlib.reload(main)
    main.run()


# ===================
# ====  main.py  ====
# ===================
import importlib
import maya.cmds as cmds

import create_dominoes
importlib.reload(create_dominoes)

import mash
importlib.reload(mash)

import textures
importlib.reload(textures)

def run():
    # --- Create multiple variations of dominoes ---
    dominoes_group_name = 'all_dominoes'
    if cmds.objExists(dominoes_group_name):
    cmds.delete(dominoes_group_name)

    variations = [
        (2, 3),
        (4, 6),
        (5, 2),
        (1, 4),
        (5, 6),
        (4, 5)
    ]
    dominoes = []
    for var in variations:
        domino = create_dominoes.create_domino(f'domino{str(var[0])}_{str(var[1])}', var[0], var[1])
        dominoes.append(domino)

    cmds.group(dominoes, name=dominoes_group_name)


    # --- Create MASH network ---
    waiter, distribute, repro = mash.create_network('mash', dominoes)

    # --- Link time to image sequence ---
    textures.set_textures()
	# net = mash.mash_network('mash', domino.name)
	# mash.setup_instancer(net)

	
# ===================
# ====  mash.py  ====
# ===================
import maya.cmds as cmds
import MASH.api as mapi
import maya.mel as mel

def create_floors(layers, waiter, spacing, width, depth):

	floors_grp = 'floors_grp'
	if cmds.objExists(floors_grp):
		cmds.delete(floors_grp)
	floors_grp = cmds.group(em=True, name=floors_grp)
	
	floors = []
	
	for i in range(layers):
		level_y = -2.25 + i * spacing
	
	floor = cmds.polyCube(
		w=width * 1.2,
		h=0.25,
		d=depth,
		name=f"floor_{i+1}"
	)[0]
	
	# Move to the correct Y
	cmds.move(0, level_y, 0, floor, absolute=True)
	
	# Parent under floors group
	cmds.parent(floor, floors_grp)
	
	floors.append(floor)
	
	cmds.sets(floors, e=True, forceElement='DominoSG')


def create_network(name, sources):
	waiter_name = f'{name}_Waiter'
	dist_name = f'{name}_Distribute'
	repro_name = f'{name}_Repro'
	
	# Delete network if it dexists
	if cmds.objExists(waiter_name):
		cmds.delete(waiter_name)
	
	# Create network
	cmds.select(sources)
	mel.eval('CreateMashNetwork;')
	
	# New waiter should be selected
	waiter_list = cmds.ls(sl=True, type='MASH_Waiter')
	if not waiter_list:
		raise RuntimeError('No MASH_Waiter selected after MASHCreateNetwork')
	
	waiter = waiter_list[0]
	
	# Rename network
	waiter = cmds.rename(waiter, waiter_name)
	dist = cmds.listConnections(waiter, type='MASH_Distribute')[0]
	repro = cmds.listConnections(waiter, type='MASH_Repro')[0]
	
	# add_random_flip(waiter)
	
	# --- Grid properties ---
	cmds.setAttr(dist + '.arrangement', 6)
	cmds.setAttr(waiter + '_Id.idtype', 2)
	
	GRID_W = 160
	GRID_H = 90
	SPACING_W = 0.5
	SPACING_H = 0.5
	
	# Padding
	# PADDING = 10
	# GRID_W += PADDING*2
	# GRID_H += PADDING*2
	
	layers = int((GRID_H) / (4 + SPACING_H))
	cmds.setAttr(dist + '.gridAmplitudeX', GRID_W)
	cmds.setAttr(dist + '.gridAmplitudeY', GRID_H)
	cmds.setAttr(dist + '.gridx', GRID_W / (2 + SPACING_W))
	cmds.setAttr(dist + '.gridy', layers)
	cmds.setAttr(dist + '.gridz', 1)
	
	
	# --- Dynamics ---
	mn = mapi.Network(waiter)
	# mn.getNetworkFromNode(waiter)
	dyn_node = mn.addNode("MASH_Dynamics")
	
	create_floors(layers, waiter, GRID_H/(layers-1), GRID_W, 100)
	
	# cmds.setAttr(dist + ".gridSizeZ", 5.0)
	
	return waiter, dist, repro
	

# ==============================
# ====  create_dominoes.py  ====
# ==============================
import maya.cmds as cmds

def get_or_create_cube(name, w, h, d):
	# Delete if exists
	if cmds.objExists(name):
		cmds.delete(name)
	
	return cmds.polyCube(name=name, w=w, h=h, d=d)[0]

def get_or_create_sphere(name, r, sx, sy):
	return cmds.polySphere(
		name=name,
		r=r,
		sx=sx,
		sy=sy
	)[0]

def bevel_domino(name):
	# Bevel corners
	cmds.select(f'{name}.e[6:7]', f'{name}.e[10:11]')
	cmds.polyBevel3(offset=0.4, segments=6)
	
	# Bevel edges
	cmds.select(f'{name}.f[29]', f'{name}.f[28]') # Select faces
	cmds.select(cmds.polyListComponentConversion(toEdge=True))
	cmds.polyBevel3(offset=0.05, segments=2)

# Dictionary with positions of pips
p = 0.5
pip_positions = [
	[], # 0
	[(0, 0)], # 1
	[(-p, -p), (p, p)], # 2
	[(-p, -p), (0,0), (p, p)], # 3
	[(-p, -p), (-p, p), (p, -p), (p, p)], # 4
	[(-p, -p), (-p, p), (p, -p), (p, p), (0, 0)], # 5
	[(-p, -p), (-p, p), (p, -p), (p, p), (-p, 0), (p, 0)], # 6
]

def create_pips(prefix, positions, top):
	# Hold all pips
	pips = []
	
	for i, pos in enumerate(positions):
		pip = prefix + '_Pip' + ('Top' if top else 'Bottom') + str(i + 1)
		pip = get_or_create_sphere(pip, 0.2, 6, 5)
		cmds.move(pos[0], pos[1], 0, pip, relative=True)
	
		# Move pip to top or bottom of domino and move to outside face
		vert = -1 if top else 1
		cmds.move(0, vert, 0.25, pip, relative=True)
		
		pips.append(pip)
	
	# Assign shaders
	cmds.sets(pips, e=True, forceElement='PipLitSG')
	
	return pips


def create_domino(name, pips_top, pips_bottom):
	# Track objects in domino
	objects = []
	
	# Delete group if exists
	group_name = name + '_Group'
	if cmds.objExists(group_name):
		cmds.delete(group_name)
		
	# Make base
	name = get_or_create_cube(name, 2, 4, 0.5)
	bevel_domino(name)
	cmds.sets(name, e=True, forceElement='DominoSG')
	objects.append(name)
	
	# Make divider
	divider = get_or_create_cube(name + '_Divider', 1.6, 0.15, 0.2)
	cmds.move(0, 0, 0.25, divider, relative=True)
	cmds.sets(divider, e=True, forceElement='PipLitSG') # Shader
	objects.append(divider)
	
	# Make and place pips
	objects += create_pips(name, pip_positions[pips_top], top=True)
	objects += create_pips(name, pip_positions[pips_bottom], top=False)
	
	return cmds.group(objects, name=group_name)
						</pre>
						
					</CodeView>
					Code I executed in the MASH Python node:
					<CodeView>
						<pre>
'''
This is not code I executed directly in maya, it is code I use in my
MASH python node.
'''

import openMASH
import math

md = openMASH.MASHData(thisNode)
frame = md.getFrame()

fall_angle_deg = -80.0
dominoes_per_sec = 24.0
start_time = 0
offset = 100

t = max(md.getFrame() - offset, 0)
show_first = md.getFrame() - offset >= 0

for i in range(len(md.position)):
	idx = md.id[i]
	pos = md.position[i]
	
	frame_interp = 30
	
	start_t = start_time + ((idx - (pos.z - 40) * 20) / dominoes_per_sec)
	
	# Normalized progress s: 0 before start, 1 at the end of fall
	s = (t - start_t) / 10
	s = min(max(s, 0),1)
	
	if s == 1.0:
		theta = fall_angle_deg
	else:
		# s^2 gives a gravity-ish feel
		theta = fall_angle_deg * (s * s)
	
	rot = md.rotation[i]
	pos = md.position[i]
	rot.x = theta
	md.outPosition[i].z = pos.z + math.sin(math.radians(theta)) * 2
	md.outPosition[i].z += math.cos(math.radians(theta)) * 0.25
	md.outPosition[i].y = pos.y + math.cos(math.radians(theta))*2
	md.outPosition[i].y -= math.sin(math.radians(theta)) * 0.25
	md.rotation[i] = rot

if 0.5 < s < 0.7 or (34 < md.outPosition[i].z and show_first):
	md.color[i][0] = 1
else:
	md.color[i][0] = 0


md.setData()</pre>
					</CodeView>
					

				</PageSection>
				
				<PageSection>
					<template #title>Final Render</template>
					Something will be here at some point...
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
