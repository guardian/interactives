### Interactives 

A WIP repository designed to hold interactive designs which can be rendered by our platforms, DCR & AR. 

Currently owned by
- @dotcom-platform
- @guardian-design-team


## How to run locally

1. First run `npm run watch`
2. In a separate terminal run `npm run dev-server`
3. Visit `localhost:3000` to see your page up and running


## Notes

### Steps
1. Project is built - transpiling all frameworks into common js
2. Publish to NPM (pre-monorepo)
3. DCR & AR include @guardian/interactives in their repos
   1. Request comes in to DCR or AR which should be rendered by this repo
   2. DCR & AR import this repo `import { renderToString } from '@guardian/interactives'`
   3. DCR & AR call `renderToString(capiData)` with a built capi model for the article
      1. Inside `renderToString` we server side render with a template (e.g svelte using the [server-side component API](https://svelte.dev/docs#run-time-server-side-component-api))
      2. Return all the CSS, JS & HTML
   4. DCR & AR take CSS, JS & HTML and put it in the article, surrounded with header, navbar, footer, etc.
