# Parla Prima

Guida statica e interattiva per imparare inglese, tedesco, spagnolo, francese, russo, cinese e giapponese, da A1 a C2, con un percorso pratico verso il B2.

## Pubblicazione

Copia nella stessa cartella del server:

- `index.html`
- `styles.css`
- `course-i18n.js`
- `phrase-data.js`
- `app.js`

Non servono PHP, database, Node.js o build.

## Anteprima locale

```powershell
py -m http.server 8080
```

Apri `http://localhost:8080`.

Le viste si possono anche condividere con parametri, per esempio `?guide=en&language=de&level=B2` oppure `?guide=target&language=ja&level=A2`. Ogni corso include 100 frasi quotidiane, mostrate in blocchi progressivi da 20.

## Smoke check

1. Cambia lingua, livello e lingua delle spiegazioni; verifica italiano, inglese e immersione.
2. Prova ascolto, ricerca frasi e quiz.
3. Marca una frase come acquisita, ricarica e verifica che il progresso resti salvato.
4. Controlla menu e layout a 390 px e 1440 px.
