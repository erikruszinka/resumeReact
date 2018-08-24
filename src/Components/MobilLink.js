import React from "react";
import Link from "./Link";


const MobilLink = ({text, href}) => {
  return (
      <Link className='mobile-btn' text={text} href={href} title={text}/>
  );
};

export default MobilLink;
