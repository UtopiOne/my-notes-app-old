<script lang="ts">
	// @ts-nocheck

	import AddCard from '$lib/AddCard.svelte';
	import Note from '$lib/Note.svelte';
	import notesStore from '../stores/stores.js';
	import EditNoteModal from '$lib/EditNoteModal.svelte';

	let notes: any[];
	let showModal = false;

	const getModal = async function () {
		showModal = !showModal;
	};

	notesStore.subscribe((data) => {
		notes = data;
	});

	const handleNoteAddition = async function () {
		await getModal();
		console.log(1);
		notesStore.update((currentData) => {
			return [1, ...currentData];
		});
	};
</script>

{#if showModal}
	<EditNoteModal on:acceptModal={handleNoteAddition} />
{/if}

<div class="m-10 grid row lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
	{#each notes as note, i}
		<Note />
	{/each}
	<AddCard on:click={getModal} />
</div>
