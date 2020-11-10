import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px;
  padding: 8px;
  border-radius: 4px;
  background-color: #e91e63;
  color: white;
  border: 0;
  font-weight: 500;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: #a31545;
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
