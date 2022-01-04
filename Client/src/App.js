import React from 'react'

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="header">
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    <NavLink activeClassName="active" to="/login">Login</NavLink>
                    <NavLink activeClassName="active" to="/dashboard"> Dashboard </NavLink>


                </div>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;