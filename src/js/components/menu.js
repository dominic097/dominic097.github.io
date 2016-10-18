"use strict"

import React from 'react';


var Menu = React.createClass({
    toggleMenu(el, e) {
        e.preventDefault();
        $('.nav.option-set').slideToggle(150);
    },

    componentDidMount() {
        $(".nav a").on("click", function() {
            $("#nav").removeClass("in").addClass("collapse")
        });
    },

    render() {
        return (
            <header className="navbar navbar-transparent navbar-fixed-top darken minified col-md-12">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <nav id="nav" className="navbar-collapse collapse" role="navigation">
                        <ul className="nav navbar-nav">
                            <li className={this.props.hash.indexOf('home') > 0 ? "active" : ""}><a href="#home">Home</a></li>
                            <li className="hide">
                                <a href="#portfolio">Portfolio</a></li>
                            <li className={this.props.hash.indexOf('about') > 0 ? "active" : ""}>
                                <a href="#about">About</a></li>
                            <li className={this.props.hash.indexOf('contact') > 0 ? "active" : ""}>
                                <a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
});

module.exports = Menu;
