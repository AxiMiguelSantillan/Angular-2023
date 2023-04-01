# Angular2023

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Unit testing & Code coverage

You can run unit tests with `ng test` and code coverage with `ng test --code-coverage`, or `npm run test -- --code-coverage` if you are using npm.
The code coverage report will be generated in the `coverage` folder.

### My unit tests & code coverage

The result of my unit tests and code coverage is available in the [coverage](/coverage/) folder.

![Coverage](/img/coverage.png)

![Unit tests](/img/UnitTest.png)

## Poweshell 
Command to set the execution policy to allow the execution of scripts in the current user's context: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

## API
`https://reqres.in/` is used as a fake API to test the application.

``` 
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
```

## json-server
`json-server` is used to create a fake REST API. It is used to test the application. For this project, the `db.json` file is used as a database. It was used for dev-environment only. You can install using `npm install --save-dev npm-run-all`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
