---
title: Microsoft Fabric
description: "#4 - Microsoft Fabric"
pubDate: 2026-11-20
heroImage: /media/microsoftfabric2023.svg
tags:
  - Fabric
draft: false
quiz:
  - question: Which Fabric Data Factory tool is low-code and based on Power Query?
    options:
      - Pipelines
      - Dataflows Gen2
      - Eventstream
      - Mirroring
    answer: 2
    explanation: Dataflows Gen2 is a low-code tool for building data transformation
      logic visually, and it is based on Power Query.
  - question: What happens to data referenced through OneLake Shortcuts?
    options:
      - It is copied into OneLake
      - It is replicated into OneLake in real time
      - It stays in the external storage, without being copied or moved
      - It is moved permanently into OneLake
    answer: 3
    explanation: Shortcuts reference external storage from within OneLake, but the
      data is neither copied nor moved.
  - question: Which tool automatically replicates data into OneLake in real time
      without building a pipeline?
    options:
      - Mirroring
      - OneLake Shortcuts
      - Pipelines
      - Power BI
    answer: 1
    explanation: Mirroring handles the replication of data into OneLake
      automatically, with no need for a pipeline.
  - question: Which sources can Eventstream connect to?
    options:
      - Only manually uploaded CSV files
      - Only Fabric Warehouse
      - Only relational databases such as Azure SQL Database
      - Event sources such as Azure Event Hub, Apache Kafka or custom endpoints
    answer: 4
    explanation: Eventstream ingests real-time sources and connects to event sources
      such as Azure Event Hub, Apache Kafka or custom endpoints.
  - question: What sets Apache Spark apart when processing data?
    options:
      - It only works with SQL
      - It only handles batch processing
      - It spreads processing across several machines (a cluster) in parallel
      - It processes data on a single, very powerful machine
    answer: 3
    explanation: Spark carries out processing on several machines, called a cluster,
      working in parallel to improve performance.
  - question: In Spark Structured Streaming, what is the output that the query
      result is written to called?
    options:
      - Dataframe
      - Sink
      - Shortcut
      - Batch
    answer: 2
    explanation: The output of the query is written to a sink, which can be a file,
      a database or a dashboard.
---
# Microsoft Fabric

Fabric uses OneLake, which provides a shared data lake for all of the organisation's data. This removes the need to read data from vertical silos tied to a particular area or product, and lets you write and read in a single storage.  

Inside it we then find the following components:

- **Fabric Lakehouse**
- **Fabric Warehouse**
- **Fabric Data Factory**
- **Power BI**

## Fabric Data Factory

It is the starting point for managing and creating pipelines for data ingestion. These can be built mainly with two tools:

- Pipelines
- Dataflows Gen2 - a low-code tool that lets you create and update data transformation logic through a visual interface. It is based on Power Query.

### OneLake Shortcuts

These are essentially shortcuts that let you reference external storage (such as Azure SQL Database, Azure Cosmos DB, but also others outside the Azure ecosystem) from within OneLake. The data, however, is not copied or moved into OneLake. They are mainly used when the data cannot be moved out of its region for legal or cost reasons. 

### Mirroring

In this case, instead, the data is replicated directly into OneLake in real time. This tool handles the replication automatically, managing the updating and creation of data without the need to build a pipeline. The data arrives in OneLake in a format that is already ready to be queried with analytics tools.

### Eventstream

A tool for ingesting real-time sources that can connect to event sources such as Azure Event Hub, Apache Kafka or custom endpoints. Once connected, it filters and transforms the data before storing it in Fabric Lakehouse.  

### Microsoft Fabric Real-Time Intelligence

It is a set of tools in Fabric that lets you capture, process and analyse streaming data. Together, the tools inside it let you build the entire data processing pipeline, from capturing the data all the way to visualising it and automating certain actions based on the data captured. 

In practice, we connect to a data source, store and query the data, build real-time dashboards and set up notifications or alerts when certain conditions are met (for example: if a sensor reading reaches a certain value, I can send an email).

![image.png](/media/image-22.png)

### Apache Spark

Apache Spark is a data processing engine that lets you handle large datasets quickly. Nothing new so far. One thing that sets it apart, though, is that processing is not carried out on just a single machine, but on several (called a cluster), which allows processing to run in parallel and improves performance. This engine lets you write code in several languages (R, Python, Scala, Java and SQL) and can handle both batch and stream processing.

Spark can be used both in Microsoft Fabric and in Azure Databricks.

Within Spark we find **Spark Structured Streaming.** This is a library that makes working with streaming data easier. To understand how it works, we can compare handling streaming data to the way we handle tables in an Excel worksheet, except that the data grows in real time.

In detail:

1. We connect to a streaming source - for example, a message queue such as Azure Event Hubs
2. Spark reads the incoming data and stores it in a dataframe - a table with rows and columns where data is saved as soon as it arrives
3. We write queries to interrogate this data
4. The output of the query is written to an output (called a sink), which can be a file, a database or a dashboard.

![image.png](/media/image-23.png)



&nbsp;