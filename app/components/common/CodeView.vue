<script setup lang="ts">
	import 'highlight.js/styles/atom-one-dark.css'
	import 'highlight.js/lib/common'
	import hljs from 'highlight.js'
	
	
	const slots = useSlots()
	
	const codeText = computed(() => {
		const vNodes = slots.default?.() ?? []
		return vNodes
			.map(v => {
				// Text VNodes store newline literally
				if (typeof v.children === "string") return v.children
				return ''
			})
			.join('')
	})
	
	onMounted(() => {
		hljs.highlightAll()
	})
</script>

<template>
	<pre><code>{{ codeText }}</code></pre>
	
<!--	hello-->
</template>

<style scoped>
	:deep(code) {
		border-radius: 16px;
		tab-size: 4;
		background: hsl(220 13% 11% / 1);
	}
</style>