<script>
	import { createEventDispatcher } from 'svelte';
	import { scale, blur } from 'svelte/transition';

	const dispatch = createEventDispatcher();
</script>

<div
	class="fixed top-0 h-full w-full flex bg-slate-500/50 z-30 items-center justify-center dark:bg-neutral-800/50"
	in:blur={{ duration: 100, amount: 10 }}
>
	<div
		class="grid grid-rows-3 bg-white p-6 rounded-lg shadow-lg dark:bg-neutral-800"
		in:scale={{ duration: 450 }}
		out:scale={{ duration: 250 }}
	>
		<div class="dark:text-neutral-50">
			<slot name="title" />
		</div>
		<slot name="body" class="row-start-2" />

		<slot name="footer" class="row-start-3 dark:text-neutral-50" />
	</div>
</div>

<slot />
