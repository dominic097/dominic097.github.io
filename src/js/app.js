"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'
import * as bootStrap from 'bootstrap';

//importing Components

const Menu = require('./components/menu');
const Home = require('./components/home');
const About = require('./components/about');


// The parent App - Sets navbar and other bootstrap defaults
const App = React.createClass({
    render() {
        return (
            <section id="app-react" className="row">
                <Menu hash={this.props.location.hash}></Menu>
                <section className="container-fluid appBodyWrapper">
                    {(function(_hash) {
                       switch (_hash) {
                            case "#home":
                                return <Home></Home>
                           case "#about":
                               return <About></About>
                            default:
                                return <Home></Home>
                        }
                    })(this.props.location.hash)}
                </section>
            </section>
        );
    }
});

// ReactDOM.render(<App></App>, document.getElementById('app'));

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="home" component={Home}/>
            <Route path="about" component={About}/>
            <Route path="*" component={Home}/>
        </Route>
    </Router>
), document.getElementById('app'));