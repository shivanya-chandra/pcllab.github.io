# Plugin Development

## jspsych 5

### `core`

Sometimes you will need to update the `pcllab-core` plugin.

`npx simplifyify src/plugin.js --outfile plugin.js`

## jspsych 7

Creating a new plugin in [`PCLLAB/plugins`](https://github.com/PCLLAB/plugins)

```sh
pnpm plop plugin
```

This creates a new package based on the template in `plop-templates/plugin`. I have set up the template to work with typescript and react, but templates can be adjusted and new templates can be made.

// TODO setup auto publishing to npm

For now packages are manually published to NPM under the [pcllab](https://www.npmjs.com/org/pcllab) organization.

## Publishing to NPM
