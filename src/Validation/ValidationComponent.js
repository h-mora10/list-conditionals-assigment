import React from 'react';

const ValidationComponent = (props) => {
    let textValidation = (
        <div>
            <p>Text too short</p>
        </div>
    );

    if (props.textLenght >= 5) {
        textValidation = (
            <div>
                <p>Text long enough</p>
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