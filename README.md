# Architect Notes

Libreria personale di articoli su prodotti e architetture: scritta a mano con **Pages CMS**, costruita con **Astro**, pubblicata gratis su **GitHub Pages**.

```
Pages CMS  ──commit──▶  GitHub  ──push──▶  GitHub Actions  ──deploy──▶  GitHub Pages
(scrivi)                (file .md)         (build Astro)                (sito pubblico)
```

---

## Messa online (una volta sola, ~15 minuti)

### 1. Crea il repository

1. Su GitHub crea un nuovo repository **pubblico** chiamato esattamente **`<tuo-username>.github.io`**
   (es. se sei `mario-rossi`, il repo si chiama `mario-rossi.github.io`).
   Così il sito sarà su `https://mario-rossi.github.io`.
2. Carica tutti i file di questa cartella nel repository, sul branch `main`.
   - Dal browser: *Add file → Upload files*, trascina il contenuto della cartella (attenzione a includere le cartelle nascoste `.github` e il file `.pages.yml`; se il browser non le carica, usa GitHub Desktop o `git`).
   - Da terminale:
     ```bash
     git init && git add . && git commit -m "Primo commit"
     git branch -M main
     git remote add origin https://github.com/<tuo-username>/<tuo-username>.github.io.git
     git push -u origin main
     ```

### 2. Attiva GitHub Pages

1. Nel repository: **Settings → Pages**.
2. In *Build and deployment → Source* scegli **GitHub Actions**.
3. Vai nella scheda **Actions**: vedrai il workflow *Pubblica su GitHub Pages*. Se non è partito da solo, aprilo e premi *Run workflow*.
4. Dopo un paio di minuti il sito è online su `https://<tuo-username>.github.io`.

### 3. Personalizza i tuoi dati

Apri `src/consts.ts` (anche direttamente dal sito di GitHub, con l'icona della matita) e cambia titolo del sito, descrizione, nome, link LinkedIn e GitHub. Salva: il sito si aggiorna da solo.

### 4. Collega Pages CMS

1. Vai su **https://pagescms.org** e accedi con GitHub.
2. Autorizza l'app sul repository `<tuo-username>.github.io`.
3. Apri il repository dall'elenco: troverai le sezioni **Articoli** e **Chi sono**, già configurate dal file `.pages.yml`.

Fatto. Da qui in poi non devi più toccare il codice.

---

## Scrivere un articolo

1. In Pages CMS apri **Articoli → Nuovo**.
2. Compila titolo, descrizione, data, copertina e i tag dei prodotti di cui parli.
3. Scrivi il testo. Per le immagini usa il pulsante immagine dell'editor: vengono salvate in `public/media`.
4. Vuoi solo salvare senza pubblicare? Spunta **Bozza**.
5. Premi **Save**. Dopo circa un minuto l'articolo è online.

**Video:** caricali su YouTube (anche "non in elenco"), poi passa l'editor in modalità *Source* e incolla:

```html
<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/CODICE-VIDEO" title="Titolo del video" loading="lazy" allowfullscreen></iframe>
</div>
```

**Modello:** tra gli articoli trovi *"Modello: scheda prodotto"*, una bozza con una struttura pronta (cos'è, quando usarlo, architettura, costi, limiti, risorse). Non compare sul sito pubblicato.

**Copertine e LinkedIn:** la copertina è anche l'immagine dell'anteprima su LinkedIn. Usa PNG o JPG, idealmente **1200 × 627 px**. Se non la imposti, viene usata `public/og-default.png`. Se LinkedIn mostra un'anteprima vecchia, passa il link nel [Post Inspector](https://www.linkedin.com/post-inspector/).

---

## Struttura del progetto

```
.pages.yml                     Configurazione dell'editor Pages CMS
.github/workflows/deploy.yml   Build e pubblicazione automatica
src/consts.ts                  Nome del sito, autore, link social
src/content/blog/              Gli articoli (un file .md ciascuno)
src/content/pages/about.md     La pagina "Chi sono"
src/styles/global.css          Colori e stile (cambia le variabili in cima)
public/media/                  Immagini caricate dall'editor
public/og-default.png          Anteprima LinkedIn di default
```

Pagine generate: home con elenco articoli, pagina articolo con pulsante "Condividi su LinkedIn", pagine per argomento (`/tag/...`), "Chi sono", feed RSS (`/rss.xml`) e sitemap.

## Provarlo sul tuo computer (facoltativo)

Serve Node.js 22.23 o superiore.

```bash
npm install
npm run dev      # http://localhost:4321 (qui vedi anche le bozze)
npm run build    # genera il sito nella cartella dist/
```

## Domande frequenti

**Posso usare un dominio mio?** Sì. In *Settings → Pages → Custom domain* inserisci il dominio, poi nel file `.github/workflows/deploy.yml` sostituisci il valore di `SITE` con il tuo indirizzo (es. `https://www.tuodominio.it`).

**Posso far scrivere altre persone?** Sì: in Pages CMS puoi invitare collaboratori via email, senza che debbano conoscere Git.

**Quanto costa?** Niente. Repository pubblico, GitHub Actions, GitHub Pages e Pages CMS sono gratuiti per questo uso.

**Cosa NON mettere qui:** il repository è pubblico, quindi niente dati di clienti, credenziali o documenti riservati.
