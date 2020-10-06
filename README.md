# test_work
## This project is based on Cypress framework with Gherkin syntax for BDD scenario
#### It requires Chrome v85 browser and NodeJS to be installed on your machine. 

#### In order to run the project please follow these steps:

1. install cypress on your machine:
```
npm install cypress
```
2. clone this git repository
3. cd to created project folder (test_work)
4. install additional cypress plugin with `--save-dev`:
```
npm install cypress-commands --save -dev
```
5. run cypress test runner:
```
npx cypress open
```
6. in opened cypress test runner click on `test_work.feature`
7. it will open new window and run scenario described in *cypress/integration/test_work.feature* file from project folder
8. you will see assertion results log at the left side of the window and browser actions at the right side
