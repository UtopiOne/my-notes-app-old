<script>
	import logo from '$lib/assets/logo.png';
	import user from '$lib/assets/user.png';
</script>

<header
	class="w-screen flex justify-between shadow-lg px-2 md:px-0 text-lg bg-white/50 sticky top-0 backdrop-blur-sm transition-transform ease-in"
	class:translate-y-full={false}
>
	<div class="inline-flex m-1.5 ml-4">
		<img src={logo} class="w-12 h-12 mr-1" alt="notes logo" />
		<p class="m-3 ">My notes</p>
	</div>

	<div class="m-1.5 mr-4">
		<img src={user} class="w-12 h-12" alt="your profile pic" />
	</div>
</header>

<slot />
