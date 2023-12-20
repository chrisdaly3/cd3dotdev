<script lang="ts">
	import { onMount } from 'svelte';

	let terminalInput: HTMLSpanElement;

	onMount(() => {
		terminalInput.focus();
	});

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			insertNewSpan();
		}
	}

	function insertNewSpan() {
		const newSpan = document.createElement('span');
		newSpan.contentEditable = 'true';
		newSpan.className =
			"outline-none caret-transparent before:content-['visitor_@_~/cd3/dev:_'] before:text-foam after:content-['.'] after:bg-text after:animate-blink";
		newSpan.setAttribute('role', 'textbox');
		newSpan.setAttribute('tabindex', '-1');
		newSpan.addEventListener('keydown', handleKeyPress);

		terminalInput.parentElement?.appendChild(newSpan);

		newSpan.focus();
		newSpan.previousElementSibling.className =
			"outline-none caret-transparent before:content-['visitor_@_~/cd3/dev:_'] before:text-foam";
	}
</script>

<span
	bind:this={terminalInput}
	contenteditable="true"
	class="outline-none
	 caret-transparent
	 before:content-['visitor_@_~/cd3/dev:_']
	 before:text-foam
	 after:content-['.']
	 after:bg-text
	 after:animate-blink"
	on:keydown={handleKeyPress}
	role="textbox"
	tabindex="-1"
>
</span>
