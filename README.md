# Print the key

A project that demonstrates how to use and benefit from Cucumber in Cypress. This is achieved mostly thanks to [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)!

## Technologies

- Cucumber
- Cypress
- Husky
- Prettier
- Snowpack
- Svelte

## Features

- [x] Graphical user interface (GUI) with Svelte
- [x] User input is detected and reacted upon
- [x] Application can be reseted to its initial state
- [x] Local end-to-end (E2E) tests:
  - [x] User input
  - [x] Reset
- [ ] Remote end-to-end (E2E) tests
- [ ] CI/CD

## Folder structure

```text
print-the-key
 ┣ .husky                       # git hooks
 ┣ cypress                      # tests
 ┃ ┣ fixtures
 ┃ ┃ ┗ example.json
 ┃ ┣ integration
 ┃ ┃ ┣ common
 ┃ ┃ ┃ ┗ user_is_on_page.js
 ┃ ┃ ┣ Print
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ Reset
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ Print.feature
 ┃ ┃ ┗ Reset.feature
 ┃ ┣ plugins
 ┃ ┃ ┗ index.js
 ┃ ┣ screenshots
 ┃ ┗ support
 ┃ ┃ ┣ commands.js
 ┃ ┃ ┗ index.js
 ┣ node_modules
 ┣ public                       # static resources
 ┃ ┣ index.css
 ┃ ┗ index.html
 ┣ src                          # application source-code
 ┃ ┣ App.svelte
 ┃ ┣ constants.js
 ┃ ┣ index.js
 ┃ ┣ Key.svelte
 ┃ ┗ Reset.svelte
 ┣ .gitignore
 ┣ .prettierignore
 ┣ .prettierrc.json             # formatting config
 ┣ commitlint.config.js         # commit linter config
 ┣ cypress.json                 # cypress config
 ┣ package.json                 # package config
 ┣ README.md                    # repository description
 ┗ snowpack.config.mjs          # project config
```

## Available Scripts

### npm start

Runs the app in the development mode.
Open <http://localhost:8080> to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder that is ready to be deployed.

### npm run test

Runs Cypress in headless mode. Requires the application to be started with `npm run start`.

### npm run open

Runs Cypress in browser. Requires the application to be started with `npm run start`.

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.
