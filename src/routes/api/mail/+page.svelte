<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div
	class="flex h-screen flex-col items-center justify-center bg-gradient-to-t from-overlay from-5% to-rose"
>
	<p class="text-text font-semibold italic mb-10">
		Your msg has been submitted. We'll be in touch shortly.
	</p>

	<button
		on:click={() => goto('/')}
		class="text-text font-semibold p-2 border-2 border-love rounded-l underline italic hover:text-love"
		>Return to the terminal</button
	>
</div>
