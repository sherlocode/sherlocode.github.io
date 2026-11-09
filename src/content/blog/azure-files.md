---
title: Azure Files
description: "#3 - Azure Files"
pubDate: 2026-11-09
heroImage: /media/azure-storage-accounts.png
tags:
  - Azure
draft: false
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

