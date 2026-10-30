---
title: How This Library Works
description: The architecture behind this blog, at no cost, plus a quick guide to what you can include in an article.
pubDate: 2026-10-30
heroImage: /media/how-this-library-works.svg
tags:
  - GitHub Pages
  - Pages CMS
  - Astro
draft: false
---

Before getting into products, it makes sense to start here: **how this site is built**. It is also a good example of simple architecture, with no servers and no costs.

## The architecture at a glance

![Publishing workflow: Pages CMS, GitHub repository, GitHub Actions, GitHub Pages](/media/publishing-workflow.svg)

1. **I write in Pages CMS**, a web editor that works directly with the GitHub repository.
2. When I save, Pages CMS creates a **commit** with the Markdown text and images.
3. The commit starts a **GitHub Action** that builds the site with Astro.
4. The result is published to **GitHub Pages** in about a minute.

No database or server to maintain: every article is a file, with its complete revision history.

| Component      | Role                    | Cost  |
| -------------- | ----------------------- | ----- |
| Pages CMS      | Content editor          | Free  |
| GitHub         | Storage and versioning  | Free  |
| GitHub Actions | Automated build         | Free  |
| GitHub Pages   | Website hosting         | Free  |

## What you can include in an article

### Formatted text

Bold, *italic*, [links](https://pagescms.org), bulleted and numbered lists, and section headings.

> **Note:** blockquotes are also handy for highlighting tips or warnings.

### Code

```yaml
# Example: part of the .pages.yml file
media:
  input: public/media
  output: /media
```

### Images

Upload them from the editor with the image button: they are saved in the repository's `public/media` folder.

### Video

Videos are too large to keep in the repository: upload them to YouTube (unlisted works too), switch the editor to *Source* mode, and paste:

<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/M7lc1UVf-VE" title="Example video" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Just replace the code after `/embed/` with your video's code.

## Sharing on LinkedIn

Every article already includes Open Graph metadata: when you paste its link into a post, LinkedIn displays the title, description, and cover image. If the preview does not update, use the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to refresh it.