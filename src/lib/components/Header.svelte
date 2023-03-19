<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import logo from '$lib/assets/logo.svg';
	import user from '$lib/assets/user.svg';

	import LoginModal from '$lib/components/modals/LoginModal.svelte';
	import UserModal from '$lib/components/modals/UserModal.svelte';

	let showLogin: boolean = false;
	let loggedIn = false;

	const dispatch = createEventDispatcher();

	const getLogin = () => {
		showLogin = !showLogin;
	};
</script>

<header
	class="w-full flex justify-between shadow-lg px-2 md:px-0 text-lg bg-white sticky top-0 backdrop-blur-sm transition-transform ease-in z-20 dark:bg-neutral-700"
	class:translate-y-full={false}
>
	<div class="inline-flex m-1.5 ml-4">
		<img src={logo} class="w-12 h-12 mr-1 dark:fill-slate-100" alt="notes logo" />
		<a class="m-3 dark:text-slate-100" href="/">MyNoteApp</a>
	</div>
	<button class="dark:text-slate-100" on:click={() => dispatch('toggleDarkMode')}>Dark mode</button>

	<a class="mt-5 dark:text-slate-100" href="about">About</a>

	<button class="m-1.5 mr-4" on:click={getLogin}>
		<img src={user} class="w-12 h-12" alt="your profile pic" />
	</button>
</header>

{#if showLogin}
	{#if !loggedIn}
		<LoginModal on:closeLogin={getLogin} on:login={getLogin} />
	{:else}
		<UserModal />
	{/if}
{/if}

<slot />
