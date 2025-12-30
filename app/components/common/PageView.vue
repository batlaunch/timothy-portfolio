<script setup lang="ts">
	import CloseIcon from '~/components/common/icons/CloseIcon.vue'
	
	const store = useStore()
	
	const pageEl = useTemplateRef('pageEl')
	
	onMounted(() => pageEl?.value.focus())
</script>

<template>
	<section class="page-view" tabindex="0" @keyup.esc="store.currentProject = null" ref="pageEl">
		<div class="page-inner">
			<article class="article">
				<div class="header">
					<div class="header-side">
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
					<div class="header-side">
					
					</div>
					
				</div>
				
				<slot/>
			</article>
			

		</div>
		<button class="exit-button" @click="store.currentProject = null">
			<CloseIcon/>
		</button>
		

		
		
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
		position: absolute;
		inset: 0;
		z-index: 5;
		background: black;
		outline: none;
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
		display: flex;
		justify-content: space-between;
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
		border-radius: 100%;
		background: var(--border-color);
		/*background: none;*/
		color: var(--neutral-color);
		/*opacity: 0.6;*/
		width: 40px;
		height: 40px;
		cursor: pointer;
		position: fixed;
		right: 24px;
		top: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	/*.page-view:before, .page-view:after  {*/
	/*	position: fixed;*/
	/*	pointer-events: none;*/
	/*	content: '';*/
	/*	top: 0;*/
	/*	!*left: 600px;*!*/
	/*	right: -100px;*/
	/*	!*height: 400px;*!*/
	/*	bottom: 0;*/
	/*	width: 200px;*/
	/*	background: red;*/
	/*	border-radius: 100% 100%;*/
	/*	z-index: -2;*/
	/*	filter: blur(200px);*/
	/*	opacity: 0.3;*/
	/*}*/
	
	/*.page-view:after {*/
	/*	right: unset;*/
	/*	left: 0;*/
	/*	background: orange;*/
	/*}*/
</style>