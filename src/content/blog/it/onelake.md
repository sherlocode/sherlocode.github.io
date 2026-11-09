---
title: OneLake
description: "#1 - OneLake"
pubDate: 2026-11-09
heroImage: /media/onelake512color.png
tags:
  - Fabric
draft: false
quiz:
- question: Che cos'è OneLake?
  options:
  - Un data lake unico per tutti i dati dell'organizzazione
  - Un data warehouse relazionale
  - Un servizio di messaggistica
  - Uno strumento di reportistica
  answer: 1
  explanation: OneLake è il data lake unico e centralizzato per i dati analytics dell'organizzazione.
- question: Come viene creato OneLake?
  options:
  - Va creato a mano da un amministratore
  - Viene deployato automaticamente con ogni tenant di Microsoft Fabric
  - Si installa da Azure Marketplace
  - Si crea abilitando un'opzione nello storage account
  answer: 2
  explanation: Ogni tenant di Microsoft Fabric ha automaticamente il suo OneLake.
- question: Quali formati di file accetta OneLake?
  options:
  - Solo Parquet
  - Solo dati strutturati
  - Strutturati, semi strutturati e non strutturati
  - Solo CSV e JSON
  answer: 3
  explanation: OneLake accetta qualsiasi formato di file.
- question: Su quale tecnologia è costruito OneLake?
  options:
  - Azure SQL Database
  - Azure Data Lake Storage Gen2
  - Azure Files
  - Azure Cosmos DB
  answer: 2
  explanation: 'OneLake si basa su ADLS Gen2, compatibile con la maggior parte dei sistemi di analytics: niente lock-in.'
- question: Quale vantaggio offre usare gli stessi dati con motori di analytics diversi?
  options:
  - Non serve spostare o duplicare i dati
  - I dati vengono cifrati due volte
  - Si possono usare solo motori Microsoft
  - I dati diventano relazionali
  answer: 1
  explanation: Motori diversi lavorano sugli stessi dati senza copie né spostamenti.
---
# OneLake

E' un datalake unico per i dati della propria organizzazione. Viene deployato automaticamente con ogni tenant di Microsoft Fabric e serve da repository centralizzato per tutti i dati analytics dell'organizzazione. 

![image.png](/media/image-12.png)

Come abbiamo visto [Terminologia per Fabric](/it/blog/terminologia-per-fabric/) OneLake accetta tutti i formati di file, siano essi strutturati, semi strutturati o non strutturati. Inoltre permette di usare gli stessi dati con diversi motori di analytics senza richiedere di spostare o duplicare i dati.

I principali benefiici di OneLake sono i seguenti:

- Avere un unico data lake condiviso per tutti i dati aziendali
- Facilità di collaborazione e proprietà condivisa del dato, si possono creare workspace e abilitare diverse persone per gestire i propri dati o condividerne di altri 
- Evita il lock-in dei dati perché costruito con con Azure Data Lake Storage Gen2 che è compatibile con la maggior parte dei sistemi di analytics
- Facile da navigare

