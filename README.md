# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Redux Toolkit
### `npm install redux react-redux  @reduxjs/toolkit`


To use  redux ToolKit, first of all we have to create the slice. We will create a different slice for each purpose (slice = reducer). We use a method called _CreateSlice()_. When creating the slice we define the following parameters:


* **name:** The name of the slice
* **initialState:** The value of state at the beginning
* **reducers** : This is an object with all the actions that we want to define

