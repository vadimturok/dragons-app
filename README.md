# Dragons Application

> Dragons application provides information about famous rockets.
> Live demo
> [_here_](https://candid-granita-4d7759.netlify.app/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [Technologies Used](#technologies-used)
* [Functionality](#functionality)
* [Setup](#setup)
* [Deploying](#deploying)
* [Project Status](#project-status)
* [Contact](#contact)
<!-- * [License](#license) -->


## Technologies Used
- React - version 18.2.0
- Moment - version 2.29.3
- Redux Toolkit - version 1.8.5
- TypeScript - version 4.8.3
- SCSS - version 0.2.4
- Jest - version 29.0.3
- Firebase - version 9.10.0


## Functionality
- Displaying detailed info about rocket
- Displaying list of rockets
- Authorization & Authentication via Firebase authentication
- Adding rockets to user's favorites
- Removing rockets from user's favorites


## Setup
To run application locally create in the 'src' folder file 'firebaseconfig.js' and provide configuration object:

```
const firebaseConfig = {
    apiKey: "<your api key>",
    authDomain: "<your auth domain>",
    projectId: "<your project id>",
    storageBucket: "<your storage bucket>",
    messagingSenderId: "<your messaging sender id>",
    appId: "<your app id>"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
```

Install all dependencies:

```
npm install
```


To run application in development mode:

```
npm start
```

To create production build:

```
npm run build
```

To run tests:

```
npm run test
```

## Deploying
Commit and push changes to run CI pipeline. Production build will be automatically deployed to Netlfiy. 


## Project Status
Project is: _completed_


## Contact
Contact with me via e-mail: turokvadim2510@gmail.com


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->
