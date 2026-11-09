---
title: Azure Files
description: '#3 - Azure Files'
pubDate: 2026-11-09
heroImage: /media/azure-storage-accounts.png
tags:
- Azure
draft: false
quiz:
- question: What is Azure Files?
  options:
  - A document database
  - A cloud-based network share to share files between users
  - A backup service for virtual machines
  - An online document editor
  answer: 2
  explanation: 'Azure Files is a cloud network share: it replaces company file servers without hardware costs.'
- question: Which problem of on-premises file servers does Azure Files solve?
  options:
  - They don’t support text files
  - They scale badly as users grow or when access from outside the network is needed
  - They don’t let you create folders
  - They have no permissions
  answer: 2
  explanation: On-premises file servers scale badly with more users and external access; Azure Files offers high availability and scalability.
- question: Which tool synchronises local files with Azure Files?
  options:
  - AzCopy
  - Azure File Sync
  - Azure Data Factory
  - Microsoft Purview
  answer: 2
  explanation: Azure File Sync keeps local files in sync with the share on Azure.
- question: What is the difference between the HDD and SSD tiers?
  options:
  - HDD is faster and more expensive
  - SSD has higher throughput but costs more
  - They are identical, only the name changes
  - SSD is only available for log files
  answer: 2
  explanation: SSD offers better performance at a higher cost; HDD is less performant but cheaper.
- question: Which protocols does Azure Files support?
  options:
  - FTP and SFTP
  - HTTP and AMQP
  - SMB and NFS
  - SQL and ODBC
  answer: 3
  explanation: Azure Files is used through SMB and NFS, the classic network folder protocols.
---

# Azure Files

Companies usually set up network shares on local servers, reachable from the corporate network, so that users can share files. This solution is very useful, but it doesn’t scale well when users grow or when external users or devices outside the local network need access.

That’s exactly why Azure Files was introduced. We can see it as a cloud-based network share that makes documents and files available to many users. With it, a company can cut hardware and maintenance costs and benefit from the high availability and scalability the service offers.

![image.png](/media/image-13.png)

An Azure file share is created from the storage account, giving you up to 256 TB of space on the SSD-based tier and 5 PB on the HDD-based tier.

You can manage this storage in several ways, for example:

- Azure Portal
- AzCopy
- Azure File Sync, to synchronise local files with Azure.

![image.png](/media/image-14.png)

As mentioned, there are two tiers. HDD uses hard disks in Azure datacenters to store data: it’s less performant but cheaper. SSD-based uses Solid State Disks, with higher throughput but also a higher cost.

Finally, Azure Files supports two protocols:

- Server Message Block (SMB)
- Network File System (NFS)
