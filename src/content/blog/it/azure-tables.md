---
title: Azure Tables
description: "#4 - Azure Tables"
pubDate: 2026-11-09
heroImage: /media/tablestorage.png
tags:
  - Azure
draft: false
quiz:
- question: Che tipo di storage è Azure Table Storage?
  options:
  - Un database relazionale
  - Uno storage NoSQL key/value
  - Un file share di rete
  - Un message broker
  answer: 2
  explanation: Azure Tables è uno storage NoSQL che salva i dati in formato key/value.
- question: Da cosa è composta la chiave univoca di ogni riga?
  options:
  - Solo da un ID numerico
  - Partition key + row key
  - Nome della tabella + timestamp
  - Chiave esterna + chiave primaria
  answer: 2
  explanation: La partition key indica la partizione, la row key identifica la riga dentro quella partizione.
- question: Quale di queste affermazioni è vera?
  options:
  - Ogni riga deve avere le stesse colonne
  - Supporta stored procedures e viste
  - Righe diverse possono avere un numero diverso di colonne
  - Supporta chiavi esterne tra tabelle
  answer: 3
  explanation: Le righe possono avere colonne diverse; non esistono chiavi esterne, relazioni, stored procedures o viste.
- question: A cosa serve la partition key, oltre a organizzare i dati?
  options:
  - A cifrare le righe
  - A migliorare le performance e ridurre i tempi di lettura
  - A collegare tabelle diverse
  - A definire il tipo delle colonne
  answer: 2
  explanation: 'Le righe con la stessa partition key sono salvate insieme: le operazioni sui dati sono più veloci.'
- question: Quando Azure Tables NON è lo strumento adatto?
  options:
  - Per i log applicativi
  - Per profili e preferenze utente
  - Quando ogni riga ha moltissime informazioni (oltre 252 proprietà o circa 1 MB)
  - Per tabelle di lookup e configurazioni
  answer: 3
  explanation: 'Ogni riga ha al massimo 252 proprietà e circa 1 MB: è ideale per tante righe con poche colonne.'
---
# Azure Tables

Azure Table Storage è uno storage NoSQL che permette di memorizzare al suo interno dati nel formato key/value. Ogni elemento al suo interno è memorizzato in una riga che contiene un numero variabile di colonne che devono essere salvate.

![image.png](/media/image-15.png)

 Non si deve confondere con un classico DB relazionale perché hanno differenze sostanziali:

- Si possono salvare un numero variabili di colonne come detto prima, per esempio una riga può avere 3 colonne per gli indirizzi mentre un altra riga ne ha solo due
- Non esistono concetti di chiavi esterne, relazioni, stored procedures, viste e altri oggetti comuni nei database relazionali

Ogni riga deve avere una chiave univoca che è composta da una partition key (identifica la partizione in cui si trova la riga) e una row key (chiave univoca all'interno della partizione). La partition non è altro che un meccanismo che permette di raggruppare le righe in base alla loro parition key. Le righe che hanno la stessa partition key sono salvate insieme. Questo non serve solo per organizzare i dati ma migliora le performance nelle operazioni che si compiono sui dati. Le partition vengono gestite in autonomia e possono crescere e ridurre quando vengono aggiunte / cancellate delle righe. Inoltre usando la partition key, si riduce il tempo di lettura.

Quando usare Azure Tables?

- Grandi volumi a basso costo - Qui si intende che Azure Tables è molto utile quando per singola riga ho poche informazioni (colonne) ma nello storage ho tante righe. Se invece per riga o tante informazioni non è lo strumento adatto perché permette di avere massimo 252 proprietà e una dimensione per riga fino a circa 1MB
- Dati semistrutturati o variabili
- Casi d’uso tipici:
  - profili e preferenze utente
  - log applicativi
  - tabelle di lookup e configurazioni

