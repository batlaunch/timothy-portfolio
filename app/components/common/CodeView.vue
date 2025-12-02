<script setup lang="ts">
	import 'highlight.js/styles/atom-one-dark.css'
	import 'highlight.js/lib/common';
	
	const slots = useSlots()
	
	const code = computed(() => {
		const vNodes = slots.default?.() ?? []
		console.log(vNodes)
		return vNodes
			.map(v => {
				// Text VNodes store newline literally
				if (typeof v.children === "string") return v.children
				return ''
			})
			.join('')
	})
</script>

<template>
	<highlightjs language="python" :code="code"/>
<!--	hello-->
</template>

<style scoped>
	:deep(code) {
		border-radius: 16px;
		tab-size: 4;
		background: hsl(220 13% 11% / 1);
	}
</style>