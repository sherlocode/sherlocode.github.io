---
title: Azure Databricks
description: '#2 - Azure Databricks'
pubDate: 2026-11-11
heroImage: /media/databricks-c40eaf44-1.png
draft: false
quiz:
- question: Che cos'è Azure Databricks?
  options:
  - Un database relazionale gestito
  - Una piattaforma cloud di analytics costruita su Apache Spark
  - Un servizio per ospitare siti web
  - Un message broker per applicazioni
  answer: 2
  explanation: Databricks è una piattaforma di analytics basata su Apache Spark, ottimizzata per grandi quantità di dati, data science e SQL analytics.
- question: Su quale formato open-source si basa il Databricks Lakehouse?
  options:
  - CSV
  - Delta Lake
  - Avro
  - XML
  answer: 2
  explanation: Il Databricks Lakehouse è un unico storage costruito su Delta Lake, che supporta sia l'analisi SQL sia il machine learning.
- question: A cosa serve Unity Catalog?
  options:
  - A scrivere notebook in Python
  - 'A governare dati e asset AI: accessi granulari, provenienza e navigazione'
  - A fare domande sui dati in linguaggio naturale
  - A orchestrare le pipeline di ingestion
  answer: 2
  explanation: Unity Catalog è il layer unico di governance per dati e asset AI nel workspace di Databricks.
- question: Cosa fa Genie?
  options:
  - Genera ed esegue query SQL a partire da domande in linguaggio naturale
  - Crea in automatico le tabelle Delta
  - Gestisce i permessi sugli storage account
  - Addestra modelli di machine learning
  answer: 1
  explanation: 'Genie è un''interfaccia AI in linguaggio naturale: l''utente fa domande sui dati a cui ha accesso e Genie genera ed esegue le query SQL.'
- question: Con Lakeflow pipelines, cosa devi definire tu e cosa gestisce Databricks?
  options:
  - Tu scrivi l'ordine di esecuzione, Databricks definisce le tabelle
  - Tu definisci il contenuto delle tabelle di destinazione, Databricks gestisce ordine di esecuzione, dipendenze ed elaborazione incrementale
  - Tu gestisci le dipendenze, Databricks scrive il codice
  - Databricks gestisce tutto, senza definire nulla
  answer: 2
  explanation: 'Lakeflow pipelines è dichiarativo: definisci cosa devono contenere le tabelle, e Databricks pensa a ordine, dipendenze e aggiornamenti incrementali.'
- question: Quale di questi linguaggi NON è citato tra quelli usabili nei Databricks Notebooks?
  options:
  - PySpark
  - Scala
  - R
  - C#
  answer: 4
  explanation: Nei notebook si possono usare PySpark, Python, Scala, SQL e R.
---
# Azure Databricks

È una piattaforma cloud di analytics costruita su Apache Spark, ottimizzata per grandi quantità di dati, data science e SQL analytics. Inoltre si basa su formati open-source lakehouse come per esempio Delta Lake.

Databricks fa parte dei managed services su Azure.

- Databricks Lakehouse - un unico storage costruito su Delta Lake che supporta sia l’analisi dei dati tramite SQL che machine learning
- Databricks SQL
- Databricks Notebooks
- Unity Catalog - un layer unico di governance per dati e asset AI all’interno del workspace di Databricks che permette di governare un accesso al dato granulare, la sua provenienza e navigazione
- Genie - un’interfaccia AI a linguaggio naturale che permette all’utente di fare domande sui dati a cui ha accesso, questo assistente genera ed esegue query SQL restituendo il loro risultato.

Per la parte di ingestion dei dati invece, Databricks, mette a disposizione **Lakeflow pipelines.** Questo è un framework per costruire pipeline affidabili e aggiornabili basate su Delta Lake. Si deve prima definire quale contenuto devono contenere le tabelle di destinazione e Databricks gestisce l'ordinamento dell'esecuzione, la gestione delle dipendenze e l'elaborazione incrementale automatica. 

Infine con Databricks Notebooks si possono scrivere procedure di ingestion ad-hoc in pro code usando linguaggi come PySpark, Python, Scala, SQL e R. Queste procedure possono leggere i dati da REST API, sorgenti JDBC, storage sul cloud o sorgenti streaming e scrivono direttamente su tabella nel Delta Lake. 

