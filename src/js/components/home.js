/**
 * Created by dominic on 18/10/16.
 */
"use strict"

import React from 'react';

var Home = React.createClass({

    componentDidMount(){
        // $("#teaser").parallax("100%", 0.3);

        $(".rotate").textrotator({
            animation: "fade",
            separator: ",",
            speed: 2000
        });



        $(".loading").textrotator({
            animation: "fade",
            speed: 1000
        });

    },

    render() {
        return (<section id="teaser" className="clearfix">
            <div className="overlay">
                <div className="holder960 clearfix">
                    <div className="teaserTitle">
                        <h1><span className="rotate"> My name is Dominic, I am a Web Developer, I am a Web Developer</span></h1>
                    </div>
                    <div className="captions">
                        <p>A Talented Freelancer Located In Our Lovely Earth</p>
                    </div>
                </div>
            </div>
        </section>);
    }
});

module.exports = Home;