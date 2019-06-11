# Tictactoe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9

## What to do if you have installed Angular 6.1.1 or any other previous version?

If your angular installation is previous to version 7, you'll notice a couple of compyling errors on files state.service.ts and header.component.ts

The reason for this change is that new Angular versions moved packages between libraries.

## Exsercise implementation

### 1.- Save Game

Its implemented using a couple of arrays in the myhttpService service. One stores the savegame names and the other one the URLs.
By default, this arrays contain the default game name and URL when you first open the application
To store it using http, it passes the whole state as parameter. This way, it stores all the game state, including name of player and turn.

### 2. Continue Game

When you save a game, it's inserted in the array's position '0'. This way, when you continue a game, it loads the game in position [0]

### 3.- Saved Games List

A new component "savedgames" is created to show the list.
It's constructor loads the names list from myhttpService and shows them using a \*ngFor loop
I've added some CSS using the reknown library bootstrap

The myhttp service implements a few more functions to work with games. The basic ones are the one that saves and the one that uploads a game, but there are other functions to get the whole list of names (this is used in this part), to insert a name on the list, to delete it, and to get the URI of a game given its index number.

### 4.- Saved Game Name

A new form is implemented and is shown when you click the "save game" button.
It picks the inserted name and then it calls the http Service to upload the game and insert the name given and the URL returned by the post function on the name and URI lists

### 5.- Delete Game

I used here some more bootstrap CSS to prettify the appearance.
Each saved game row in the list renders a label with the game name, and, attached to it, a "continue" and "delete" buttons. Each button has an ID linked to the saved game ID

When you clic on any of the buttons a handler function is called that deletes/continues the game.

I must note here that first thing that is done when an ID argument is passed, it extracts this ID. In case there's no iD, it takes 0 as ID. This way, if you navigate to /continue with no ID, it continues the last saved game, witch is stored at 0 position.

When you navigate to either /continue or /delete, the parameter is taken into account. The corresponding function is called to either continue or delete the saved game.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
