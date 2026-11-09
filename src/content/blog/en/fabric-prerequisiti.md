---
title: The Parquet format
description: Background knowledge and technologies for Fabric
pubDate: 2026-11-06
heroImage: /media/fabric-datasources-parquet.png
tags:
- Fabric
draft: false
quiz:
- question: What are the three levels data is organised in inside a Parquet file?
  options:
  - Tables, rows, cells
  - Row groups, column chunks, pages
  - Schema, partitions, blocks
  - Header, body, footer
  answer: 2
  explanation: A file is split into row groups; each column has its column chunk, which is in turn split into pages.
- question: What is the smallest unit of compression and reading?
  options:
  - The row group
  - The column chunk
  - The page
  - The footer
  answer: 3
  explanation: The page, usually around 1 MB, is the smallest unit of compression and reading.
- question: Where is the metadata (schema, statistics) of a Parquet file?
  options:
  - At the start of the file, before the data
  - In a separate file
  - In the footer, at the end of the file
  - Repeated in every page
  answer: 3
  explanation: The footer, at the end of the file, is the map of what’s in the file and where.
- question: Which statistics are stored for each column chunk?
  options:
  - Mean and standard deviation
  - Min, max and number of nulls
  - Only the number of rows
  - The list of distinct values
  answer: 2
  explanation: Min, max and null count let queries skip whole row groups.
- question: What effect do smaller row groups have?
  options:
  - Better compression and less metadata
  - Finer filtering but more overhead
  - The file becomes readable in a text editor
  - No effect
  answer: 2
  explanation: Small row groups let queries skip more data but add overhead; large ones compress better but need more memory when writing.
---

## Parquet

An Apache project commonly used in data lakes and lakehouses. This data format is not human readable and is optimised to store and process data, including nested data types. It’s also very efficient in compression and encoding schemes.

![image.png](/media/image-3.png)

Data inside a Parquet file essentially has 3 levels:

- row group
- column chunk
- pages

```
Parquet file
├── Row Group 1  (e.g. rows 1 – 1,000,000)
│   ├── Column chunk "id"      → pages
│   ├── Column chunk "name"    → pages
│   └── Column chunk "gender"  → pages
├── Row Group 2  (rows 1,000,001 – 2,000,000)
│   ├── Column chunk "id"
│   ├── Column chunk "name"
│   └── Column chunk "gender"
└── ...
└── Footer (metadata: schema, position and statistics of each row group)
```

A row group is a block of consecutive rows. Inside it, each source column has its own column chunk, which stores the values in columnar form: first all the values of the id column, then all the values of the name column, and so on. Column chunks are then split into pages, the smallest unit of compression and reading (commonly 1 MB each).

At the end of the file there is the footer, a sort of map that explains what’s inside the file and where it is.

```
PAR1 | Row Group 1 | Row Group 2 | ... | Footer (metadata) | footer length (4 bytes) | PAR1
```

The metadata is serialised in [Thrift](https://en.wikipedia.org/wiki/Apache_Thrift) format and organised in levels:

- File level
  - the schema (column names, types, nullability, nested structures)
  - the total number of rows
  - the version and `created_by`
  - free key-value metadata, where for example Spark or Arrow save their original schema
- For each row group
  - the number of rows
  - the size in bytes
  - the list of column chunks
- For each column chunk
  - the type
  - the compression codec (Snappy, ZSTD…)
  - the encodings used (dictionary, RLE, plain…)
  - the file offset of the dictionary page and of the first data page
  - the compressed and uncompressed sizes
  - the **statistics**: min, max and number of nulls

How do you decide how much data goes into a row group? It depends on the tool exporting to Parquet: some go by size (128 MB per row group for Spark), others by number of rows (1 million rows for pandas). You can always change this parameter, but keep these aspects in mind:

- Large row groups (size / number of rows) - Better compression and less metadata, but writing the file needs more memory
- Small row groups (size / number of rows) - Finer filtering, with queries that skip whole row groups and run faster, but more overhead in exchange
