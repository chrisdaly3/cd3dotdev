<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	let isHelloDone = false;
	let isTextShowing = false;
	let cursorColor = '#27272a';

	function handleDone(detail: string) {
		isHelloDone = true;
	}

	function showSocials(detail: string) {
		isTextShowing = true;
	}
</script>

<div
	class="bg-gradient-to-b from-slate-600 to-zinc-200 flex flex-col justify-center"
	style="--cursor-color:{cursorColor}"
>
	<Typewriter interval="68" delay="420" on:done={handleDone}>
		<p class="text-6xl text-center font-bold">Hello.</p>
	</Typewriter>

	{#if isHelloDone}
		<Typewriter mode="loopOnce" interval="68" delay="675" on:done={showSocials}>
			<br />
			<p class="text-6xl text-center font-bold my-8 mx-10">
				My name is Chris, and I'm a software developer.
			</p>
		</Typewriter>
	{/if}
</div>
<div></div>
