<script setup lang="ts">
	import CloseIcon from '~/components/common/icons/CloseIcon.vue'
	
	const store = useStore()
</script>

<template>
	<section class="page-view">
		<div class="page-inner">
			<article class="article">
				<div class="header">
					<p class="project-number">
						<slot name="project"/>
					</p>
					<h1 class="title">
						<slot name="title"/>
					</h1>
<!--					<p class="date">-->
<!--						<slot name="date"/>-->
<!--					</p>-->
				</div>
				
				<slot/>
			</article>
			
			<button class="exit-button" @click="store.currentProject = null">
				<CloseIcon/>
			</button>
		</div>
		

		
		
		<!--	  <div id="gradient"></div>-->
	</section>

</template>

<style scoped>
	.title {
		font-size: 2.25rem;
	}
	
	.page-view {
		overflow-y: scroll;
		width: 100%;
		height: 100%;
		display: flex;
		/*flex-direction: column;*/
		justify-content: center;
	}
	
	.project-number {
		text-transform: uppercase;
		margin-bottom: 8px;
		font-size: 14px;
		color: var(--neutral-60);
		font-weight: 600;
		letter-spacing: 0.02rem;
	}
	
	.header {
		margin-bottom: 32px;
	}
	
	.date {
		margin-top: 16px;
	}
	
	p {
		color: var(--neutral-80);
		letter-spacing: 0.03rem;
	}
	
	.page-inner {
		max-width: 1280px;
		padding: 0 32px;
		box-sizing: border-box;
		flex: 1 1 800px;
		position: relative;
		display: flex;
		justify-content: center;
	}
	
	.article {
		max-width: 800px;
		flex: 1 1 800px;
		margin: 96px 0;
		display: flex;
		flex-direction: column;
		gap: 32px;
		
	}
	
	
	.exit-button {
		border: none;
		border-radius: 8px;
		background: var(--border-color);
		color: var(--neutral-color);
		width: 48px;
		height: 48px;
		cursor: pointer;
		position: absolute;
		right: 0;
		top: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>