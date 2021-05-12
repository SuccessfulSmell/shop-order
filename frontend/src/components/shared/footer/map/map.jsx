import React from 'react';

import Iframe from "react-iframe";
import './map.module.scss'

function Map(props) {
    return (
        <div>
            <Iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=minsk+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
            />
        </div>
    );
}

export default Map;