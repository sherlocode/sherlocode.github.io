---
title: OneLake
description: '#1 - OneLake'
pubDate: 2026-11-09
heroImage: /media/onelake512color.png
tags:
- Fabric
draft: false
quiz:
- question: What is OneLake?
  options:
  - A single data lake for all the organisation’s data
  - A relational data warehouse
  - A messaging service
  - A reporting tool
  answer: 1
  explanation: OneLake is the single, central data lake for the organisation’s analytics data.
- question: How is OneLake created?
  options:
  - An administrator creates it manually
  - It’s deployed automatically with every Microsoft Fabric tenant
  - You install it from Azure Marketplace
  - You enable an option in the storage account
  answer: 2
  explanation: Every Microsoft Fabric tenant automatically gets its own OneLake.
- question: Which file formats does OneLake accept?
  options:
  - Only Parquet
  - Only structured data
  - Structured, semi-structured and unstructured
  - Only CSV and JSON
  answer: 3
  explanation: OneLake accepts any file format.
- question: Which technology is OneLake built on?
  options:
  - Azure SQL Database
  - Azure Data Lake Storage Gen2
  - Azure Files
  - Azure Cosmos DB
  answer: 2
  explanation: 'OneLake is based on ADLS Gen2, compatible with most analytics systems: no lock-in.'
- question: What is the advantage of using the same data with different analytics engines?
  options:
  - No need to move or duplicate the data
  - The data is encrypted twice
  - Only Microsoft engines can be used
  - The data becomes relational
  answer: 1
  explanation: Different engines work on the same data, with no copies or moves.
---

# OneLake

It’s a single data lake for your organisation’s data. It is deployed automatically with every Microsoft Fabric tenant and acts as the central repository for all the organisation’s analytics data.

![image.png](/media/image-12.png)

As we saw in [Fabric terminology](/blog/terminologia-per-fabric/), OneLake accepts every file format, whether structured, semi-structured or unstructured. It also lets different analytics engines use the same data without moving or duplicating it.

The main benefits of OneLake are:

- A single shared data lake for all company data
- Easy collaboration and shared data ownership: you can create workspaces and let different people manage their own data or share others’
- No data lock-in, because it’s built on Azure Data Lake Storage Gen2, which is compatible with most analytics systems
- Easy to navigate
