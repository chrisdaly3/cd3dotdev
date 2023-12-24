<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { user, history } from '$lib/stores/localStorage';
	import { handle } from '$lib/commands';
	import { window } from './terminal.svelte';
	import type { HTMLResponse } from '$lib/commands';

	interface LineData {
		command: string;
		response: string | HTMLResponse;
	}

	let terminalInput: HTMLSpanElement;
	let command: string;
	let terminalLines: LineData[] = [];
	let historyIndex: number = $history.length;
	let username;

	$: username = user;

	onMount(() => {
		terminalInput.focus();
	});

	afterUpdate(() => {
		scrollToBottom(window);
	});

	const scrollToBottom = (node: HTMLElement) => {
		node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
	};

	// Set the user's prior history of commands for arrow handling, and perform action of command
	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			$history.push(command);
			history.set($history);
			historyIndex = $history.length;

			let response = handle(command);
			terminalLines[terminalLines.length] = { command, response };
			command = '';
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			historyIndex = Math.max(0, historyIndex - 1);
			console.log(historyIndex);
			command = $history[historyIndex];
		} else if (event.key === 'ArrowDown') {
			event.preventDefault();
			historyIndex = Math.min($history.length, historyIndex + 1);
			console.log(historyIndex);
			command = $history[historyIndex];
		}
	}
</script>

<span class="text-text overflow-y-auto px-6 whitespace-pre-wrap pl-0">
	{#each terminalLines as line, i (i)}
		<span class="outline-none caret-transparent text-foam">{$user} @ ~/cd3/dev: </span><span
			class="outline-none pl-1">{line.command}</span
		>
		{#if typeof line.response === 'string'}
			<p class="pt-2 pb-4 font-bold">{line.response}</p>
		{:else}
			{@html line.response.element}
		{/if}
	{/each}
</span>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="text-text overflow-y-auto" on:click={terminalInput.focus()} role="textbox" tabindex="0">
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
