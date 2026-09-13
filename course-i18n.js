"use strict";

const guideCopy = {
  it: {
    locale: "it", day: "GIORNO", viewLabel: "LINGUA DELLE SPIEGAZIONI",
    viewHint: "Scegli italiano, inglese oppure l’immersione nella lingua che stai studiando.",
    targetSuffix: "immersione", levelNames: {A1:"Prime basi", A2:"Routine", B1:"Indipendente", B2:"Operativo", C1:"Avanzato", C2:"Padronanza"},
    panel: {goal:"OBIETTIVO", goalTitle:"Risultato concreto", focus:"PUNTI CHIAVE", focusTitle:"Su cosa concentrarti", words:"PAROLE", wordsTitle:"Lessico ad alto rendimento", reading:"LETTURA", readingTitle:"Testi alla tua portata", routine:"ALLENAMENTO", routineTitle:"Routine consigliata", exit:"PROVA PRATICA", exitTitle:"Prima di avanzare"},
    roadmapSummary: name => `${name}: cinque traguardi progressivi. Misura ciò che sai fare, non le ore accumulate.`,
    milestoneLabels: ["PRIMO TRAGUARDO", "AUTONOMIA QUOTIDIANA", "TRAGUARDO MASSIMO"],
    milestoneValues: ["1 mese · A1 essenziale", "6 mesi · B1 pratico", "12 mesi · B2 operativo"],
    month: "MESE", months: "MESI", forLanguage: name => `Per ${name.toLocaleLowerCase("it")}`,
    route: [
      [1, "Prime conversazioni", "Suoni essenziali, frasi ad alta frequenza e copioni per presentarti, ordinare e chiedere aiuto.", "A1 essenziale"],
      [2, "Routine quotidiane", "Casa, spesa, trasporti e appuntamenti. Varia gli stessi schemi finché diventano automatici.", "A1 solido"],
      [3, "Piccoli problemi", "Racconta ieri, organizza domani e risolvi imprevisti prevedibili senza cambiare lingua.", "A2 pratico"],
      [6, "Vita indipendente", "Sostieni conversazioni più lunghe, leggi testi facili e gestisci servizi e lavoro quotidiano.", "B1 pratico"],
      [12, "Autonomia al lavoro", "Partecipa, chiarisci, negozia e leggi documenti comuni con sempre meno mediazione.", "B2 operativo"],
    ],
    progress: (count, total) => `${count} di ${total} frasi acquisite`,
    learnedOn: "Segna da ripassare", learnedOff: "Segna come acquisita", listenPhrase: "Ascolta la frase", listenQuote: "Ascolta la citazione",
    saved: "Frase acquisita. Provala senza leggere.", review: "Frase rimessa nel ripasso.",
    voiceMissing: "La sintesi vocale non è disponibile in questo browser.", voiceInstall: "Voce non disponibile: installa la voce di sistema per questa lingua.",
    correct: "Esatto. Ora dilla una volta senza guardare.", wrong: "Non ancora. Leggi la risposta corretta ad alta voce e riprova più tardi.",
  },
  en: {
    locale: "en", day: "DAY", viewLabel: "EXPLANATION LANGUAGE",
    viewHint: "Choose Italian, English, or full immersion in the language you are learning.",
    targetSuffix: "immersion", levelNames: {A1:"First steps", A2:"Routines", B1:"Independent", B2:"Operational", C1:"Advanced", C2:"Mastery"},
    panel: {goal:"GOAL", goalTitle:"Concrete outcome", focus:"KEY FOCUS", focusTitle:"What to work on", words:"WORDS", wordsTitle:"High-yield vocabulary", reading:"READING", readingTitle:"Texts within reach", routine:"PRACTICE", routineTitle:"Recommended routine", exit:"REAL-WORLD TEST", exitTitle:"Before moving on"},
    roadmapSummary: name => `${name}: five progressive milestones. Measure what you can do, not the hours you have logged.`,
    milestoneLabels: ["FIRST MILESTONE", "EVERYDAY INDEPENDENCE", "FINAL MILESTONE"],
    milestoneValues: ["1 month · essential A1", "6 months · practical B1", "12 months · operational B2"],
    month: "MONTH", months: "MONTHS", forLanguage: name => `For ${name}`,
    route: [
      [1, "First conversations", "Core sounds, high-frequency phrases, and scripts for introductions, ordering, and asking for help.", "Essential A1"],
      [2, "Daily routines", "Home, shopping, transport, and appointments. Vary the same patterns until they become automatic.", "Strong A1"],
      [3, "Small problems", "Talk about yesterday, plan tomorrow, and solve predictable problems without switching language.", "Practical A2"],
      [6, "Independent living", "Hold longer conversations, read easy texts, and handle services and everyday work.", "Practical B1"],
      [12, "Workplace autonomy", "Take part, clarify, negotiate, and read common documents with less and less support.", "Operational B2"],
    ],
    progress: (count, total) => `${count} of ${total} phrases learned`,
    learnedOn: "Move back to review", learnedOff: "Mark as learned", listenPhrase: "Listen to the phrase", listenQuote: "Listen to the quote",
    saved: "Phrase learned. Now say it without reading.", review: "Phrase moved back to review.",
    voiceMissing: "Speech synthesis is not available in this browser.", voiceInstall: "Voice unavailable: install the system voice for this language.",
    correct: "Correct. Now say it once without looking.", wrong: "Not yet. Read the correct answer aloud and try again later.",
  },
};

const levelBaseEn = {
  A1: ["Immediate survival", "Understand and produce very simple sentences when the other person speaks slowly and helps.", "Introduce yourself, order, pay, ask for directions, and handle numbers, times, and dates.", "600–800 active words", "Two-minute scripted dialogues, then repeat without the script."],
  A2: ["Calm routines", "Handle predictable exchanges about home, work, shopping, transport, and basic health.", "Talk about the recent past, make plans, and solve small everyday problems.", "1,200–1,800 active words", "A daily three-minute voice note and short graded reading."],
  B1: ["Everyday independence", "Follow the main point of clear conversations and tell stories with a simple structure.", "Handle surprises, sustain a conversation, and explain preferences and reasons.", "2,500–3,500 active words", "Twenty-minute conversations, a journal, and series with target-language subtitles."],
  B2: ["Operational autonomy", "Interact spontaneously enough to live and start working without constant mediation.", "Join meetings, read instructions, negotiate problems, and support an opinion.", "4,000–6,000 active words", "Real projects, focused feedback, and native content almost every day."],
  C1: ["Flexible precision", "Understand long, implicit texts, choose the right register, and speak with few visible hesitations.", "Work independently, synthesize sources, and adjust tone, irony, and diplomacy.", "8,000–12,000 word families", "Essays, fast podcasts, presentations, and style revision."],
  C2: ["Conscious mastery", "Understand almost everything and reconstruct nuance in dense, fast, or culturally marked speech.", "Mediate, persuade, and create complex texts with fine control of style and implication.", "Broad specialist vocabulary", "Professional immersion, extensive reading, and deliberate work on nuance."],
};

const englishFocus = {
  en: {A1:"be, have, can; simple present; questions with do · signs, menus, and one-line chats", A2:"past simple; going to; comparisons; some/any · short emails and instructions", B1:"present perfect; basic conditionals; modal verbs · easy articles and English subtitles", B2:"passive; reported speech; connectors and collocations · reports, manuals, and general news", C1:"register, emphasis, hedging, and inversion · editorials, essays, and contemporary fiction", C2:"aspect, pragmatics, humor, allusion, and regional varieties · dense literary and specialist texts"},
  de: {A1:"present tense; verb in position two; gender and nominative/accusative · signs and short messages", A2:"perfect tense; separable verbs; dative; modal verbs · notices and short emails", B1:"subordinate clauses; prepositions with cases; adjective endings · graded news and workplace texts", B2:"passive; Konjunktiv II; complex connectors · general press and company documents", C1:"nominal style, particles, and register · essays, specialist press, and literature", C2:"fine syntax, dialect exposure, irony, implication, and dense legal or literary texts"},
  es: {A1:"present tense; ser/estar/hay; gender and agreement · menus, signs, and chats", A2:"past tenses; pronouns; comparisons; imperative · notices and simple stories", B1:"imperfect versus preterite; present subjunctive; relative clauses · graded news and series subtitles", B2:"extended subjunctive; connectors and register · articles, transcribed podcasts, and manuals", C1:"discourse markers, idioms, and regional variation · essays, fiction, and specialist media", C2:"pragmatics, literary tenses, irony, allusion, and dense professional texts"},
  fr: {A1:"present tense; articles; c’est/il y a; core negation · menus, signs, and messages", A2:"passé composé; future proche; object pronouns; comparisons · notices and short emails", B1:"imparfait versus passé composé; future; conditional; basic subjunctive · graded news", B2:"frequent subjunctive; connectors; reported speech · press, transcripts, and reports", C1:"register, nominalization, and modal nuance · essays, fiction, and complex documents", C2:"Francophone variation, fine pragmatics, irony, allusion, and dense legal or literary texts"},
  ru: {A1:"present tense; gender; basic accusative and prepositional · Cyrillic signs and short messages", A2:"past tense; genitive and dative; first aspect pairs · notices, chats, and simple email", B1:"plural cases; verbs of motion; conditional · adapted news and graded stories", B2:"common participles; advanced aspect; register · general press and workplace documents", C1:"complex syntax, prefixes, collocations, and abstract vocabulary · fiction, essays, and fast media", C2:"pragmatics, variation, aspectual nuance, irony, culture, and dense specialist texts"},
  zh: {A1:"SVO order; 是, 有, 在; questions with 吗 · pinyin and 150–250 frequent characters", A2:"了; measure words; comparisons; modal verbs · 400–600 characters and short messages", B1:"过, 着; directional and result complements · 1,000–1,300 characters and graded texts", B2:"connectors; 把/被 sentences; written register · 1,800–2,200 characters and general articles", C1:"formal structures, transparent chengyu, abstract and professional vocabulary · press and essays", C2:"residual classical language, pragmatics, varieties, allusion, idioms, and dense specialist texts"},
  ja: {A1:"です/ます; は, を, に, で; questions · kana and about 100 kanji", A2:"past tense; て-form; adjectives; wishes · about 300 kanji and short messages", B1:"plain form; relative clauses; potential and conditionals · 600–800 kanji and graded reading", B2:"passive and causative; connectors; essential keigo · 1,000–1,200 kanji and general articles", C1:"formal register, ellipsis, final-particle nuance, collocations, and abstract vocabulary · press and essays", C2:"pragmatics, varieties, cultural references, irony, allusion, and dense specialist texts"},
};

const prioritiesEn = {
  en:["Learn the 50 most frequent verbs inside sentences, not tables.","Train reduced forms such as gonna, wanna, could you, and did you.","Build 12 conversation islands for work and daily life.","Move from graded readers to newsletters and instructions from your field."],
  de:["Learn nouns with article and plural from day one.","Automate verb position through reusable sentence frames.","Learn cases inside fixed phrases rather than isolated charts.","Use slow news and short dialogues to train compound-word parsing."],
  es:["Separate ser, estar, and hay through real situations.","Learn the most common irregular verbs inside spoken chunks.","Train one clear pronunciation model before exploring regional variety.","Use short series scenes to acquire connectors and conversational rhythm."],
  fr:["Train sound groups and liaisons before chasing perfect spelling.","Learn gender together with the article and noun.","Automate common object pronouns through short dialogues.","Read and listen to the same text to connect spelling with sound."],
  ru:["Learn Cyrillic in one week through real words.","Study cases inside fixed phrases and guiding questions.","Always pair perfective and imperfective verbs in context.","Train stress and vowel reduction with frequent imitation."],
  zh:["Stabilize pinyin and the four tones with minimal pairs.","Learn characters as components and words, never isolated drawings.","Prioritize the 800 most frequent words and the particles 了, 过, 着.","Use short dialogues with slow, natural audio and reduce dependence on pinyin."],
  ja:["Learn hiragana and katakana immediately; use rōmaji only as a short bridge.","Build sentences through particles and chunks, keeping the verb at the end.","Separate です/ます style from plain form before pursuing advanced keigo.","Learn kanji inside frequent words and sentences with spaced recall."],
};

const phraseMeaningsEn = [
  "Could you repeat that, please?", "I’m still learning this language.", "How much does this cost?", "I’d like to book an appointment.",
  "Where is the station?", "I’ll check and let you know.", "Could you show me how to do it?", "I need help with this form.",
];
const phraseContextsEn = ["help", "help", "shopping", "services", "transport", "work", "work", "documents"];

const cultureTypesEn = {FILM:"FILM", SERIE:"SERIES", LIBRO:"BOOK", CANZONE:"SONG", POESIA:"POETRY", FILOSOFIA:"PHILOSOPHY", CLASSICO:"CLASSIC", PROVERBIO:"PROVERB", TEATRO:"THEATRE", ANIMAZIONE:"ANIMATION", ANIME:"ANIME", CINEMA:"FILM"};
const cultureNotesEn = {
  en:["The Terminator · concise promise and future","Game of Thrones · present progressive","Hamlet · rhythm and contrast","The Beatles · short imperative"],
  de:["Traditional song · thought is free","Schiller, Ode to Joy · ideal future","Nietzsche · imperative and identity","Rammstein · colloquial perfect tense"],
  es:["Antonio Machado · negation and metaphor","Star Wars, Spanish dub · identity","Marc Anthony · infinitive and possession","García Márquez · title and prepositions"],
  fr:["Descartes · cause and consequence","Édith Piaf · title and image","The Little Prince · negation and restriction","Common expression · accepting the unexpected"],
  ru:["Pushkin · I loved you","Tolstoy · war and peace","Gorky · identity and predicate","Soviet animation · just you wait"],
  zh:["Analects · study and review","Laozi · a journey starts under your feet","Learn throughout your whole life","The King of Comedy · colloquial promise"],
  ja:["Natsume Sōseki · I am a cat","Kyū Sakamoto · let us walk looking up","Neon Genesis Evangelion · I must not run away","Princess Mononoke · live"],
};

const nativeCourses = {
  en: {
    name:"English", noTranslation:"Try to understand it without translating.", quiz:"You did not understand and want the person to repeat.",
    levels:{
      A1:["Immediate survival","Understand short, clear phrases and respond with simple sentences.","Introduce yourself, order food, pay, and ask for help.","Practise a two-minute dialogue until you can do it without the script."],
      A2:["Everyday routines","Handle predictable conversations about home, shopping, transport, and health.","Describe yesterday, arrange tomorrow, and solve a small problem.","Record a three-minute voice note and read one short graded text."],
      B1:["Everyday independence","Follow the main point and explain experiences in a clear sequence.","Sustain a conversation and give reasons for your choices.","Have a focused twenty-minute conversation and note recurring errors."],
      B2:["Operational autonomy","Interact spontaneously enough to live and start working in English.","Join a meeting, clarify a task, and defend a practical opinion.","Complete a real project and ask for focused feedback."],
      C1:["Flexible precision","Understand long texts and adjust register with little visible hesitation.","Synthesize sources and adapt tone to purpose and audience.","Use fast native material and revise your style deliberately."],
      C2:["Conscious mastery","Understand almost everything, including cultural and implied meaning.","Mediate and persuade with fine control of style.","Work through specialist and literary material in depth."],
    },
  },
  de: {
    name:"Deutsch", noTranslation:"Versuche, den Satz ohne Übersetzung zu verstehen.", quiz:"Du hast etwas nicht verstanden und möchtest um Wiederholung bitten.",
    levels:{
      A1:["Sofort zurechtkommen","Du verstehst kurze, klare Sätze und antwortest mit einfachen Wendungen.","Stell dich vor, bestell etwas, bezahl und bitte um Hilfe.","Übe einen zweiminütigen Dialog, bis du ihn ohne Vorlage schaffst."],
      A2:["Alltag ohne Stress","Du bewältigst vorhersehbare Gespräche zu Wohnen, Einkauf, Verkehr und Gesundheit.","Erzähl von gestern, plane morgen und löse ein kleines Problem.","Nimm täglich eine dreiminütige Sprachnachricht auf und lies einen kurzen Text."],
      B1:["Im Alltag selbstständig","Du verstehst die Hauptaussage und berichtest geordnet über Erfahrungen.","Führe ein längeres Gespräch und begründe deine Entscheidungen.","Sprich zwanzig Minuten mit einem klaren Ziel und notiere wiederkehrende Fehler."],
      B2:["Im Beruf handlungsfähig","Du kannst auf Deutsch leben und mit begrenzter Unterstützung arbeiten.","Beteilige dich an Besprechungen, kläre Aufgaben und vertrete eine Meinung.","Bearbeite ein echtes Projekt und hole gezieltes Feedback ein."],
      C1:["Flexibel und präzise","Du verstehst lange Texte und passt das Register sicher an.","Fasse Quellen zusammen und wähle Ton und Stil bewusst.","Arbeite mit schnellem Originalmaterial und überarbeite deinen Ausdruck."],
      C2:["Bewusste Beherrschung","Du verstehst fast alles, auch Anspielungen und kulturelle Feinheiten.","Vermittle und überzeuge mit feiner stilistischer Kontrolle.","Vertiefe dich in fachliche und literarische Texte."],
    },
  },
  es: {
    name:"Español", noTranslation:"Intenta entender la frase sin traducirla.", quiz:"No has entendido y quieres pedir que repitan.",
    levels:{
      A1:["Supervivencia inmediata","Entiendes frases cortas y claras y respondes con expresiones sencillas.","Preséntate, pide comida, paga y solicita ayuda.","Practica un diálogo de dos minutos hasta hacerlo sin guion."],
      A2:["Rutinas sin agobios","Resuelves conversaciones previsibles sobre casa, compras, transporte y salud.","Cuenta lo de ayer, organiza mañana y resuelve un problema pequeño.","Graba una nota de voz de tres minutos y lee un texto breve."],
      B1:["Independencia cotidiana","Captas la idea principal y cuentas experiencias de forma ordenada.","Mantén una conversación y explica los motivos de tus decisiones.","Habla veinte minutos con un objetivo y anota los errores recurrentes."],
      B2:["Autonomía operativa","Puedes vivir y empezar a trabajar en español con poca mediación.","Participa en reuniones, aclara tareas y defiende una opinión práctica.","Completa un proyecto real y pide comentarios concretos."],
      C1:["Precisión flexible","Comprendes textos largos y adaptas el registro con soltura.","Resume fuentes y ajusta el tono al propósito y al interlocutor.","Trabaja con material nativo rápido y revisa tu estilo."],
      C2:["Dominio consciente","Comprendes casi todo, incluso alusiones y matices culturales.","Media y persuade con un control fino del estilo.","Profundiza en materiales especializados y literarios."],
    },
  },
  fr: {
    name:"Français", noTranslation:"Essaie de comprendre la phrase sans la traduire.", quiz:"Tu n’as pas compris et tu veux demander de répéter.",
    levels:{
      A1:["Survie immédiate","Tu comprends des phrases courtes et claires et tu réponds simplement.","Présente-toi, commande, paie et demande de l’aide.","Répète un dialogue de deux minutes jusqu’à pouvoir le faire sans texte."],
      A2:["Routines sans stress","Tu gères des échanges prévisibles sur le logement, les achats, les transports et la santé.","Parle d’hier, organise demain et résous un petit problème.","Enregistre un message vocal de trois minutes et lis un texte court."],
      B1:["Autonomie quotidienne","Tu saisis l’essentiel et tu racontes une expérience de façon structurée.","Poursuis une conversation et explique les raisons de tes choix.","Parle vingt minutes avec un objectif et relève tes erreurs récurrentes."],
      B2:["Autonomie professionnelle","Tu peux vivre et commencer à travailler en français avec peu d’aide.","Participe à une réunion, clarifie une tâche et défends un avis pratique.","Réalise un projet réel et demande un retour précis."],
      C1:["Précision souple","Tu comprends des textes longs et tu adaptes facilement le registre.","Synthétise des sources et adapte le ton au but et au public.","Travaille avec des contenus natifs rapides et révise ton style."],
      C2:["Maîtrise consciente","Tu comprends presque tout, y compris les allusions culturelles.","Joue le rôle de médiateur et persuade avec un contrôle stylistique fin.","Approfondis des textes spécialisés et littéraires."],
    },
  },
  ru: {
    name:"Русский", noTranslation:"Постарайтесь понять фразу без перевода.", quiz:"Вы не поняли и хотите попросить повторить.",
    levels:{
      A1:["Сразу действовать","Вы понимаете короткие ясные фразы и отвечаете простыми словами.","Представьтесь, сделайте заказ, заплатите и попросите о помощи.","Повторяйте двухминутный диалог, пока не сможете говорить без текста."],
      A2:["Спокойные будни","Вы справляетесь с обычными разговорами о доме, покупках, транспорте и здоровье.","Расскажите о вчерашнем дне, запланируйте завтра и решите простую проблему.","Каждый день записывайте трёхминутное голосовое сообщение и читайте короткий текст."],
      B1:["Самостоятельность в быту","Вы понимаете главную мысль и последовательно рассказываете о своём опыте.","Поддерживайте разговор и объясняйте причины своих решений.","Говорите двадцать минут с конкретной целью и записывайте повторяющиеся ошибки."],
      B2:["Самостоятельность на работе","Вы можете жить и начинать работать на русском с небольшой поддержкой.","Участвуйте в совещании, уточняйте задачи и обосновывайте мнение.","Выполните реальный проект и попросите конкретную обратную связь."],
      C1:["Гибкость и точность","Вы понимаете длинные тексты и уверенно выбираете стиль общения.","Обобщайте источники и меняйте тон в зависимости от цели.","Работайте с быстрыми материалами для носителей и редактируйте свою речь."],
      C2:["Осознанное владение","Вы понимаете почти всё, включая намёки и культурные оттенки.","Посредничайте и убеждайте, точно управляя стилем.","Углублённо работайте со специальными и литературными текстами."],
    },
  },
  zh: {
    name:"中文", noTranslation:"试着不看翻译理解这句话。", quiz:"你没听懂，想请对方再说一遍。",
    levels:{
      A1:["马上能用","你能听懂简短清楚的句子，也能用简单的表达回答。","介绍自己、点餐、付款和求助。","反复练习两分钟的对话，直到不看稿也能说。"],
      A2:["轻松应对日常","你能处理住房、购物、交通和健康方面的常见对话。","谈昨天、安排明天，并解决一个小问题。","每天录一段三分钟的语音，并读一篇短文。"],
      B1:["日常独立","你能抓住主要意思，并有条理地讲述经历。","继续一段较长的对话，并说明选择的理由。","带着明确目标说二十分钟，记下重复出现的错误。"],
      B2:["工作中能独立沟通","你可以用中文生活，并在较少帮助下开始工作。","参加会议、确认任务并说明自己的观点。","完成一个真实项目，并请别人给出具体反馈。"],
      C1:["灵活而准确","你能理解长篇内容，并根据场合调整表达方式。","综合不同信息，并根据目的和对象调整语气。","使用语速较快的真实材料，并认真修改自己的表达。"],
      C2:["自觉掌握","你几乎能理解所有内容，包括暗示和文化细节。","准确控制风格，进行协调和说服。","深入阅读专业和文学材料。"],
    },
  },
  ja: {
    name:"日本語", noTranslation:"翻訳を見ないで、文の意味を考えてみましょう。", quiz:"聞き取れなかったので、もう一度言ってもらいたいです。",
    levels:{
      A1:["すぐに使える日本語","短くて分かりやすい文を理解し、簡単な表現で答えられます。","自己紹介をして、注文し、支払い、助けを求めます。","二分間の会話を、台本なしで言えるまで練習します。"],
      A2:["日常を落ち着いてこなす","住まい、買い物、交通、健康についての決まった会話に対応できます。","昨日のことを話し、明日の予定を立て、小さな問題を解決します。","毎日三分間の音声を録音し、短い文章を読みます。"],
      B1:["日常生活で自立する","要点をつかみ、経験を順序立てて話せます。","会話を続け、自分の選択の理由を説明します。","目的を決めて二十分話し、繰り返す間違いを記録します。"],
      B2:["仕事で行動できる","日本語で生活し、少ない助けで仕事を始められます。","会議に参加し、仕事を確認し、実用的な意見を説明します。","実際のプロジェクトを完成させ、具体的なフィードバックをもらいます。"],
      C1:["柔軟で正確な表現","長い文章を理解し、場面に合わせて表現を変えられます。","複数の情報をまとめ、目的と相手に合わせて話し方を調整します。","速い自然な素材を使い、自分の表現を丁寧に直します。"],
      C2:["意識的な習熟","文化的な含みも含め、ほとんどすべてを理解できます。","文体を細かく調整しながら、仲介し、説得します。","専門的な文章や文学作品を深く読み込みます。"],
    },
  },
};

const nativeUi = {
  en: {
    locale:"en", day:"DAY", viewLabel:"EXPLANATION LANGUAGE", viewHint:"Choose Italian, English, or full immersion in English.", targetSuffix:"immersion",
    levelNames:{A1:"First steps",A2:"Routines",B1:"Independent",B2:"Operational",C1:"Advanced",C2:"Mastery"},
    studioTitle:"From your first coffee to your first meeting.", studioIntro:"Choose a level. Each stage describes what you should be able to do in real life.",
    roadmapTitle:"The shortest route to an operational B2.", phrasesTitle:"Start speaking today.", phrasesIntro:"Listen, repeat three times, then change one element. Mark a phrase only when you can say it without reading.",
    panel:{goal:"GOAL",goalTitle:"Concrete outcome",focus:"FOCUS",focusTitle:"What you can do",routine:"PRACTICE",routineTitle:"Recommended routine",immersion:"IMMERSION"},
    milestoneLabels:["FIRST MILESTONE","EVERYDAY INDEPENDENCE","FINAL MILESTONE"], milestoneValues:["1 month · essential A1","6 months · practical B1","12 months · operational B2"],
    month:"MONTH",months:"MONTH",forLanguage:name=>`For ${name}`,progress:(c,t)=>`${c} of ${t} phrases learned`, correct:"Correct. Now say it once without looking.",wrong:"Not yet. Read the correct answer aloud and try again later.",
  },
  de: {
    locale:"de",day:"TAG",viewLabel:"SPRACHE DER ERKLÄRUNGEN",viewHint:"Wähle Italienisch, Englisch oder vollständige Immersion auf Deutsch.",targetSuffix:"Immersion",
    levelNames:{A1:"Erste Schritte",A2:"Alltag",B1:"Selbstständig",B2:"Handlungsfähig",C1:"Fortgeschritten",C2:"Beherrschung"},
    studioTitle:"Vom ersten Kaffee bis zur ersten Besprechung.",studioIntro:"Wähle ein Niveau. Jede Etappe zeigt, was du im Alltag wirklich können solltest.",
    roadmapTitle:"Der kürzeste Weg zu einem handlungsfähigen B2.",phrasesTitle:"Sprich ab heute.",phrasesIntro:"Hör zu, sprich dreimal nach und verändere dann ein Element. Markiere einen Satz erst, wenn du ihn ohne Lesen sagen kannst.",
    panel:{goal:"ZIEL",goalTitle:"Konkretes Ergebnis",focus:"SCHWERPUNKT",focusTitle:"Was du können sollst",routine:"ÜBUNG",routineTitle:"Empfohlene Routine",immersion:"SPRACHBAD"},
    milestoneLabels:["ERSTES ZIEL","SELBSTSTÄNDIG IM ALLTAG","ABSCHLUSSZIEL"],milestoneValues:["1 Monat · A1-Grundlage","6 Monate · praktisches B1","12 Monate · handlungsfähiges B2"],
    month:"MONAT",months:"MONAT",forLanguage:name=>`Fokus: ${name}`,progress:(c,t)=>`${c} von ${t} Sätzen gelernt`,correct:"Richtig. Sag den Satz jetzt einmal, ohne hinzusehen.",wrong:"Noch nicht. Lies die richtige Antwort laut und versuche es später erneut.",
  },
  es: {
    locale:"es",day:"DÍA",viewLabel:"IDIOMA DE LAS EXPLICACIONES",viewHint:"Elige italiano, inglés o inmersión completa en español.",targetSuffix:"inmersión",
    levelNames:{A1:"Primeros pasos",A2:"Rutinas",B1:"Independiente",B2:"Operativo",C1:"Avanzado",C2:"Dominio"},
    studioTitle:"Del primer café a la primera reunión.",studioIntro:"Elige un nivel. Cada etapa indica lo que deberías saber hacer en la vida real.",
    roadmapTitle:"La ruta más corta hacia un B2 operativo.",phrasesTitle:"Empieza a hablar hoy.",phrasesIntro:"Escucha, repite tres veces y cambia un elemento. Marca una frase solo cuando puedas decirla sin leer.",
    panel:{goal:"OBJETIVO",goalTitle:"Resultado concreto",focus:"ENFOQUE",focusTitle:"Lo que debes saber hacer",routine:"PRÁCTICA",routineTitle:"Rutina recomendada",immersion:"INMERSIÓN"},
    milestoneLabels:["PRIMER OBJETIVO","AUTONOMÍA COTIDIANA","OBJETIVO FINAL"],milestoneValues:["1 mes · A1 esencial","6 meses · B1 práctico","12 meses · B2 operativo"],
    month:"MES",months:"MES",forLanguage:name=>`Enfoque: ${name}`,progress:(c,t)=>`${c} de ${t} frases aprendidas`,correct:"Correcto. Ahora dilo una vez sin mirar.",wrong:"Todavía no. Lee la respuesta correcta en voz alta y vuelve a intentarlo más tarde.",
  },
  fr: {
    locale:"fr",day:"JOUR",viewLabel:"LANGUE DES EXPLICATIONS",viewHint:"Choisis l’italien, l’anglais ou l’immersion complète en français.",targetSuffix:"immersion",
    levelNames:{A1:"Premiers pas",A2:"Routines",B1:"Autonome",B2:"Opérationnel",C1:"Avancé",C2:"Maîtrise"},
    studioTitle:"Du premier café à la première réunion.",studioIntro:"Choisis un niveau. Chaque étape indique ce que tu dois vraiment savoir faire au quotidien.",
    roadmapTitle:"Le chemin le plus court vers un B2 opérationnel.",phrasesTitle:"Parle dès aujourd’hui.",phrasesIntro:"Écoute, répète trois fois, puis change un élément. Valide une phrase seulement si tu peux la dire sans lire.",
    panel:{goal:"OBJECTIF",goalTitle:"Résultat concret",focus:"PRIORITÉ",focusTitle:"Ce que tu dois savoir faire",routine:"ENTRAÎNEMENT",routineTitle:"Routine conseillée",immersion:"IMMERSION"},
    milestoneLabels:["PREMIER OBJECTIF","AUTONOMIE AU QUOTIDIEN","OBJECTIF FINAL"],milestoneValues:["1 mois · A1 essentiel","6 mois · B1 pratique","12 mois · B2 opérationnel"],
    month:"MOIS",months:"MOIS",forLanguage:name=>`Priorités : ${name}`,progress:(c,t)=>`${c} phrases acquises sur ${t}`,correct:"Exact. Dis-la maintenant une fois sans regarder.",wrong:"Pas encore. Lis la bonne réponse à voix haute et réessaie plus tard.",
  },
  ru: {
    locale:"ru",day:"ДЕНЬ",viewLabel:"ЯЗЫК ОБЪЯСНЕНИЙ",viewHint:"Выберите итальянский, английский или полное погружение в русский язык.",targetSuffix:"погружение",
    levelNames:{A1:"Первые шаги",A2:"Повседневность",B1:"Самостоятельно",B2:"Рабочий уровень",C1:"Продвинутый",C2:"Мастерство"},
    studioTitle:"От первого кофе до первого совещания.",studioIntro:"Выберите уровень. Каждый этап показывает, что нужно уметь делать в реальной жизни.",
    roadmapTitle:"Кратчайший путь к рабочему уровню B2.",phrasesTitle:"Начните говорить сегодня.",phrasesIntro:"Послушайте, повторите три раза, затем измените один элемент. Отмечайте фразу, только если можете сказать её без текста.",
    panel:{goal:"ЦЕЛЬ",goalTitle:"Конкретный результат",focus:"ФОКУС",focusTitle:"Что нужно уметь",routine:"ПРАКТИКА",routineTitle:"Рекомендуемый режим",immersion:"ПОГРУЖЕНИЕ"},
    milestoneLabels:["ПЕРВАЯ ЦЕЛЬ","САМОСТОЯТЕЛЬНОСТЬ В БЫТУ","ИТОГОВАЯ ЦЕЛЬ"],milestoneValues:["1 месяц · базовый A1","6 месяцев · практический B1","12 месяцев · рабочий B2"],
    month:"МЕСЯЦ",months:"МЕСЯЦ",forLanguage:name=>`Фокус: ${name}`,progress:(c,t)=>`Изучено фраз: ${c} из ${t}`,correct:"Верно. Теперь произнесите фразу один раз, не глядя.",wrong:"Пока нет. Прочитайте правильный ответ вслух и попробуйте позже ещё раз.",
  },
  zh: {
    locale:"zh",day:"第",viewLabel:"讲解语言",viewHint:"选择意大利语、英语或全中文沉浸模式。",targetSuffix:"沉浸模式",
    levelNames:{A1:"入门",A2:"日常",B1:"独立",B2:"实用",C1:"高级",C2:"精通"},
    studioTitle:"从第一次点咖啡到第一次参加会议。",studioIntro:"选择一个等级。每个阶段都说明你在现实生活中真正需要做到什么。",
    roadmapTitle:"通往实用 B2 的最短路线。",phrasesTitle:"从今天开始说。",phrasesIntro:"先听，再重复三遍，然后替换一个成分。只有不看文字也能说出来时，才标记为已掌握。",
    panel:{goal:"目标",goalTitle:"实际成果",focus:"重点",focusTitle:"你需要做到什么",routine:"练习",routineTitle:"建议方法",immersion:"沉浸"},
    milestoneLabels:["第一个目标","日常独立","最终目标"],milestoneValues:["1个月 · 基础 A1","6个月 · 实用 B1","12个月 · 工作 B2"],
    month:"个月",months:"个月",forLanguage:name=>`${name}学习重点`,progress:(c,t)=>`已掌握 ${c}/${t} 个句子`,correct:"正确。现在不看文字再说一遍。",wrong:"还不对。请大声读出正确答案，稍后再试一次。",
  },
  ja: {
    locale:"ja",day:"日目",viewLabel:"説明の言語",viewHint:"イタリア語、英語、または日本語だけのイマージョンを選べます。",targetSuffix:"イマージョン",
    levelNames:{A1:"入門",A2:"日常",B1:"自立",B2:"実用",C1:"上級",C2:"習熟"},
    studioTitle:"最初のコーヒーから最初の会議まで。",studioIntro:"レベルを選びましょう。各段階には、実生活で本当にできるようになることが書かれています。",
    roadmapTitle:"実用的な B2 への最短ルート。",phrasesTitle:"今日から話そう。",phrasesIntro:"聞いて、三回繰り返し、一つだけ変えます。見ないで言えるようになってから「習得済み」にしましょう。",
    panel:{goal:"目標",goalTitle:"具体的な成果",focus:"重点",focusTitle:"できるようになること",routine:"練習",routineTitle:"おすすめの学習法",immersion:"イマージョン"},
    milestoneLabels:["最初の目標","日常生活で自立","最終目標"],milestoneValues:["1か月 · 基礎 A1","6か月 · 実用 B1","12か月 · 仕事で使える B2"],
    month:"か月",months:"か月",forLanguage:name=>`${name}の重点`,progress:(c,t)=>`${t}文中${c}文を習得`,correct:"正解です。今度は見ないで一度言ってみましょう。",wrong:"まだです。正しい答えを声に出して読み、後でもう一度試しましょう。",
  },
};
