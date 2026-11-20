---
title: Real-time processing
description: '#3 - Real-time processing'
pubDate: 2026-11-12
heroImage: /media/real-time-data-processing-1-1.svg
tags:
- Fabric
draft: false
quiz:
- question: Cosa caratterizza l'elaborazione batch?
  options:
  - Ogni dato viene elaborato appena arriva
  - I dati vengono elaborati solo dentro una dashboard
  - I dati vengono raccolti e memorizzati, poi elaborati insieme in una singola operazione
  - I dati vengono scartati dopo un'ora
  answer: 3
  explanation: Nel batch i dati vengono raccolti e memorizzati così come sono, poi processati insieme in un batch.
- question: Quale di questi esempi, citati nell'articolo, è adatto all'elaborazione stream?
  options:
  - La contabilizzazione mensile dei movimenti di una carta di credito
  - Un sensore antincendio
  - L'analisi annuale di quanti incendi si verificano
  - Un report su dati storici
  answer: 2
  explanation: Il sensore antincendio richiede una risposta in real-time, per cui ogni dato va elaborato immediatamente.
- question: Come viene definita la latenza nell'articolo?
  options:
  - Il numero di dati in attesa di essere processati
  - La dimensione massima di un batch
  - Il tempo necessario per salvare il dato nel data warehouse
  - Il tempo che intercorre tra quando ricevo il dato e quando lo processo
  answer: 4
  explanation: 'La latenza è il tempo tra la ricezione del dato e la sua elaborazione: ore nel batch, secondi o millisecondi nello stream.'
- question: Che cos'è l'architettura lambda?
  options:
  - Un pattern che combina l'elaborazione batch e quella stream
  - Un pattern che usa solo l'elaborazione stream
  - Un formato di file per i data lake
  - Un tipo di query che elabora continuamente gli eventi
  answer: 1
  explanation: L'architettura lambda è un pattern comune che combina l'elaborazione batch e quella stream.
- question: Che cos'è una perpetual query?
  options:
  - Una query eseguita una volta al mese sui dati storici
  - Una query che crea le tabelle del data warehouse
  - Una query che elabora continuamente i dati degli eventi in real-time non appena vengono generati
  - Una query che elimina i dati più vecchi
  answer: 3
  explanation: La perpetual query elabora di continuo i dati degli eventi in real-time, selezionandoli e aggregandoli su periodi temporali.
- question: Nell'architettura lambda, dove viene salvato il risultato dell'elaborazione batch per le analisi sullo storico?
  options:
  - In una coda di messaggi
  - In una dashboard real-time
  - In una cartella nel cloud
  - In un analytical data store (un data warehouse)
  answer: 4
  explanation: Il risultato dell'elaborazione batch viene salvato in un analytical data store, cioè un data warehouse, per eseguire analisi sullo storico.
---
# Introduzione

L'elaborazione dei dati prevede la conversione di dati grezzi in informazioni utili attraverso un'elaborazione. Generalmente, ci sono due modalità per l'elaborazione dei dati:

- Batch - I dati vengono raccolti e memorizzati così come sono prima di essere processati insieme (in un batch) in una singola operazione
- Stream - una sorgente dati viene continuamente monitorata ed elaborata in real-time per ottenere nuovi dati

## Batch processing

I nuovi dati, come detto, vengono raccolti e memorizzati dopo di che, l'intero gruppo di dati viene processato insieme in un batch. Il modo in cui vengono processati può essere scelto in vari modi: per esempio si possono processare definendo un certo periodo temporale (per esempio un'ora) oppure definendo una soglia relativa al numero di dati in attesa di essere processati. Un esempio pratico potrebbe essere la contabilizzazione dei movimenti di una carta di credito, che avviene a fine mese.

## Stream processing

Nell'elaborazione a stream invece ogni singolo dato che arriva viene processato immediatamente, per cui non abbiamo tempi di attesa legati a soglie o periodi temporali. Questo approccio è ideale per operazioni che richiedono di essere gestite nel minor tempo possibile e richiedono una risposta in real-time. Un esempio potrebbe essere un sensore di antincendio.

### Differenze fra batch e stream

- Finestra di dato - il batch processa tutti i dati nel dataset invece lo stream solo i dati più recenti che ha ricevuto
- Dimensione dei dati - Il batch è ideale per gestire un dataset molto grande invece lo stream, per le sue caratteristiche, è più adatto a processare singole unità di dato o piccolissimi batch
- Performance - La latenza si definisce come il tempo che intercorre tra quando ricevo il dato a quando lo processo. Nella gestione a batch questa può essere di qualche ora, invece per lo stream è quasi in real-time o nell'ordine di secondi / millisecondi.
- Analisi - Il batch viene usato per analisi complesse invece lo stream è usato per eseguire semplici funzioni, aggregazioni o calcoli

### Combinare batch e stream

Solitamente in soluzioni che vanno ad eseguire analisi su grandi quantità di dati si vanno a combinare le due soluzioni per ottenere i vantaggi delle due. 

Solitamente si configura un'elaborazione dei dati in stream per avere il dato più aggiornato possibile e ci si costruisce sopra delle dashboard real-time per consumare il dato (per esempio una dashboard che mostra lo stato attuale dei sensori antincendio). Mentre i dati processati vengono memorizzati in uno storage per poi andare ad eseguire elaborazioni in batch sui dati storici (per esempio un'analisi per capire quanti incendi si verificano durante l'anno e in quali orari). 

Qui sotto riporto uno schema che descrive un'**architettura lambda**, un pattern comune che combina l'elaborazione batch e quella stream.

![image.png](/media/image-20.png)

In dettaglio è strutturata come segue:

1. I dati da una sorgente stream vengono acquisiti in real-time
2. Altri dati da altre sorgenti vengono acquisiti e memorizzati in un data storage (spesso un data lake) per l'elaborazione batch
3. Se i dati acquisiti in real-time non richiedono di essere elaborati immediatamente vengono salvati all'interno di un data storage per essere, anch'essi, elaborati in batch
4. Se i dati invece richiedono di essere processati in real-time, viene configurata un'elaborazione stream per elaborare i dati acquisiti in real-time e consumarli tramite visualizzazioni o analisi in real-time. Solitamente questo processo coinvolge il filtraggio e l'aggregazione dei dati in una finestra temporale molto ridotta
5. I dati che non provengono dalla sorgente stream vengono elaborati in batch periodicamente e preparati per l'analisi. Il risultato dell'elaborazione viene salvato in un analytical data store (un data warehouse) per eseguire poi analisi sullo storico.
6. Anche il risultato dell'elaborazione stream può essere salvato nel data warehouse per integrare le informazioni storiche
7. Strumenti di analytics e di visualizzazione sono usati per mostrare e esplorare i dati in real-time e storici

## Architettura per l'elaborazione stream

Ad alto livello un'architettura per l'elaborazione stream si presenta in questo modo

![image.png](/media/image-21.png)

Inizialmente una sorgente genera dei dati che possono essere dei segnali emessi da dei sensori, un post su un social media, o un file di log che viene scritto. Il dato generato viene poi catturato in una sorgente stream per l'elaborazione, nei casi più semplici può essere una cartella nel cloud o una tabella in un database. Nei casi più complicati la sorgente può essere una coda che permette di elaborare gli eventi in ordine e solo una volta.

I dati legati all'evento vengono processati, spesso si usa una **perpetual query** - un tipo di query che elabora continuamente i dati provenienti da eventi in real-time non appena vengono generati. In questo caso, la **perpetual query**, opera sugli eventi selezionando i dati da certi tipi di eventi e aggregando i dati nell'arco di periodi temporali. Il risultato finale viene scritto in un output, detto anche **sink**, che può essere file, una tabella di un database, un dashboard real-time o un'altra queue per un ulteriore elaborazione.