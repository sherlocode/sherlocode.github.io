---
title: Azure Files
description: "#3 - Azure Files"
pubDate: 2026-11-09
heroImage: /media/azure-storage-accounts.png
tags:
  - Azure
draft: false
quiz:
- question: Che cos'è Azure Files?
  options:
  - Un database documentale
  - Uno share di rete basato sul cloud per condividere file tra utenti
  - Un servizio di backup per macchine virtuali
  - Un editor di documenti online
  answer: 2
  explanation: 'Azure Files è uno share di rete nel cloud: sostituisce i file server aziendali senza costi di hardware.'
- question: Quale problema dei file server locali risolve Azure Files?
  options:
  - Non supportano i file di testo
  - Scalano male quando crescono gli utenti o serve l'accesso da fuori rete
  - Non permettono di creare cartelle
  - Non hanno permessi
  answer: 2
  explanation: I file server locali scalano male con più utenti e con l'accesso esterno; Azure Files offre alta disponibilità e scalabilità.
- question: Quale strumento serve a sincronizzare file locali con Azure Files?
  options:
  - AzCopy
  - Azure File Sync
  - Azure Data Factory
  - Microsoft Purview
  answer: 2
  explanation: Azure File Sync tiene sincronizzati i file locali con lo share su Azure.
- question: Che differenza c'è tra i tier HDD e SSD?
  options:
  - HDD è più veloce e più costoso
  - SSD ha throughput maggiore ma costa di più
  - Sono identici, cambia solo il nome
  - SSD è disponibile solo per i file di log
  answer: 2
  explanation: SSD offre prestazioni migliori a un costo più alto; HDD è meno performante ma più economico.
- question: Quali protocolli supporta Azure Files?
  options:
  - FTP e SFTP
  - HTTP e AMQP
  - SMB e NFS
  - SQL e ODBC
  answer: 3
  explanation: Azure Files si usa tramite SMB e NFS, i protocolli classici delle cartelle di rete.
---
# Azure Files

Normalmente in un azienda vengono configurati e predisposte delle aree di rete usando dei server locali accessibile dalla rete aziendale che permette di condividere files fra diversi utenti. Sebbene questa soluzione sia molto utile non scala bene quando si incrementano gli utenti o si devono abilitare all'accesso utenti esterni o dispositivi non in rete locale.

Proprio per questo è stato introdotto Azure Files. Possiamo vederlo come uno share di rete basato sul cloud che permette di rendere disponibili documenti e file a diversi utenti. Usandolo un azienda può eliminare i costi del hardware e del suo mantenimento e beneficiare del alta disponibilità e scalabilità che il servizio offre.

![image.png](/media/image-13.png)

Un Azure File storage può essere creato dallo storage account, permettendoti di avere uno spazio disponibile di 256 TB per la SSD-based e di 5 PB per la HDD-based.

Per gestire questo storage si possono usare diverse modalità come:

- Azure Portal
- AzCopy
- Azure File Sync per sincronizzare file locali con Azure.

![image.png](/media/image-14.png)

Come visto prima abbiamo due tipologie di tier. La prima è HDD che usa hard disk dei datacenter Azure per memorizzare i dati, è meno performante ma più economica. Invece SSD-based usa Solid State Disk per la memorizzione con un throughput maggiore ma ne consegue anche un costo maggiore.

Infine Azure Files permette l'utilizzo di due protocolli:

- Service Message Block (SMB)
- Network File System (NFS)

