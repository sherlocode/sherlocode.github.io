---
title: Azure Blob Storage
description: "#2 - Azure Blob Storage"
pubDate: 2026-11-06
heroImage: /media/azure-blob-1.png
draft: false
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

