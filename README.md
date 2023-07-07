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
pip install git+https://github.com/radude/mdx_truly_sane_lists

mkdocs serve

# Exit the environment once done developing/testing
deactivate
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
