export const supportedLocales = ["es", "en", "it", "pt", "ca", "fr"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "es";

export const localeOptions: Array<{ code: Locale; label: string }> = [
	{ code: "es", label: "Español" },
	{ code: "en", label: "English" },
	{ code: "it", label: "Italiano" },
	{ code: "pt", label: "Português" },
	{ code: "ca", label: "Català" },
	{ code: "fr", label: "Français" },
];

export const ogLocaleByLocale: Record<Locale, string> = {
	es: "es_ES",
	en: "en_US",
	it: "it_IT",
	pt: "pt_PT",
	ca: "ca_ES",
	fr: "fr_FR",
};

export function normalizeLocale(value?: string | null): Locale {
	if (!value) {
		return defaultLocale;
	}

	const normalized = value.toLowerCase();
	const exactMatch = supportedLocales.find((locale) => locale === normalized);

	if (exactMatch) {
		return exactMatch;
	}

	const prefixMatch = supportedLocales.find((locale) => normalized.startsWith(`${locale}-`));

	return prefixMatch ?? defaultLocale;
}