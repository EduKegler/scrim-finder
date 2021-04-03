import React from 'react';
import Navbar from './components/navbar/Navbar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Teams from './pages/team/Teams';
import CreateMatch from './pages/createMatch/CreateMatch';

const App = React.memo(() =>
    <BrowserRouter>
        <Navbar />
        <div className='cf-content'>
            <Switch>
                <Route path='/' exact={true}><Home /></Route>
                <Route path='/teams'> <Teams /> </Route>
                <Route path='/calendar'> <Teams /> </Route>
                <Route path='/match/create'> <CreateMatch /> </Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;