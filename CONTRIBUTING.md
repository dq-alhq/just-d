## Contribution Guide

Yo, thanks for wanting to chip in at d.irsyad.co. Stoked to have ya on board!

Quick favor: give this doc a once-over before dropping your first pull request. Also, peep the open issues and pull requests to make sure no one's already on the same grind.

## Folder Structure
This project's open source, so you can jump in and contribute. Follow the folder structure. Here's a quick rundown of the folders and files you'll mess with.

### CLI
The CLI lives in the `d.cli` folder. You can scope the source code [here](https://github.com/irsyadadl/d.cli). All components you can add with `npx @irsyadadl/d@latest add --component` are chillin' in the `src/resources/components.ts` file. Peep the file structure [here](https://github.com/irsyadadl/d.cli/blob/main/src/resources/components.ts). This CLI uses `@changesets/cli` for releases. When you're done and before running the release command, test everything with `npm run preview`. After that, test the command directly in the folder. Before you commit, run `npm run clean` to tidy up build files. Then, build it like this.

```
npm run build
git commit -a
npm run release
```

### Content
For the docs, they hang out in the `content` folder. Scope the structure [here](https://github.com/irsyadadl/d./tree/main/content/docs).

### Docs Components
All the components in the docs are chillin' in the `components/docs` folder. Peep the structure [here](https://github.com/irsyadadl/d./tree/main/components/docs). Anytime you mess with these components, run `npm run b` to see the changes in the docs.

### Main UI Components
All the UI components in the docs are kickin' it in the `components/ui` folder. Check the structure [here](https://github.com/irsyadadl/d./tree/main/components/ui). Anytime you mess with these components, run `npm run b` to see the changes in the docs.

Need a hand? Hit up [@irsyadadl](https://twitter.com/irsyadadl).
