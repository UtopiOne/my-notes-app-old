<script lang="ts">
	// @ts-nocheck

	import AddCard from '$lib/components/AddCard.svelte';
	import Note from '$lib/components/Note.svelte';
	import EditNoteModal from '$lib/components/modals/EditNoteModal.svelte';
	import LoginModal from '$lib/components/modals/LoginModal.svelte';
	import notesStore from '$lib/stores/stores.ts';

	import type { PageData } from './$types';

	export let data: PageData;
	let notes = data.notes.data;
	notesStore.set([]);

	notes.forEach((note) => {
		if (!$notesStore.includes(note))
			notesStore.update((currentData) => {
				return [...currentData, note];
			});
	});

	let showModal = false;

	let currentTitle = '';
	let currentContents = '';

	const handleNoteAddition = async function () {
		showModal = !showModal;
		notesStore.update((currentData) => {
			return [...currentData, { title: currentTitle, content: currentContents }];
		});

		currentTitle = '';
		currentContents = '';
	};

	const removeNote = function (id) {
		notesStore.update((currentData) => {
			let filtered = currentData.filter((item) => item.id != id);
			return [...filtered];
		});
	};
</script>

{#if showModal}
	<EditNoteModal
		on:acceptModal={handleNoteAddition}
		on:closeModal={() => (showModal = !showModal)}
		bind:titleInput={currentTitle}
		bind:contentInput={currentContents}
	/>
{/if}

<div class="m-10 grid row lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
	{#each $notesStore as note, i (note.id)}
		<Note title={note.title} contents={note.content} on:delete={removeNote(note.id)} />
	{/each}
	<AddCard on:click={() => (showModal = !showModal)} />
</div>
