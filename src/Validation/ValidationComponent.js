import React from 'react';

const ValidationComponent = (props) => {
    let textValidation = null;

    if (props.textLenght >= 5) {
        textValidation = (
            <div>
                <p>Text long enough</p>
            </div>
        );
    } else {
        textValidation = (
            <div>
                <p>Text too short</p>
            </div>
        );
    }

    return (
        <div>
            {textValidation}
        </div>
    );
};

export default ValidationComponent;