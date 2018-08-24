import React from "react";

const Social = ({social = []}) => (
  <ul className="social">
    {social.map(network => (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className} />
        </a>
      </li>
    ))}
  </ul>
);

export default Social;
