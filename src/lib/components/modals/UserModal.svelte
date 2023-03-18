<script>
	import Modal from '$lib/components/modals/Modal.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<Modal>
	<div slot="body">
		<p>You are now logged in as {2}</p>
	</div>
</Modal>
