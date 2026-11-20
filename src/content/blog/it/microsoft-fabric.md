---
title: Microsoft Fabric
description: "#4 - Microsoft Fabric"
pubDate: 2026-11-11
heroImage: /media/microsoftfabric2023.svg
draft: false
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

### Microsoft Fabric Real-Time Intelligence

E' un set di strumenti presente in Fabric che permette di acquisire, processare ed analizzare i dati arrivati in streaming. Ogni strumento al suo interno permette di costruire l'intera pipeline per l'elaborazione dei dati, si parte dall'acquisizione dei dati fino ad arrivare alla loro visualizzazione e automazioni di determinate azioni basate sui dati acquisiti. 

Nella pratica andiamo a collegarci a una sorgente dati, memorizziamo e interroghiamo i dati, costruiamo delle dashboard real-time e impostazione notifiche o avvisi quando certe condizioni vengono soddisfatte (esempio: Se il dato di un sensore ha un certo valore posso mandare un email)

![image.png](/media/image-22.png)

### Apache Spark

Apache Spark è un motore di elaborazione dei dati che permette di gestire grandi dataset di dati in modo rapido. Fino a qui nulla di nuovo. Un elemento che però lo distingue è il fatto che l'elaborazione non viene effettuata solo una singola macchina, ma su diverse (definito cluster) che permettono di eseguire elaborazioni in parallelo aumentando le performance. Questo motore permette di scrivere codice in diversi linguaggi (R, Python, Scala, Java, R e SQL) e può gestire sia l'elaborazione batch che stream, 

Spark può essere utilizzato sia in Microsoft Fabric che in Azure Databriks.

All'interno di Spark troviamo **Spark Structured Streaming.** Questa è una libreria che facilita l'uso di dati in streaming. Per capire come funzione possiamo accomunare la gestione dei dati in streaming a come gestione le tabelle in un foglio di lavoro di Excel, dove però i dati crescono in real-time.

In dettaglio:

1. Ci colleghiamo ad una sorgente streaming - per esempio, una coda di messaggi come Azure Event Hubs
2. Spark legge i dati in arrivo e li memorizza in un dataframe - Una tabella con righe e colonne in cui vengono salvati i dati non appena arrivano
3. Scriviamo delle query per interrogare questi dati
4. L'output della query viene scritto in un output (detto sink) che può essere un file, un database o una dashboard.

![image.png](/media/image-23.png)



&nbsp;