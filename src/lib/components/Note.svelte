<script lang="ts">
	import garbage from '$lib/assets/garbage.png';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let title: string = '';
	export let contents: string = '';

	function cutString(string: string) {
		if (string.length > 290) {
			return string.substring(0, 290) + '...';
		}
		return string;
	}
</script>

<div
	class="grid grid-cols-[2fr_1fr] grid-rows-[1fr_3fr_1fr] h-[375px] w-full resize-none bg-slate-300 rounded-lg hover:scale-105 transition ease-in-out dark:bg-neutral-600"
	in:fly={{ y: 100, duration: 300 }}
	out:fly={{ y: 100, duration: 300 }}
>
	<button class="col-start-1 col-span-2 text-xl break-all hover:underline dark:text-neutral-50"
		>{title}</button
	>
	<p
		class="col-span-2 row-start-2 mx-5 dark:text-neutral-50 break-words"
		style="text-overflow: clip"
	>
		{cutString(contents)}
	</p>
	<button
		class="w-10 h-10 justify-self-center col-start-2 row-start-3 hover:opacity-50"
		on:click={() => dispatch('delete')}><img src={garbage} alt="delete" /></button
	>
</div>

<slot />
