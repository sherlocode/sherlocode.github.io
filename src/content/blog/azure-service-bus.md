---
title: Azure Service Bus
description: "#1 - Azure Service Bus"
pubDate: 2026-10-30
heroImage: /media/azure-service-bus-endpointlogo.jpg
tags:
  - Azure
draft: false
---
# Azure Service Bus

![](/media/miniatura-16-91x-1.png)

Azure Service Bus è un message broker completamente gestito che permette di implementare una comunicazione asincrona fra diverse applicazioni / servizi in modo sicuro e affidabile. So che non è molto chiara come definizione ma adesso entro nel dettaglio.

Questa comunicazione avviene tramite messaggi in un formato leggibile (JSON, XML, o semplicemente testo) che vengono inviati a Azure Service Bus, prima di essere salvati all'interno del Service Bus vengono convertiti in bytes. 

Questi messaggi possono essere consegnati ad un solo servizio o anche più di uno; infatti Azure Service Bus ci permette di definire due modalità di comunicazione:

- Queue - E' un canale punto a punto, ossia un canale di comunicazione che collega due e solo due servizi, uno ad un estremità e l'altro dall'altra.
- Pub/Sub - Il canale è condiviso fra più servizi che sottoscrivo (Sub) ad un certo Topic (vedi esempio dopo che chiarisce cos'è). Per intenderci, un esempio che spiega molto bene questo meccanismo è l'iscrizione ad un canale di Youtube. Quando ci interessa un certo canale noi ci iscriviamo ad esso, e quando un nuovo video viene pubblicato riceviamo una notifica. Questo è la stessa cosa che succede con il modello Pub/Sub, il canale è il Topic, l'iscrizione è la Sub e il creator che crea un video è il Publisher che manda a tutti i suoi iscritti il messaggio che ha pubblicato un nuovo contenuto.

Azure Service Bus può essere utilizzato in architetture nelle quali abbiamo un flusso che coinvolge diversi servizi che possono impiegare tempi diversi di esecuzione e possono essere o non essere disponibili in certi istanti.

Prendiamo come esempio un applicazione web che permette di pubblicare un video su diverse piattaforme social (Facebook, YouTube, Instagram). L'utente si collega alla piattaforma, carica il video, scegli su quali piattaforme social pubblicarle e avvia la procedura. Senza Azure Service Bus, la procedura dovrebbe chiamare una per una le piattaforme, impiegando diverso tempo per le chiamate e con il rischio di riscontrare errori a causa di una temporanea indisponibilità dei servizi di una di queste. Tutto questo poi traduce con un'attesa prolungata dell'utente, che attende il completamente dell'operazione prima di poterne effettuare un altra.

![image.png](/media/image.png)

Introducendo nell'equazione Azure Service Bus invece, l'applicazione, una volta avviata la procedura, invierebbe un messaggio nella coda e i vari subscriber, ricevuto il messaggio, lo leggerebbero e lo elaborerebbero pubblicando il video sulle rispettive piattaforme. Tutto questo avverrebbe in modo asincrono e trasparente per l'utente, questo perché disaccoppiamo questo lavoro dalla nostra applicazione e lo demandiamo a dei microservizi, collegati a Azure Service Bus, che si occupano di fare le chiamate che prima facevano attendere l'utente. Questo però non è l'unico vantaggio perché, nel caso in un errore il messaggio non viene perso ma verrà riprocessato o segnalato in base alle nostre esigenze e configurazioni.

![image.png](/media/image-1.png)

Già da questo semplice esempio vediamo che Azure Service Bus è un servizio essenziale quando siamo di fronte ad un flusso applicativo con grandi carichi di lavoro e concentrati oppure con picchi temporali (si basti pensare ai portali di prenotazione di biglietti online, dove quando vengono messi in vendita i biglietti deve poter gestire in modo affidabile dei carichi molto alti in un periodo temporale molto ristretto). 



## Funzionalità

Azure Service Bus ha diverse funzionalità che conviene citare e che possono essere molto utili:

### Dead Lettering

Questa funzionalità non si deve confondere con il retry dei messaggi in caso di errore. Infatti nel caso un cui un messaggio non riesca ad essere processato dopo un certo periodo di tempo o un certo numero di tentativi, questo viene spostato in una coda secondaria. Questa coda secondaria contiene tutti questi messaggi e permette di analizzare il problema che l'ha bloccato per identificare eventuali bug o il problema nel contenuto, senza andare a bloccare il normale funzionamento del sistema.

Un esempio potrebbe essere un video corrotto che viene caricato dall'utente e non viene accettato dal sistema. Dopo un certo numero di tentativi viene spostato nella coda secondaria per un analisi del problema da parte di un operatore.

### Filtri dei Subs

Si possono impostare dei filtri per fare in modo che alcuni subscriber non ricevano alcuni messaggi presenti nella coda. Se vediamo il caso trattato prima se l'utente non vuole pubblicare il video su YouTube allora è inutile che il subcriber riceva il messaggio ed è quindi che entrano in gioco i filtri

### Message Sessions

Permettono di definire che un certo gruppo di messaggi debba essere processato nella stessa sessione. Come esempio possiamo prendere una banca in cui un cliente che ha un saldo di 0 euro. In un tempo molto breve versa 100 euro e ne preleva 80. Se il messaggio di prelievo viene processato prima di quello di versamento (perché il servizio di prelievo è più veloce a processare il dato e fa meno controlli) il risultato finale sarebbe che il messaggio del prelievo andrebbe in errore dato che quello di versamento  non è ancora stato processato

### Message Scheduling

Questa funzionalità permette di impostare una data / ora dalla quale il messaggio può essere processato, prima di questo momento il messaggio è come se non esistesse per i vari interlocutori in ascolto sul Service Bus. 

Anche qui come esempio possiamo pensare a un bonifico ricorrente che andiamo a fare ogni mese, quel bonifico fino alla data che ho impostato non verrà eseguito.

### Duplicate Message Detection

Azure Service Bus riesce ad identificare automaticamente se un messaggio è duplicato e, nel caso lo fosse, lo elimina senza farlo arrivare ai subcribers. 

### TTL (Time To Live)

Per ogni messaggio viene specificata un massima durata di vita, superata il messaggio viene cancellato e non verrà mai ricevuto dai subcribers. 

## Protocolli

I protocolli per comunicare con l'Azure Service Bus sono:

- HTTP
- AMQP - **A**dvanced **M**essage **Q**ueuing **P**rotocol

## Pricing

3 livelli di sottoscrizione: Basic, Standard e Premium


| **Feature** | **Basic** | **Standard** | **Premium** |
| ---------------------------------------- | --------- | ------------ | ----------- |
| Queues | ✅ | ✅ | ✅ |
| Scheduled messages | ✅ | ✅ | ✅ |
| Topics | ❌ | ✅ | ✅ |
| Transactions | ❌ | ✅ | ✅ |
| De-duplication | ❌ | ✅ | ✅ |
| Sessions | ❌ | ✅ | ✅ |
| ForwardTo/SendVia | ❌ | ✅ | ✅ |
| Message Size | 256 KB | 256 KB | 100 MB |
| Resource isolation | ❌ | ❌ | ✅ |
| Geo-Replication | ❌ | ❌ | ✅ |
| Java Messaging Service (JMS) 2.0 Support | ❌ | ❌ | ✅ |
| Availability Zones (AZ) support | ✅ | ✅ | ✅ |


