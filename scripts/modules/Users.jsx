import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import { ButtonLink, Loader, Wrapper } from 'components/controls';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 17%;
  margin: 16px;
  padding: 16px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const CardTitle = styled.div`
  font-weight: 500;
  margin-bottom: 8px;
`;

const CardRow = styled.div`
  align-self: flex-start;
  margin-bottom: 4px;
`;
const CardDataName = styled.span`
  margin-right: 4px;
  font-weight: 500;
`;

const CardData = styled.span``;

const UsersPage = ({ loadingUsers, errorUsers, dataUsers }) => {
  return loadingUsers ? (
    <Loader />
  ) : (
    <Wrapper>
      {dataUsers.map(item => (
        <Card className="calendar-item" key={item.id}>
          <CardTitle>{item.name}</CardTitle>
          <CardRow>
            <CardDataName>Company:</CardDataName>
            <CardData>{item.company.name}</CardData>
          </CardRow>
          <CardRow>
            <CardDataName>Email:</CardDataName>
            <CardData>{item.email}</CardData>
          </CardRow>
          <CardRow>
            <CardDataName>Website:</CardDataName>
            <CardData>{item.website}</CardData>
          </CardRow>
          <ButtonLink to={`/album/${item.id}`}>View albums</ButtonLink>
        </Card>
      ))}
    </Wrapper>
  );
};

UsersPage.propTypes = {
  loadingUsers: PropTypes.bool.isRequired,
  errorUsers: PropTypes.bool.isRequired,
  dataUsers: PropTypes.object.isRequired
};

export default UsersPage;
