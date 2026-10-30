---
title: Come funziona questa libreria
description: L'architettura dietro questo blog, a costo zero, e una guida rapida a cosa puoi mettere in un articolo.
pubDate: 2026-10-30
heroImage: /media/come-funziona-questa-libreria.png
tags:
  - GitHub Pages
  - Pages CMS
  - Astro
draft: false
---

Prima di parlare di prodotti, ha senso partire da qui: **come è fatto questo sito**. È anche un buon esempio di architettura semplice, senza server e senza costi.

## L'architettura in breve

![Flusso di pubblicazione: Pages CMS, repository GitHub, GitHub Actions, GitHub Pages](/media/flusso-pubblicazione.png)

1. **Scrivo in Pages CMS**, un editor web che lavora direttamente sul repository GitHub.
2. Quando salvo, Pages CMS fa un **commit** con il testo in Markdown e le immagini.
3. Il commit avvia una **GitHub Action** che costruisce il sito con Astro.
4. Il risultato viene pubblicato su **GitHub Pages**, in circa un minuto.

Nessun database, nessun server da mantenere: ogni articolo è un file, con tutto lo storico delle modifiche.

| Componente   | Ruolo                    | Costo  |
| ------------ | ------------------------ | ------ |
| Pages CMS    | Editor dei contenuti     | Gratis |
| GitHub       | Archivio e versioni      | Gratis |
| GitHub Actions | Build automatica       | Gratis |
| GitHub Pages | Hosting del sito         | Gratis |

## Cosa puoi mettere in un articolo

### Testo formattato

Grassetto, *corsivo*, [link](https://pagescms.org), elenchi puntati e numerati, titoli di sezione.

> **Nota:** le citazioni sono comode anche per evidenziare consigli o avvertenze.

### Codice

```yaml
# Esempio: un pezzo del file .pages.yml
media:
  input: public/media
  output: /media
```

### Immagini

Le carichi dall'editor con il pulsante immagine: finiscono nella cartella `public/media` del repository.

### Video

I video pesano troppo per stare nel repository: caricali su YouTube (anche come "non in elenco") e incollali così, passando alla modalità *Source* dell'editor:

<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/M7lc1UVf-VE" title="Video di esempio" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Basta sostituire il codice dopo `/embed/` con quello del tuo video.

## Condividere su LinkedIn

Ogni articolo ha già i meta tag Open Graph: quando incolli il link in un post, LinkedIn mostra titolo, descrizione e immagine di copertina. Se l'anteprima non si aggiorna, usa il [Post Inspector di LinkedIn](https://www.linkedin.com/post-inspector/) per forzarla.
