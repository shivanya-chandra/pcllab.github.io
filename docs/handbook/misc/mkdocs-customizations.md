# mkdocs Customizations

## mkdocs-material Fork

We have to use our forked version of `mkdocs-material` to allow for our custom breakpoints needed for our custom formatting. See [the issue with mkdocs-material](https://github.com/squidfunk/mkdocs-material/issues/1404).

Therefore, this website is built using the fork located at `https://github.com/PCLLAB/pcllab.github.io` which will not automatically update to get upstream changes.

### Manually update `PCLLAB/mkdocs-material`

```
# after cloning PCLLAB/mkdocs-material

git reset --hard HEAD~1  # remove last commit to allow sync with remote
git remote add upstream git@github.com:squidfunk/mkdocs-material.git
git pull upstream master

# modify `src/assets/stylesheets/_config.scss` to match our custom values

npm i
npm run build

# git add, commit, push --force
```

```scss title="src/assets/stylesheets/_config.scss"
// Device-specific breakpoints
$break-devices: (
  mobile: (
    portrait: px2em(220px) px2em(479px),
    landscape: px2em(480px) px2em(719px),
  ),
  tablet: (
    portrait: px2em(720px) px2em(959px),
    landscape: px2em(720px) px2em(959px),
  ),
  screen: (
    small: px2em(960px) px2em(1599px),
    medium: px2em(1600px) px2em(1999px),
    large: px2em(2000px),
  ),
);
```

## Overrides

### Sidebars

The custom formatting logic to make the Navigation and Table of Content (TOC) sidebars not align with the top nav bar is in `overrides/partials`. Those are copy pasted and then modified from the `mkdocs-material` source so it matches the theme. Also `docs/css/sidebars.css`.

There is logic to read the frontmatter metadata and determine whether or not to display them and styling to make them appear as desired.

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

### Custom navigivation menu

The logic for the topbar and mobile hamburger menu is in `docs/js/header.js`, as well `overrides/partials/header.html` and `docs/css/header.css`

### CSS Shenanigans

`docs/css/baseline.css` has stuff like

```css
margin-top: -18vh;
padding-top: 18vh;
```

This makes the Table of Contents highlight sections earlier while scrolling and also means clicking a section will scroll it to the middle of the page instead of the top. ¯\\\_(ツ)\_/¯
