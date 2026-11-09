---
title: Azure Tables
description: "#4 - Azure Tables"
pubDate: 2026-11-09
heroImage: /media/tablestorage.png
tags:
  - Azure
draft: false
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

