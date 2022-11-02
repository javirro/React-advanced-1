import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './routes/Home';
import ShowData from './routes/ShowData';
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
  <div>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/show"  element={<ShowData />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  </div>
  );
}

export default App;
