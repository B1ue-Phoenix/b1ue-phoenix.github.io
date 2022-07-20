<script context="module" lang="ts">
	import { loadTranslations, locale } from "$lib/i18n";

	export const load = async ({ url }: { url: URL }) => {
		const { pathname } = url;

		const defaultLocale = "en"; // get from cookie, user session, ...

		const initLocale = locale.get() || defaultLocale; // set default if no locale already set

		await loadTranslations(initLocale, pathname); // keep this just before the `return`

		return {};
	};
</script>

<script>
	import "$lib/styles/app.scss";
</script>

<slot />
