---
title: Fabric terminology
description: A short glossary of the terms you need to know for Fabric
pubDate: 2026-11-06
heroImage: /media/5432699.png
tags:
- Fabric
draft: false
quiz:
- question: What is the main characteristic of a data lake?
  options:
  - It only accepts structured, clean data
  - It stores large amounts of data of any kind in its original format
  - It’s optimised only for day-to-day transactions
  - It only contains aggregated data
  answer: 2
  explanation: A data lake saves data right away as it is, to decide later how to use it.
- question: Which problem does the data lakehouse solve?
  options:
  - Duplicated data between data lake and data warehouse, with slow pipelines and stale data
  - The lack of backups
  - The absence of a standard file format
  - Managing company email
  answer: 1
  explanation: The lakehouse combines data lake storage with data warehouse performance, avoiding copies.
- question: In the OLAP model, what is a ‘measure’?
  options:
  - An axis of analysis, such as time or region
  - A numeric value to analyse, such as revenue or quantity sold
  - A level of detail within a dimension
  - The number of dimensions of the cube
  answer: 2
  explanation: Measures are the numeric values; dimensions are the axes along which they’re analysed.
- question: In the medallion architecture, in which layer is data cleaned and normalised?
  options:
  - Bronze
  - Silver
  - Gold
  - Platinum
  answer: 2
  explanation: 'Bronze: raw data. Silver: cleaned and normalised. Gold: aggregated for reports.'
- question: How do you create an Azure Data Lake Storage Gen2?
  options:
  - By creating a SQL database
  - By enabling the hierarchical namespace in the storage account
  - By installing Databricks
  - By turning on OneLake in Fabric
  answer: 2
  explanation: ADLS Gen2 is a storage account with the hierarchical namespace option enabled.
- question: What is Microsoft Purview for?
  options:
  - Building ETL pipelines
  - 'Data governance: mapping, tracking and policies'
  - Training machine learning models
  - Hosting data warehouses
  answer: 2
  explanation: Purview maps data, tracks where it comes from and how it moves, and manages its policies and permissions.
---

### **Data lake**

A large, centralised repository that stores huge amounts of data in its original format; in fact it supports any format (structured, semi-structured and unstructured). The idea is to save as much information as possible right away, and decide later how, which and how much of it to use.

### **Data warehouse**

A database designed for analysis and reporting, focused on analysing data rather than running day-to-day operations like a normal relational database. It collects data from different sources, cleans it, integrates it and stores it so that it’s optimised for read operations.

### **Data lakehouse**

An architecture that combines the two above, data lake and data warehouse: the cheap, flexible and open storage of the data lake with the performance of the data warehouse.

It was introduced mainly to solve the problem of having data in two different places. A company would bring its data into the data lake, then duplicate a portion of it, transforming and integrating it into the data warehouse. This led to duplicated data and complicated pipelines that took time to run, and in the end the data was often out of date, because it sat in the data lake waiting for the pipeline.

![image.png](/media/image-17.png)

### **OLAP model (Online Analytical Processing)**

A way of organising data that focuses on analysing it. Data is typically structured in rows and columns and analysed in two dimensions; with OLAP models, instead, data is organised in a cube with at least three dimensions, and many more can be added (in that case we talk about a *hypercube*). This lets you analyse a value from several points of view at once.

![image.png](/media/image-4.png)

The basic concepts are:

- Measures - the numeric values to analyse. E.g. quantity sold, margin, revenue...
- Dimensions - the axes along which measures are analysed. E.g. time, product, customer, region...
- Hierarchies - the levels of detail within a dimension. E.g. if we choose region as a dimension we have country - region - province - city - address
- Cube - the set of measures crossed over all dimensions. E.g. the quantity of red mugs sold in London in March 2021

With these concepts in place, we can understand how the tools above are used by different types of users.

A data scientist works directly with the data stored in the data lake to explore and model it.

A data analyst uses the data warehouse to run queries and build reports and complex visualisations.

A business user uses OLAP models to analyse company data and extract useful information to make informed decisions.

### Medallion architecture

A pattern that introduces 3 layers of data ingestion inside a data lakehouse. These layers are:

- **Bronze** - data is stored exactly as it is in the source system, with no transformations.
- **Silver** - data is cleaned and normalised, removing duplicates and standardising data types.
- **Gold** - data is aggregated and modelled to support analysis reports and visualisations.

### Azure Data Factory

![image.png](/media/image-5.png)

An Azure service to define and schedule data pipelines that move and transform data. It integrates with other Azure services, so you can ingest data from cloud data stores, use the cloud’s computing power to process it and finally save the result in another data store.

### Azure Databricks

![image.png](/media/image-6.png)

A cloud analytics platform built on Apache Spark, optimised for large amounts of data, data science and SQL analytics. It’s based on open-source lakehouse formats such as Delta Lake.

Databricks is one of the managed services on Azure.

### Microsoft Purview

![image.png](/media/image-7.png)

A service for data governance across the whole company. You can use it to map your data and track where data originates and how it moves within your organisation and between applications and systems. You can also define policies and permissions on data shared between applications and systems.

### Azure Data Lake Storage Gen2

![image.png](/media/image-11.png)

A data lake solution on Azure that combines the scalability and costs of Azure Blob Storage with a hierarchical file system compatible with the main analytics systems.

Databricks can connect to the data in Azure Data Lake Gen2 and process it, and Microsoft Fabric tenants automatically deploy OneLake, which is based on this technology. Hierarchical namespaces let you set permissions granularly, with read/write and execute permissions directly on individual files or folders.

***To create an Azure Data Lake Storage Gen2, enable the hierarchical namespace option in the Azure Storage account settings.***

### Data warehousing architecture

![image.png](/media/image-18.png)

The architecture varies with the underlying technologies, but it typically includes the following elements:

**Data ingestion and processing**

Data is collected from several sources (relational databases, files, real-time streams) and loaded into a data lake or a relational data warehouse. Loading can be done in two ways:

- ETL - Extract, Transform and Load
- ELT - Extract, Load and Transform

Whichever you choose, the resulting dataset is optimised for queries and analysis. Processing is done by systems that can handle large volumes of data in parallel. Ingestion can happen as batch processing of static data or as real-time processing of data streams.

**Analytical data store**

These stores include relational data warehouses, file-system-based data lakes and hybrid architectures that combine the features of data warehouses and data lakes (that is, data lakehouses).

**Analytical data model**
