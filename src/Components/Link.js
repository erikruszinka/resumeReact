import React from "react";


const Link = ({text, href, className, title}) => {
    return (
        <a className={className} href={href} title={title}>
            {text}
        </a>
    );
};

export default Link;
