import React from 'react';
import './Field.css';
import propTypes from 'prop-types';

const Field = (props) => {
    const {textarea, onChange, value, className, label, rows, cols} = props;
    return (
        <div className="field">
            <input
                type={textarea ? 'textarea' : 'text'}
                onChange={onChange}
                value={value}
                className={className}
                placeholder={label}
                rows={rows}
                cols={cols}
            />
        </div>
    );
}

Field.propTypes = {
    onChange: propTypes.func.isReqired,
    value: propTypes.string.isReqired,
    label: propTypes.string.isReqired,
    textarea: propTypes.bool.isReqired
}
Field.defaultProps = {
    textarea: false,
}
export default Field;