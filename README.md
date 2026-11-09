# Architect Notes

A personal library of articles about products and architecture: written with **Pages CMS**, built with **Astro**, and published for free on **GitHub Pages**.

```
Pages CMS  ──commit──▶  GitHub  ──push──▶  GitHub Actions  ──deploy──▶  GitHub Pages
(write)                 (Markdown files)   (Astro build)                (live site)
```

---

## Deploy Once (~15 minutes)

### 1. Create the repository

1. On GitHub, create a new **public** repository named exactly **`<your-username>.github.io`** (for example, if your username is `jane-doe`, the repository is `jane-doe.github.io`). The site will then be available at `https://jane-doe.github.io`.
2. Upload all files from this folder to the repository's `main` branch.
   - In your browser: choose *Add file → Upload files* and drag in the folder contents. Be sure to include the hidden `.github` folder and `.pages.yml`; if the browser does not upload them, use GitHub Desktop or `git`.
   - From a terminal:
     ```bash
     git init && git add . && git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
     git push -u origin main
     ```

### 2. Enable GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under *Build and deployment → Source*, select **GitHub Actions**.
3. Open the **Actions** tab and find the *Publish to GitHub Pages* workflow. If it has not started automatically, open it and select *Run workflow*.
4. After a couple of minutes, the site will be live at `https://<your-username>.github.io`.

### 3. Customize your details

Open `src/consts.ts` (you can edit it directly on GitHub using the pencil icon) and update the site title, description, name, and LinkedIn and GitHub links. Save, and the site will update automatically.

### 4. Connect Pages CMS

1. Visit **https://pagescms.org** and sign in with GitHub.
2. Authorize the app for the `<your-username>.github.io` repository.
3. Open the repository from the list. The **Articles** and **About** sections are already configured in `.pages.yml`.

That is it. From here on, you will not need to touch the code.

---

## Write an article

1. In Pages CMS, open **Articles (English) → New** or **Articoli (Italiano) → New**.
2. Fill in the title, description, date, cover image, and tags for the products you discuss.
3. Write the article. Use the editor's image button to upload images to `public/media`.
4. To save without publishing, check **Draft**.
5. Select **Save**. The article will be online in about a minute.

**Two languages:** English is published at `/`, Italian at `/it/`. Two articles with the same file name are linked as translations: the language switcher in the header jumps between them, and the quiz score is shared. If the two file names differ, fill in **Translation key** on one of the two versions with the other file name. An article without a translation is simply shown only in its language; the switcher then goes to the other language's home page.

**Quiz:** add questions in the **Quiz** field of the article (options, number of the correct option, optional explanation). Each language has its own quiz text.

**Video:** Upload videos to YouTube (unlisted videos work too), switch the editor to *Source* mode, and paste:

```html
<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/VIDEO-CODE" title="Video title" loading="lazy" allowfullscreen></iframe>
</div>
```

**Template:** The articles include *"Template: Product Review"*, a draft with a ready-to-use structure (overview, use cases, architecture, costs, limitations, and resources). It does not appear on the published site.

**Cover images and LinkedIn:** The cover image is also used for LinkedIn previews. Use PNG or JPG, ideally **1200 × 627 px**. SVG covers are shown on the site, but use the default `public/og-default.png` for social previews. If no cover is set, the same default is used. If LinkedIn shows an old preview, refresh it with the [Post Inspector](https://www.linkedin.com/post-inspector/).

---

## Project structure

```
.pages.yml                     Pages CMS editor configuration
.github/workflows/deploy.yml   Automated build and deployment
src/consts.ts                  Site name, author, social links, newsletter and analytics
src/i18n.ts                    Interface texts in English and Italian
src/content/blog/en/           English articles (one .md file each)
src/content/blog/it/           Italian articles (same file name = translation)
src/content/pages/<lang>/about.md  The About page in each language
src/views/                     Page layouts shared by both languages
src/pages/ and src/pages/it/   Routes (thin files that pick the language)
src/styles/global.css          Colors and styles (edit the variables at the top)
public/media/                  Images uploaded through the editor
public/og-default.png          Default LinkedIn preview image
```

Generated pages, in English and in Italian (`/it/...`): home page with article list, article pages with a "Share on LinkedIn" button, quizzes (`/quiz/...`), topic pages (`/tag/...`), the About and Privacy pages, an RSS feed per language (`/rss.xml`, `/it/rss.xml`), and a sitemap with hreflang links.

## Try it on your computer (optional)

Requires Node.js 22.23 or later.

```bash
npm install
npm run dev      # http://localhost:4321 (drafts are visible here too)
npm run build    # generates the site in the dist/ folder
```

## Frequently asked questions

**Can I use my own domain?** Yes. Under *Settings → Pages → Custom domain*, enter your domain, then replace the `SITE` value in `.github/workflows/deploy.yml` with your address (e.g. `https://www.example.com`).

**Can other people write articles?** Yes. In Pages CMS, you can invite collaborators by email; they do not need to know Git.

**How much does it cost?** Nothing. Public repositories, GitHub Actions, GitHub Pages, and Pages CMS are free for this use.

**What should NOT go here?** The repository is public, so do not add customer data, credentials, or confidential documents.
