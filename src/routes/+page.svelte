<script lang="ts">
	// @ts-nocheck

	import AddCard from '$lib/components/AddCard.svelte';
	import Note from '$lib/components/Note.svelte';
	import EditNoteModal from '$lib/components/modals/EditNoteModal.svelte';
	import LoginModal from '$lib/components/modals/LoginModal.svelte';
	import notesStore from '../stores/stores.js';

	let notes: any[];
	let showModal = false;

	let currentTitle = '';
	let currentContents = '';

	const getModal = async function () {
		showModal = !showModal;
	};

	notesStore.subscribe((data) => {
		notes = data;
	});

	const handleNoteAddition = async function () {
		await getModal();
		notesStore.update((currentData) => {
			return [...currentData, { title: currentTitle, contents: currentContents, date: '' }];
		});
		console.log(notes);
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
	{#each notes as note, i}
		<Note title={note.title} contents={note.contents} />
	{/each}
	<AddCard on:click={getModal} />
</div>
