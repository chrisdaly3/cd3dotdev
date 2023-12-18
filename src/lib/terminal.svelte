<script lang="ts">
	import { isVisible } from '$lib/stores/hide.js';
	import { blur } from 'svelte/transition';

	function handleClose() {
		isVisible.set(false);
	}
</script>

{#if $isVisible}
	<div class="container mx-auto w-8/12 p-4 h-3/5" transition:blur>
		<div class="bg-taskBar flex w-auto self-center rounded-t-xl">
			<button
				class="mx-1.5 ml-4 my-4 w-3 h-3 rounded-full bg-exit hover:bg-exitHover"
				on:click={handleClose}
			></button>
			<div class="mx-1.5 my-4 w-3 h-3 rounded-full bg-minimize"></div>
			<div class="mx-1.5 my-4 w-3 h-3 rounded-full bg-expand"></div>
		</div>
		<div class="h-full bg-overlay flex flex-col rounded-b-xl">
			<p class="text-xl text-left mx-5 text-text">Hello.</p>
			<p class="text-xl text-left my-3 mx-5 text-text">My name is Chris, and I'm a software developer.</p>
		</div>
	</div>
{/if}
