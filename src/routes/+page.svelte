<script lang="ts">
	// @ts-nocheck

	import AddCard from '$lib/AddCard.svelte';
	import Note from '$lib/Note.svelte';
	import notesStore from '../stores/stores.js';

	let notes: any[];

	notesStore.subscribe((data) => {
		notes = data;
	});

	function handleNoteAddition() {
		console.log(1);
		notesStore.update((currentData) => {
			return [1, ...currentData];
		});
	}
</script>

<div class="m-10 grid row lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
	{#each notes as note, i}
		<Note />
	{/each}
	<AddCard on:click={handleNoteAddition} />
</div>
