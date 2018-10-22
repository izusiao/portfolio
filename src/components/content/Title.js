import React from 'react';
//import './Title.css';
import styled from 'styled-components'

const StyledTitle = styled.h1`
    color: #442944;
    border-bottom: ${props => props.underline ? '4px solid' : 'none'}
`;
const Title = (props) => {
    const { title } = props;
    return(
        <StyledTitle underline>
            {title}
        </StyledTitle>
    );
}

/* const Title = (props) => {
    const { className, title } = props;
    return(
        <div className="title-h1">
            <h1 className={className}>{title}</h1>
        </div>
    );
} */

export default Title;