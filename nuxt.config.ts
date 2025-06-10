// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: false },
	vite: {
		build: {
			chunkSizeWarningLimit: 3000,
		},
	},
	css: ['~/assets/styles/cv-styles.scss'],
});
