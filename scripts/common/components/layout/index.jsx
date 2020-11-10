import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element
};

export { Layout as default };
