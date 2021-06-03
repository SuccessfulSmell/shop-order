import React from 'react';

import Iframe from "react-iframe";
import './map.module.scss'

function Map(props) {
    return (
        <div>
            <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.7948286786886!2d27.07042341587286!3d54.25451538017938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46db8b897059f12b%3A0xcd8a683d6544e6ad!2z0YPQuy4gMSDQnNCw0Y8gNzgsINCa0YDQsNGB0L3QvtC1!5e0!3m2!1sru!2sby!4v1622753951346!5m2!1sru!2sby"
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