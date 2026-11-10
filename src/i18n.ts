/* ------------------------------------------------------------------
   Languages and interface texts.
   English lives at the site root (/), Italian under /it/.
   To change a label, edit it here in both languages.
------------------------------------------------------------------- */

export const LANGS = ['en', 'it'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const LANG_META: Record<Lang, { name: string; short: string; locale: string; og: string; rss: string }> = {
  en: { name: 'English', short: 'EN', locale: 'en-US', og: 'en_US', rss: 'en-us' },
  it: { name: 'Italiano', short: 'IT', locale: 'it-IT', og: 'it_IT', rss: 'it-it' },
};

export const isLang = (v: unknown): v is Lang => typeof v === 'string' && (LANGS as readonly string[]).includes(v);

/** Prefix a site path with the language: ('it', '/quiz/') → '/it/quiz/'. */
export function localizePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === DEFAULT_LANG ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

/** Language of a URL path: '/it/quiz/' → 'it', '/quiz/' → 'en'. */
export function langFromPath(path: string): Lang {
  const first = path.split('/').filter(Boolean)[0];
  return isLang(first) ? first : DEFAULT_LANG;
}

/** Path without its language prefix: '/it/quiz/' → '/quiz/'. */
export function stripLang(path: string): string {
  const lang = langFromPath(path);
  if (lang === DEFAULT_LANG) return path;
  const rest = path.slice(lang.length + 1);
  return rest.startsWith('/') ? rest : `/${rest}`;
}

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const ui = {
  en: {
    siteDescription:
      'Sharing my journey as a newcomer on the path to becoming a Solution Architect: what I’ve learned and what I’m still learning, through my notes on the amazing technologies and products I come across.',
    skip: 'Skip to content',
    nav: { articles: 'Articles', topics: 'Topics', quiz: 'Quiz', about: 'About' },
    switchTo: 'Leggi in italiano',
    footer: { tagline: 'Notes on the technologies I learn along the way, written for whoever comes next.', sign: '// written by hand, shared gladly', privacy: 'Privacy' },
    home: {
      eyebrow: '// A personal library',
      title: ['What I’m learning, written for ', 'those who come next.'],
      articles: 'Articles',
      topics: 'Topics',
      empty: 'No articles yet. The first one is coming soon.',
      latest: 'Latest',
    },
    card: { minRead: (n: number) => `${n} min read`, read: 'Read →', draft: 'Draft' },
    post: {
      author: 'Author',
      published: 'Published',
      updated: 'Updated',
      reading: 'Reading',
      minutes: (n: number) => `${n} min`,
      useful: '// Was this useful?',
      shareTitle: 'Share it with someone on the same journey.',
      share: 'Share on LinkedIn ↗',
      contact: 'Get in touch',
      older: '← Older',
      newer: 'Newer →',
    },
    topics: {
      eyebrow: '// Topics',
      title: ['Products and ', 'technologies.'],
      lede: 'Each article is tagged with the products it covers. Pick a place to start.',
      empty: 'No topics yet.',
      count: (n: number) => plural(n, 'article', 'articles'),
      tagLede: (n: number) => `${plural(n, 'article', 'articles')} on this topic.`,
      tagDescription: (name: string) => `Articles about ${name}.`,
      metaDescription: 'All the products and technologies covered in the articles.',
    },
    quiz: {
      eyebrow: '// Check your knowledge!',
      cta: 'Check your knowledge!',
      ctaEmpty: 'Test what you just read',
      ctaStart: 'Start the quiz →',
      questions: (n: number) => plural(n, 'question', 'questions'),
      pageTitle: (title: string) => `Quiz: ${title}`,
      pageDescription: (title: string, n: number) => `Check your knowledge on ${title}: ${plural(n, 'question', 'questions')}.`,
      pageLede: (n: number) => `${plural(n, 'question', 'questions')} based on the article.`,
      readFirst: 'Read it first →',
      indexTitle: ['One quiz for ', 'every article.'],
      indexLede: 'Read, then test yourself. Your best score is saved in this browser, so you can see what you’ve already mastered.',
      indexDescription: 'Check your knowledge: a short quiz for every article.',
      all: 'All quizzes',
      empty: 'No quizzes yet.',
      stats: { quizzes: 'Quizzes', questions: 'Questions', completed: 'Completed', avg: 'Avg best' },
      notTaken: 'Not taken yet',
      start: 'Start →',
      retake: 'Retake →',
      best: 'Best',
      // Quiz player
      question: 'Question',
      score: 'Score',
      noscript: 'The quiz needs JavaScript enabled in your browser.',
      correct: 'Correct!',
      wrong: 'Not quite.',
      next: 'Next question →',
      result: 'See your result →',
      resultLabel: '// Result',
      verdicts: [
        'Perfect score. You nailed it!',
        'Great job, you know this topic well.',
        'Good start. A quick reread will fix the gaps.',
        'Worth another read of the article, then try again.',
      ],
      attempt: 'attempt',
      attempts: 'attempts',
      saved: 'saved in this browser',
      answer: 'Answer',
      retry: 'Try again ↻',
      back: 'Back to the article',
    },
    newsletter: {
      eyebrow: '// Newsletter',
      title: 'Learn along with me.',
      text: 'One email when a new article and its quiz are out. No spam, unsubscribe anytime.',
      email: 'Email address',
      placeholder: 'you@example.com',
      button: 'Subscribe →',
      note: ['You’ll get a confirmation email first. See the ', 'privacy notes', '.'],
    },
    arch: {
      section: 'Architecture challenges',
      sectionText: 'Go beyond single articles: build architectures and pick the right service by dragging the pieces into place.',
      eyebrow: '// Architecture challenge',
      typeDiagram: 'Complete the architecture',
      typeSort: 'Who does what',
      size: (n: number, diagram: boolean) => (diagram ? plural(n, 'box', 'boxes') : plural(n, 'scenario', 'scenarios')),
      howDiagram: 'Drag a technology onto each empty box. On a phone, tap a technology and then the box. Tap a filled box to empty it.',
      howSort: 'Drag each scenario under the right technology. On a phone, tap a scenario and then the column. Tap a placed scenario to send it back.',
      palette: 'Technologies',
      deck: 'Scenarios to place',
      deckDone: 'All scenarios placed. Check your answers!',
      drop: 'Drop here',
      check: 'Check answers',
      reset: 'Start over',
      retry: 'Try again ↻',
      left: (n: number) => `${n} left`,
      rightAnswer: 'Right answer',
      related: 'Useful articles',
      all: 'All challenges',
      pageDescription: (title: string) => `Architecture challenge: ${title}. Drag the right Azure services into place.`,
    },
    comments: {
      eyebrow: '// Comments',
      title: 'Join the conversation',
      text: 'Questions, corrections or your own experience: sign in with GitHub to comment.',
      homeNote: 'I’m learning as I write, so these notes may contain mistakes or outdated details. If you spot something wrong, please tell me in the comments at the end of the article.',
      articleNote: ['Spotted a mistake or something unclear? ', 'Let me know in the comments ↓'],
    },
    notFound: { title: 'Page not found', description: 'The page you’re looking for doesn’t exist.' },
  },
  it: {
    siteDescription:
      'Racconto il mio percorso da principiante verso il ruolo di Solution Architect: quello che ho imparato e quello che sto ancora imparando, attraverso i miei appunti sulle tecnologie e i prodotti che incontro.',
    skip: 'Vai al contenuto',
    nav: { articles: 'Articoli', topics: 'Argomenti', quiz: 'Quiz', about: 'Chi sono' },
    switchTo: 'Read in English',
    footer: { tagline: 'Appunti sulle tecnologie che imparo lungo la strada, scritti per chi viene dopo.', sign: '// scritto a mano, condiviso volentieri', privacy: 'Privacy' },
    home: {
      eyebrow: '// Una biblioteca personale',
      title: ['Quello che imparo, scritto per ', 'chi viene dopo.'],
      articles: 'Articoli',
      topics: 'Argomenti',
      empty: 'Ancora nessun articolo. Il primo arriva presto.',
      latest: 'Ultimo',
    },
    card: { minRead: (n: number) => `${n} min di lettura`, read: 'Leggi →', draft: 'Bozza' },
    post: {
      author: 'Autore',
      published: 'Pubblicato',
      updated: 'Aggiornato',
      reading: 'Lettura',
      minutes: (n: number) => `${n} min`,
      useful: '// Ti è stato utile?',
      shareTitle: 'Condividilo con chi sta facendo lo stesso percorso.',
      share: 'Condividi su LinkedIn ↗',
      contact: 'Scrivimi',
      older: '← Precedente',
      newer: 'Successivo →',
    },
    topics: {
      eyebrow: '// Argomenti',
      title: ['Prodotti e ', 'tecnologie.'],
      lede: 'Ogni articolo è etichettato con i prodotti di cui parla. Scegli da dove iniziare.',
      empty: 'Ancora nessun argomento.',
      count: (n: number) => plural(n, 'articolo', 'articoli'),
      tagLede: (n: number) => `${plural(n, 'articolo', 'articoli')} su questo argomento.`,
      tagDescription: (name: string) => `Articoli su ${name}.`,
      metaDescription: 'Tutti i prodotti e le tecnologie di cui parlano gli articoli.',
    },
    quiz: {
      eyebrow: '// Mettiti alla prova!',
      cta: 'Mettiti alla prova!',
      ctaEmpty: 'Verifica quello che hai appena letto',
      ctaStart: 'Inizia il quiz →',
      questions: (n: number) => plural(n, 'domanda', 'domande'),
      pageTitle: (title: string) => `Quiz: ${title}`,
      pageDescription: (title: string, n: number) => `Mettiti alla prova su ${title}: ${plural(n, 'domanda', 'domande')}.`,
      pageLede: (n: number) => `${plural(n, 'domanda', 'domande')} basate sull’articolo.`,
      readFirst: 'Prima leggilo →',
      indexTitle: ['Un quiz per ', 'ogni articolo.'],
      indexLede: 'Leggi, poi mettiti alla prova. Il tuo miglior punteggio resta salvato in questo browser, così vedi cosa hai già imparato.',
      indexDescription: 'Mettiti alla prova: un breve quiz per ogni articolo.',
      all: 'Tutti i quiz',
      empty: 'Ancora nessun quiz.',
      stats: { quizzes: 'Quiz', questions: 'Domande', completed: 'Completati', avg: 'Media migliori' },
      notTaken: 'Non ancora fatto',
      start: 'Inizia →',
      retake: 'Rifai →',
      best: 'Migliore',
      question: 'Domanda',
      score: 'Punti',
      noscript: 'Per il quiz serve JavaScript attivo nel browser.',
      correct: 'Esatto!',
      wrong: 'Non proprio.',
      next: 'Prossima domanda →',
      result: 'Vedi il risultato →',
      resultLabel: '// Risultato',
      verdicts: [
        'Punteggio pieno. Perfetto!',
        'Ottimo lavoro, conosci bene l’argomento.',
        'Buon inizio. Una rilettura veloce colmerà le lacune.',
        'Vale la pena rileggere l’articolo e riprovare.',
      ],
      attempt: 'tentativo',
      attempts: 'tentativi',
      saved: 'salvato in questo browser',
      answer: 'Risposta',
      retry: 'Riprova ↻',
      back: 'Torna all’articolo',
    },
    newsletter: {
      eyebrow: '// Newsletter',
      title: 'Impara insieme a me.',
      text: 'Una email quando escono un nuovo articolo e il suo quiz. Niente spam, ti disiscrivi quando vuoi.',
      email: 'Indirizzo email',
      placeholder: 'tu@esempio.it',
      button: 'Iscriviti →',
      note: ['Prima riceverai una email di conferma. Leggi le ', 'note sulla privacy', '.'],
    },
    arch: {
      section: 'Sfide di architettura',
      sectionText: 'Vai oltre il singolo articolo: costruisci architetture e scegli il servizio giusto trascinando i pezzi al loro posto.',
      eyebrow: '// Sfida di architettura',
      typeDiagram: 'Completa l’architettura',
      typeSort: 'Chi fa cosa',
      size: (n: number, diagram: boolean) => (diagram ? plural(n, 'riquadro', 'riquadri') : plural(n, 'scenario', 'scenari')),
      howDiagram: 'Trascina una tecnologia in ogni riquadro vuoto. Sul telefono tocca una tecnologia e poi il riquadro. Tocca un riquadro pieno per svuotarlo.',
      howSort: 'Trascina ogni scenario sotto la tecnologia giusta. Sul telefono tocca uno scenario e poi la colonna. Tocca uno scenario già piazzato per rimetterlo a posto.',
      palette: 'Tecnologie',
      deck: 'Scenari da piazzare',
      deckDone: 'Hai piazzato tutti gli scenari. Verifica le risposte!',
      drop: 'Trascina qui',
      check: 'Verifica le risposte',
      reset: 'Ricomincia',
      retry: 'Riprova ↻',
      left: (n: number) => `ne mancano ${n}`,
      rightAnswer: 'Risposta giusta',
      related: 'Articoli utili',
      all: 'Tutte le sfide',
      pageDescription: (title: string) => `Sfida di architettura: ${title}. Trascina i servizi Azure giusti al loro posto.`,
    },
    comments: {
      eyebrow: '// Commenti',
      title: 'Partecipa alla discussione',
      text: 'Domande, correzioni o la tua esperienza: accedi con GitHub per commentare.',
      homeNote: 'Imparo mentre scrivo, quindi questi appunti possono contenere errori o informazioni non aggiornate. Se trovi qualcosa che non va, segnalamelo nei commenti in fondo all’articolo.',
      articleNote: ['Hai trovato un errore o qualcosa di poco chiaro? ', 'Segnalamelo nei commenti ↓'],
    },
    notFound: { title: 'Pagina non trovata', description: 'La pagina che cerchi non esiste.' },
  },
} as const;

export type UI = (typeof ui)['en'];
export const t = (lang: Lang): UI => ui[lang] as unknown as UI;
