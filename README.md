## Automated Tests for Athena

These tests use playwright to run tests against the athena web application. They include a github action to run the tests periodically everyday, once a day in the staging environment, and once a day in the production environment.

## Playwright commands
Inside the main directory you can run several commands:

   `npx playwright test` - Runs all tests in the tests directory

   `npx playwright test --project=chromium` - Runs all tests in the tests directory using the chromium browser

   `npx playwright test examples` - Runs all tests in the a specific file.
    

   `npx playwright test --debug` - Runs all tests in the tests in debug mode

   `npx playwright codegen` - Generates a test file based on the actions you take in the browser
   

Visit https://playwright.dev/docs/intro for more information.