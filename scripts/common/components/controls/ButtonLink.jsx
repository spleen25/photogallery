import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(Link)`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 6px 8px;
  border-radius: 4px;
  background-color: transparent;
  color: black;
  font-weight: 500;
  text-decoration: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const ButtonLink = ({ to, onClick, children }) => {
  return (
    <StyledButton to={to} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default ButtonLink;
