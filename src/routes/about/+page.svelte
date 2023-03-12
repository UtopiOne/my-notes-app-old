<script>
	import { fly } from 'svelte/transition';
</script>

<div class="m-5" in:fly={{ y: 100, duration: 100 }} out:fly={{ y: 100, duration: 100 }}>
	<a href="https://www.flaticon.com/free-icons/note" title="note icons"
		>Note icons created by Freepik - Flaticon</a
	>

	<a href="https://www.flaticon.com/ru/free-icons/" title="plus icons"
		><br />Plus icons created by IYAHICON - Flaticon</a
	>

	<a href="https://www.flaticon.com/free-icons/user" title="user icons"
		>U<br />user icons created by Freepik - Flaticon</a
	>
</div>
