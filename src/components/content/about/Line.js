import React from 'react';

const Line = () => {
    const style = {
        width: "100%",
        height: "3px",
        background: "linear-gradient(to right, #e4e1e8, #442944, #e4e1e8)"
    }
    return(
        <div style={style}></div>
    )
}

export default Line;