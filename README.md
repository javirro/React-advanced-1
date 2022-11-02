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

Once we have created the slice we have to export the actions of our  slice and the reducer. In this way, we could use it in any place of our application.

Next step is creating the store. In a new file we will use the method _configureStore()_. This object has a parameter called _reducer_ and it receives each of the slice that we have created. All the created slices are grouped in this store object.

#### How To use the store that we have created
We are going to use the react-redux hooks (_useSelector_ and _useDispatch_). The first one is used to get the value of the state of the reducer that we want.
