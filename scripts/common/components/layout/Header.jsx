import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #e91e63;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>Photo Gallery</Title>
    </StyledHeader>
  );
};

export default Header;
