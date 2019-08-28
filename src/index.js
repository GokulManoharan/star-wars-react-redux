import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import App from './App'
import configureStore from './store/configureStore'
const store = configureStore()

const app = (
    <Provider store = { store}>
        <App />
    </Provider>
)

ReactDOM.render(<Provider store = { store}>
    <App />
</Provider>, document.getElementById('root'))