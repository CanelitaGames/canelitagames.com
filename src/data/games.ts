import type { Locale } from "../i18n/config";

export interface StoreLinks {
	android?: string;
	ios?: string;
}

export interface GameTranslation {
	status: string;
	tagline: string;
	description: string;
	highlights: string[];
}

export interface Game {
	id: string;
	title: string;
	logo: string;
	accent: string;
	available: boolean;
	stores: StoreLinks;
	translations: Record<Locale, GameTranslation>;
}

export const games: Game[] = [
	{
		id: "touch-the-apple",
		title: "Touch the Apple",
		logo: "/logos/touch-the-apple.svg",
		accent: "sun",
		available: true,
		stores: {
			android: "https://play.google.com/store/apps/details?id=com.canelitagames.touchtheapple",
		},
		translations: {
			es: {
				status: "Ya disponible",
				tagline: "Agilidad visual, tensión rápida y duelos 1v1 para picarse.",
				description:
					"Encuentra la manzana entre montones de fruta, gana segundos extra y compite online o sin conexión en partidas cortas con mucho ritmo.",
				highlights: ["Modo infinito offline", "Duelos 1v1 online", "Clasificaciones y skins"],
			},
			en: {
				status: "Out now",
				tagline: "Sharp eyes, fast tension and spicy 1v1 duels.",
				description:
					"Spot the apple hidden among piles of fruit, earn extra seconds and compete online or offline in short, frantic matches.",
				highlights: ["Offline endless mode", "Online 1v1 duels", "Leaderboards and skins"],
			},
			it: {
				status: "Disponibile ora",
				tagline: "Agilità visiva, tensione rapida e duelli 1v1 per sfidarsi davvero.",
				description:
					"Trova la mela tra mucchi di frutta, guadagna secondi extra e sfida altri giocatori online o offline in partite brevi e intense.",
				highlights: ["Modalità infinita offline", "Duelli 1v1 online", "Classifiche e skin"],
			},
			pt: {
				status: "Já disponível",
				tagline: "Agilidade visual, tensão rápida e duelos 1v1 para entrar em competição.",
				description:
					"Encontra a maçã no meio de montes de fruta, ganha segundos extra e compete online ou offline em partidas curtas e intensas.",
				highlights: ["Modo infinito offline", "Duelos 1v1 online", "Classificações e skins"],
			},
			ca: {
				status: "Ja disponible",
				tagline: "Agilitat visual, tensió ràpida i duels 1v1 per picar-se de debò.",
				description:
					"Troba la poma entre piles de fruita, guanya segons extra i competeix en línia o sense connexió en partides curtes i amb molt ritme.",
				highlights: ["Mode infinit offline", "Duels 1v1 online", "Classificacions i skins"],
			},
			fr: {
				status: "Déjà disponible",
				tagline: "Agilité visuelle, tension rapide et duels 1v1 pour se challenger.",
				description:
					"Repérez la pomme cachée parmi des tas de fruits, gagnez des secondes supplémentaires et affrontez d'autres joueurs en ligne ou hors ligne dans des parties courtes et nerveuses.",
				highlights: ["Mode infini hors ligne", "Duels 1v1 en ligne", "Classements et skins"],
			},
		},
	},
	{
		id: "essence-merge",
		title: "Essence Merge",
		logo: "/logos/essence-merge.svg",
		accent: "mint",
		available: true,
		stores: {
			android: "https://play.google.com/store/apps/details?id=com.CanelitaGames.EssenceMerge",
			ios: "https://apps.apple.com/us/app/essence-merge-zen-puzzle/id6759247567",
		},
		translations: {
			es: {
				status: "Ya disponible",
				tagline: "Un puzzle zen de fusionar orbes, ordenar el caos y entrar en flow.",
				description:
					"Mezcla lógica tipo 2048 con física dinámica, estética cósmica y un ritmo relajado pensado para jugar sin prisas y con buen tacto.",
				highlights: ["Física dinámica", "Modo infinito", "Audio inmersivo"],
			},
			en: {
				status: "Out now",
				tagline: "A zen orb-merging puzzle to tame chaos and settle into flow.",
				description:
					"It blends 2048-style logic with dynamic physics, cosmic visuals and a calm pace designed for thoughtful, tactile play.",
				highlights: ["Dynamic physics", "Endless mode", "Immersive audio"],
			},
			it: {
				status: "Disponibile ora",
				tagline: "Un puzzle zen di sfere da fondere, ordinare e vivere in pieno flow.",
				description:
					"Unisce logica in stile 2048, fisica dinamica, estetica cosmica e un ritmo rilassato pensato per giocare senza fretta.",
				highlights: ["Fisica dinamica", "Modalità infinita", "Audio immersivo"],
			},
			pt: {
				status: "Já disponível",
				tagline: "Um puzzle zen de fundir orbes, ordenar o caos e entrar em flow.",
				description:
					"Mistura lógica ao estilo 2048 com física dinâmica, estética cósmica e um ritmo relaxado pensado para jogar sem pressa.",
				highlights: ["Física dinâmica", "Modo infinito", "Áudio imersivo"],
			},
			ca: {
				status: "Ja disponible",
				tagline: "Un puzle zen de fusionar orbes, ordenar el caos i entrar en flow.",
				description:
					"Barreja lògica estil 2048 amb física dinàmica, estètica còsmica i un ritme relaxat pensat per jugar sense presses.",
				highlights: ["Física dinàmica", "Mode infinit", "Àudio immersiu"],
			},
			fr: {
				status: "Déjà disponible",
				tagline: "Un puzzle zen où fusionner des orbes, ordonner le chaos et entrer dans le flow.",
				description:
					"Il mêle une logique façon 2048 à une physique dynamique, une esthétique cosmique et un rythme apaisé pensé pour jouer sans stress.",
				highlights: ["Physique dynamique", "Mode infini", "Audio immersif"],
			},
		},
	},
	{
		id: "zen-lexis",
		title: "Zen Lexis",
		logo: "/logos/zen-lexis.svg",
		accent: "cyan",
		available: true,
		stores: {
			android: "https://play.google.com/store/apps/details?id=com.canelitagames.zenlexis&hl=es_419",
		},
		translations: {
			es: {
				status: "Ya disponible",
				tagline: "Resolver palabras, pensar rápido y jugar en 6 idiomas.",
				description:
					"Un nuevo juego de letras en el que tendrás que ordenar caracteres, reconocer patrones y resolver palabras con soporte multidioma.",
				highlights: ["6 idiomas", "Partidas mentales cortas", "Disponible en Google Play"],
			},
			en: {
				status: "Out now",
				tagline: "Solve words, think fast and play in 6 languages.",
				description:
					"A fresh word game where you sort characters, spot patterns and solve terms with multilingual support built in.",
				highlights: ["6 languages", "Short brainy sessions", "Available on Google Play"],
			},
			it: {
				status: "Disponibile ora",
				tagline: "Risolvi parole, pensa in fretta e gioca in 6 lingue.",
				description:
					"Un nuovo gioco di lettere in cui dovrai ordinare caratteri, riconoscere schemi e risolvere parole con supporto multilingue.",
				highlights: ["6 lingue", "Sessioni mentali brevi", "Disponibile su Google Play"],
			},
			pt: {
				status: "Já disponível",
				tagline: "Resolve palavras, pensa rápido e joga em 6 idiomas.",
				description:
					"Um novo jogo de letras em que tens de ordenar caracteres, reconhecer padrões e resolver palavras com suporte multilingue.",
				highlights: ["6 idiomas", "Partidas mentais curtas", "Disponível no Google Play"],
			},
			ca: {
				status: "Ja disponible",
				tagline: "Resol paraules, pensa ràpid i juga en 6 idiomes.",
				description:
					"Un nou joc de lletres on hauràs d'ordenar caràcters, reconèixer patrons i resoldre paraules amb suport multilingüe.",
				highlights: ["6 idiomes", "Partides mentals curtes", "Disponible a Google Play"],
			},
			fr: {
				status: "Déjà disponible",
				tagline: "Résolvez des mots, réfléchissez vite et jouez en 6 langues.",
				description:
					"Un nouveau jeu de lettres où vous devez trier des caractères, repérer des motifs et résoudre des mots avec prise en charge multilingue.",
				highlights: ["6 langues", "Courtes sessions cérébrales", "Disponible sur Google Play"],
			},
		},
	},
];
