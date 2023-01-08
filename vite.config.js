import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: 'src/components',
			formats: ['es'],
		},
		rollupOptions: {
			external: /^lit/,
		},
	},
});
