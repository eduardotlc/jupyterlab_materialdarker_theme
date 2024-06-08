# Jupyterlab Material Darker Theme

---

**A Material Darker JupyterLab theme extension.**

[![updatebadge]][update] [![pypibadge]][pypi] [![mitbadge]][license] [![ci-badge]][ci]

[![emailbadge]][email]

[update]: https://github.com/eduardotlc/jupyterlab_materialdarker_theme/commits/master/
[license]: https://opensource.org/licenses/mit
[pypi]: https://pypi.org/project/jupyterlab-materialdarker-theme/
[pypibadge]: https://img.shields.io/pypi/v/jupyterlab_materialdarker_theme.svg?logo=python&logoColor=yellow&color=7e7edd&style=for-the-badge
[ci-badge]: https://img.shields.io/github/actions/workflow/status/eduardotlc/jupyterlab_materialdarker_theme/build.yml?style=for-the-badge&logo=github&logoColor=de97f2&color=68f1ad
[ci]: https://github.com/eduardotlc/jupyterlab_materialdarker_theme/actions/workflows/build.yml
[email]: mailto:eduardotcampos@usp.br
[emailbadge]: https://img.shields.io/badge/Email-7e7edd?style=for-the-badge&logo=gmail
[ariakedarkbadge]: https://img.shields.io/badge/Ariake_Dark-6363ab?style=for-the-badge&logo=jupyter
[ariakedark]: https://github.com/eduardotlc/jupyterlab_materialdarker_theme
[midnightseabadge]: https://img.shields.io/badge/Midnight_Sea-a571f4?style=for-the-badge&logo=jupyter
[midnightsea]: https://github.com/eduardotlc/jupyterlab_midnightsea_theme
[mitbadge]: https://img.shields.io/badge/License-MIT-9aefea?style=for-the-badge&logo=gitbook
[updatebadge]: https://img.shields.io/badge/Updated-June_2024-93ddfb?style=for-the-badge&logo=googlecalendar

## Appearance

![Example 1](./images/jupyterlab_materialdarker_1.png)

![Example 2](./images/jupyterlab_materialdarker_2.png)

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install jupyterlab_materialdarker_theme
```

To check the installation, execute:

```bash
jupyter labextension list
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab_materialdarker_theme
```

## Contributing

To make personal customizations to the theme, edit the [variables.css](./style/variables.css) file, and then run the development install steps listed bellow.

Feel free to make [pending](./TODO.md) or other optimizations and pull requests, this theme is still under development and any contribution is very much appreciated.

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

- Clone the repo to your local environment:

```bash
git clone https://github.com/eduardotlc/jupyterlab_materialdarker_theme
```

- Change directory to the jupyterlab_materialdarker_theme directory:

```bash
cd jupyterlab_materialdarker_theme
```

- Install package in development mode:

```bash
pip install -ve "."
```

- Link your development version of the extension with JupyterLab:

```bash
jupyter labextension develop . --overwrite
```

- Rebuild extension Typescript source after making changes:

```bash
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

- Watch the source directory in one terminal, automatically rebuilding when needed:

```bash
jlpm watch
```

- Run JupyterLab in another terminal:

```bash
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab_materialdarker_theme
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab_materialdarker_theme` within that folder.

## Other themes

See my other Jupyter Lab themes

[![ariakedarkbadge]][ariakedark]

[![midnightseabadge]][midnightsea]
