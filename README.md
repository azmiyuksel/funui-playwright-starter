# First Fun UI Playwright test

Extract the starter and open its folder in a terminal with Node.js 22.12 or newer.

```sh
npm ci
npx playwright install chromium
npm test
```

Expect two passing tests: desktop Chrome and the Pixel 7 mobile profile, both using Chromium. The test fills the [practice login form](https://funui.dev/challenges/login) and checks that the secure page opens. These are demo credentials. No Fun UI account is required.

To use this as a GitHub starter, upload the extracted files to the root of a new repository, including the hidden `.github` folder. The workflow runs both projects on every push and pull request. Use GitHub’s **Template repository** setting if you want others to create repositories from yours.

Set `FUNUI_BASE_URL` to run against a local Fun UI build. Use `npm test -- --project=desktop` to run only the desktop test.
