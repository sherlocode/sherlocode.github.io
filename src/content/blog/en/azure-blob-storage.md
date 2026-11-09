---
title: Azure Blob Storage
description: '#2 - Azure Blob Storage'
pubDate: 2026-11-06
heroImage: /media/azure-blob-1.png
tags:
- Azure
draft: false
quiz:
- question: What kind of data is Azure Blob Storage designed to store?
  options:
  - Relational data with foreign keys
  - Large amounts of unstructured data, such as binary files
  - Only messages between applications
  - Only small key/value data
  answer: 2
  explanation: Blob Storage is made for large amounts of unstructured data, stored as BLOBs.
- question: What is a container for?
  options:
  - Running code close to the data
  - Grouping blobs logically and controlling who can read and write them
  - Compressing blobs
  - Replicating blobs to another region
  answer: 2
  explanation: A container is a logical grouping of blobs and the place where access is managed.
- question: Which BLOB type only lets you add data at the end, without editing or deleting it?
  options:
  - Block BLOB
  - Page BLOB
  - Append BLOB
  - Archive BLOB
  answer: 3
  explanation: 'The Append BLOB is optimised for append operations: data can only be added at the end.'
- question: Which BLOB type is optimised for random reads and writes on 512-byte pages?
  options:
  - Block BLOB
  - Page BLOB
  - Append BLOB
  - Cool BLOB
  answer: 2
  explanation: A Page BLOB is a collection of 512-byte pages that can be read and written individually.
- question: You must keep backups by law and will almost never access them. Which access tier do you choose?
  options:
  - Hot
  - Cool
  - Cold
  - Archive
  answer: 4
  explanation: Archive has the lowest storage cost, but reading and deleting are expensive and slow.
- question: What happens if you delete a blob in the Cool tier before 30 days?
  options:
  - Nothing, deleting is always free
  - You pay an early deletion cost
  - The blob automatically moves to Archive
  - The deletion is rejected
  answer: 2
  explanation: In the Cool tier, deleting before 30 days has a cost; in Cold the limit is 90 days.
---

# Azure Blob Storage

It’s an Azure service that stores large amounts of unstructured data, such as very large binary files, as BLOBs.

![image.png](/media/image-8.png)

Blobs are a very efficient way to store files in the cloud and let several applications read and write them through the APIs the service provides.

Blobs are stored in containers. A container defines a kind of logical grouping of blobs, and it also controls who can write and read the BLOBs inside it. Authentication can be done with Microsoft Entra ID or with an API key.

Inside containers, BLOBs can be organised into virtual folders. You can’t run operations on these folders: they are only virtual and define the access path to the file.

Azure Blob Storage supports 3 types of BLOB:

- Block BLOB - The BLOB is handled as a set of blocks. Each block can vary in size and is the smallest unit that can be written or read. It’s used for files that change little over time.
- Page BLOB - The BLOB is organised as a collection of 512-byte pages. These BLOBs are optimised for random read and write operations: individual pages can be read and written.
- Append BLOB - The BLOB is handled as a block BLOB optimised for append operations. You can only add data at the end; editing and deleting are not allowed.

![image.png](/media/image-9.png)

Each blob storage offers 4 access tiers to balance latency and costs:

- Hot - for blobs that are accessed frequently.
- Cool - for blobs that are accessed infrequently. Storage costs less than Hot, but reading costs more. Keep in mind that deleting a blob in this tier before 30 days incurs an early deletion cost.
- Cold - for blobs that are almost never accessed (for example logs from the last 30 days) but still need a quick read when necessary. Here the early deletion cost goes away after 90 days.
- Archive - for blobs that are practically never accessed but must be kept by law (for example backups). Storage costs are minimal, but reading and deleting are very expensive, and latency is high.

![image.png](/media/image-10.png)
