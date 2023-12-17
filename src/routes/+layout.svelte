<script>
	import '../app.css';
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<div class="container mx-auto p-4">
		<div class="bg-taskBar flex w-auto self-center rounded-t-xl">
			<div class="mx-1.5 ml-4 my-4 w-3 h-3 rounded-full bg-exit hover:bg-exitHover"></div>
			<div class="mx-1.5 my-4 w-3 h-3 rounded-full bg-minimize"></div>
			<div class="mx-1.5 my-4 w-3 h-3 rounded-full bg-expand"></div>
		</div>
		<slot />
		<footer class="text-zinc-900 text-sm bg-zinc-200">© 2023 cd3.dev</footer>
	</div>
</div>
