import React from "react";
import Social from "./Socials";
import SmoothScrollLink from "./SmoothScrollLink";

const Banner = ({data: {name, social}}) => {
    // console.log('social', props.data);
    return (
        <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">I'm {name}.</h1>
                <h3>
                    I'm a Manila based <span>graphic designer</span>,{" "}
                    <span>illustrator</span> and <span>webdesigner</span> creating awesome
                    and effective visual identities for companies of all sizes around the
                    globe. Let's{" "}
                    <SmoothScrollLink text="start scrolling"/>
                    and learn more{" "}
                    <SmoothScrollLink text="about me"/>.
                </h3>
                <hr/>
                <Social social={social}/>
            </div>
        </div>
    );
};

export default Banner;
