<script lang="ts">
	import { fly } from 'svelte/transition';
	import garbage from '$lib/assets/garbage.png';

	export let title: string = '';
	export let contents: string = '';
</script>

<div
	class="grid grid-cols-[2fr_1fr] grid-rows-[1fr_3fr_1fr] h-[375px] w-full resize-none bg-slate-300 rounded-lg hover:scale-105 transition ease-in-out"
	in:fly={{ y: 100, duration: 300 }}
>
	<button class="col-start-1 col-span-2 text-xl hover:underline">{title}</button>
	<p class="col-span-2 row-start-2 mx-5">{contents}</p>
	<img
		src={garbage}
		alt="delete"
		class="w-10 h-10 justify-self-center col-start-2 row-start-3 hover:opacity-50"
	/>
</div>

<slot />
