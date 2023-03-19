<script>
	import plus from '$lib/assets/plus.png';
	import { fly } from 'svelte/transition';
</script>

<button
	on:click
	class="flex justify-center h-[375px] w-full rounded-lg border-slate-500 border-dashed border-2 hover:scale-105 transition ease-in-out dark:border-neutral-600"
	in:fly={{ y: 100, duration: 300 }}
>
	<img src={plus} alt="plus sign (press to add note)" class="h-12 w-12 self-center opacity-50" />
</button>

<slot />
