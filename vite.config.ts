import { qwikRouter } from '@qwik.dev/router/vite';
import { qwikVite } from '@qwik.dev/core/optimizer';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async (config) => {
	return {
		// Enable to analyze via source-map-explorer
		ssr: { target: 'webworker' },
		build: {
			sourcemap: config.mode === 'development',
		},
		plugins: [qwikRouter(), qwikVite(), tsconfigPaths()],
		preview: {
			headers: {
				'Cache-Control': 'public, max-age=600',
			},
		},
	};
});
