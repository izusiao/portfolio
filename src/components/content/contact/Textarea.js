import React from 'react';
import './Field.css';
import propTypes from 'prop-types';

const Textarea = (props) => {
    const {onChange, value, label} = props;
    return (
        <div className="field">
            <textarea
                rows={10}
                onChange={onChange}
                value={value}
                placeholder={label}
            />
        </div>
    );
}

Textarea.propTypes = {
    onChange: propTypes.func.isReqired,
    value: propTypes.string.isReqired,
    label: propTypes.string.isReqired,
}

export default Textarea;