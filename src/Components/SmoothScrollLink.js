import React from "react";
import Link from "./Link";


const SmoothScrollLink = ({text, href = "#about"}) => {
  return (
      <Link className='smoothscroll' text={text} href={href} title={text}/>
  );
};

export default SmoothScrollLink;
