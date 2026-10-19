# alexmartin1722.github.io

Personal website of Alexander Martin, live at <https://alexmartin1722.github.io>. Built with Jekyll on the
[al-folio](https://github.com/alshedivat/al-folio) theme (MIT license).

## Where things live

| What                                                 | File                                                            |
| ---------------------------------------------------- | --------------------------------------------------------------- |
| Bio, profile photos and caption                      | `_pages/about.md`                                               |
| News items                                           | `_news/`                                                        |
| Publications / talks                                 | `_bibliography/papers.bib`, `_bibliography/talks.bib`           |
| Research tree (papers, threads, links, types)        | `_data/research_tree.yml`                                       |
| Site description, profile links, schema.org `person` | `_config.yml`                                                   |
| LLM-readable summary                                 | `llms.txt` (generated from `_config.yml` and the research tree) |
| CV                                                   | `assets/pdf/CV.pdf`                                             |

## Deploying

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch.

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. Responsive images need ImageMagick (`convert`) installed.
