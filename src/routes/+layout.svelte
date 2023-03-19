<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	let darkMode = false;
</script>

<main class={darkMode ? 'dark' : ''}>
	<Header on:toggleDarkMode={() => (darkMode = !darkMode)} />

	<slot />
</main>
