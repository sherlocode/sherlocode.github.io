---
title: Azure Tables
description: '#4 - Azure Tables'
pubDate: 2026-11-09
heroImage: /media/tablestorage.png
tags:
- Azure
draft: false
quiz:
- question: What kind of storage is Azure Table Storage?
  options:
  - A relational database
  - A NoSQL key/value store
  - A network file share
  - A message broker
  answer: 2
  explanation: Azure Tables is a NoSQL store that keeps data in key/value format.
- question: What makes up the unique key of each row?
  options:
  - Only a numeric ID
  - Partition key + row key
  - Table name + timestamp
  - Foreign key + primary key
  answer: 2
  explanation: The partition key identifies the partition, the row key identifies the row within that partition.
- question: Which of these statements is true?
  options:
  - Every row must have the same columns
  - It supports stored procedures and views
  - Different rows can have a different number of columns
  - It supports foreign keys between tables
  answer: 3
  explanation: Rows can have different columns; there are no foreign keys, relationships, stored procedures or views.
- question: Besides organising data, what is the partition key for?
  options:
  - Encrypting rows
  - Improving performance and reducing read times
  - Linking different tables
  - Defining column types
  answer: 2
  explanation: Rows with the same partition key are stored together, so operations on the data are faster.
- question: When is Azure Tables NOT the right tool?
  options:
  - For application logs
  - For user profiles and preferences
  - When each row holds a lot of information (more than 252 properties or about 1 MB)
  - For lookup and configuration tables
  answer: 3
  explanation: 'Each row has at most 252 properties and about 1 MB: it’s ideal for many rows with few columns.'
---

# Azure Tables

Azure Table Storage is a NoSQL store that keeps data in key/value format. Each item is stored in a row that contains a variable number of columns.

![image.png](/media/image-15.png)

It shouldn’t be confused with a classic relational database, because there are substantial differences:

- As mentioned, you can store a variable number of columns: for example, one row can have 3 address columns while another has only two.
- There are no foreign keys, relationships, stored procedures, views or the other objects common in relational databases.

Each row must have a unique key made of a partition key (which identifies the partition the row belongs to) and a row key (unique within the partition). A partition is simply a mechanism that groups rows by their partition key: rows with the same partition key are stored together. This doesn’t just organise the data, it also improves the performance of operations on it. Partitions are managed automatically and grow or shrink as rows are added or deleted. Using the partition key also reduces read times.

When should you use Azure Tables?

- Large volumes at low cost - Azure Tables is very useful when each row holds little information (few columns) but the store has many rows. If each row holds a lot of information it’s not the right tool, because it allows at most 252 properties and a row size of about 1 MB.
- Semi-structured or variable data
- Typical use cases:
  - user profiles and preferences
  - application logs
  - lookup and configuration tables
