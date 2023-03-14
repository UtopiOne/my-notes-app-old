<script>
	import { createEventDispatcher } from 'svelte';
	import { scale } from 'svelte/transition';

	const dispatch = createEventDispatcher();
</script>

<div class="absolute top-0 h-full w-full flex bg-slate-500/50 z-30 items-center justify-center">
	<div class="grid grid-rows-3 bg-white p-6 rounded-lg shadow-lg" in:scale={{ duration: 100 }}>
		<div>
			<slot name="title" />
		</div>
		<slot name="body" class="row-start-2" />

		<slot name="footer" class="row-start-3" />
	</div>
</div>

<slot />
