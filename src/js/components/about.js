/**
 * Created by dominic on 18/10/16.
 */
"use strict";

import React from 'react';

var ImgContainer = React.createClass({
    render: function () {
        return (
            <section>
                <img src="res/image/4P8A4958_edited.jpg" className="profile-pic img-center img-responsive"></img>
                <div className="name-title">
                    <h2>Dominic</h2>
                    <h5>JS/Node Developer</h5>
                </div>
            </section>
        );
    }
});

var AboutTag = React.createClass({
    render() {
        return (<div className="row">
            <div className="section-title item_bottom item_center text-center">
                <h1>About <span>Me</span></h1>
            </div>
        </div>);
    }
})

var SelfQuote = React.createClass({
    render: function () {
        return (
            <div className="col-md-4 col-md-4 item_center item_bottom">
                <p className="quoteline">
                    Be who you are and say what you feel, because those who mind don't matter, and those who matter
                    don't mind.
                </p>
                <p>
                    Hello, I'm a JS/Node Developer &amp; Front End Developer from Chennai, India.
                </p>
                <p>
                    I currently work at Intel, where I spend most of my time crafting and working on awesome projects.
                    Lorem ipsum dolor sit amet consectetuer Integer eleifend Curabitur id ut. Quisque Aenean ut pede id
                    elit ligula est mollis sapien magna. Urna turpis quis sagittis at ac Sed augue habitant tortor elit.
                    Dolor Quisque et elit aliquam vitae habitant.
                </p>
                <p className="text-right">
                    <img src="images/signature.png" alt="signature"></img>
                </p>
            </div>
        );
    }
});

var BioSummary = React.createClass({
    render: function () {
        return (
            <div className="col-md-4 item_bottom">
                <ul className="fa-ul">
                    <li><i className="fa fa-li fa-calendar"></i><strong>Birthdate</strong> : 02/09/1982</li>
                    <li><i className="fa fa-li fa-mobile"></i><strong>Phone</strong> : +1 343-234-4343</li>
                    <li><i className="fa fa-li fa-envelope-o"></i><strong>Email</strong> : john@example.com</li>
                    <li><i className="fa fa-li fa-globe"></i><strong>Website</strong> : www.example.com</li>
                    <li><i className="fa fa-li fa-home"></i><strong>Adresse</strong> : 12 Segun Bagicha, 10th
                        Floor,<br></br>Dhaka
                        1000, Bangladesh.
                    </li>
                </ul>
                <div className="number-counters text-center new-line">
                    <div className="counters-item">
                        <i className="fa fa-group fa-2x"></i>
                        <strong data-to="150">150</strong>
                        <p>
                            Happy Clients
                        </p>
                    </div>
                    <div className="counters-item">
                        <i className="fa fa-flag fa-2x"></i>
                        <strong data-to="7">7</strong>
                        <p>
                            Year Experience
                        </p>
                    </div>
                    <div className="counters-item">
                        <i className="fa fa-trophy fa-2x"></i>
                        <strong data-to="13">13</strong>
                        <p>
                            Awards Won
                        </p>
                    </div>
                    <div className="counters-item">
                        <i className="fa fa-thumbs-up fa-2x"></i>
                        <strong data-to="520">520</strong>
                        <p>
                            Projects Done
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});

var About = React.createClass({
    render() {
        return (
            <section id="about" className="container bg1">
                <section className="row">
                    <AboutTag></AboutTag>
                    <section className="row">
                        <section className="col-md-4 text-center item_bottom">
                            <ImgContainer></ImgContainer>
                        </section>
                        <SelfQuote></SelfQuote>
                        <BioSummary></BioSummary>
                    </section>
                </section>
            </section>
        );
    }
});

module.exports = About;