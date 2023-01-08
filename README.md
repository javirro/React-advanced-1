# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode. The page will reload when you make changes.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Redux Toolkit
### `npm install redux react-redux  @reduxjs/toolkit`


To use  redux ToolKit, first of all we have to create the slice. We will create a different slice for each purpose (slice = reducer). We use a method called _CreateSlice()_. When creating the slice we define the following parameters:


* **name:** The name of the slice
* **initialState:** The value of state at the beginning
* **reducers** : This is an object with all the actions that we want to define

Once we have created the slice we have to export the actions of our  slice and the reducer. In this way, we could use it in any place of our application.

Next step is creating the store. In a new file we will use the method _configureStore()_. This object has a parameter called _reducer_ and it receives each of the slice that we have created. All the created slices are grouped in this store object.

#### How To use the store that we have created
The first step is import the store that we have created and the component Provider from 'react-redux' in our App.js file. We have to wrap all the routes inside the provider component. This component has a prop called store in which we have to use the store that we have created.

After the previous configuration, We are going to use the react-redux hooks (_useSelector_ and _useDispatch_). The first one is used to get the value of the state of the reducer that we want and the second is used to update the state value.

* `const user = useSelector (s => s.user)`
* `const dispatch = useDispatch()`

Furthermore, we have  to import the reducer actions that we are going to use(dispatch).

* `dispatch(login(userInfo))`
* `dispatch(logout())`

## React Router

With React router we can use several routes inside our application.

### `npm install react-router-dom`

#### Using routes without Params

To use React router in our file App.js  we have to import :

* `import { BrowserRouter, Route, Routes } from 'react-router-dom'`

This is the way to define a couple of routes without params:

 ```
 <BrowserRouter>
    <Router>
     <Route path="/route" element = {<RouteComponent />}>
      <Route path="/show" element = {<ShowComponent />}>
    </Router>
 </BrowserRouter>

 ```
To navigate from one router to another, we have two different ways to do it.
* Using JSX elements like: **```<Link> <NavLink>```**
* Using hooks: **useNavigate**
* Using JSX Element: **```<Navigate>```**

The JSX elements work as <a> tag. But it permits going to another router WITHOUT refreshing the page, so, we can keep the state of common components in the page.

The difference between Link and NavLik is that NavLink has an active attribute an it permits make the difference between the different Link and we can know what is selected in each moment.

 ```
    <Link to="/route"> Home </Link>
    <NavLink to="/route"> Home </NavLink>
 ```

 The other way to move from one router to another is using the hook: useNavigate()

 ```
   const navigate = useNavigate()
   navigate("/route")
 ```

The JSX element **```<Navigate to="/route">```** permits move to specific router when the page is render. It is interesting to go to that route without waiting any action (fetching data, click, submit, etc)
#### Using routes with Params

 ```
 <BrowserRouter>
    <Router>
     <Route path="/route/:id" element = {<RouteComponent />}>
      <Route path="/show/:id" element = {<ShowComponent />}>
    </Router>
 </BrowserRouter>
```

When we are inside a route, to obtain the params:

```
const { id } = useParams()
```

#### Nested routes

In this case, we are a route with some parameters inside other one.
 ```
     <BrowserRouter>
          <Routes>
            <Route path="/show" element={<ShowData />} >
              <Route path="" element={<div>Selecciona un pokemon...</div>} />
              <Route path=":id" element={<PostData />} />
            </Route>
          </Routes>
        </BrowserRouter>
```

One element which is frequently used with nested routes is: ```<Outlet />```. This component is used in the parents route to specify the part of the page in which we want to show the content of the child route. When we use **Outlet** we are keeping a part of the parent page in all the children pages.
