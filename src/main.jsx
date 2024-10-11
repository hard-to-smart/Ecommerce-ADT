import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Allroutes } from './router/AllRoutes.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <Allroutes/>
    </Provider>
 
)
