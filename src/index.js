import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/main.css"
import Home from "./pages/Home"
import SignIn from './pages/SignIn'
import User from "./pages/User"
import Error from "./pages/Error"
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/user" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  </Provider>
)