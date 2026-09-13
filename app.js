"use strict";

const levelBase = {
  A1: {
    title: "Sopravvivenza immediata",
    summary: "Capisci e produci frasi molto semplici quando l’altra persona parla lentamente e collabora.",
    outcome: "Presentarti, ordinare, pagare, chiedere indicazioni e gestire numeri, ore e date.",
    target: "600–800 parole attive",
    routine: "Mini-dialoghi da 2 minuti con copione, poi senza testo.",
  },
  A2: {
    title: "Routine senza panico",
    summary: "Gestisci scambi prevedibili su casa, lavoro, acquisti, trasporti e salute di base.",
    outcome: "Descrivere il passato recente, fare programmi e risolvere piccoli problemi quotidiani.",
    target: "1.200–1.800 parole attive",
    routine: "Note vocali quotidiane da 3 minuti e letture graduate brevi.",
  },
  B1: {
    title: "Indipendenza quotidiana",
    summary: "Segui il senso principale di conversazioni chiare e racconti esperienze con una struttura semplice.",
    outcome: "Affrontare imprevisti, sostenere una conversazione e spiegare preferenze e ragioni.",
    target: "2.500–3.500 parole attive",
    routine: "Conversazioni da 20 minuti, diario e serie con sottotitoli nella lingua.",
  },
  B2: {
    title: "Autonomia operativa",
    summary: "Interagisci con spontaneità sufficiente per vivere e iniziare a lavorare senza mediazione costante.",
    outcome: "Partecipare a riunioni, leggere istruzioni, negoziare problemi e sostenere un’opinione.",
    target: "4.000–6.000 parole attive",
    routine: "Progetti reali, feedback mirato e contenuti nativi quasi ogni giorno.",
  },
  C1: {
    title: "Precisione flessibile",
    summary: "Comprendi testi lunghi e impliciti, scegli il registro e ti esprimi con poche esitazioni visibili.",
    outcome: "Lavorare in autonomia, sintetizzare fonti e adattare tono, ironia e diplomazia.",
    target: "8.000–12.000 famiglie di parole",
    routine: "Saggi, podcast veloci, presentazioni e revisione stilistica.",
  },
  C2: {
    title: "Padronanza consapevole",
    summary: "Comprendi quasi tutto e ricostruisci sfumature anche in discorsi densi, rapidi o culturalmente marcati.",
    outcome: "Mediare, persuadere e creare testi complessi con controllo fine di stile e sottintesi.",
    target: "Lessico ampio e specialistico",
    routine: "Immersione professionale, lettura estesa e lavoro sulle sfumature.",
  },
};

const languages = {
  en: {
    name: "Inglese", code: "EN", locale: "en-GB",
    meta: "Globale · alfabeto latino",
    focus: "Pronuncia irregolare, phrasal verbs e ascolto delle forme ridotte.",
    priorities: [
      "Impara i 50 verbi più frequenti dentro frasi, non in tabelle.",
      "Allena le forme ridotte: gonna, wanna, could you, did you.",
      "Costruisci 12 isole di conversazione per lavoro e vita quotidiana.",
      "Leggi graded readers, poi newsletter e istruzioni del tuo settore.",
    ],
    levels: {
      A1: ["be, have, can; presente semplice; domande con do", "numeri, orari, cibo, luoghi, bisogni", "cartelli, menu, chat di una riga", "Chiedi prezzo, direzione e ripetizione"],
      A2: ["past simple; going to; comparativi; some/any", "casa, salute, trasporti, mansioni", "email brevi, annunci, istruzioni semplici", "Racconta ieri e organizza domani"],
      B1: ["present perfect; condizionali base; modali", "esperienze, problemi, opinioni, processi", "articoli facili e sottotitoli in inglese", "Spiega un problema e proponi una soluzione"],
      B2: ["passivo; reported speech; connettivi; collocations", "riunioni, feedback, negoziazione, settore", "report, manuali e notizie generaliste", "Intervieni in riunione e chiarisci responsabilità"],
      C1: ["registro, enfasi, hedging e inversione", "idiomi trasparenti e lessico professionale", "editoriali, saggi e narrativa contemporanea", "Presenta una tesi e gestisci obiezioni"],
      C2: ["sfumature aspettuali e pragmatica", "umorismo, allusioni, varietà regionali", "testi letterari e specialistici densi", "Media tra registri e intenzioni sottili"],
    },
    phrases: [
      ["Could you say that again, please?", "", "Potresti ripeterlo, per favore?", "aiuto"],
      ["I’m still learning English.", "", "Sto ancora imparando l’inglese.", "aiuto"],
      ["How much does this cost?", "", "Quanto costa?", "acquisti"],
      ["I’d like to book an appointment.", "", "Vorrei fissare un appuntamento.", "servizi"],
      ["Where can I find the station?", "", "Dove posso trovare la stazione?", "trasporti"],
      ["I’ll check and get back to you.", "", "Controllo e ti faccio sapere.", "lavoro"],
      ["Could you show me how it works?", "", "Puoi mostrarmi come funziona?", "lavoro"],
      ["I need help with this form.", "", "Ho bisogno di aiuto con questo modulo.", "documenti"],
    ],
    culture: [
      ["FILM", "I’ll be back.", "The Terminator · promessa netta e futuro"],
      ["SERIE", "Winter is coming.", "Game of Thrones · presente progressivo"],
      ["LIBRO", "To be, or not to be.", "Hamlet · ritmo e opposizione"],
      ["CANZONE", "Let it be.", "The Beatles · imperativo breve"],
    ],
    quiz: ["Potresti ripeterlo, per favore?", ["Could you say that again, please?", "Where are you going?", "How much is enough?"], 0],
  },
  de: {
    name: "Tedesco", code: "DE", locale: "de-DE",
    meta: "Europa centrale · alfabeto latino",
    focus: "Ordine dei verbi, casi e genere: prima schemi ricorrenti, poi eccezioni.",
    priorities: [
      "Memorizza ogni sostantivo con articolo e plurale.",
      "Automatizza verbo in seconda posizione e verbo finale nelle subordinate.",
      "Usa blocchi con caso già incorporato: mit dem, für die, bei der.",
      "Allena parole composte dividendole in unità riconoscibili.",
    ],
    levels: {
      A1: ["sein, haben; presente; W-Fragen; accusativo base", "numeri, cibo, città, famiglia, orari", "cartelli e moduli con parole trasparenti", "Presentati e ordina usando formule fisse"],
      A2: ["Perfekt; dativo; modali; subordinate con weil", "casa, salute, lavoro, appuntamenti", "email brevi, annunci e regolamenti semplici", "Descrivi un guasto e prendi appuntamento"],
      B1: ["Präteritum frequente; relativi; declinazione aggettivi", "esperienze, formazione, ufficio, opinioni", "notizie facili e letture graduate", "Racconta un evento e motivane le conseguenze"],
      B2: ["passivo; Konjunktiv II; connettivi complessi", "riunioni, processi, reclami, settore", "stampa generalista e documenti aziendali", "Argomenta con ordine e gestisci disaccordo"],
      C1: ["Nominalstil, registro e particelle modali", "collocazioni e precisione professionale", "saggi, report e narrativa", "Sintetizza fonti e modula il tono"],
      C2: ["pragmatica, dialetti e variazione stilistica", "idiomi, ironia e lessico specialistico", "testi giuridici, accademici e letterari", "Riformula sfumature senza perdere intenzione"],
    },
    phrases: [
      ["Könnten Sie das bitte wiederholen?", "", "Potrebbe ripeterlo, per favore?", "aiuto"],
      ["Ich lerne noch Deutsch.", "", "Sto ancora imparando il tedesco.", "aiuto"],
      ["Wie viel kostet das?", "", "Quanto costa?", "acquisti"],
      ["Ich möchte einen Termin vereinbaren.", "", "Vorrei fissare un appuntamento.", "servizi"],
      ["Wo finde ich den Bahnhof?", "", "Dove trovo la stazione?", "trasporti"],
      ["Ich prüfe das und melde mich.", "", "Controllo e ti ricontatto.", "lavoro"],
      ["Können Sie mir das zeigen?", "", "Può mostrarmelo?", "lavoro"],
      ["Ich brauche Hilfe mit diesem Formular.", "", "Ho bisogno di aiuto con questo modulo.", "documenti"],
    ],
    culture: [
      ["CANZONE", "Die Gedanken sind frei.", "Canto tradizionale · il pensiero è libero"],
      ["POESIA", "Alle Menschen werden Brüder.", "Schiller, An die Freude · futuro ideale"],
      ["FILOSOFIA", "Werde, der du bist.", "Nietzsche · imperativo e identità"],
      ["CANZONE", "Du hast mich gefragt.", "Rammstein · perfetto colloquiale"],
    ],
    quiz: ["Vorresti chiedere di ripetere.", ["Wo wohnen Sie?", "Könnten Sie das bitte wiederholen?", "Was kostet die Fahrkarte?"], 1],
  },
  es: {
    name: "Spagnolo", code: "ES", locale: "es-ES",
    meta: "Iberia e Americhe · alfabeto latino",
    focus: "Coniugazioni, passato e velocità dell’ascolto tra varietà diverse.",
    priorities: [
      "Sfrutta le somiglianze con l’italiano, ma registra i falsi amici.",
      "Impara presente e due passati dentro racconti di vita reale.",
      "Scegli una varietà principale per l’ascolto, comprendi le altre gradualmente.",
      "Lavora presto su ritmo, vocali nette e distinzione tra ser ed estar.",
    ],
    levels: {
      A1: ["ser, estar, hay; presente; genere e numero", "cibo, città, persone, orari, bisogni", "menu, messaggi e indicazioni brevi", "Ordina, presentati e chiedi dove si trova qualcosa"],
      A2: ["pretérito perfecto/indefinido; futuro vicino", "casa, salute, viaggi, attività", "email, annunci e storie molto brevi", "Racconta il weekend e organizza un incontro"],
      B1: ["imperfetto; congiuntivo frequente; pronomi", "problemi, emozioni, lavoro, opinioni", "notizie facili e romanzi graduati", "Spiega un imprevisto e sostieni una preferenza"],
      B2: ["congiuntivo esteso; connettivi; registro", "negoziazione, riunioni, servizi, settore", "articoli, podcast trascritti e manuali", "Partecipa a una discussione e chiarisci condizioni"],
      C1: ["perifrasi, pragmatica e variazione regionale", "idiomi, collocazioni e lessico astratto", "saggi, stampa e narrativa contemporanea", "Modula certezza, cortesia e persuasione"],
      C2: ["sfumature regionali e stilistiche", "ironia, doppi sensi e repertori specialistici", "letteratura e testi tecnici complessi", "Passa tra varietà e registri con naturalezza"],
    },
    phrases: [
      ["¿Puedes repetirlo, por favor?", "", "Puoi ripeterlo, per favore?", "aiuto"],
      ["Todavía estoy aprendiendo español.", "", "Sto ancora imparando lo spagnolo.", "aiuto"],
      ["¿Cuánto cuesta esto?", "", "Quanto costa?", "acquisti"],
      ["Quisiera pedir una cita.", "", "Vorrei fissare un appuntamento.", "servizi"],
      ["¿Dónde está la estación?", "", "Dov’è la stazione?", "trasporti"],
      ["Lo reviso y te aviso.", "", "Controllo e ti faccio sapere.", "lavoro"],
      ["¿Me puedes enseñar cómo funciona?", "", "Puoi mostrarmi come funziona?", "lavoro"],
      ["Necesito ayuda con este formulario.", "", "Ho bisogno di aiuto con questo modulo.", "documenti"],
    ],
    culture: [
      ["POESIA", "Caminante, no hay camino.", "Antonio Machado · negazione e metafora"],
      ["FILM", "Yo soy tu padre.", "Star Wars, doppiaggio spagnolo · identità"],
      ["CANZONE", "Vivir mi vida.", "Marc Anthony · infinito e possesso"],
      ["LIBRO", "El amor en los tiempos del cólera.", "García Márquez · titolo e preposizioni"],
    ],
    quiz: ["Vuoi dire che stai ancora imparando.", ["Estoy buscando trabajo.", "No tengo tiempo.", "Todavía estoy aprendiendo español."], 2],
  },
  fr: {
    name: "Francese", code: "FR", locale: "fr-FR",
    meta: "Europa e mondo francofono · alfabeto latino",
    focus: "Il divario tra scrittura e suono: ascolto e pronuncia vanno allenati insieme.",
    priorities: [
      "Collega ogni frase scritta al suo audio; non fidarti della grafia.",
      "Allena liaison, vocali nasali e ritmo per gruppi di parole.",
      "Automatizza avoir, être, aller, faire e i verbi modali più frequenti.",
      "Impara formule di cortesia complete per servizi e lavoro.",
    ],
    levels: {
      A1: ["être, avoir, aller; presente; articoli e domande", "cibo, luoghi, numeri, persone, bisogni", "menu, insegne e chat minime", "Presentati, ordina e chiedi una direzione"],
      A2: ["passé composé; futuro vicino; pronomi base", "casa, salute, trasporti, attività", "email brevi, annunci e istruzioni", "Racconta ieri e prenota un servizio"],
      B1: ["imperfetto; relativi; condizionale di cortesia", "lavoro, problemi, progetti, emozioni", "notizie facili e letture graduate", "Spiega un problema e racconta un’esperienza"],
      B2: ["congiuntivo frequente; connettivi; discorso indiretto", "riunioni, reclami, argomentazione, settore", "stampa, podcast trascritti e report", "Prendi posizione e negozia una soluzione"],
      C1: ["registro, nominalizzazione e sfumature modali", "collocazioni, idiomi e lessico professionale", "saggi, narrativa e documenti complessi", "Adatta tono e precisione a interlocutore e scopo"],
      C2: ["variazione francofona e pragmatica fine", "ironia, allusioni e repertorio specialistico", "letteratura, diritto e testi densi", "Media tra sfumature culturali e stilistiche"],
    },
    phrases: [
      ["Vous pouvez répéter, s’il vous plaît ?", "", "Può ripetere, per favore?", "aiuto"],
      ["J’apprends encore le français.", "", "Sto ancora imparando il francese.", "aiuto"],
      ["Combien ça coûte ?", "", "Quanto costa?", "acquisti"],
      ["Je voudrais prendre rendez-vous.", "", "Vorrei fissare un appuntamento.", "servizi"],
      ["Où se trouve la gare ?", "", "Dove si trova la stazione?", "trasporti"],
      ["Je vérifie et je vous tiens au courant.", "", "Controllo e la tengo aggiornata.", "lavoro"],
      ["Vous pouvez me montrer ?", "", "Può mostrarmi?", "lavoro"],
      ["J’ai besoin d’aide avec ce formulaire.", "", "Ho bisogno di aiuto con questo modulo.", "documenti"],
    ],
    culture: [
      ["FILOSOFIA", "Je pense, donc je suis.", "Descartes · causa e conseguenza"],
      ["CANZONE", "La vie en rose.", "Édith Piaf · titolo e immagine"],
      ["LIBRO", "On ne voit bien qu’avec le cœur.", "Le Petit Prince · negazione e restrizione"],
      ["CINEMA", "C’est la vie.", "Formula ricorrente · accettare l’imprevisto"],
    ],
    quiz: ["Vuoi fissare un appuntamento.", ["Je voudrais prendre rendez-vous.", "Je cherche la sortie.", "Je vais au travail."], 0],
  },
  ru: {
    name: "Russo", code: "RU", locale: "ru-RU",
    meta: "Eurasia · alfabeto cirillico",
    focus: "Cirillico, casi, aspetto verbale e verbi di moto: costruire per strati.",
    priorities: [
      "Impara il cirillico in una settimana con parole reali, non con traslitterazione eterna.",
      "Studia i casi dentro locuzioni fisse e domande guida.",
      "Abbina sempre i verbi perfettivi e imperfettivi in contesto.",
      "Allena accento tonico e riduzione vocalica con molto shadowing.",
    ],
    levels: {
      A1: ["presente; genere; accusativo e prepositivo base", "numeri, cibo, città, famiglia, bisogni", "cirillico, insegne e messaggi minimi", "Presentati e gestisci acquisti e direzioni"],
      A2: ["passato; genitivo/dativo; aspetto introduttivo", "casa, salute, trasporti, routine", "annunci, chat ed email semplici", "Racconta ieri e descrivi un problema"],
      B1: ["casi al plurale; verbi di moto; condizionale", "lavoro, esperienze, opinioni, servizi", "notizie adattate e storie graduate", "Spiega cause, conseguenze e itinerari"],
      B2: ["participi frequenti; aspetto avanzato; registro", "riunioni, negoziazione, burocrazia, settore", "stampa generalista e documenti di lavoro", "Sostieni una discussione e gestisci imprevisti"],
      C1: ["sintassi complessa, prefissi e stile", "collocazioni, modi di dire e lessico astratto", "narrativa, saggi e media veloci", "Sintetizza e riformula con registro appropriato"],
      C2: ["pragmatica, variazione e sfumature aspettuali", "ironia, cultura e lessico specialistico", "letteratura e testi tecnici densi", "Interpreta sottintesi e media significati fini"],
    },
    phrases: [
      ["Повторите, пожалуйста.", "Povtorite, požalujsta.", "Ripeta, per favore.", "aiuto"],
      ["Я ещё учу русский.", "Ja eščë uču russkij.", "Sto ancora imparando il russo.", "aiuto"],
      ["Сколько это стоит?", "Skol'ko éto stoit?", "Quanto costa?", "acquisti"],
      ["Я хочу записаться на приём.", "Ja choču zapisat'sja na priëm.", "Vorrei fissare un appuntamento.", "servizi"],
      ["Где находится вокзал?", "Gde nachoditsja vokzal?", "Dove si trova la stazione?", "trasporti"],
      ["Я проверю и сообщу вам.", "Ja proverju i soobšču vam.", "Controllo e le faccio sapere.", "lavoro"],
      ["Покажите, пожалуйста, как это работает.", "Pokažite, požalujsta, kak éto rabotaet.", "Mostri come funziona, per favore.", "lavoro"],
      ["Мне нужна помощь с этой анкетой.", "Mne nužna pomošč' s étoj anketoj.", "Mi serve aiuto con questo modulo.", "documenti"],
    ],
    culture: [
      ["POESIA", "Я вас любил.", "Puškin · io vi amavo"],
      ["LIBRO", "Война и мир.", "Tolstoj · guerra e pace"],
      ["TEATRO", "Человек — это звучит гордо.", "Gorkij · identità e predicato"],
      ["ANIMAZIONE", "Ну, погоди!", "Serie sovietica · aspetta un po’"],
    ],
    quiz: ["Vuoi chiedere quanto costa.", ["Где вы живёте?", "Сколько это стоит?", "Который час?"], 1],
  },
  zh: {
    name: "Cinese", code: "ZH", locale: "zh-CN",
    meta: "Mandarino · caratteri semplificati",
    focus: "Toni, comprensione orale e caratteri: separare le abilità, poi ricongiungerle.",
    priorities: [
      "Stabilizza pinyin e quattro toni con coppie minime nelle prime settimane.",
      "Impara caratteri come componenti e parole, mai come disegni isolati.",
      "Dai priorità alle 800 parole più frequenti e alle particelle 了, 过, 着.",
      "Usa dialoghi brevi con audio lento e naturale, senza dipendere dal pinyin.",
    ],
    levels: {
      A1: ["ordine SVO; 是, 有, 在; domande con 吗", "numeri, cibo, luoghi, persone, bisogni", "pinyin e 150–250 caratteri frequenti", "Presentati, ordina e chiedi una direzione"],
      A2: ["了; classificatori; comparativi; verbi modali", "casa, salute, trasporti, routine", "400–600 caratteri e messaggi brevi", "Racconta azioni concluse e fissa appuntamenti"],
      B1: ["过, 着; complementi direzionali e risultativi", "esperienze, problemi, lavoro, opinioni", "1.000–1.300 caratteri e testi graduati", "Spiega un imprevisto e una sequenza di azioni"],
      B2: ["connettivi; frasi 把/被; registro scritto", "riunioni, servizi, negoziazione, settore", "1.800–2.200 caratteri e articoli generalisti", "Interagisci al lavoro e argomenta con esempi"],
      C1: ["strutture formali, chengyu trasparenti, stile", "lessico astratto e professionale", "stampa, narrativa e saggi", "Sintetizza fonti e adatta il registro"],
      C2: ["classico residuale, pragmatica e varietà", "allusioni, idiomi e repertorio specialistico", "letteratura e testi tecnici densi", "Cogli sottintesi culturali e retorici"],
    },
    phrases: [
      ["请再说一遍。", "Qǐng zài shuō yí biàn.", "Per favore, ripeta.", "aiuto"],
      ["我还在学中文。", "Wǒ hái zài xué Zhōngwén.", "Sto ancora imparando il cinese.", "aiuto"],
      ["这个多少钱？", "Zhège duōshao qián?", "Quanto costa questo?", "acquisti"],
      ["我想预约。", "Wǒ xiǎng yùyuē.", "Vorrei prenotare un appuntamento.", "servizi"],
      ["车站在哪里？", "Chēzhàn zài nǎlǐ?", "Dov’è la stazione?", "trasporti"],
      ["我确认后告诉您。", "Wǒ quèrèn hòu gàosu nín.", "Controllo e le faccio sapere.", "lavoro"],
      ["请告诉我怎么操作。", "Qǐng gàosu wǒ zěnme cāozuò.", "Mi mostri come si fa, per favore.", "lavoro"],
      ["这个表格我需要帮助。", "Zhège biǎogé wǒ xūyào bāngzhù.", "Mi serve aiuto con questo modulo.", "documenti"],
    ],
    culture: [
      ["CLASSICO", "学而时习之。", "Dialoghi di Confucio · studiare e ripassare"],
      ["CLASSICO", "千里之行，始于足下。", "Laozi · un viaggio inizia dai piedi"],
      ["PROVERBIO", "活到老，学到老。", "Imparare per tutta la vita"],
      ["CINEMA", "我养你啊！", "The King of Comedy · promessa colloquiale"],
    ],
    quiz: ["Vuoi chiedere di ripetere.", ["你去哪儿？", "请再说一遍。", "现在几点？"], 1],
  },
  ja: {
    name: "Giapponese", code: "JA", locale: "ja-JP",
    meta: "Giappone · kana e kanji",
    focus: "Scritture multiple, ordine della frase e livelli di cortesia.",
    priorities: [
      "Impara hiragana e katakana subito; usa il rōmaji solo come ponte breve.",
      "Costruisci frasi per particelle e blocchi, con il verbo alla fine.",
      "Distingui presto stile です/ます e forma piana senza inseguire il keigo.",
      "Impara i kanji dentro parole frequenti e frasi, con richiamo dilazionato.",
    ],
    levels: {
      A1: ["です/ます; particelle は, を, に, で; domande", "numeri, cibo, luoghi, persone, bisogni", "hiragana, katakana e circa 100 kanji", "Presentati, ordina e chiedi una direzione"],
      A2: ["passato; forma て; aggettivi; desideri", "casa, salute, trasporti, routine", "circa 300 kanji e messaggi brevi", "Chiedi permesso, racconta ieri e prenota"],
      B1: ["forma piana; relative; potenziale; condizionali", "esperienze, problemi, lavoro, opinioni", "600–800 kanji e letture graduate", "Spiega un imprevisto e motiva una scelta"],
      B2: ["passivo/causativo; connettivi; keigo essenziale", "ufficio, servizi, negoziazione, settore", "1.000–1.200 kanji e articoli generalisti", "Lavora con cortesia e gestisci chiarimenti"],
      C1: ["registro formale, ellissi e sfumature finali", "collocazioni, onomatopee e lessico astratto", "stampa, saggi e narrativa", "Adatta distanza sociale, tono e precisione"],
      C2: ["pragmatica, varietà e riferimenti culturali", "ironia, allusioni e lessico specialistico", "letteratura e testi tecnici densi", "Interpreta ciò che viene lasciato implicito"],
    },
    phrases: [
      ["もう一度お願いします。", "Mō ichido onegaishimasu.", "Ancora una volta, per favore.", "aiuto"],
      ["まだ日本語を勉強しています。", "Mada Nihongo o benkyō shiteimasu.", "Sto ancora imparando il giapponese.", "aiuto"],
      ["これはいくらですか。", "Kore wa ikura desu ka?", "Quanto costa questo?", "acquisti"],
      ["予約を取りたいです。", "Yoyaku o toritai desu.", "Vorrei fissare un appuntamento.", "servizi"],
      ["駅はどこですか。", "Eki wa doko desu ka?", "Dov’è la stazione?", "trasporti"],
      ["確認してご連絡します。", "Kakunin shite go-renraku shimasu.", "Controllo e la ricontatto.", "lavoro"],
      ["やり方を教えてください。", "Yarikata o oshiete kudasai.", "Mi mostri come si fa, per favore.", "lavoro"],
      ["この書類を手伝ってください。", "Kono shorui o tetsudatte kudasai.", "Mi aiuti con questo modulo.", "documenti"],
    ],
    culture: [
      ["LIBRO", "吾輩は猫である。", "Natsume Sōseki · io sono un gatto"],
      ["CANZONE", "上を向いて歩こう。", "Kyū Sakamoto · camminiamo guardando in alto"],
      ["ANIME", "逃げちゃだめだ。", "Neon Genesis Evangelion · non devo fuggire"],
      ["CINEMA", "生きろ。", "Princess Mononoke · vivi"],
    ],
    quiz: ["Vuoi chiedere dove si trova la stazione.", ["駅はどこですか。", "これは何ですか。", "何時ですか。"], 0],
  },
};

function safeGet(key) {
  try { return localStorage.getItem(key); }
  catch { return null; }
}

const urlParams = new URLSearchParams(window.location.search);

const state = {
  language: urlParams.get("language") || safeGet("pp-language") || "en",
  level: urlParams.get("level") || safeGet("pp-level") || "A1",
  guide: urlParams.get("guide") || safeGet("pp-guide") || "it",
  learned: readLearned(),
};

if (!languages[state.language]) state.language = "en";
if (!levelBase[state.level]) state.level = "A1";
if (!["it", "en", "target"].includes(state.guide)) state.guide = "it";
if (state.language === "en" && state.guide === "target") state.guide = "en";
if (!state.learned || typeof state.learned !== "object" || Array.isArray(state.learned)) state.learned = {};

function readLearned() {
  try { return JSON.parse(safeGet("pp-learned") || "{}"); }
  catch { return {}; }
}

function persist(key, value) {
  try { localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value)); }
  catch { showToast("Il browser non permette di salvare i progressi."); }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;"})[char]);
}

const icons = {
  sound: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M11 5 6.8 9H3v6h3.8L11 19V5Zm4.5 3.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12"/></svg>',
  check: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m5 12 4.2 4.2L19 6.5"/></svg>',
};

const englishNames = {en:"English", de:"German", es:"Spanish", fr:"French", ru:"Russian", zh:"Chinese", ja:"Japanese"};
const quizPromptsEn = {
  en:"You did not understand and want the person to repeat.",
  de:"You want to ask where the station is.",
  es:"You want to say that you will check and reply.",
  fr:"You want to book an appointment.",
  ru:"You want to ask how much it costs.",
  zh:"You want to ask the person to repeat.",
  ja:"You want to ask where the station is.",
};

function activeCopy() {
  if (state.guide === "it") return guideCopy.it;
  if (state.guide === "en") return guideCopy.en;
  return {...guideCopy.en, ...nativeUi[state.language]};
}

function languageName(key = state.language) {
  if (state.guide === "it") return languages[key].name;
  if (state.guide === "target") return nativeCourses[key].name;
  return englishNames[key];
}

function formatDay(day) {
  const number = String(day).padStart(3, "0");
  if (state.guide === "target" && state.language === "zh") return `第 ${number} 天`;
  if (state.guide === "target" && state.language === "ja") return `${number} 日目`;
  return `${activeCopy().day} ${number}`;
}

function formatPeriod(month) {
  if (state.guide === "it") return `${month} ${month === 1 ? "mese" : "mesi"}`;
  if (state.guide === "en") return `${month} ${month === 1 ? "month" : "months"}`;
  const formats = {
    en: `${month} ${month === 1 ? "month" : "months"}`,
    de: `${month} ${month === 1 ? "Monat" : "Monate"}`,
    es: `${month} ${month === 1 ? "mes" : "meses"}`,
    fr: `${month} mois`,
    ru: `${month} ${month === 1 ? "месяц" : [2, 3].includes(month) ? "месяца" : "месяцев"}`,
    zh: `${month} 个月`, ja: `${month} か月`,
  };
  return formats[state.language];
}

function languageButtons(container, compact = false) {
  container.innerHTML = Object.entries(languages).map(([key, lang]) => `
    <button type="button" data-language="${key}" ${compact ? `aria-pressed="${state.language === key}"` : `role="tab" aria-selected="${state.language === key}"`}>
      ${compact ? `<span>${lang.code}</span>` : ""}${languageName(key)}
    </button>`).join("");
}

function levelButtons() {
  const names = activeCopy().levelNames;
  document.querySelector("#levelNav").innerHTML = Object.keys(levelBase).map(level => `
    <button type="button" role="tab" data-level="${level}" aria-selected="${state.level === level}">
      <strong>${level}</strong><span>${names[level]}</span>
    </button>`).join("");
}

function renderHero() {
  const lang = languages[state.language];
  const copy = activeCopy();
  const day = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const phrase = lang.phrases[day % lang.phrases.length];
  document.querySelector("#heroDay").textContent = formatDay(day);
  document.querySelector("#heroCode").textContent = lang.code;
  document.querySelector("#heroLanguage").textContent = languageName();
  const stage = state.guide === "it" ? levelBase[state.level].title : state.guide === "en" ? levelBaseEn[state.level][0] : nativeCourses[state.language].levels[state.level][0];
  document.querySelector("#heroStage").textContent = `${stage} · ${state.level}`;
  document.querySelector("#heroPhrase").textContent = `“${phrase[0]}”`;
  document.querySelector("#heroTranslation").textContent = state.guide === "it" ? phrase[2] : state.guide === "en" ? phraseMeaningsEn[day % lang.phrases.length] : nativeCourses[state.language].noTranslation;
  document.querySelector("#heroSpeak").dataset.text = phrase[0];
}

function renderLevel() {
  const lang = languages[state.language];
  const copy = activeCopy();
  if (state.guide === "target") {
    const native = nativeCourses[state.language].levels[state.level];
    document.querySelector("#levelPanel").innerHTML = `
      <div class="level-content">
        <div class="level-summary">
          <div class="big-level">${state.level}</div>
          <h3>${escapeHtml(native[0])}</h3>
          <p>${escapeHtml(native[1])}</p>
        </div>
        <div class="level-details level-details-immersion">
          <article class="detail-block"><span>01 · ${copy.panel.goal}</span><h4>${copy.panel.goalTitle}</h4><p>${escapeHtml(native[2])}</p></article>
          <article class="detail-block"><span>02 · ${copy.panel.focus}</span><h4>${copy.panel.focusTitle}</h4><p>${escapeHtml(native[1])}</p></article>
          <article class="detail-block"><span>03 · ${copy.panel.routine}</span><h4>${copy.panel.routineTitle}</h4><p>${escapeHtml(native[3])}</p></article>
          <article class="detail-block"><span>04 · ${copy.panel.immersion}</span><h4>${escapeHtml(nativeCourses[state.language].name)}</h4><p>${escapeHtml(nativeCourses[state.language].noTranslation)}</p></article>
        </div>
      </div>`;
    return;
  }
  const base = levelBase[state.level];
  const details = lang.levels[state.level];
  const englishBase = levelBaseEn[state.level];
  const title = state.guide === "it" ? base.title : englishBase[0];
  const summary = state.guide === "it" ? base.summary : englishBase[1];
  const outcome = state.guide === "it" ? base.outcome : englishBase[2];
  const target = state.guide === "it" ? base.target : englishBase[3];
  const routine = state.guide === "it" ? base.routine : englishBase[4];
  const focus = state.guide === "it" ? details[0] : englishFocus[state.language][state.level];
  const words = state.guide === "it" ? details[1] : "High-frequency language for the situations and tasks at this level.";
  const reading = state.guide === "it" ? details[2] : "Short, level-appropriate texts linked to everyday life and work.";
  const exit = state.guide === "it" ? details[3] : outcome;
  document.querySelector("#levelPanel").innerHTML = `
    <div class="level-content">
      <div class="level-summary">
        <div class="big-level">${state.level}</div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(summary)}</p>
      </div>
      <div class="level-details">
        <article class="detail-block"><span>01 · ${copy.panel.goal}</span><h4>${copy.panel.goalTitle}</h4><p>${escapeHtml(outcome)}</p></article>
        <article class="detail-block"><span>02 · ${copy.panel.focus}</span><h4>${copy.panel.focusTitle}</h4><p>${escapeHtml(focus)}</p></article>
        <article class="detail-block"><span>03 · ${copy.panel.words}</span><h4>${escapeHtml(target)}</h4><p>${escapeHtml(words)}</p></article>
        <article class="detail-block"><span>04 · ${copy.panel.reading}</span><h4>${copy.panel.readingTitle}</h4><p>${escapeHtml(reading)}</p></article>
        <article class="detail-block"><span>05 · ${copy.panel.routine}</span><h4>${copy.panel.routineTitle}</h4><p>${escapeHtml(routine)}</p></article>
        <article class="detail-block"><span>06 · ${copy.panel.exit}</span><h4>${copy.panel.exitTitle}</h4><p>${escapeHtml(exit)}</p></article>
      </div>
    </div>`;
}

function renderRoadmap() {
  const lang = languages[state.language];
  const copy = activeCopy();
  const name = languageName();
  const routes = state.guide === "target"
    ? [[1,"A1",nativeCourses[state.language].levels.A1[1],"A1"],[2,"A1+",nativeCourses[state.language].levels.A1[2],"A1+"],[3,"A2",nativeCourses[state.language].levels.A2[1],"A2"],[6,"B1",nativeCourses[state.language].levels.B1[1],"B1"],[12,"B2",nativeCourses[state.language].levels.B2[1],"B2"]]
    : copy.route;
  document.querySelector("#roadmapSummary").textContent = state.guide === "target" ? `${name}: ${nativeCourses[state.language].levels.B2[1]}` : copy.roadmapSummary(name);
  ["firstMilestoneLabel", "middleMilestoneLabel", "finalMilestoneLabel"].forEach((id, index) => document.querySelector(`#${id}`).textContent = copy.milestoneLabels[index]);
  ["firstMilestoneValue", "middleMilestoneValue", "finalMilestoneValue"].forEach((id, index) => document.querySelector(`#${id}`).textContent = copy.milestoneValues[index]);
  document.querySelector("#priorityTitle").textContent = copy.forLanguage(name);
  const priorities = state.guide === "it" ? lang.priorities : state.guide === "en" ? prioritiesEn[state.language] : ["A1 · " + nativeCourses[state.language].levels.A1[3], "A2 · " + nativeCourses[state.language].levels.A2[3], "B1 · " + nativeCourses[state.language].levels.B1[3], "B2 · " + nativeCourses[state.language].levels.B2[3]];
  document.querySelector("#priorityList").innerHTML = priorities.map(item => `<li>${escapeHtml(item)}</li>`).join("");

  document.querySelector("#routeTimeline").innerHTML = routes.map((phase, index) => {
    return `<article class="route-step reveal is-visible">
      <span class="route-marker">${String(index + 1).padStart(2, "0")}</span>
      <span class="route-period">${formatPeriod(phase[0])}</span>
      <div><h3>${escapeHtml(phase[1])}</h3><p>${escapeHtml(phase[2])}</p></div>
      <span class="route-target">${escapeHtml(phase[3])}</span>
    </article>`;
  }).join("");
}

function learnedForLanguage() {
  return state.learned[state.language] || [];
}

function renderPhrases(query = "") {
  const lang = languages[state.language];
  const copy = activeCopy();
  const learned = learnedForLanguage();
  const locale = activeCopy().locale;
  const normalized = query.trim().toLocaleLowerCase(locale);
  const rows = lang.phrases.map((phrase, index) => ({phrase, index})).filter(({phrase, index}) => {
    const guideTerms = state.guide === "en" ? `${phraseMeaningsEn[index]} ${phraseContextsEn[index]}` : "";
    return `${phrase.join(" ")} ${guideTerms}`.toLocaleLowerCase(locale).includes(normalized);
  });
  const container = document.querySelector("#phraseList");
  const empty = document.querySelector("#phraseEmpty");
  container.innerHTML = rows.map(({phrase, index}) => {
    const isLearned = learned.includes(index);
    const translation = state.guide === "it" ? phrase[2] : state.guide === "en" ? phraseMeaningsEn[index] : nativeCourses[state.language].noTranslation;
    const context = state.guide === "it" ? phrase[3] : state.guide === "en" ? phraseContextsEn[index] : "";
    return `<article class="phrase-row ${isLearned ? "is-learned" : ""}">
      <span class="phrase-index">${String(index + 1).padStart(2, "0")}</span>
      <div class="phrase-target"><strong>${escapeHtml(phrase[0])}</strong>${phrase[1] ? `<small>${escapeHtml(phrase[1])}</small>` : ""}</div>
      <span class="phrase-translation">${escapeHtml(translation)}</span>
      ${context ? `<span class="phrase-context">${escapeHtml(context)}</span>` : "<span></span>"}
      <div class="phrase-actions">
        <button class="phrase-action ${isLearned ? "learned" : ""}" type="button" data-learn="${index}" aria-pressed="${isLearned}" aria-label="${isLearned ? copy.learnedOn : copy.learnedOff}">${icons.check}</button>
        <button class="phrase-action" type="button" data-speak="${escapeHtml(phrase[0])}" aria-label="${copy.listenPhrase}">${icons.sound}</button>
      </div>
    </article>`;
  }).join("");
  container.hidden = rows.length === 0;
  empty.hidden = rows.length > 0;
  updateProgress();
}

function updateProgress() {
  const copy = activeCopy();
  const count = learnedForLanguage().length;
  const total = languages[state.language].phrases.length;
  const percent = Math.round(count / total * 100);
  document.querySelector("#progressLabel").textContent = copy.progress(count, total);
  document.querySelector("#progressPercent").textContent = `${percent}%`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(percent));
}

function renderCulture() {
  const lang = languages[state.language];
  const copy = activeCopy();
  document.querySelector("#cultureStack").innerHTML = lang.culture.map((item, index) => {
    const type = state.guide === "it" ? item[0] : state.guide === "en" ? (cultureTypesEn[item[0]] || item[0]) : "";
    const note = state.guide === "it" ? item[2] : state.guide === "en" ? cultureNotesEn[state.language][index] : "";
    return `
    <article class="culture-item reveal is-visible">
      <span>${String(index + 1).padStart(2, "0")}${type ? ` · ${escapeHtml(type)}` : ""}</span>
      <div><blockquote>“${escapeHtml(item[1])}”</blockquote>${note ? `<p>${escapeHtml(note)}</p>` : ""}</div>
      <button class="phrase-action" type="button" data-speak="${escapeHtml(item[1])}" aria-label="${copy.listenQuote}">${icons.sound}</button>
    </article>`;
  }).join("");
}

function renderQuiz() {
  const lang = languages[state.language];
  const [prompt, options] = lang.quiz;
  document.querySelector("#quizLanguage").textContent = `${languageName().toLocaleUpperCase(activeCopy().locale)} · A1`;
  document.querySelector("#quizPrompt").textContent = state.guide === "it" ? prompt : state.guide === "en" ? quizPromptsEn[state.language] : nativeCourses[state.language].quiz;
  document.querySelector("#quizOptions").innerHTML = options.map((option, index) => `
    <button class="quiz-option" type="button" data-answer="${index}"><span>${String.fromCharCode(65 + index)}</span>${escapeHtml(option)}</button>`).join("");
  const feedback = document.querySelector("#quizFeedback");
  feedback.textContent = "";
  feedback.className = "quiz-feedback";
}

function renderSelection() {
  document.querySelectorAll("[data-language]").forEach(button => {
    if (button.hasAttribute("aria-pressed")) button.setAttribute("aria-pressed", String(button.dataset.language === state.language));
    if (button.hasAttribute("aria-selected")) button.setAttribute("aria-selected", String(button.dataset.language === state.language));
  });
  document.querySelectorAll("[data-level]").forEach(button => button.setAttribute("aria-selected", String(button.dataset.level === state.level)));
  document.querySelectorAll("[data-guide]").forEach(button => button.setAttribute("aria-checked", String(button.dataset.guide === state.guide)));
}

function renderMethod() {
  const method = activeCopy().method;
  document.querySelector("#methodKicker").textContent = method.kicker;
  document.querySelector("#methodTitle").textContent = method.title;
  document.querySelector("#methodIntro").textContent = method.intro;
  document.querySelector("#methodLeadTitle").textContent = method.leadTitle;
  document.querySelector("#methodLeadText").textContent = method.leadText;
  const formula = document.querySelector("#methodFormula");
  formula.setAttribute("aria-label", method.formulaLabel);
  formula.innerHTML = method.formula.map((item, index) => `${index ? '<i aria-hidden="true">→</i>' : ""}<span>${escapeHtml(item)}</span>`).join("");
  method.steps.forEach((step, index) => {
    const number = index + 1;
    document.querySelector(`#methodStepTitle${number}`).textContent = step[0];
    document.querySelector(`#methodStepText${number}`).textContent = step[1];
    document.querySelector(`#methodStepTime${number}`).textContent = step[2];
  });
}

function renderGuideChrome() {
  const copy = activeCopy();
  const targetGuideButton = document.querySelector("#targetGuideLabel");
  const englishCourse = state.language === "en";
  document.documentElement.lang = state.guide === "target" ? languages[state.language].locale.split("-")[0] : copy.locale;
  document.querySelector("#courseViewLabel").textContent = copy.viewLabel;
  document.querySelector("#courseViewHint").textContent = englishCourse ? copy.viewHintEnglishCourse : copy.viewHint;
  targetGuideButton.hidden = englishCourse;
  targetGuideButton.textContent = `${nativeCourses[state.language].name} · ${copy.targetSuffix}`;
  document.querySelector("#courseViewControl").classList.toggle("is-two-options", englishCourse);
  renderMethod();
  if (state.guide === "it") {
    document.querySelector("#studioTitle").innerHTML = "Dal primo caffè<br>alla prima riunione.";
    document.querySelector("#studioIntro").textContent = "Seleziona lingua e livello. Ogni tappa indica cosa saper fare davvero, senza trasformare la vita quotidiana in un esame universitario.";
    document.querySelector("#roadmapTitle").innerHTML = "La rotta più corta.<br>Non una scorciatoia finta.";
    document.querySelector("#phrasesTitle").textContent = "Parla da oggi.";
    document.querySelector("#phrasesIntro").textContent = "Ascolta, ripeti tre volte, poi sostituisci una parola. Segna solo ciò che riesci a dire senza leggere.";
  } else if (state.guide === "en") {
    document.querySelector("#studioTitle").textContent = "From your first coffee to your first meeting.";
    document.querySelector("#studioIntro").textContent = "Choose a language and a level. Each stage describes what you should be able to do in real life.";
    document.querySelector("#roadmapTitle").textContent = "The shortest route to an operational B2.";
    document.querySelector("#phrasesTitle").textContent = "Start speaking today.";
    document.querySelector("#phrasesIntro").textContent = "Listen, repeat three times, then change one element. Mark a phrase only when you can say it without reading.";
  } else {
    document.querySelector("#studioTitle").textContent = copy.studioTitle;
    document.querySelector("#studioIntro").textContent = copy.studioIntro;
    document.querySelector("#roadmapTitle").textContent = copy.roadmapTitle;
    document.querySelector("#phrasesTitle").textContent = copy.phrasesTitle;
    document.querySelector("#phrasesIntro").textContent = copy.phrasesIntro;
  }
  languageButtons(document.querySelector("#languageStrip"), true);
  languageButtons(document.querySelector("#studioLanguageTabs"));
  levelButtons();
}

function renderAll() {
  renderGuideChrome();
  renderSelection();
  renderHero();
  renderLevel();
  renderRoadmap();
  renderPhrases(document.querySelector("#phraseSearch").value);
  renderCulture();
  renderQuiz();
}

function setLanguage(key) {
  if (!languages[key]) return;
  state.language = key;
  if (key === "en" && state.guide === "target") {
    state.guide = "en";
    persist("pp-guide", state.guide);
  }
  persist("pp-language", key);
  renderAll();
}

function setGuide(key) {
  if (!["it", "en", "target"].includes(key)) return;
  if (key === "target" && state.language === "en") return;
  state.guide = key;
  persist("pp-guide", key);
  renderAll();
}

function speak(text) {
  const copy = activeCopy();
  if (!("speechSynthesis" in window)) {
    showToast(copy.voiceMissing);
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = languages[state.language].locale;
  utterance.rate = state.language === "zh" || state.language === "ja" ? .78 : .88;
  utterance.onerror = () => showToast(copy.voiceInstall);
  window.speechSynthesis.speak(utterance);
}

let toastTimer;
function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3600);
}

function toggleLearned(index) {
  const copy = activeCopy();
  const current = learnedForLanguage();
  const updated = current.includes(index) ? current.filter(item => item !== index) : [...current, index];
  state.learned[state.language] = updated;
  persist("pp-learned", state.learned);
  renderPhrases(document.querySelector("#phraseSearch").value);
  showToast(current.includes(index) ? copy.review : copy.saved);
}

function setupEvents() {
  document.addEventListener("click", event => {
    const languageButton = event.target.closest("[data-language]");
    if (languageButton) setLanguage(languageButton.dataset.language);

    const levelButton = event.target.closest("[data-level]");
    if (levelButton) {
      state.level = levelButton.dataset.level;
      persist("pp-level", state.level);
      renderSelection(); renderHero(); renderLevel();
    }

    const guideButton = event.target.closest("[data-guide]");
    if (guideButton) setGuide(guideButton.dataset.guide);

    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) speak(speakButton.dataset.speak);

    const learnButton = event.target.closest("[data-learn]");
    if (learnButton) toggleLearned(Number(learnButton.dataset.learn));

    const answerButton = event.target.closest("[data-answer]");
    if (answerButton) checkAnswer(answerButton);
  });

  document.querySelector("#heroSpeak").addEventListener("click", event => speak(event.currentTarget.dataset.text));
  document.querySelector("#phraseSearch").addEventListener("input", event => renderPhrases(event.target.value));
  document.querySelector("#clearSearch").addEventListener("click", () => {
    const search = document.querySelector("#phraseSearch");
    search.value = ""; search.focus(); renderPhrases();
  });

  const menuButton = document.querySelector("#menuButton");
  const mobileNav = document.querySelector("#mobileNav");
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
    document.body.classList.toggle("menu-open", !open);
  });
  mobileNav.addEventListener("click", event => {
    if (event.target.matches("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
      document.body.classList.remove("menu-open");
    }
  });
}

function checkAnswer(button) {
  const copy = activeCopy();
  const correct = languages[state.language].quiz[2];
  const selected = Number(button.dataset.answer);
  document.querySelectorAll(".quiz-option").forEach(option => {
    option.disabled = true;
    if (Number(option.dataset.answer) === correct) option.classList.add("correct");
  });
  const feedback = document.querySelector("#quizFeedback");
  if (selected === correct) {
    feedback.textContent = copy.correct;
  } else {
    button.classList.add("wrong");
    feedback.textContent = copy.wrong;
    feedback.classList.add("error");
  }
}

function setupReveals() {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach(item => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    });
  }, {threshold: .12, rootMargin: "0px 0px -40px"});
  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
}

function init() {
  renderAll();
  setupEvents();
  setupReveals();
}

init();
