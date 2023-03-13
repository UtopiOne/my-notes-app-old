<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="absolute top-0 h-full w-full flex bg-slate-500/50 z-30 items-center justify-center">
	<div class="bg-white p-10 rounded-lg shadow-lg">
		<div class="flex self-center p-[0_15px_10px] bottom-3">
			<slot name="title" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<button on:click={() => dispatch('closeModal')}>Close</button>

		<slot name="body" />

		<slot name="footer" />
	</div>
</div>
