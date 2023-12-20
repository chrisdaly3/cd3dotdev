<script lang="ts">
	import { isVisible } from '$lib/stores/hide.js';
	import { blur, slide } from 'svelte/transition';
	import TerminalInput from './terminalInput.svelte';
	import { OnMount } from 'fractils';

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
		<div class="h-full bg-overlay flex flex-col rounded-b-xl opacity-60 shadow-xl">
			<section
				class="h-full bg-transparent flex flex-col rounded-b-xl z-10 text-text font-bold overflow-y-auto px-6"
			>
				<OnMount>
					<pre
						class="text-xs leading-none text-gold -skew-x-12 pt-5 pb-2"
						in:slide={{ duration: 3000, axis: 'x' }}>
 ██████╗██████╗ ██████╗    ██████╗ ███████╗██╗   ██╗
██╔════╝██╔══██╗╚════██╗   ██╔══██╗██╔════╝██║   ██║
██║     ██║  ██║ █████╔╝   ██║  ██║█████╗  ██║   ██║
██║     ██║  ██║ ╚═══██╗   ██║  ██║██╔══╝  ╚██╗ ██╔╝
╚██████╗██████╔╝██████╔╝██╗██████╔╝███████╗ ╚████╔╝ 
 ╚═════╝╚═════╝ ╚═════╝ ╚═╝╚═════╝ ╚══════╝  ╚═══╝  
					</pre>
				</OnMount>
				<section>Hello and welcome. Type --help to get started.</section>
				<TerminalInput />
			</section>
		</div>
	</div>
{/if}
