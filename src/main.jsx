import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './components/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <app /,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <AuthLayout
        ),
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);


