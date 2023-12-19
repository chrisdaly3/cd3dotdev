<script lang="ts">
	import '../app.css';
	import { isVisible } from '$lib/stores/hide';
	function showTerminal() {
		isVisible.set(true);
	}
</script>

<slot />
<div class="max-h-screen flex flex-row fixed bottom-0">
	<footer class="text-text px-6">© CD3.dev</footer>
	<button class="text-gold hover:text-pine px-3" on:click={showTerminal}>Spawn a new terminal</button>
</div>
