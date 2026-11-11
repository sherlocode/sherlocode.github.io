---
title: Azure Databricks
description: '#2 - Azure Databricks'
pubDate: 2026-11-11
heroImage: /media/databricks-c40eaf44-1.png
tags: []
draft: false
quiz:
- question: What is Azure Databricks?
  options:
  - A managed relational database
  - A cloud analytics platform built on Apache Spark
  - A service to host websites
  - A message broker for applications
  answer: 2
  explanation: Databricks is an analytics platform based on Apache Spark, optimised for large amounts of data, data science and SQL analytics.
- question: Which open-source format is the Databricks Lakehouse built on?
  options:
  - CSV
  - Delta Lake
  - Avro
  - XML
  answer: 2
  explanation: The Databricks Lakehouse is a single storage layer built on Delta Lake that supports both SQL analytics and machine learning.
- question: What is Unity Catalog for?
  options:
  - Writing notebooks in Python
  - 'Governing data and AI assets: fine-grained access, lineage and discovery'
  - Asking questions about data in natural language
  - Orchestrating ingestion pipelines
  answer: 2
  explanation: Unity Catalog is the single governance layer for data and AI assets in the Databricks workspace.
- question: What does Genie do?
  options:
  - It generates and runs SQL queries from questions in natural language
  - It automatically creates Delta tables
  - It manages permissions on storage accounts
  - It trains machine learning models
  answer: 1
  explanation: 'Genie is a natural-language AI interface: users ask questions about the data they can access, and Genie generates and runs the SQL queries.'
- question: With Lakeflow pipelines, what do you define and what does Databricks handle?
  options:
  - You write the execution order, Databricks defines the tables
  - You define what the target tables should contain; Databricks handles execution order, dependencies and incremental processing
  - You manage dependencies, Databricks writes the code
  - Databricks handles everything, you define nothing
  answer: 2
  explanation: 'Lakeflow pipelines is declarative: you define what the tables should contain, and Databricks takes care of order, dependencies and incremental updates.'
- question: Which of these languages is NOT listed among those you can use in Databricks Notebooks?
  options:
  - PySpark
  - Scala
  - R
  - C#
  answer: 4
  explanation: Notebooks support PySpark, Python, Scala, SQL and R.
---

# Azure Databricks

It’s a cloud analytics platform built on Apache Spark, optimised for large amounts of data, data science and SQL analytics. It’s also based on open-source lakehouse formats such as Delta Lake.

Databricks is one of the managed services on Azure.

- Databricks Lakehouse - a single storage layer built on Delta Lake that supports both SQL data analysis and machine learning
- Databricks SQL
- Databricks Notebooks
- Unity Catalog - a single governance layer for data and AI assets within the Databricks workspace, which lets you govern fine-grained data access, lineage and discovery
- Genie - a natural-language AI interface that lets users ask questions about the data they have access to; the assistant generates and runs SQL queries and returns their results.

For data ingestion, Databricks provides **Lakeflow pipelines**. It’s a framework to build reliable, maintainable pipelines based on Delta Lake. You first define what the target tables should contain, and Databricks handles the execution order, dependency management and automatic incremental processing.

Finally, with Databricks Notebooks you can write ad-hoc, pro-code ingestion procedures using languages such as PySpark, Python, Scala, SQL and R. These procedures can read data from REST APIs, JDBC sources, cloud storage or streaming sources and write directly to Delta Lake tables.
