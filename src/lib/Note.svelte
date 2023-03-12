<script>
	import { fly } from 'svelte/transition';
	import garbage from '$lib/assets/garbage.png';
</script>

<div
	class="grid grid-cols-[2fr_1fr] grid-rows-[1fr_3fr_1fr] h-[300px] w-[200px] bg-slate-300 rounded-lg hover:scale-105 transition ease-in-out"
	in:fly={{ y: 100, duration: 100 }}
>
	<button class="col-start-1 text-xl hover:underline">Title</button>
	<p class="col-span-2 row-start-2 mx-5">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, asperiores.
	</p>
	<img src={garbage} alt="delete" class="w-10 h-10 justify-self-center col-start-2 row-start-3" />
</div>

<slot />
