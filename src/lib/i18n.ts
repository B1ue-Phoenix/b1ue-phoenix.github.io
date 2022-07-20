import i18n from "sveltekit-i18n";

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: "en",
			key: "l",
			loader: async () => (await import("../i18n/en.json")).default,
		},
		{
			locale: "ko",
			key: "l",
			loader: async () => (await import("../i18n/ko.json")).default,
		},
	],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
	config
);
