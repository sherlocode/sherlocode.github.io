---
title: Azure Databriks
description: "#2 - Azure Databricks"
pubDate: 2026-11-11
heroImage: /media/databricks-c40eaf44-1.png
draft: false
---
# Azure Databricks

E’ una piattaforma cloud di analytics costruita su Apache Spark, ottimizzata per grandi quantità di dati, data science e SQL analytics. Inoltre si basa su formati open-source lakehouse come per esempio Delta Lake.

Databriks fa parte dei managed services su Azure.

- Databricks Lakehouse - un unico storage costruito su Delta Lake che supporta sia l’analisi dei dati tramite SQL che machine learning
- Databricks SQL
- Databricks Notebooks
- Unity Catalog - un layer unico di governance per dati e asset AI all’interno del workspace di Databricks che permette di governare un accesso al dato granulare, la sua provenienza e navigazione
- Genie - un interfaccia AI a linguaggio naturale che permette all’utente di fare domande sui dati a cui ha accesso, questo assistente genera ed esegue query SQL restituendo il loro risultato.

Per la parte di ingestion dei dati invece, Databricks, mette a dispozione **Lakeflow pipelines.** Questo è un framework per costruire pipeline affidabile e aggiornabili basate su Delta Lake. Si deve prima definire quale contenuto devono contenere le tabelle di destinazione e Databricks gestisce l'ordinamento dell'esecuzione, la gestione delle dipendenze e l'elaborazione incrementale automatica. 

Infine con Databricks Notebooks si possono scrivere procedure di ingestion ad-hoc in pro code usando linguaggi come PySpark, Python, Scala, SQL e R. Queste procedure possono leggere i dati dal REST APIs, sorgenti JDCB, storage sul cloud o sorgenti streaming e scrivono direttamente su tabella nel Delta Lake. 

