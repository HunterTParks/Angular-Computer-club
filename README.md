# Angular Computer Club Project
### By Hunter Parks

![logoofAngular][picture]
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

### Description
This App is designed for an after school Computer club for tracking who is currently enrolled into the club. With this current build, you can view everyone who is in the club and add members to the club. An Admin can edit current members and delete specific members from the database, in case they decide to quit.

***

### Specs
| Behavior | User Input | Web Output |
| -------- | ---------- | ---------- |
| Website will display the main page of the club | User enters the url `localhost:4200` | Website will display the main page, which is currently a blank slate with a hotbar on the top and bottom of the screen |
| Website will display all current members | User locates the button in the top left-hand corner marked <em>LineUp</em> or proceed to the URL `localhost:4200/lineup` | Website will load all of the currently enrolled members of the club |
| Website will display a specific user's information, including their name, age, and a basic info section | User navigates to `localhost:4200/lineup` and clicks on a name of a particular person they would like to see | Website will display enrolled person's information |
| Website will display the club's core message and what it is about | User locates the button also in the top right corner of the screen labeled <em>About</em> or proceed to the URL `localhost:4200/about` | Website will display information about the club |
| Admin can change the information on a particular person who is enrolled into the club | User clicks on the <em>Admin</em> button in the button left hand corner of the screen. From this point, they can edit any person they need to by going to their name and filling out the form. | `Larri` will be replaced with `Larry`|
| Admin can delete people who currently are not enrolled | User clicks on the <em>Admin</em> button in the button left hand corner of the screen. From this point, they can select the delete button under anyone's name. They will be given a confirm notice. If they choose to accept, the person will be deleted.| `Larry` has been removed from the database |

***

# Tutorial
* [Clone my github repo](https://github.com/HunterTParks/Angular-Computer-club)

* [Create account with Google's Cloud Database Firebase](https://firebase.google.com/)

* In the console of Firebase, create a new project

* Copy the scripts for later

* Create a .ts file called `api-keys.ts` in `/src/app/`

* Paste the file from your Firebase database into the .ts file like so...
```javascript
export var masterFireBaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "xxxxxxx",
  databaseURL: "xxxxxxxx",
  projectId: "xxxxxxxxxx",
  storageBucket: "xxxxxxxx",
  messagingSenderId: "xxxxxxxxxx"
}
```
* Run the following commands
```console
$ npm install
$ bower install
$ ng serve
```

***

### Known bugs
There are no known bugs at this point in time <small><em>yay</em></small>

### Support
If you find a bug in my code or are a bit confused how to use my program, email me at `hunter.thomas.parks@gmail.com`

### Angular help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

***

### Dependencies Used
* HTML
* CSS
* JAVASCRIPT
* NODE.JS
* BOOTSTRAP
* ANGULAR
* ANGULAR CLI

***

# COPYRIGHT
This software is licenced under the MIT licence

## COPYRIGHT 2017 @ *_Hunter Parks_*

[picture]: https://avatars6.githubusercontent.com/u/139426?v=4&s=400
