"use strict"

import React from 'react';

var ImgContainer = React.createClass({
    render: function () {
        return (
            <img src="res/image/4P8A4958_edited.jpg" className="profile-pic"></img>
        );
    }
});

var MenuItems = React.createClass({
    render: function () {
        return (
            <ul className="nav option-set scroll-link">
                <li className="active"><a href="#home"><i className="fa fa-coffee"></i> Home</a></li>
                <li className="">
                    <a href="#portfolio"><i className="fa fa-camera"></i> Portfolio</a></li>
                <li className="">
                    <a href="#about"><i className="fa fa-user"></i> About</a></li>
                <li className="">
                    <a href="#contact"><i className="fa fa-envelope"></i> Contact</a></li>
            </ul>
        );
    }
});

var Menu = React.createClass({
    toggleMenu(el, e) {
        e.preventDefault();
        $('.nav.option-set').slideToggle(150);
    },

    handleResize: function(e) {
        $('.nav.option-set').removeAttr("style");
    },

    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    },


    render() {
        return (
            <div className="navbar affix main-trend-navbar">
                <div className="navbar-inner">
                    <ImgContainer></ImgContainer>
                    <a href="#" className="small-nav-toggle" onClick={this.toggleMenu} ><i className="fa fa-bars"></i></a>
                    <div className="clearBoth"></div>
                    <MenuItems></MenuItems>
                </div>
            </div>
        )
    }
});

module.exports = Menu;
