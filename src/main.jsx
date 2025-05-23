import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './Store.js'
import toast, { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
      <App />
      <Toaster />
    </Provider>
)
