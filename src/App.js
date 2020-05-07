import React from 'react';
import Home from "./components/Home";
import {Provider} from 'react-redux'
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Home/>
            </div>
        </Provider>
    );
}

export default App;
