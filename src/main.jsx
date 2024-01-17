import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import './assets/icons/_icons.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchCapitals } from './reducers/cities'

store.dispatch(fetchCapitals())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
