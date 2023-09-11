# talent-form

## Description

_Project description_...

This document is to help developers understand the platform and the development requirements of the project.
The document will be updated from time to time to meet project expectations and standards.

# DEVELOPMENT

During the development of the project, branches will be created for specific features/components/function development.
PR will be created against this issue and will be merged to the `development` branch of the repository.

To find new issues please visit [Projects](https://github.com/world-wide-techies/talent-form/projects?query=is%3Aopen) or visit the [Issue](https://github.com/world-wide-techies/talent-form/issues) tab.
A developer can request for clarification of an issue before going on so to ensure full compliance with development expectations and requirements.

### FOLDERS AND NAMING STYLE

The folder structure is as follows

- public
- public/assets : `For images used in the project`
- app `For route pages`
- app/components `for app components`
- lib `for app functions`

Folder naming would be responsibility of the collaborators.

### FUNCTIONS AND EXPORT STYLE

The naming convention for components files would be
`[name]_comp.js` eg. addButton_comp.js, highlightTree_comp.js

We'll be using the single file export system for our components and page exports,

We'll also be using regular javascript function to define component

### RUNNING SERVER

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### PR GUIDELINES

A PR should request a reviewer once ready for review

The naming convention for PRs would be
`[category]-[name]:[title of tasks]`. category could be Feature, Bug-Fix, Documentations. E.g. Feature-Praise:authentication-context-proviver

### TEAM

- [Augustine](https://github.com/annonymousauthority) - Owner
- [Remi](https://github.com/Remi-dee) - Maintainer
