<script>
	import { createEventDispatcher } from 'svelte';
	import Modal from '$lib/Modal.svelte';

	const dispatch = createEventDispatcher();
</script>

<Modal on:closeModal={() => dispatch('close')}>
	<div slot="title">
		<p>Note</p>
	</div>
</Modal>
