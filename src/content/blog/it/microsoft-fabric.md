---
title: Microsoft Fabric
description: "# - Microsoft Fabric"
pubDate: 2026-11-11
heroImage: /media/microsoftfabric2023.svg
draft: true
---
# Microsoft Fabric

Fabric utilizza OneLake, che permette di avere un data lake condiviso per tutti i dati dell'organizzazione. Questo permette di eliminare la lettura di dati in silos verticali su una certa area o prodotto e di scrivere / leggere in un unico storage.  

Al suo interno poi troviamo le seguenti componenti:

- **Fabric Lakehouse**
- **Fabric Warehouse**
- **Fabric Data Factory**
- **Power BI**

## Fabric Data Factory

E' la base di partenda per la gestione e creazione di pipeline per l'ingestion dei dati. Queste si possono creare principalmente con due strumenti:

- Pipelines
- Dataflows Gen2 - uno strumento low-code che permette di creare e aggiornare tramite uno strumento visuale le logiche di trasformazione dei dati. Si basa su Power Query.

### OneLake Shortcuts

sono essenzialmente delle shortcut che permettono di referenziare ad uno storage esterno (come Azure SQL Database, Azure Cosmos DB ma anche altri fuori dall'ecosistema Azure) all'interno di OneLake. Questi dati però non vengono copiati o spostati in OneLake. Si utilizza principalmente quando il dato non può essere spostato dalla propria regione per motivi legislativi o di costo. 

### Mirroring

In questo caso invece i dati vengono replicati direttamente in OneLake in real-time. Questo strumento gestisce in automatico la replica dei dati, gestendo l'aggiornamento e creazione dei dati in automatico senza la necessità di costruire una pipeline. I dati arrivano in OneLake in un formato già pronto per essere interrogato tramite strumenti di analytics.

### Eventstream

Strumento per eseguire l'ingestion di sorgenti real-time che si può collegare a event sources come Azure Event Hub, Apache Kafka o endpoint custom. Quando si collega esegue un filtraggio e una trasformazione dei dati prima di memorizzarli dentro Fabric Lakehouse.  

