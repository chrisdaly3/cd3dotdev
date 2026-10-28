import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// Keep svelte out of the SSR bundle so SvelteKit 2 detects Svelte 4 correctly
	ssr: {
		external: ['svelte']
	}
});
