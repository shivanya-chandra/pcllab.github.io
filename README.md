# Lab Website - MkDocs

## Public Facing

[https://learninglab.psych.purdue.edu/](https://learninglab.psych.purdue.edu/)

## Lab Handbook

[https://learninglab.psych.purdue.edu/handbook/](https://learninglab.psych.purdue.edu/handbook/)

## Development

### To run MkDocs locally:

```
# Create the environment
python3 -m venv

# Active environment and install dependencies
source .venv/bin/activate
pip install git+https://github.com/PCLLAB/mkdocs-material
pip install git+https://github.com/fralau/mkdocs_macros_plugin

mkdocs serve

# Exit the environment once done developing/testing
deactivate
```

### Misc notes

We have to use our forked version of `mkdocs-material` to allow for our custom breakpoints needed for our custom formatting. See [the issue with mkdocs-material](https://github.com/squidfunk/mkdocs-material/issues/1404). Make sure to occasionally update https://github.com/PCLLAB/mkdocs-material to get the newest features.

Updating `PCLLAB/mkdocs-material`

```
git reset --hard HEAD~1  # remove last commit to allow sync with remote
git remote add upstream git@github.com:squidfunk/mkdocs-material.git
git pull upstream master

# modify `src/assets/stylesheets/_config.scss` to match our custom values

npm i
npm run build

# git add, commit, push
```

The custom formatting logic to make the Navigation and Table of Content (TOC) sidebars not align with the top nav bar is in `overrides/partials`. Those are copy pasted and then modified from the `mkdocs-material` source. There is logic to read the frontmatter metadata and determine whether or not to display them and styling to make them appear as desired.

This is the meaning behind this data in the frontmatter seen in files like `index.md`

```
---
hide:
  - navigation
  - toc
  - footerNavigation
  - handbookNav
---
```

### To deploy

Push to `master`.

Look at `.github/workflows/main.yml` for details.

## Resources:

- [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [MkDocs](https://www.mkdocs.org/)
  - This has documentation for customization and overrides.
- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)
  - We use a lot of markdown extensions, which are documented here.
