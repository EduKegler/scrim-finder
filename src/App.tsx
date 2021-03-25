import React from 'react';
import Navbar from './components/navbar/Navbar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Teams from './pages/team/Teams';

const App = React.memo(() =>
    <BrowserRouter>
        <Navbar />
        <div className='cf-content'>
            <Switch>
                <Route path='/' exact={true}><Home /></Route>
                <Route path='/teams'> <Teams /> </Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;