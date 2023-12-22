<script lang="ts">
	import { onMount } from 'svelte';
	import { user } from '$lib/stores/localStorage';
	import { handle } from '$lib/commands';

	interface LineData {
		command: string;
		response: string;
	}

	let terminalInput: HTMLSpanElement;
	let command: string;
	let terminalLines: LineData[] = [];
	let username;

	onMount(() => {
		terminalInput.focus();
	});

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			let response = handle(command);
			terminalLines[terminalLines.length] = { command, response };
			command = '';
		}
		username = user;
	}
</script>

<span class="text-text font-bold overflow-y-auto px-6 whitespace-pre-wrap pl-0">
	{#each terminalLines as line, i (i)}
		<span class="outline-none caret-transparent text-foam">{$user} @ ~/cd3/dev: </span><span
			class="outline-none pl-1">{line.command}</span
		>
		<p class="pt-1 pb-4">{line.response}</p>
	{/each}
</span>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="text-text font-bold overflow-y-auto"
	on:click={terminalInput.focus()}
	role="textbox"
	tabindex="0"
>
	<span class="outline-none caret-transparent text-foam">{$user} @ ~/cd3/dev: </span><span
		bind:this={terminalInput}
		contenteditable="true"
		bind:textContent={command}
		class="outline-none
			 caret-transparent
			 pl-1"
		on:keydown={handleKeyPress}
		role="textbox"
		tabindex="-1"
	></span><span class="outline-none caret-transparent bg-text animate-blink bg-clip-text">🁢</span>
</div>
