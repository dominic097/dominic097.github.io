"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute, Link, IndexLink, browserHistory} from 'react-router'
import * as bootStrap from 'bootstrap';

//importing Components 

const Menu = require('./components/menu');


// The parent App - Sets navbar and other bootstrap defaults
const App = ({children}) => (
    <section id="app-react" className="row">
        <section className="col-md-3 col-xs-12 col-sm-12 navWrapper">
            <Menu></Menu>
        </section>
        <section className="col-md-9 col-xs-12 col-sm-12 appBodyWrapper"></section>
    </section>
);

var routes = (
    <Route path="/" component={App}>
        <Route name="home" path="home" handler={Menu}/>
    </Route>

);

//
// Router.run(routes, Router.HashLocation, function (Handler) {
//     React.render(<Handler />, document.getElementById('app'));
// });
// Router.run(routes,  document.getElementById('app'));

ReactDOM.render(<App></App>, document.getElementById('app'));