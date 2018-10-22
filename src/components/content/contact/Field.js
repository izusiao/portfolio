import React from 'react';
import './Field.css';
import propTypes from 'prop-types';

const Field = (props) => {
    const {onChange, value, label} = props;
    return (
        <div className="field">
            <input
                type="text"
                onChange={onChange}
                value={value}
                placeholder={label}
            />
        </div>
    );
}

Field.propTypes = {
    onChange: propTypes.func.isReqired,
    value: propTypes.string.isReqired,
    label: propTypes.string.isReqired,
}

export default Field;