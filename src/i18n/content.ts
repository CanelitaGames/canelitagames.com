import { defaultLocale, type Locale } from "./config";

export interface MetaContent {
	title: string;
	description: string;
}

export interface HomeContent {
	meta: MetaContent;
	hero: {
		badge: string;
		description: string;
		primaryCta: string;
		secondaryCta: string;
	};
	section: {
		kicker: string;
		title: string;
		description: string;
	};
	labels: {
		googlePlaySoon: string;
		appStoreSoon: string;
		highlightsAria: string;
	};
	structuredData: {
		websiteDescription: string;
		itemListName: string;
	};
}

export interface SharedContent {
	footerNavAria: string;
	privacyLink: string;
	dataDeletionLink: string;
	backToHome: string;
	languageLabel: string;
}

export interface LegalPageContent {
	meta: MetaContent;
	body: string;
}

export const sharedContent: Record<Locale, SharedContent> = {
	es: {
		footerNavAria: "Legal",
		privacyLink: "Política de privacidad",
		dataDeletionLink: "Solicitud de eliminación de datos",
		backToHome: "Volver a inicio",
		languageLabel: "Idioma del sitio",
	},
	en: {
		footerNavAria: "Legal",
		privacyLink: "Privacy policy",
		dataDeletionLink: "Data deletion request",
		backToHome: "Back to home",
		languageLabel: "Site language",
	},
	it: {
		footerNavAria: "Legale",
		privacyLink: "Informativa sulla privacy",
		dataDeletionLink: "Richiesta di cancellazione dei dati",
		backToHome: "Torna alla home",
		languageLabel: "Lingua del sito",
	},
	pt: {
		footerNavAria: "Legal",
		privacyLink: "Política de privacidade",
		dataDeletionLink: "Pedido de eliminação de dados",
		backToHome: "Voltar ao início",
		languageLabel: "Idioma do site",
	},
	ca: {
		footerNavAria: "Legal",
		privacyLink: "Política de privacitat",
		dataDeletionLink: "Sol·licitud d'eliminació de dades",
		backToHome: "Tornar a l'inici",
		languageLabel: "Idioma del lloc",
	},
	fr: {
		footerNavAria: "Mentions légales",
		privacyLink: "Politique de confidentialité",
		dataDeletionLink: "Demande de suppression des données",
		backToHome: "Retour à l'accueil",
		languageLabel: "Langue du site",
	},
};

export const homeContent: Record<Locale, HomeContent> = {
	es: {
		meta: {
			title: "Canelita Games | Juegos móviles indie en Android y iPhone",
			description:
				"Descubre los juegos móviles de Canelita Games: arcade de reflejos, puzzle zen y juegos de palabras con enlaces directos a Google Play y App Store.",
		},
		hero: {
			badge: "Canelita Games",
			description:
				"Juegos móviles para partidas rápidas, momentos zen y retos de palabras. Descubre nuestros títulos y juega en Google Play o App Store.",
			primaryCta: "Explorar catálogo",
			secondaryCta: "Perfil de Google Play",
		},
		section: {
			kicker: "Nuestros juegos",
			title: "Lo que ya puedes jugar, y lo próximo que viene.",
			description:
				"Explora cada juego, mira de qué va y entra directamente en su tienda correspondiente.",
		},
		labels: {
			googlePlaySoon: "Google Play próximamente",
			appStoreSoon: "App Store próximamente",
			highlightsAria: "Puntos destacados de",
		},
		structuredData: {
			websiteDescription: "Web oficial de Canelita Games con enlaces a sus juegos móviles.",
			itemListName: "Juegos de Canelita Games",
		},
	},
	en: {
		meta: {
			title: "Canelita Games | Indie mobile games on Android and iPhone",
			description:
				"Discover Canelita Games mobile titles: reflex arcades, zen puzzles and word games with direct links to Google Play and the App Store.",
		},
		hero: {
			badge: "Canelita Games",
			description:
				"Mobile games for quick sessions, zen moments and word challenges. Explore our titles and play on Google Play or the App Store.",
			primaryCta: "Explore catalog",
			secondaryCta: "Google Play profile",
		},
		section: {
			kicker: "Our games",
			title: "What you can already play, and what is coming next.",
			description:
				"Explore each game, see what it is about and jump straight to its store page.",
		},
		labels: {
			googlePlaySoon: "Google Play coming soon",
			appStoreSoon: "App Store coming soon",
			highlightsAria: "Highlights for",
		},
		structuredData: {
			websiteDescription: "Official Canelita Games website with links to its mobile games.",
			itemListName: "Canelita Games titles",
		},
	},
	it: {
		meta: {
			title: "Canelita Games | Giochi mobile indie su Android e iPhone",
			description:
				"Scopri i giochi mobile di Canelita Games: arcade di riflessi, puzzle zen e word game con link diretti a Google Play e App Store.",
		},
		hero: {
			badge: "Canelita Games",
			description:
				"Giochi mobile per partite rapide, momenti zen e sfide di parole. Scopri i nostri titoli e gioca su Google Play o App Store.",
			primaryCta: "Esplora il catalogo",
			secondaryCta: "Profilo Google Play",
		},
		section: {
			kicker: "I nostri giochi",
			title: "Quello che puoi già giocare e ciò che arriverà presto.",
			description:
				"Esplora ogni gioco, scopri di cosa tratta ed entra direttamente nel relativo store.",
		},
		labels: {
			googlePlaySoon: "Google Play prossimamente",
			appStoreSoon: "App Store prossimamente",
			highlightsAria: "Punti salienti di",
		},
		structuredData: {
			websiteDescription: "Sito ufficiale di Canelita Games con link ai suoi giochi mobile.",
			itemListName: "Giochi di Canelita Games",
		},
	},
	pt: {
		meta: {
			title: "Canelita Games | Jogos mobile indie no Android e iPhone",
			description:
				"Descobre os jogos mobile da Canelita Games: arcades de reflexos, puzzles zen e jogos de palavras com ligações diretas para Google Play e App Store.",
		},
		hero: {
			badge: "Canelita Games",
			description:
				"Jogos mobile para partidas rápidas, momentos zen e desafios de palavras. Descobre os nossos títulos e joga no Google Play ou na App Store.",
			primaryCta: "Explorar catálogo",
			secondaryCta: "Perfil do Google Play",
		},
		section: {
			kicker: "Os nossos jogos",
			title: "O que já podes jogar e o que vem a seguir.",
			description:
				"Explora cada jogo, vê do que se trata e entra diretamente na respetiva loja.",
		},
		labels: {
			googlePlaySoon: "Google Play em breve",
			appStoreSoon: "App Store em breve",
			highlightsAria: "Destaques de",
		},
		structuredData: {
			websiteDescription: "Site oficial da Canelita Games com ligações para os seus jogos mobile.",
			itemListName: "Jogos da Canelita Games",
		},
	},
	ca: {
		meta: {
			title: "Canelita Games | Jocs mòbils indie a Android i iPhone",
			description:
				"Descobreix els jocs mòbils de Canelita Games: arcade de reflexos, puzles zen i jocs de paraules amb enllaços directes a Google Play i App Store.",
		},
		hero: {
			badge: "Canelita Games",
			description:
				"Jocs mòbils per a partides ràpides, moments zen i reptes de paraules. Descobreix els nostres títols i juga a Google Play o a l'App Store.",
			primaryCta: "Explora el catàleg",
			secondaryCta: "Perfil de Google Play",
		},
		section: {
			kicker: "Els nostres jocs",
			title: "El que ja pots jugar i el que vindrà després.",
			description:
				"Explora cada joc, mira de què va i entra directament a la seva botiga.",
		},
		labels: {
			googlePlaySoon: "Google Play aviat",
			appStoreSoon: "App Store aviat",
			highlightsAria: "Punts destacats de",
		},
		structuredData: {
			websiteDescription: "Web oficial de Canelita Games amb enllaços als seus jocs mòbils.",
			itemListName: "Jocs de Canelita Games",
		},
	},
	fr: {
		meta: {
			title: "Canelita Games | Jeux mobiles indé sur Android et iPhone",
			description:
				"Découvrez les jeux mobiles de Canelita Games : arcade de réflexes, puzzles zen et jeux de mots avec des liens directs vers Google Play et l'App Store.",
		},
		hero: {
			badge: "Canelita Games",
			description:
				"Des jeux mobiles pour des parties rapides, des moments zen et des défis de mots. Découvrez nos titres et jouez sur Google Play ou l'App Store.",
			primaryCta: "Explorer le catalogue",
			secondaryCta: "Profil Google Play",
		},
		section: {
			kicker: "Nos jeux",
			title: "Ce que vous pouvez déjà jouer, et ce qui arrive ensuite.",
			description:
				"Explorez chaque jeu, voyez de quoi il s'agit et accédez directement à sa boutique.",
		},
		labels: {
			googlePlaySoon: "Google Play bientôt disponible",
			appStoreSoon: "App Store bientôt disponible",
			highlightsAria: "Points forts de",
		},
		structuredData: {
			websiteDescription: "Site officiel de Canelita Games avec des liens vers ses jeux mobiles.",
			itemListName: "Jeux Canelita Games",
		},
	},
};

export const privacyPageContent: Record<Locale, LegalPageContent> = {
	es: {
		meta: {
			title: "Política de privacidad | Canelita Games",
			description: "Política de privacidad de Canelita Games para sus juegos móviles y servicios relacionados.",
		},
		body: `
<span class="section-kicker">Legal</span>
<h1>Política de privacidad</h1>
<p><strong>Última actualización:</strong> 15 de febrero de 2026</p>
<p>La presente Política de Privacidad describe cómo Canelita Games recopila, usa y protege la información de los usuarios de nuestras aplicaciones móviles, incluyendo Essence Merge, Touch the Apple y Zen Lexis.</p>
<p>Al descargar, instalar o utilizar cualquiera de nuestros juegos, aceptas los términos descritos en esta política. Si no estás de acuerdo, te rogamos que no utilices nuestras aplicaciones.</p>
<h2>1. Información que recopilamos</h2>
<p>Nuestros juegos no requieren registro de cuenta ni solicitan directamente datos personales como nombre, correo electrónico o dirección. Sin embargo, mediante servicios de terceros integrados en nuestras aplicaciones, se puede recopilar automáticamente cierta información.</p>
<h3>1.1. Datos analíticos</h3>
<p>Utilizamos Firebase Analytics para comprender cómo interactúan los usuarios con nuestros juegos. Firebase puede recopilar identificadores de instancia, eventos de uso, información del dispositivo, país, idioma y duración de las sesiones.</p>
<p>Esta información se recopila de forma agregada y se utiliza para mejorar la experiencia de juego. Puedes consultar la política de privacidad de Firebase en https://firebase.google.com/support/privacy.</p>
<h3>1.2. Datos publicitarios</h3>
<p>Nuestros juegos muestran anuncios a través de Unity LevelPlay, anteriormente IronSource, que actúa como mediador con redes publicitarias como Google AdMob, Meta Audience Network y Unity Ads.</p>
<ul>
<li>Identificador de publicidad, como Google Advertising ID o IDFA.</li>
<li>Datos del dispositivo, incluyendo modelo, fabricante y sistema operativo.</li>
<li>Dirección IP para geolocalización aproximada.</li>
<li>Datos de interacción con anuncios, como impresiones y clics.</li>
</ul>
<p>Esta información se utiliza para mostrar anuncios relevantes y medir su rendimiento. Puedes consultar las políticas de privacidad en https://www.is.com/privacy-policy/, https://policies.google.com/privacy, https://www.facebook.com/privacy/policy/ y https://unity.com/legal/privacy-policy.</p>
<h3>1.3. Google Play Games Services</h3>
<p>Si decides iniciar sesión con Google Play Games, podremos tratar tu identificador de jugador, tu nombre de perfil público, las puntuaciones enviadas a las clasificaciones y los logros desbloqueados. Esta información se usa exclusivamente para las funciones sociales y competitivas del juego.</p>
<h3>1.4. Compras dentro de la aplicación</h3>
<p>Nuestros juegos pueden ofrecer compras dentro de la aplicación, como la eliminación de anuncios. Las transacciones se procesan íntegramente a través de Google Play Billing o la App Store. No almacenamos datos de pago; únicamente recibimos identificadores técnicos para verificar la compra.</p>
<h2>2. Uso de la información</h2>
<p>La información recopilada se utiliza exclusivamente para:</p>
<ul>
<li>Proporcionar y mejorar la experiencia de juego.</li>
<li>Mostrar anuncios y permitir la opción de eliminarlos mediante compra.</li>
<li>Gestionar clasificaciones, logros y progreso técnico.</li>
<li>Analizar el rendimiento y la estabilidad de las aplicaciones.</li>
<li>Cumplir con obligaciones legales.</li>
</ul>
<p>No vendemos, alquilamos ni compartimos tu información personal con terceros para fines comerciales distintos de los descritos en esta política.</p>
<h2>3. Personalización de anuncios</h2>
<p>Los anuncios mostrados en nuestros juegos pueden estar personalizados en función de tus intereses según lo determine la red publicitaria.</p>
<ul>
<li>En Android: Ajustes → Google → Anuncios → Desactivar personalización de anuncios.</li>
<li>En iOS: Ajustes → Privacidad → Publicidad de Apple → Desactivar anuncios personalizados.</li>
</ul>
<p>Aunque desactives la personalización, seguirás viendo anuncios, pero no estarán basados en tu actividad ni en tus intereses.</p>
<h2>4. Almacenamiento y seguridad</h2>
<ul>
<li>Los datos analíticos son procesados y almacenados por Firebase en servidores seguros.</li>
<li>Los datos publicitarios son procesados por las respectivas redes publicitarias.</li>
<li>Los datos de Google Play Games son gestionados por Google.</li>
<li>No mantenemos bases de datos propias con información personal identificable.</li>
</ul>
<p>Adoptamos medidas de seguridad razonables para proteger la información, aunque ningún método de transmisión por Internet o almacenamiento electrónico es completamente seguro.</p>
<h2>5. Derechos del usuario</h2>
<p>Si resides en el Espacio Económico Europeo, el Reino Unido o en una jurisdicción con legislación equivalente, puedes ejercer los derechos de acceso, rectificación, supresión, portabilidad, oposición y revocación del consentimiento, cuando resulten aplicables.</p>
<p>Para ejercer cualquiera de estos derechos, puedes utilizar nuestra página de solicitud de eliminación de datos o escribirnos directamente.</p>
<h2>6. Eliminación de datos</h2>
<p>Puedes solicitar la eliminación de los datos asociados a tu uso de nuestras aplicaciones. También puedes restablecer tu identificador publicitario desde los ajustes del dispositivo, desvincular Google Play Games desde la app correspondiente o desinstalar la aplicación para eliminar los datos almacenados localmente.</p>
<p>Procesaremos las solicitudes de eliminación en un plazo máximo de 30 días.</p>
<h2>7. Privacidad de menores</h2>
<p>Nuestros juegos no están dirigidos a menores de 13 años o a la edad mínima aplicable según la jurisdicción. No recopilamos deliberadamente información personal de menores.</p>
<h2>8. Cookies</h2>
<p>Nuestro sitio web puede utilizar cookies para análisis estadístico y para mejorar la experiencia de navegación. Nuestras aplicaciones móviles no utilizan cookies del navegador.</p>
<h2>9. Contacto</h2>
<p>Si tienes preguntas, inquietudes o solicitudes relacionadas con esta política, puedes escribirnos a canelitagames@gmail.com.</p>
<h2>10. Cambios en esta política</h2>
<p>Canelita Games se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio se publicará en esta página con la fecha de última actualización.</p>
`,
	},
	en: {
		meta: {
			title: "Privacy Policy | Canelita Games",
			description: "Canelita Games privacy policy for its mobile games and related services.",
		},
		body: `
<span class="section-kicker">Legal</span>
<h1>Privacy Policy</h1>
<p><strong>Last updated:</strong> February 15, 2026</p>
<p>This Privacy Policy explains how Canelita Games collects, uses and protects information related to our mobile applications, including Essence Merge, Touch the Apple and Zen Lexis.</p>
<p>By downloading, installing or using any of our games, you agree to the terms described in this policy. If you do not agree, please do not use our applications.</p>
<h2>1. Information we collect</h2>
<p>Our games do not require account registration and do not directly ask for personal data such as your name, email address or postal address. However, some information may be collected automatically through third-party services integrated into our apps.</p>
<h3>1.1. Analytics data</h3>
<p>We use Firebase Analytics to understand how players interact with our games. Firebase may collect app instance identifiers, usage events, device information, country, device language and session length.</p>
<p>This information is collected in aggregate form and used to improve the game experience. You can review Firebase's privacy documentation at https://firebase.google.com/support/privacy.</p>
<h3>1.2. Advertising data</h3>
<p>Our games display ads through Unity LevelPlay, formerly IronSource, which mediates between several advertising networks such as Google AdMob, Meta Audience Network and Unity Ads.</p>
<ul>
<li>Advertising identifiers, such as Google Advertising ID or IDFA.</li>
<li>Device information, including model, manufacturer and operating system.</li>
<li>IP address for approximate geolocation.</li>
<li>Ad interaction data such as impressions and clicks.</li>
</ul>
<p>This information is used to show relevant ads and measure their performance. Privacy policies are available at https://www.is.com/privacy-policy/, https://policies.google.com/privacy, https://www.facebook.com/privacy/policy/ and https://unity.com/legal/privacy-policy.</p>
<h3>1.3. Google Play Games Services</h3>
<p>If you choose to sign in with Google Play Games, we may process your player ID, public profile name, leaderboard scores and unlocked achievements. This information is used only for social and competitive features.</p>
<h3>1.4. In-app purchases</h3>
<p>Our games may offer in-app purchases such as ad removal. Transactions are processed entirely through Google Play Billing or the App Store. We do not store payment details; we only receive technical identifiers required to validate a purchase.</p>
<h2>2. How we use the information</h2>
<p>Collected information is used solely to:</p>
<ul>
<li>Provide and improve the gameplay experience.</li>
<li>Show ads and offer ad removal purchases.</li>
<li>Manage leaderboards, achievements and technical progress.</li>
<li>Analyze performance and application stability.</li>
<li>Comply with legal obligations.</li>
</ul>
<p>We do not sell, rent or share your personal information with third parties for unrelated commercial purposes.</p>
<h2>3. Ad personalization</h2>
<p>Ads shown in our games may be personalized based on your interests according to the advertising network.</p>
<ul>
<li>On Android: Settings → Google → Ads → Opt out of Ads Personalization.</li>
<li>On iOS: Settings → Privacy → Apple Advertising → Turn off personalized ads.</li>
</ul>
<p>If you disable personalization, you will still see ads, but they will not be based on your activity or interests.</p>
<h2>4. Storage and security</h2>
<ul>
<li>Analytics data is processed and stored by Firebase on secure servers.</li>
<li>Advertising data is processed by the respective advertising networks.</li>
<li>Google Play Games data is managed by Google.</li>
<li>We do not maintain our own databases with identifiable personal information.</li>
</ul>
<p>We apply reasonable safeguards to protect information, although no method of transmission or storage is completely secure.</p>
<h2>5. User rights</h2>
<p>If you live in the European Economic Area, the United Kingdom or another jurisdiction with equivalent privacy law, you may have rights of access, rectification, deletion, portability, objection and withdrawal of consent where applicable.</p>
<p>To exercise these rights, you can use our data deletion request page or contact us directly.</p>
<h2>6. Data deletion</h2>
<p>You may request deletion of the data associated with your use of our applications. You may also reset your advertising identifier in your device settings, disconnect Google Play Games in the relevant app or uninstall the application to remove locally stored data.</p>
<p>We will process deletion requests within a maximum period of 30 days.</p>
<h2>7. Children's privacy</h2>
<p>Our games are not directed to children under 13, or under the minimum age applicable in your jurisdiction. We do not knowingly collect personal information from children.</p>
<h2>8. Cookies</h2>
<p>Our website may use cookies for analytics and to improve browsing. Our mobile applications do not use browser cookies.</p>
<h2>9. Contact</h2>
<p>If you have any questions or requests related to this policy, please email canelitagames@gmail.com.</p>
<h2>10. Changes to this policy</h2>
<p>Canelita Games may update this Privacy Policy at any time. Any change will be published on this page together with the latest update date.</p>
`,
	},
	it: {
		meta: {
			title: "Informativa sulla privacy | Canelita Games",
			description: "Informativa sulla privacy di Canelita Games per i suoi giochi mobile e i servizi correlati.",
		},
		body: `
<span class="section-kicker">Legale</span>
<h1>Informativa sulla privacy</h1>
<p><strong>Ultimo aggiornamento:</strong> 15 febbraio 2026</p>
<p>La presente Informativa sulla privacy descrive come Canelita Games raccoglie, utilizza e protegge le informazioni relative alle nostre applicazioni mobili, incluse Essence Merge, Touch the Apple e Zen Lexis.</p>
<p>Scaricando, installando o utilizzando uno dei nostri giochi, accetti i termini descritti in questa informativa. Se non sei d'accordo, ti chiediamo di non utilizzare le nostre applicazioni.</p>
<h2>1. Informazioni raccolte</h2>
<p>I nostri giochi non richiedono la creazione di un account e non chiedono direttamente dati personali come nome, email o indirizzo postale. Tuttavia, alcuni dati possono essere raccolti automaticamente tramite servizi di terze parti integrati nelle app.</p>
<h3>1.1. Dati analitici</h3>
<p>Utilizziamo Firebase Analytics per capire come i giocatori interagiscono con i nostri giochi. Firebase può raccogliere identificatori dell'istanza dell'app, eventi d'uso, informazioni sul dispositivo, paese, lingua del dispositivo e durata delle sessioni.</p>
<h3>1.2. Dati pubblicitari</h3>
<p>I nostri giochi mostrano annunci tramite Unity LevelPlay, precedentemente IronSource, che media con reti pubblicitarie come Google AdMob, Meta Audience Network e Unity Ads.</p>
<ul>
<li>Identificatori pubblicitari, come Google Advertising ID o IDFA.</li>
<li>Dati del dispositivo, inclusi modello, produttore e sistema operativo.</li>
<li>Indirizzo IP per una geolocalizzazione approssimativa.</li>
<li>Dati di interazione con gli annunci, come impression e clic.</li>
</ul>
<h3>1.3. Google Play Games Services</h3>
<p>Se scegli di accedere con Google Play Games, potremmo trattare il tuo ID giocatore, il nome del profilo pubblico, i punteggi inviati alle classifiche e gli obiettivi sbloccati. Questi dati sono usati solo per funzioni sociali e competitive.</p>
<h3>1.4. Acquisti in-app</h3>
<p>I nostri giochi possono offrire acquisti in-app, come la rimozione degli annunci. Le transazioni sono elaborate interamente tramite Google Play Billing o App Store. Non memorizziamo dati di pagamento.</p>
<h2>2. Utilizzo delle informazioni</h2>
<p>Le informazioni raccolte vengono utilizzate esclusivamente per:</p>
<ul>
<li>Fornire e migliorare l'esperienza di gioco.</li>
<li>Mostrare annunci e consentire la loro rimozione tramite acquisto.</li>
<li>Gestire classifiche, obiettivi e avanzamento tecnico.</li>
<li>Analizzare prestazioni e stabilità delle applicazioni.</li>
<li>Adempiere agli obblighi di legge.</li>
</ul>
<h2>3. Personalizzazione degli annunci</h2>
<p>Gli annunci mostrati nei nostri giochi possono essere personalizzati in base ai tuoi interessi secondo quanto determinato dalla rete pubblicitaria.</p>
<h2>4. Conservazione e sicurezza</h2>
<p>Applichiamo misure di sicurezza ragionevoli per proteggere le informazioni, anche se nessun metodo di trasmissione o archiviazione è completamente sicuro.</p>
<h2>5. Diritti dell'utente</h2>
<p>Se risiedi nello Spazio Economico Europeo, nel Regno Unito o in una giurisdizione con normativa equivalente, puoi esercitare i diritti di accesso, rettifica, cancellazione, portabilità, opposizione e revoca del consenso quando applicabili.</p>
<h2>6. Cancellazione dei dati</h2>
<p>Puoi richiedere la cancellazione dei dati associati al tuo utilizzo delle nostre applicazioni. Elaboreremo le richieste entro un massimo di 30 giorni.</p>
<h2>7. Privacy dei minori</h2>
<p>I nostri giochi non sono destinati a minori di 13 anni o all'età minima applicabile nella tua giurisdizione. Non raccogliamo consapevolmente dati personali di minori.</p>
<h2>8. Cookie</h2>
<p>Il nostro sito web può utilizzare cookie per finalità statistiche e per migliorare la navigazione. Le nostre applicazioni mobili non utilizzano cookie del browser.</p>
<h2>9. Contatti</h2>
<p>Per domande o richieste relative a questa informativa, scrivici a canelitagames@gmail.com.</p>
<h2>10. Modifiche alla presente informativa</h2>
<p>Canelita Games può aggiornare questa Informativa sulla privacy in qualsiasi momento. Ogni modifica sarà pubblicata su questa pagina con la relativa data di aggiornamento.</p>
`,
	},
	pt: {
		meta: {
			title: "Política de privacidade | Canelita Games",
			description: "Política de privacidade da Canelita Games para os seus jogos mobile e serviços relacionados.",
		},
		body: `
<span class="section-kicker">Legal</span>
<h1>Política de privacidade</h1>
<p><strong>Última atualização:</strong> 15 de fevereiro de 2026</p>
<p>Esta Política de Privacidade descreve como a Canelita Games recolhe, utiliza e protege informações relacionadas com as nossas aplicações móveis, incluindo Essence Merge, Touch the Apple e Zen Lexis.</p>
<p>Ao descarregar, instalar ou utilizar qualquer um dos nossos jogos, aceitas os termos descritos nesta política. Se não concordares, por favor não utilizes as nossas aplicações.</p>
<h2>1. Informações que recolhemos</h2>
<p>Os nossos jogos não exigem registo de conta nem pedem diretamente dados pessoais como nome, email ou morada. No entanto, alguma informação pode ser recolhida automaticamente através de serviços de terceiros integrados nas aplicações.</p>
<h3>1.1. Dados analíticos</h3>
<p>Utilizamos o Firebase Analytics para compreender como os jogadores interagem com os nossos jogos. O Firebase pode recolher identificadores da instância da app, eventos de utilização, dados do dispositivo, país, idioma do dispositivo e duração das sessões.</p>
<h3>1.2. Dados publicitários</h3>
<p>Os nossos jogos apresentam anúncios através do Unity LevelPlay, anteriormente IronSource, que medeia várias redes publicitárias como Google AdMob, Meta Audience Network e Unity Ads.</p>
<h3>1.3. Google Play Games Services</h3>
<p>Se decidires iniciar sessão com o Google Play Games, poderemos tratar o teu identificador de jogador, o nome público do perfil, as pontuações enviadas para classificações e as conquistas desbloqueadas. Estes dados são utilizados apenas para funcionalidades sociais e competitivas.</p>
<h3>1.4. Compras na aplicação</h3>
<p>Os nossos jogos podem oferecer compras na aplicação, como a remoção de anúncios. As transações são processadas integralmente através do Google Play Billing ou da App Store. Não armazenamos dados de pagamento.</p>
<h2>2. Utilização da informação</h2>
<p>A informação recolhida é utilizada apenas para:</p>
<ul>
<li>Fornecer e melhorar a experiência de jogo.</li>
<li>Apresentar anúncios e permitir a sua remoção através de compra.</li>
<li>Gerir classificações, conquistas e progresso técnico.</li>
<li>Analisar desempenho e estabilidade das aplicações.</li>
<li>Cumprir obrigações legais.</li>
</ul>
<h2>3. Personalização de anúncios</h2>
<p>Os anúncios apresentados nos nossos jogos podem ser personalizados com base nos teus interesses, de acordo com a rede publicitária.</p>
<h2>4. Armazenamento e segurança</h2>
<p>Aplicamos medidas de segurança razoáveis para proteger a informação, embora nenhum método de transmissão ou armazenamento seja totalmente seguro.</p>
<h2>5. Direitos do utilizador</h2>
<p>Se resides no Espaço Económico Europeu, no Reino Unido ou noutra jurisdição com legislação equivalente, podes exercer os direitos de acesso, retificação, eliminação, portabilidade, oposição e retirada de consentimento, quando aplicáveis.</p>
<h2>6. Eliminação de dados</h2>
<p>Podes solicitar a eliminação dos dados associados à utilização das nossas aplicações. Processaremos os pedidos no prazo máximo de 30 dias.</p>
<h2>7. Privacidade de menores</h2>
<p>Os nossos jogos não se destinam a menores de 13 anos ou à idade mínima aplicável na tua jurisdição. Não recolhemos conscientemente dados pessoais de menores.</p>
<h2>8. Cookies</h2>
<p>O nosso site pode utilizar cookies para análise estatística e para melhorar a navegação. As nossas aplicações móveis não utilizam cookies do navegador.</p>
<h2>9. Contacto</h2>
<p>Se tiveres questões ou pedidos relacionados com esta política, escreve para canelitagames@gmail.com.</p>
<h2>10. Alterações a esta política</h2>
<p>A Canelita Games pode atualizar esta Política de Privacidade a qualquer momento. Qualquer alteração será publicada nesta página com a data da última atualização.</p>
`,
	},
	ca: {
		meta: {
			title: "Política de privacitat | Canelita Games",
			description: "Política de privacitat de Canelita Games per als seus jocs mòbils i serveis relacionats.",
		},
		body: `
<span class="section-kicker">Legal</span>
<h1>Política de privacitat</h1>
<p><strong>Darrera actualització:</strong> 15 de febrer de 2026</p>
<p>Aquesta Política de Privacitat descriu com Canelita Games recopila, utilitza i protegeix la informació relacionada amb les nostres aplicacions mòbils, incloses Essence Merge, Touch the Apple i Zen Lexis.</p>
<p>En descarregar, instal·lar o utilitzar qualsevol dels nostres jocs, acceptes els termes descrits en aquesta política. Si no hi estàs d'acord, et demanem que no utilitzis les nostres aplicacions.</p>
<h2>1. Informació que recopilem</h2>
<p>Els nostres jocs no requereixen registre de compte ni demanen directament dades personals com el nom, el correu electrònic o l'adreça postal. Tot i així, certa informació es pot recopilar automàticament a través de serveis de tercers integrats a les aplicacions.</p>
<h3>1.1. Dades analítiques</h3>
<p>Utilitzem Firebase Analytics per entendre com interactuen els jugadors amb els nostres jocs. Firebase pot recopilar identificadors d'instància, esdeveniments d'ús, dades del dispositiu, país, idioma del dispositiu i durada de les sessions.</p>
<h3>1.2. Dades publicitàries</h3>
<p>Els nostres jocs mostren anuncis mitjançant Unity LevelPlay, anteriorment IronSource, que actua com a mediador amb xarxes publicitàries com Google AdMob, Meta Audience Network i Unity Ads.</p>
<h3>1.3. Google Play Games Services</h3>
<p>Si decideixes iniciar sessió amb Google Play Games, podem tractar el teu identificador de jugador, el nom públic del perfil, les puntuacions enviades a les classificacions i els assoliments desbloquejats. Aquesta informació s'utilitza només per a funcionalitats socials i competitives.</p>
<h3>1.4. Compres dins de l'aplicació</h3>
<p>Els nostres jocs poden oferir compres dins de l'aplicació, com ara l'eliminació d'anuncis. Les transaccions es processen íntegrament a través de Google Play Billing o de l'App Store. No emmagatzemem dades de pagament.</p>
<h2>2. Ús de la informació</h2>
<p>La informació recopilada s'utilitza exclusivament per a:</p>
<ul>
<li>Proporcionar i millorar l'experiència de joc.</li>
<li>Mostrar anuncis i permetre'n l'eliminació mitjançant compra.</li>
<li>Gestionar classificacions, assoliments i progrés tècnic.</li>
<li>Analitzar el rendiment i l'estabilitat de les aplicacions.</li>
<li>Complir obligacions legals.</li>
</ul>
<h2>3. Personalització d'anuncis</h2>
<p>Els anuncis mostrats als nostres jocs poden estar personalitzats en funció dels teus interessos segons determini la xarxa publicitària.</p>
<h2>4. Emmagatzematge i seguretat</h2>
<p>Apliquem mesures de seguretat raonables per protegir la informació, tot i que cap mètode de transmissió o emmagatzematge és completament segur.</p>
<h2>5. Drets de l'usuari</h2>
<p>Si resideixes a l'Espai Econòmic Europeu, al Regne Unit o en una jurisdicció amb normativa equivalent, pots exercir els drets d'accés, rectificació, supressió, portabilitat, oposició i retirada del consentiment quan siguin aplicables.</p>
<h2>6. Eliminació de dades</h2>
<p>Pots sol·licitar l'eliminació de les dades associades a l'ús de les nostres aplicacions. Tramitarem les sol·licituds en un termini màxim de 30 dies.</p>
<h2>7. Privacitat de menors</h2>
<p>Els nostres jocs no estan dirigits a menors de 13 anys o a l'edat mínima aplicable segons la jurisdicció. No recopilem deliberadament dades personals de menors.</p>
<h2>8. Cookies</h2>
<p>El nostre lloc web pot utilitzar cookies per a anàlisi estadística i per millorar la navegació. Les nostres aplicacions mòbils no utilitzen cookies del navegador.</p>
<h2>9. Contacte</h2>
<p>Si tens preguntes o sol·licituds relacionades amb aquesta política, escriu-nos a canelitagames@gmail.com.</p>
<h2>10. Canvis en aquesta política</h2>
<p>Canelita Games pot actualitzar aquesta Política de Privacitat en qualsevol moment. Qualsevol canvi es publicarà en aquesta pàgina amb la data de la darrera actualització.</p>
`,
	},
	fr: {
		meta: {
			title: "Politique de confidentialité | Canelita Games",
			description: "Politique de confidentialité de Canelita Games pour ses jeux mobiles et ses services associés.",
		},
		body: `
<span class="section-kicker">Mentions légales</span>
<h1>Politique de confidentialité</h1>
<p><strong>Dernière mise à jour :</strong> 15 février 2026</p>
<p>La présente Politique de confidentialité explique comment Canelita Games collecte, utilise et protège les informations liées à nos applications mobiles, notamment Essence Merge, Touch the Apple et Zen Lexis.</p>
<p>En téléchargeant, installant ou utilisant l'un de nos jeux, vous acceptez les conditions décrites dans cette politique. Si vous n'êtes pas d'accord, veuillez ne pas utiliser nos applications.</p>
<h2>1. Informations collectées</h2>
<p>Nos jeux n'exigent pas de création de compte et ne demandent pas directement de données personnelles telles que votre nom, votre adresse e-mail ou votre adresse postale. Toutefois, certaines informations peuvent être collectées automatiquement via des services tiers intégrés dans les applications.</p>
<h3>1.1. Données analytiques</h3>
<p>Nous utilisons Firebase Analytics pour comprendre comment les joueurs interagissent avec nos jeux. Firebase peut collecter des identifiants d'instance, des événements d'utilisation, des informations sur l'appareil, le pays, la langue de l'appareil et la durée des sessions.</p>
<h3>1.2. Données publicitaires</h3>
<p>Nos jeux affichent des publicités via Unity LevelPlay, anciennement IronSource, qui joue le rôle d'intermédiaire avec plusieurs réseaux publicitaires tels que Google AdMob, Meta Audience Network et Unity Ads.</p>
<h3>1.3. Google Play Games Services</h3>
<p>Si vous choisissez de vous connecter avec Google Play Games, nous pouvons traiter votre identifiant joueur, votre nom de profil public, vos scores envoyés aux classements et les succès débloqués. Ces données servent uniquement aux fonctionnalités sociales et compétitives.</p>
<h3>1.4. Achats intégrés</h3>
<p>Nos jeux peuvent proposer des achats intégrés, comme la suppression des annonces. Les transactions sont traitées intégralement via Google Play Billing ou l'App Store. Nous ne stockons pas de données de paiement.</p>
<h2>2. Utilisation des informations</h2>
<p>Les informations collectées sont utilisées uniquement pour :</p>
<ul>
<li>Fournir et améliorer l'expérience de jeu.</li>
<li>Afficher des annonces et proposer leur suppression via achat.</li>
<li>Gérer les classements, les succès et la progression technique.</li>
<li>Analyser les performances et la stabilité des applications.</li>
<li>Respecter les obligations légales.</li>
</ul>
<h2>3. Personnalisation des annonces</h2>
<p>Les annonces affichées dans nos jeux peuvent être personnalisées selon vos centres d'intérêt, conformément aux pratiques du réseau publicitaire.</p>
<h2>4. Stockage et sécurité</h2>
<p>Nous appliquons des mesures de sécurité raisonnables pour protéger les informations, même si aucun mode de transmission ou de stockage n'est totalement sécurisé.</p>
<h2>5. Droits des utilisateurs</h2>
<p>Si vous résidez dans l'Espace économique européen, au Royaume-Uni ou dans une juridiction disposant d'une législation équivalente, vous pouvez exercer vos droits d'accès, de rectification, d'effacement, de portabilité, d'opposition et de retrait du consentement, lorsque cela s'applique.</p>
<h2>6. Suppression des données</h2>
<p>Vous pouvez demander la suppression des données associées à votre utilisation de nos applications. Nous traiterons les demandes dans un délai maximal de 30 jours.</p>
<h2>7. Vie privée des enfants</h2>
<p>Nos jeux ne sont pas destinés aux enfants de moins de 13 ans ou en dessous de l'âge minimum applicable dans votre juridiction. Nous ne collectons pas sciemment de données personnelles concernant des enfants.</p>
<h2>8. Cookies</h2>
<p>Notre site web peut utiliser des cookies à des fins statistiques et pour améliorer la navigation. Nos applications mobiles n'utilisent pas de cookies de navigateur.</p>
<h2>9. Contact</h2>
<p>Pour toute question ou demande relative à cette politique, vous pouvez écrire à canelitagames@gmail.com.</p>
<h2>10. Modifications de cette politique</h2>
<p>Canelita Games peut mettre à jour cette Politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de dernière mise à jour.</p>
`,
	},
};

export const dataDeletionPageContent: Record<Locale, LegalPageContent> = {
	es: {
		meta: {
			title: "Solicitud de eliminación de datos | Canelita Games",
			description: "Cómo solicitar la eliminación de datos de usuario en Canelita Games.",
		},
		body: `
<span class="section-kicker">Legal</span>
<h1>Solicitud de eliminación de datos de usuario</h1>
<p>En Canelita Games apostamos por tu privacidad y nos comprometemos a darte el control sobre tus datos personales. Si quieres solicitar la eliminación de los datos asociados a nuestras aplicaciones, sigue estos pasos.</p>
<ol>
<li>Envía un email a canelitagames@gmail.com.</li>
<li>Especifica en el asunto: ELIMINAR DATOS.</li>
<li>Incluye en el cuerpo del email tu nombre completo.</li>
<li>Indica el correo electrónico asociado a tu cuenta, si aplica.</li>
<li>Añade cualquier información extra que nos ayude a identificarte.</li>
</ol>
<p>Procederemos a la eliminación de dichos datos lo antes posible y nos pondremos en contacto contigo para confirmarlo.</p>
`,
	},
	en: {
		meta: {
			title: "Data Deletion Request | Canelita Games",
			description: "How to request deletion of user data related to Canelita Games.",
		},
		body: `
<span class="section-kicker">Legal</span>
<h1>User data deletion request</h1>
<p>At Canelita Games we care about your privacy and we are committed to giving you control over your personal data. If you want to request deletion of the data associated with our applications, please follow these steps.</p>
<ol>
<li>Send an email to canelitagames@gmail.com.</li>
<li>Use the subject line: DELETE DATA.</li>
<li>Include your full name in the email body.</li>
<li>Indicate the email address associated with your account, if applicable.</li>
<li>Add any extra information that may help us identify you.</li>
</ol>
<p>We will process the deletion as soon as possible and contact you to confirm it.</p>
`,
	},
	it: {
		meta: {
			title: "Richiesta di cancellazione dei dati | Canelita Games",
			description: "Come richiedere la cancellazione dei dati utente relativi a Canelita Games.",
		},
		body: `
<span class="section-kicker">Legale</span>
<h1>Richiesta di cancellazione dei dati utente</h1>
<p>In Canelita Games teniamo alla tua privacy e ci impegniamo a darti il controllo sui tuoi dati personali. Se desideri richiedere la cancellazione dei dati associati alle nostre applicazioni, segui questi passaggi.</p>
<ol>
<li>Invia un'email a canelitagames@gmail.com.</li>
<li>Specifica nell'oggetto: ELIMINA DATI.</li>
<li>Inserisci il tuo nome completo nel corpo dell'email.</li>
<li>Indica l'indirizzo email associato al tuo account, se applicabile.</li>
<li>Aggiungi qualsiasi informazione utile a identificarti.</li>
</ol>
<p>Provvederemo alla cancellazione il prima possibile e ti contatteremo per confermarla.</p>
`,
	},
	pt: {
		meta: {
			title: "Pedido de eliminação de dados | Canelita Games",
			description: "Como solicitar a eliminação de dados de utilizador relacionados com a Canelita Games.",
		},
		body: `
<span class="section-kicker">Legal</span>
<h1>Pedido de eliminação de dados do utilizador</h1>
<p>Na Canelita Games valorizamos a tua privacidade e comprometemo-nos a dar-te controlo sobre os teus dados pessoais. Se quiseres solicitar a eliminação dos dados associados às nossas aplicações, segue estes passos.</p>
<ol>
<li>Envia um email para canelitagames@gmail.com.</li>
<li>Indica no assunto: ELIMINAR DADOS.</li>
<li>Inclui o teu nome completo no corpo do email.</li>
<li>Indica o endereço de email associado à tua conta, se aplicável.</li>
<li>Acrescenta qualquer informação extra que nos ajude a identificar-te.</li>
</ol>
<p>Procederemos à eliminação o mais rapidamente possível e entraremos em contacto contigo para a confirmar.</p>
`,
	},
	ca: {
		meta: {
			title: "Sol·licitud d'eliminació de dades | Canelita Games",
			description: "Com sol·licitar l'eliminació de dades d'usuari relacionades amb Canelita Games.",
		},
		body: `
<span class="section-kicker">Legal</span>
<h1>Sol·licitud d'eliminació de dades d'usuari</h1>
<p>A Canelita Games apostem per la teva privacitat i ens comprometem a donar-te el control sobre les teves dades personals. Si vols sol·licitar l'eliminació de les dades associades a les nostres aplicacions, segueix aquests passos.</p>
<ol>
<li>Envia un correu electrònic a canelitagames@gmail.com.</li>
<li>Indica a l'assumpte: ELIMINAR DADES.</li>
<li>Inclou el teu nom complet al cos del correu.</li>
<li>Indica l'adreça electrònica associada al teu compte, si escau.</li>
<li>Afegeix qualsevol informació extra que ens ajudi a identificar-te.</li>
</ol>
<p>Procedirem a l'eliminació tan aviat com sigui possible i ens posarem en contacte amb tu per confirmar-la.</p>
`,
	},
	fr: {
		meta: {
			title: "Demande de suppression des données | Canelita Games",
			description: "Comment demander la suppression des données utilisateur liées à Canelita Games.",
		},
		body: `
<span class="section-kicker">Mentions légales</span>
<h1>Demande de suppression des données utilisateur</h1>
<p>Chez Canelita Games, nous accordons une grande importance à votre vie privée et nous nous engageons à vous donner le contrôle de vos données personnelles. Si vous souhaitez demander la suppression des données associées à nos applications, veuillez suivre les étapes ci-dessous.</p>
<ol>
<li>Envoyez un e-mail à canelitagames@gmail.com.</li>
<li>Indiquez en objet : SUPPRIMER LES DONNÉES.</li>
<li>Ajoutez votre nom complet dans le corps du message.</li>
<li>Indiquez l'adresse e-mail associée à votre compte, le cas échéant.</li>
<li>Ajoutez toute information complémentaire pouvant nous aider à vous identifier.</li>
</ol>
<p>Nous traiterons la suppression dans les meilleurs délais et nous vous contacterons pour vous la confirmer.</p>
`,
	},
};

export function buildMetaMap<T extends { meta: MetaContent }>(content: Record<Locale, T>) {
	return Object.fromEntries(
		Object.entries(content).map(([locale, value]) => [locale, value.meta]),
	) as Record<Locale, MetaContent>;
}

export const defaultSharedContent = sharedContent[defaultLocale];