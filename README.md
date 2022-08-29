# Lab Website - MkDocs

A live demo of the website can be found here:
[https://pcllab.github.io/](https://pcllab.github.io/)

To run MkDocs locally:

```
# Create the environment
python3 -m venv

# Active environment and install dependencies
source .venv/bin/activate
pip install mkdocs-material
pip install git+https://github.com/fralau/mkdocs_macros_plugin

mkdocs serve

# Exit the environment once done developing/testing
deactivate
```

- Run `mkdocs serve` or `python3 -m mkdocs serve`
- View the site at `http://127.0.0.1:8000/`

To stop the local server:

- Press CTRL-c

To build the site:

- Run `mkdocs build` or `python3 -m mkdocs build`

Resources:

- [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [MkDocs](https://www.mkdocs.org/)
