<script>
	import logo from '$lib/assets/logo.png';
	import user from '$lib/assets/user.png';
</script>

<header
	class="w-full flex justify-between shadow-lg px-2 md:px-0 text-lg bg-white sticky top-0 backdrop-blur-sm transition-transform ease-in z-20"
	class:translate-y-full={false}
>
	<div class="inline-flex m-1.5 ml-4">
		<img src={logo} class="w-12 h-12 mr-1" alt="notes logo" />
		<a class="m-3" href="/">MyNoteApp</a>
	</div>

	<a class="mt-5" href="about">About</a>

	<div class="m-1.5 mr-4">
		<img src={user} class="w-12 h-12" alt="your profile pic" />
	</div>
</header>

<slot />
