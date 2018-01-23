import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Login from '../components/Login';

const Main = () =>(
    <main className="container">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/About" component={About} />
            <Route  path="/Pricing" component={Pricing} />
            <Route  path="/Login" component={Login} />
        </Switch>
    </main>
)

export default Main