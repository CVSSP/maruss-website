# Website for the MARuSS project

- This is the website for the EPSRC-funded project: Musical Audio Repurposing using Source Separation (MARuSS)

- This repository might be useful for setting up a simple website suited for the academic blogger

- We are using the simple [Minima](https://github.com/jekyll/minima) Jekyll theme with some personalised styling

- References are handled by the excellent [Jekyll-Scholar](https://github.com/inukshuk/jekyll-scholar)

## Setting up your own site

### Jekyll Requirements

1. Install install [Ruby](https://www.ruby-lang.org/en/). It is recommended that
   you install Ruby with `rbenv`, see [here]( https://gorails.com/setup/ubuntu/16.04#ruby) for example.

2. Install Bundler:
```
gem install bundler
```

### GitHub Pages

- Clone this repository

- Connect your remote repository on GitHub:
```
git remote set-url origin https://github.com/username-or-organization-name/your-remote-repository-name
```
- Move inside and run:
```
bundle install
```

### Configuration and structure

- After reading this, check and modify the values in `_config.yml` (it is documented)

- One-off pages should live in the root folder and use frontmatter along the
    lines of:
```
---
layout: page
permalink: /publications/
title: Publications
menu: true
---

## My Content

```

- Put your bibtex file in the `./_bibliography` folder. If it's not called `references.bib`, update the value of `scholar > bibliography` in `./_config.yml` accordingly.

- The entire bibliography of `./bibliography/references.bib` is generated, via [Jekyll-Scholar](https://github.com/inukshuk/jekyll-scholar), on the `publications` page. You can limit the selection to those entries with the (single) keyword given by the option `query_by_this_bibtex_keyword` in `./_config.yml`. This is useful for listing only those publications corresponding to the author(s) of the website (by default it is `maruss`).

- If you want PDFs to be downloadable via a link attached to each reference, dump them in `assets/pdfs`. The only convention is that the filename of the PDF associated with a given bibtex entry should match the key, e.g.
```
@article{bob_1933} -> bob_1933.pdf
```

- Using your bibtex file, [Jekyll-Scholar](https://github.com/inukshuk/jekyll-scholar) will automatically generate a details page for each publication listed on the `publications` page. This page will appear at `site_url/publications/bibtex_key.html`. Details include an abstract, the bibtex entry and the DOI. If you want to append additional information to the details page (such as code, references, discussion points etc.), create a markdown file in the folder `_publication_details` whose filename matches the key of the bibtex entry. For example, if `_bibliography/references.bib` contains:

```
@article{bob_1933,
title = {bob},
author = {bob},
year = {1933}
}
```

then `_publication_details/bob_1933.md` might give some additional information
on the details page (no frontmatter is needed for this):
```
## Aditional information

All information here will be appended to the details page which will show up at
site_url/publications/bob_1933.html
```

- To change the colours, give `assets/main.scss` a quick skim, add your own colours and update the main variables
