<script>
	import Modal from '$lib/components/modals/Modal.svelte';
	import { createEventDispatcher } from 'svelte';

	export let titleInput = '';
	export let contentInput = '';
	const dispatch = createEventDispatcher();
</script>

<Modal>
	<div slot="title" class="text-center text-xl">
		<p>Note edit</p>
	</div>
	<div slot="body" class="row-start-2 grid grid-rows-4 w-80 h-44">
		<input maxlength="30" type="text" placeholder="Title" class="input" bind:value={titleInput} />
		<textarea
			placeholder="Contents"
			class="border-slate-300 border-2 rounded mb-3 p-1 h-64 row-span-3 text-top resize-none dark:bg-neutral-600 dark:border-neutral-600"
			bind:value={contentInput}
		/>
	</div>
	<div slot="footer" class="flex justify-start gap-2 translate-y-36">
		<button
			class="bg-green-300 py-1 px-2 rounded w-35 h-10"
			on:click={() => dispatch('acceptModal')}>Accept</button
		>
		<button
			class="bg-slate-300 py-1 px-2 rounded w-35 h-10"
			on:click={() => {
				dispatch('closeModal');
			}}>Close</button
		>
	</div>
</Modal>

<slot />
