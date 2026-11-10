/**
 * Brand assets in one place.
 *
 * The Canelita Games logo is being redesigned. When the new files are ready,
 * drop them into `public/logos/` and update the paths below: the header,
 * footer, favicon-sized marks, Open Graph image and JSON-LD all read from here.
 *
 * - `mark`: square logo used in the header and footer (SVG preferred).
 * - `social`: raster version (PNG, >= 512px) for Open Graph and structured data.
 */
export const brand = {
	name: "Canelita Games",
	logo: {
		mark: "/logos/canelita-games-current.png",
		social: "/logos/canelita-games-current.png",
		alt: "Canelita Games",
	},
	googlePlayProfile: "https://play.google.com/store/apps/dev?id=6148040112617060945&hl=es_419",
	supportEmail: "canelitagames@gmail.com",
} as const;
