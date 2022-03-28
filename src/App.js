import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route, Redirect, Navigate} from "react-router-dom";
import StartApp from './components/StartApp/StartApp';
import Home from './components/Home/Home';

const App = ()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartApp />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </Router>
        
    )
}


export default App;