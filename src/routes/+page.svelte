<script lang="ts">
	// @ts-nocheck

	import AddCard from '$lib/components/AddCard.svelte';
	import Note from '$lib/components/Note.svelte';
	import EditNoteModal from '$lib/components/modals/EditNoteModal.svelte';
	import LoginModal from '$lib/components/modals/LoginModal.svelte';
	import notesStore from '../stores/stores.ts';

	import type { PageData } from './$types';

	export let data: PageData;
	let notes = data.notes.data;

	notes.forEach((note) => {
		if (!$notesStore.includes(note))
			notesStore.update((currentData) => {
				return [...currentData, note];
			});
	});

	let showModal = false;

	let currentTitle = '';
	let currentContents = '';

	const getModal = async function () {
		showModal = !showModal;
	};

	const handleNoteAddition = async function () {
		await getModal();
		notesStore.update((currentData) => {
			return [...currentData, { title: currentTitle, content: currentContents }];
		});

		currentTitle = '';
		currentContents = '';
	};
</script>

{#if showModal}
	<EditNoteModal
		on:acceptModal={handleNoteAddition}
		on:closeModal={getModal}
		bind:titleInput={currentTitle}
		bind:contentInput={currentContents}
	/>
{/if}

<div class="m-10 grid row lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
	{#each $notesStore as note, i}
		<Note title={note.title} contents={note.content} />
	{/each}
	<AddCard on:click={getModal} />
</div>
