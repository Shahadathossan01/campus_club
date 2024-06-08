import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router.jsx';
import { StoreProvider } from 'easy-peasy';
import store from './store/index.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    
    </RouterProvider>
    
  </React.StrictMode>,
)
