---
title: Azure Blob Storage
description: "#2 - Azure Blob Storage"
pubDate: 2026-11-06
heroImage: /media/azure-blob-1.png
tags:
  - Azure
draft: false
quiz:
- question: Che tipo di dati è pensato per memorizzare Azure Blob Storage?
  options:
  - Dati relazionali con chiavi esterne
  - Grandi quantità di dati non strutturati, come file binari
  - Solo messaggi tra applicazioni
  - Solo dati key/value di piccole dimensioni
  answer: 2
  explanation: Blob Storage è fatto per grandi quantità di dati non strutturati, salvati come BLOB.
- question: A cosa serve un container?
  options:
  - A eseguire codice vicino ai dati
  - A raggruppare logicamente i blob e controllare chi può leggerli e scriverli
  - A comprimere i blob
  - A replicare i blob in un'altra regione
  answer: 2
  explanation: Il container è un raggruppamento logico dei blob e il punto in cui si gestiscono gli accessi.
- question: Quale tipo di BLOB permette solo di aggiungere dati in coda, senza modificarli o cancellarli?
  options:
  - Block BLOB
  - Page BLOB
  - Append BLOB
  - Archive BLOB
  answer: 3
  explanation: 'L''Append BLOB è ottimizzato per le operazioni di append: si aggiunge solo in coda.'
- question: Quale tipo di BLOB è ottimizzato per letture e scritture casuali su pagine da 512 byte?
  options:
  - Block BLOB
  - Page BLOB
  - Append BLOB
  - Cool BLOB
  answer: 2
  explanation: Il Page BLOB è una collezione di pagine da 512 byte, leggibili e scrivibili singolarmente.
- question: Devi conservare per legge dei backup a cui non accederai quasi mai. Quale livello di accesso scegli?
  options:
  - Hot
  - Cool
  - Cold
  - Archive
  answer: 4
  explanation: Archive ha il costo di storage più basso, ma lettura e cancellazione sono costose e lente.
- question: Cosa succede se cancelli un blob nel livello Cool prima di 30 giorni?
  options:
  - Niente, la cancellazione è sempre gratuita
  - Paghi un costo di cancellazione anticipata
  - Il blob passa automaticamente ad Archive
  - La cancellazione viene rifiutata
  answer: 2
  explanation: Nel livello Cool la cancellazione prima di 30 giorni comporta un costo; nel Cold il limite è di 90 giorni.
---
# Azure Blob Storage

E' un servizio di Azure che permette di memorizzare al suo interno una grande quantità di dati non strutturati come file binary molto grandi o come BLOB. 

![image.png](/media/image-8.png)

I blobs sono un modo molto efficiente per memorizzare files in cloud e permettere a più applicazioni di leggerli e scriverli usando le API che il servizio mette a disposizione. 

I blobs vengono salvati nei containers. Un container permette di definire una sorta di raggruppamento logico dei blob, oltre a questo permette anche di controllare chi può scrivere e leggere i BLOB all'interno del container. L'autenticazione può essere eseguita tramite Microsoft Entra ID oppure usando un'api key.

Nei container i BLOB possono essere organizzati a loro volta in cartelle virtuali sulle quali però non si possono eseguire operazioni, sono solo delle cartelle virtuali che definiscono un percorso di accesso al file.

Azure Blob Storage supporta 3 diversi tipi di BLOB:

- Block BLOB - Un BLOB viene gestito come un set di blocchi. Ogni blocco può variare in dimensione ed è l'unità più piccola che può essere scritta / letta. Si usa per file che variano poco nel tempo
- Page BLOB - Un BLOB è organizzato con una collezione di pagine di dimensione massima di 512 byte. Questi tipi di BLOB sono ottimizzati per operazioni di lettura e scrittura casuale. Si possono leggere e scrivere le singole pagine.
- Append BLOB - Un BLOB è gestito con un block BLOB ottimizzato per operazioni di append. Si possono solo aggiungere BLOB in coda e la modifica / cancellazione non è consentita.

![image.png](/media/image-9.png)

Ogni blob storage prevede 4 tipi di accesso che permettono di regolare la latenza e i costi:

- Hot - da usare per blobs a cui si accede frequentemente
- Cool - da usare per blobs a cui si accede poco di frequente. I costi di storage sono minori rispetto al hot ma costa di più la lettura. Si deve tener conto che cancellando prima di 30 giorni un blob con questa tipologia di accesso si incorre in costi per la cancellazione. 
- Cold - da usare per blob a cui si accede quasi mai (esempio log degli ultimi 30 giorni) ma che comunque richiedono una risposta rapida per la lettura nel caso di necessità. Qui i costi della cancellazione di elidono dopo 90 giorni
- Archive - da usare per blobs a cui praticamente non si accede mai ma che devono essere mantenuti per legge (esempio backup o altro). I costi di storage sono minimi ma i costi per la lettura / cancellazione sono molto alti, così come la latency.

![image.png](/media/image-10.png)

