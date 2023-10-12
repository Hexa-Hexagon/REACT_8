import React from 'react';
import { social } from './data';
const Social = () => {
    return (
        <ul className="social-icons">
          {social.map(icon=><li id={icon.id}><a href={icon.url}>{icon.icon}</a></li>)}
        </ul>
    );
};

export default Social;