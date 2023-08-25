# Become a Contributor to Config.Tips

Thanks for your interest in contributing to Config.Tips! We welcome all contributions, from simple typo fixes to amazing tips. Please read the following guidelines before submitting your contribution.

## Creating a new Config Type

Both _tips_, and the _config kinds_ they are associated with, exist as structured markdown files within the `src/content` directory. To create a new type of config, you will need to create the `yaml` file within the `configKinds` directory with the appropriate metadata.

**1.** Create the new Config Kind file. The name of the file will ultimately end up in the URL, so ensure it is lowercase and uses dashes instead of spaces. For example, `src/content/configKinds/awesome-config.yaml`.

```sh
touch src/content/configKinds/awesome-config.yaml
```

**2.** Locate an SVG logo for the config type or language. All logos are stored in `public/assets/images/logos`. To find a suitable logo, please use https://simpleicons.org/

**3.** Add the required metadata to the file. The following fields are required:

```yaml
name: <name>
description: |
  <between 100 and 160 charachters for SEO>
website: <website>
body: |
  <body text>
logo: "/assets/images/logos/logo.svg"
snippet:
  lang: <lang>
  filePath: "<path>"
  code: |
    # Put a default or basic file example here

```

Utilize the existing config types as reference for adding your new config type. If you have any questions or require assistance, please reach out to us on open an issue on GitHub.


## Create a new Tip

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
