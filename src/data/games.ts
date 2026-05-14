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
		id: "prisma-flow",
		title: "Prisma Flow",
		logo: "/logos/prisma-flow.png",
		accent: "prism",
		available: true,
		stores: {
			ios: "https://apps.apple.com/us/app/prisma-flow-color-puzzle/id6760553596",
		},
		translations: {
			es: {
				status: "Ya disponible",
				tagline: "Repara caminos de color en puzzles cortos y relajantes.",
				description:
					"Intercambia piezas y gira nodos hasta que el color llegue limpio al final. Sin prisas, con puzzle diario y ayudas si te atascas.",
				highlights: ["Puzzle diario", "Partidas rápidas", "Sin presión"],
			},
			en: {
				status: "Out now",
				tagline: "Fix color paths in short, relaxing puzzles.",
				description:
					"Swap tiles and rotate nodes until the color reaches the end cleanly. No rush, with a daily puzzle and help when you get stuck.",
				highlights: ["Daily puzzle", "Quick sessions", "No pressure"],
			},
			it: {
				status: "Disponibile ora",
				tagline: "Ripara percorsi di colore in puzzle brevi e rilassanti.",
				description:
					"Scambia tessere e ruota nodi finché il colore arriva pulito alla fine. Senza fretta, con puzzle giornaliero e aiuti quando servono.",
				highlights: ["Puzzle giornaliero", "Partite rapide", "Senza pressione"],
			},
			pt: {
				status: "Já disponível",
				tagline: "Repara caminhos de cor em puzzles curtos e relaxantes.",
				description:
					"Troca peças e roda nós até a cor chegar limpa ao fim. Sem pressa, com puzzle diário e ajuda quando ficares preso.",
				highlights: ["Puzzle diário", "Partidas rápidas", "Sem pressão"],
			},
			ca: {
				status: "Ja disponible",
				tagline: "Repara camins de color en puzles curts i relaxants.",
				description:
					"Intercanvia peces i gira nodes fins que el color arribi net al final. Sense presses, amb puzle diari i ajuda quan t'encallis.",
				highlights: ["Puzle diari", "Partides ràpides", "Sense pressió"],
			},
			fr: {
				status: "Déjà disponible",
				tagline: "Réparez des chemins de couleur dans des puzzles courts et relaxants.",
				description:
					"Échangez des tuiles et tournez les nœuds jusqu'à ce que la couleur arrive proprement au bout. Sans stress, avec puzzle quotidien et aide si besoin.",
				highlights: ["Puzzle quotidien", "Parties rapides", "Sans pression"],
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
			ios: "https://apps.apple.com/us/app/zen-lexis-word-puzzle/id6759875370",
		},
		translations: {
			es: {
				status: "Ya disponible",
				tagline: "Ordena letras y descubre palabras en 6 idiomas.",
				description:
					"Juega sin cronómetro, mejora vocabulario y cambia de idioma cuando quieras. Incluye campaña, modo infinito, pistas y logros.",
				highlights: ["6 idiomas", "Sin cronómetro", "Modo infinito"],
			},
			en: {
				status: "Out now",
				tagline: "Unscramble letters and find words in 6 languages.",
				description:
					"Play without a timer, build vocabulary and switch languages whenever you want. Includes campaign, endless mode, hints and achievements.",
				highlights: ["6 languages", "No timer", "Endless mode"],
			},
			it: {
				status: "Disponibile ora",
				tagline: "Riordina lettere e trova parole in 6 lingue.",
				description:
					"Gioca senza timer, arricchisci il vocabolario e cambia lingua quando vuoi. Include campagna, modalità infinita, aiuti e obiettivi.",
				highlights: ["6 lingue", "Senza timer", "Modalità infinita"],
			},
			pt: {
				status: "Já disponível",
				tagline: "Ordena letras e descobre palavras em 6 idiomas.",
				description:
					"Joga sem cronómetro, melhora vocabulário e muda de idioma quando quiseres. Inclui campanha, modo infinito, dicas e conquistas.",
				highlights: ["6 idiomas", "Sem cronómetro", "Modo infinito"],
			},
			ca: {
				status: "Ja disponible",
				tagline: "Ordena lletres i descobreix paraules en 6 idiomes.",
				description:
					"Juga sense cronòmetre, millora vocabulari i canvia d'idioma quan vulguis. Inclou campanya, mode infinit, pistes i assoliments.",
				highlights: ["6 idiomes", "Sense cronòmetre", "Mode infinit"],
			},
			fr: {
				status: "Déjà disponible",
				tagline: "Réorganisez les lettres et trouvez des mots en 6 langues.",
				description:
					"Jouez sans minuteur, enrichissez votre vocabulaire et changez de langue quand vous voulez. Campagne, mode infini, indices et succès inclus.",
				highlights: ["6 langues", "Sans minuteur", "Mode infini"],
			},
		},
	},
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
				tagline: "Encuentra la manzana antes de que se acabe el tiempo.",
				description:
					"Partidas rápidas para probar reflejos: busca la manzana entre frutas, suma segundos y compite online o sin conexión.",
				highlights: ["Duelos 1v1", "Modo infinito", "Skins y rankings"],
			},
			en: {
				status: "Out now",
				tagline: "Find the apple before time runs out.",
				description:
					"Quick matches for sharp reflexes: spot the apple in the fruit pile, earn seconds and compete online or offline.",
				highlights: ["1v1 duels", "Endless mode", "Skins and rankings"],
			},
			it: {
				status: "Disponibile ora",
				tagline: "Trova la mela prima che finisca il tempo.",
				description:
					"Partite rapide per mettere alla prova i riflessi: cerca la mela tra la frutta, guadagna secondi e competi online o offline.",
				highlights: ["Duelli 1v1", "Modalità infinita", "Skin e classifiche"],
			},
			pt: {
				status: "Já disponível",
				tagline: "Encontra a maçã antes que o tempo acabe.",
				description:
					"Partidas rápidas para testar reflexos: encontra a maçã entre frutas, ganha segundos e compete online ou offline.",
				highlights: ["Duelos 1v1", "Modo infinito", "Skins e rankings"],
			},
			ca: {
				status: "Ja disponible",
				tagline: "Troba la poma abans que s'acabi el temps.",
				description:
					"Partides ràpides per posar a prova els reflexos: busca la poma entre fruites, suma segons i competeix online o sense connexió.",
				highlights: ["Duels 1v1", "Mode infinit", "Skins i rànquings"],
			},
			fr: {
				status: "Déjà disponible",
				tagline: "Trouvez la pomme avant la fin du chrono.",
				description:
					"Des parties rapides pour tester vos réflexes : repérez la pomme parmi les fruits, gagnez des secondes et jouez en ligne ou hors ligne.",
				highlights: ["Duels 1v1", "Mode infini", "Skins et classements"],
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
				tagline: "Fusiona orbes y busca una partida cada vez más alta.",
				description:
					"Un puzzle relajado con física suave, combos y modo infinito. Fácil de entender, difícil de soltar.",
				highlights: ["Física suave", "Modo infinito", "Audio relajante"],
			},
			en: {
				status: "Out now",
				tagline: "Merge orbs and chase a higher run every time.",
				description:
					"A relaxed puzzle with soft physics, combos and endless mode. Easy to learn, hard to put down.",
				highlights: ["Soft physics", "Endless mode", "Relaxing audio"],
			},
			it: {
				status: "Disponibile ora",
				tagline: "Fondi sfere e punta a una partita sempre più alta.",
				description:
					"Un puzzle rilassato con fisica morbida, combo e modalità infinita. Facile da capire, difficile da lasciare.",
				highlights: ["Fisica morbida", "Modalità infinita", "Audio rilassante"],
			},
			pt: {
				status: "Já disponível",
				tagline: "Funde orbes e tenta chegar mais longe a cada partida.",
				description:
					"Um puzzle relaxado com física suave, combos e modo infinito. Fácil de perceber, difícil de largar.",
				highlights: ["Física suave", "Modo infinito", "Áudio relaxante"],
			},
			ca: {
				status: "Ja disponible",
				tagline: "Fusiona orbes i busca una partida cada cop més alta.",
				description:
					"Un puzle relaxat amb física suau, combos i mode infinit. Fàcil d'entendre, difícil de deixar.",
				highlights: ["Física suau", "Mode infinit", "Àudio relaxant"],
			},
			fr: {
				status: "Déjà disponible",
				tagline: "Fusionnez des orbes et visez une partie toujours plus haute.",
				description:
					"Un puzzle détendu avec physique douce, combos et mode infini. Simple à comprendre, difficile à lâcher.",
				highlights: ["Physique douce", "Mode infini", "Audio relaxant"],
			},
		},
	},
];
