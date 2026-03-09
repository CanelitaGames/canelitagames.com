export interface StoreLinks {
	android?: string;
	ios?: string;
}

export interface Game {
	title: string;
	logo: string;
	status: string;
	tagline: string;
	description: string;
	highlights: string[];
	accent: string;
	available: boolean;
	stores: StoreLinks;
}

export const games: Game[] = [
	{
		title: "Touch the Apple",
		logo: "/logos/touch-the-apple.svg",
		status: "Ya disponible",
		tagline: "Agilidad visual, tensión rápida y duelos 1v1 para picarse.",
		description:
			"Encuentra la manzana entre montones de fruta, gana segundos extra y compite online o sin conexión en partidas cortas con mucho ritmo.",
		highlights: ["Modo infinito offline", "Duelos 1v1 online", "Clasificaciones y skins"],
		accent: "sun",
		available: true,
		stores: {
			android: "https://play.google.com/store/apps/details?id=com.canelitagames.touchtheapple",
		},
	},
	{
		title: "Essence Merge",
		logo: "/logos/essence-merge.svg",
		status: "Ya disponible",
		tagline: "Un puzzle zen de fusionar orbes, ordenar el caos y entrar en flow.",
		description:
			"Mezcla lógica tipo 2048 con física dinámica, estética cósmica y un ritmo relajado pensado para jugar sin prisas y con buen tacto.",
		highlights: ["Física dinámica", "Modo infinito", "Audio inmersivo"],
		accent: "mint",
		available: true,
		stores: {
			android: "https://play.google.com/store/apps/details?id=com.CanelitaGames.EssenceMerge",
			ios: "https://apps.apple.com/us/app/essence-merge-zen-puzzle/id6759247567",
		},
	},
	{
		title: "Zen Lexis",
		logo: "/logos/zen-lexis.svg",
		status: "Próximamente",
		tagline: "Resolver palabras, pensar rápido y jugar en 6 idiomas.",
		description:
			"Un nuevo juego de letras en el que tendrás que ordenar caracteres, reconocer patrones y resolver palabras con soporte multidioma.",
		highlights: ["6 idiomas", "Partidas mentales cortas", "Próximo lanzamiento"],
		accent: "cyan",
		available: false,
		stores: {},
	},
];
