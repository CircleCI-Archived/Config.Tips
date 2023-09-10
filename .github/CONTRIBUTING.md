# Become a Contributor to Config.Tips

Thanks for your interest in contributing to Config.Tips! We welcome all contributions, from simple typo fixes to amazing tips. Please read the following guidelines before submitting your contribution.

## Getting Started

1. **Correct Node Version** - To ensure compatibility and minimize errors when getting started, we recommend using the same version of Node.js we currently use. You can find the version in the `.nvmrc` file. If you use [nvm](https://github.com/nvm-sh/nvm) you can run `nvm use` to automatically switch to the correct version.
2. **PNPM** - We use [pnpm](https://pnpm.io/) to manage our dependencies. If you do not have pnpm installed, you can install it with `npm i -g pnpm`.
3. **Install Dependencies** - Run `pnpm install` to install all dependencies.
4. **Start the Development Server** - Run `pnpm dev` to start the astro development server. This will start the server on [localhost:4321](http://localhost:4321) and watch for changes to the source files.

## Add Content

### Creating a new Config Type

Both _tips_, and the _config kinds_ they are associated with, exist as structured markdown files within the `src/content` directory. To create a new type of config, you will need to create the `yaml` file within the `configKinds` directory with the appropriate metadata.

**1.** Create the new Config Kind file. The name of the file will ultimately end up in the URL, so ensure it is lowercase and uses dashes instead of spaces. For example, `src/content/configKinds/awesome-config.yaml`.

```sh
touch src/content/configKinds/awesome-config.yaml
```

**2.** Locate an icon for the config type or language. Use [https://icones.js.org/collection/simple-icons](https://icones.js.org/collection/simple-icons) as a reference for finding the icon. Click on the appropriate logo and you will be given a reference string (example: `simple-icons:circleci`). Copy this string, and add it to the logo field in the config kind file defined below.

**3.** Add the required metadata to the file. The following fields are required:

```yaml
name: <name>
description: |
  <between 100 and 160 charachters for SEO>
website: <website>
body: |
  <body text>
logo: simple-icons:<brand>
snippet:
  lang: <lang>
  filePath: "<path>"
  code: |
    # Put a default or basic file example here
```

Utilize the existing config types as reference for adding your new config type. If you have any questions or require assistance, please reach out to us on open an issue on GitHub.

### Create a new Tip

For an already existing config type, adding a new tip is as simple as creating a new markdown file within the appropriate directory. Utilize the template below and the existing tips as reference.

For the `kind` of tip, you will need to use the same name as the name of the `configKind` file (which is also the `id`). For example, if you wanted to create a new tip for `nginx.conf`, you would look in the `src/content/configKinds` directory and find the `nginx.yaml` file. The `id` of this file is `nginx`, so the `kind` of the tip would be `nginx`.

```yaml
---
kind: <kind>
title: <title>
description: |
  <between 100 and 160 charachters for SEO>
contributor: https://github.com/<github username> # optional, delete if not applicable
snippet: |
  key: value
  # put your tip here
---
<!-- Body - this area supports markdown -->
```

## Submitting a Pull Request

1. **Fork the Repository** - Click the "Fork" button in the upper right corner of the repository page. This will create a copy of the repository in your GitHub account.

2. **Create a Branch** - Create a new branch for your changes. We recommend using the following naming convention: `feature/<feature name>` or `docs/tip-title`. For example, `feature/add-new-feature` or `docs/tip-title`.

3. **Use Conventional Commits** - We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to more easily track changes and make an easier to read changelog. If you submit a PR without conventional commits, we will likely squash your commits and rename them to follow the convention. When adding a new tip, we recommend using the following format: `docs: <tip title>`. For example, `docs: Add new tip for Next.js`.

4. **Prepare the Code** - We use `prettier`, `eslint`, and tests to ensure code quality, consistency, and to reduce bugs. The `package.json` file has multiple commands you will find helpful such as `pnpm run lint`, `pnpm run format`, and `pnpm run test`. We recommend running `pnpm run pre-commit` before submitting your PR to ensure all tests pass and your code is formatted correctly. For those familiar with `pre-commit`, we are _not_ using git hooks, which can be blocking, and instead give you the option to run this command manually before pushing your changes.

5. **Rebase** - Before submitting your PR, we recommend rebasing your branch on the latest `main` branch, as well as cleaning up any unnecessary commits, or going back to add conventional commit messages. This extra step will help us merge your PR faster. To rebase onto the latest `main` branch, run `git fetch origin main && git rebase origin/main`. You can use `git rebase -i origin/main` to interactively rebase and squash/fix commits.

6. **Submit the PR** - Once you have completed the above steps, you can submit your PR. We will review your PR as soon as possible. If you have any questions or need assistance, please reach out to us on Discord or open an issue on GitHub.
