# eslint-config-streetshares
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Streetshares ESLint config

All rules can be customized in the consuming app's ESLint config.

## Installation

To install with Yarn, run:

```sh
# install the package
yarn add -D @streetshares/eslint-config-streetshares

# list out the peer dependencies as JSON and add them as devDependencies
# (copy and paste everything including the parentheses on the following 4 lines)
(
  export PKG=@streetshares/eslint-config-streetshares;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add -D "$PKG@latest"
)

# alternatively (useful for Windows), run the following and add the output packages to devDependencies in the consuming app's package.json
# THERE IS NO NEED TO DO THIS IF THE ABOVE FUNCTION WORKS (MacOS/Linux)
npm info @streetshares/eslint-config-streetshares peerDependencies --json
```

## Developing

When working on changes, they can be easily tested by running `yarn link` in the root of the repo, then running `yarn link @streetshares/eslint-config-streetshares` in the app where you'd like to test it. You'll also need to add `extends: ['@streetshares/eslint-config-streetshares']` to the app's ESLint config if it's not already there.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!