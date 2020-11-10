import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
