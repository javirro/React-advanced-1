import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home';
import ShowData from './routes/ShowData';
import PostData from './routes/PostData';
import store from './store/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show" element={<ShowData />} >
              <Route path="" element={<div>Selecciona un pokemon...</div>} />
              <Route path=":id" element={<PostData />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
