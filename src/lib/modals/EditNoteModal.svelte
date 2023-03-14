<script>
	import { createEventDispatcher } from 'svelte';
	import Modal from '$lib/modals/Modal.svelte';

	export let titleInput = '';
	const dispatch = createEventDispatcher();
</script>

<Modal>
	<div slot="title" class="flex justify-center">
		<p>Note edit</p>
	</div>
	<div slot="body" class="row-start-2">
		<input
			type="text"
			placeholder="Title"
			class="border-slate-300 border-2 rounded mb-3 p-1"
			bind:value={titleInput}
		/>
	</div>
	<div slot="footer" class="flex justify-start gap-2">
		<button
			class="bg-green-300 py-1 px-2 rounded w-35 h-10"
			on:click={() => dispatch('acceptModal')}>Accept</button
		>
		<button class="bg-slate-300 py-1 px-2 rounded w-35 h-10" on:click={() => dispatch('closeModal')}
			>Close</button
		>
	</div>
</Modal>

<slot />
