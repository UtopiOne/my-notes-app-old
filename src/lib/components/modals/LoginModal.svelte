<script>
	import Modal from '$lib/components/modals/Modal.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let password = '';
	let confirmPassword = '';
</script>

<Modal>
	<div slot="title" class="flex justify-center text-xl">
		<p>Login</p>
	</div>
	<form slot="body" class="flex flex-row sm:flex-col">
		<input class="input" type="email" placeholder="E-mail" />
		<input class="input" type="password" placeholder="Password" bind:value={password} />
		<input
			class="input"
			type="password"
			placeholder="Confirm password"
			bind:value={confirmPassword}
		/>
	</form>
	<div slot="footer" class="flex justify-start">
		<button
			class="p-1 w-40 h-10 bg-green-300 rounded-lg"
			disabled={password !== confirmPassword}
			on:click={() => dispatch('login')}>Login</button
		>
		<button
			class="p-1 mx-2 w-20 h-10 bg-slate-300 rounded-lg"
			on:click={() => dispatch('closeLogin')}>Close</button
		>
	</div>
</Modal>

<slot />
