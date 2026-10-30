---
title: Azure Service Bus
description: "#1 - Azure Service Bus"
pubDate: 2026-10-30
heroImage: /media/1unzt-zzdvs2vpmhv-th0sw.png
tags:
  - Azure
draft: false
---
# Azure Service Bus

![](/media/1712470547743.png)

Azure Service Bus è un microservizio di Azure che permette di implementare una comunicazione asincrona fra diversi sistemi / servizi in modo sicuro e affidabile. 

Questa comunicazione avviene tramite messaggi che vengono inviati a Azure Service Bus e inseriti in una coda di messaggi. I messaggi sono delle informazioni strutturate nel formato JSON (i vari limiti di dimensione, durevolezza e altro sono riportati sotto) che vengono consegnati ad un servizio o anche più di uno; infatti Azure Service Bus ci permette di definire due modalità di comunicazione:

- Queue - E' un canale punto a punto, ossia che collega due e solo due servizi, uno ad un estremità e l'altro dall'altra.
- Subs / Topic - Il canale è condiviso fra più servizi che sottoscrivo ad un certo Topic.

Azure Service Bus può essere utilizzato in architetture nelle quali abbiamo un flusso che coinvolge diversi servizi che possono impiegare tempi diversi di esecuzione e possono essere o non essere disponibili in certi istanti.

Prendiamo come esempio un applicazione web che permette di pubblicare un video su diverse piattaforme social (Facebook, YouTube, Instagram). L'utente si collega alla piattaforma, carica il video, scegli su quali piattaforme social pubblicarle e avvia la procedura. Senza Azure Service Bus, la procedura dovrebbe chiamare una per una le piattaforme, impiegando diverso tempo per le chiamate e con il rischio di riscontrare errori a causa di una temporanea indisponibilità dei servizi di una di queste. Tutto questo poi traduce con un'attesa prolungata dell'utente, che attende il completamente dell'operazione prima di poterne effettuare un altra.

![image.png](/media/image.png)

Introducendo nell'equazione Azure Service Bus invece, l'applicazione, una volta avviata la procedura, invierebbe un messaggio nella coda e i vari subscriber, ricevuto il messaggio, lo leggerebbero e lo elaborerebbero pubblicando il video sulle rispettive piattaforme. Tutto questo avverrebbe in modo asincrono e trasparente per l'utente, questo perché disaccoppiamo questo lavoro dalla nostra applicazione e lo demandiamo a dei microservizi, collegati a Azure Service Bus, che si occupano di fare le chiamate che prima facevano attendere l'utente. Questo però non è l'unico vantaggio perché, nel caso in un errore il messaggio non viene perso ma verrà riprocessato o segnalato in base alle nostre esigenze e configurazioni.

![image.png](/media/image-1.png)

Già da questo semplice esempio vediamo che Azure Service Bus è un servizio essenziale quando siamo di fronte ad un flusso applicativo con grandi carichi di lavoro e concentrati oppure con picchi temporali (si basti pensare ai portali di prenotazione di biglietti online, dove quando vengono messi in vendita i biglietti deve poter gestire in modo affidabile dei carichi molto alti in un periodo temporale molto ristretto). 



&nbsp;

 

