<script>
	import plus from '$lib/assets/plus.png';
	import { fly } from 'svelte/transition';
</script>

<button
	on:click
	class="flex justify-center h-[300px] w-[200px] rounded-lg border-slate-500 border-dashed border-2 hover:scale-105 transition ease-in-out"
	in:fly={{ y: 10, duration: 300 }}
>
	<img src={plus} alt="plus sign (press to add note)" class="h-12 w-12 self-center opacity-50" />
</button>

<slot />
