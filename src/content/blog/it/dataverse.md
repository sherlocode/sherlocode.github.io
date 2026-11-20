---
title: Dataverse
description: "#4 - Dataverse"
pubDate: 2026-11-20
heroImage: /media/microsoft-dataverse-1.svg
tags:
  - Power Platform
draft: true
---
# Dataverse

Microsoft Dataverse è una data platform cloud-based che funge da collante fra tutti i prodotti presenti nella Power Platform. Infatti tutti questi condividono i lori dati con un unica sorgente Dataverse. 

L'idea che sta alla base di Dataverse è fornire un unica sorgente gestita, sicura ed affidabile a tutte le apps, siti web, workflows reports e agenti dell'organizzazione. Senza di essa i vari reparti svilupperebbero soluzioni indipendenti con i propri dati (i cosiddetti silos) con conseguenti difficoltà nel sapere quali dati attualmente sono presenti nell'intera organizzazione, chi li gestisce, chi deve poterci accedere ma soprattutto chi a accede a cosa.

Dataverse organizza le informazioni in tabelle che sono fatte da righe e colonne. Ogni colonna è configurata per memorizzare un certo tipo di dato (data, numero, testo, lookup verso altre tabelle e altro ancora). Quandi si accede a Dataverse per la prima volta, sono già incluse al suo interno un set di tabella standard comuni a diversi scenari di business (tabelle come contacts, activities, accounts) e comuni anche a diverse applicazioni business di Microsoft (come Business Central o CRM). Si possono in ogni caso creare tabelle personalizzate fatte ad-hoc in base alle proprie esigenze.

In generale Dataverse mette a disposizione le seguenti funzionalià:

- **Security and compliance** - RBAC permette di configurare autorizzazioni su quali dati può vedere un utente e, tramite la gestione di sicurezza sul singolo campo, si possono specificare anche autorizzazioni più fini su quali colonne della tabella può visualizzare un utente. Ogni modifica viene poi tracciata tramite l'audit log.
- **Scalability** - Dataverse è progettato per poter gestire diversi dimensionamenti dal più piccolo al più grande
- **Integration** - Si possono collegare nativamente diversi servizi e applicazioni (Microsoft 365, Azure, Dynamics 365 e anche servizi di terze parti). I dati vengono sincronizzati, trasformati e condivisi fra i sistemi con uno sforzo minimo
- **Business logic** - Si possono definire logiche di validazione del dato direttamente in Dataverse permettendo di applicarle sempre senza distinzioni da chi o quale applicativo sta scrivendo il dato.



&nbsp;