<script>
	import { fade, fly } from 'svelte/transition';
</script>

<div
	class="h-[300px] w-[200px] bg-slate-300 rounded-lg hover:scale-105 transition ease-in-out"
	in:fly={{ y: 100, duration: 100 }}
/>
