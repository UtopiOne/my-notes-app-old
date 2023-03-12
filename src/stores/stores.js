import { writable } from 'svelte/store';

const notesStore = writable([]);

export default notesStore;
