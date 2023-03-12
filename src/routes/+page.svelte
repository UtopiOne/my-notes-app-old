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

<div class="m-10 grid grid-cols-8 gap-10">
	{#each notes as note, i}
		<Note />
	{/each}
	<AddCard on:click={handleNoteAddition} />
</div>
