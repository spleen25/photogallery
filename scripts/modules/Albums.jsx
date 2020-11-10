import React from 'react';
import * as PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonLink, Loader, Wrapper } from 'components/controls';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  margin: 16px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
`;

const CardMedia = styled.img`
  display: inline-block;
  width: 100%;
  height: 70%;
  object-fit: cover;
  background-color: #a31545;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  height: 30%;
  overflow: hidden;
`;

const CardTitle = styled.span`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: center;
`;

const AlbumPage = ({ loadingAlbums, errorAlbums, dataAlbums, dataPhotos }) => {
  const history = useHistory();
  const { id } = useParams();

  let theContent = [];
  if (dataAlbums && dataPhotos) {
    const filteredDataAlbums = dataAlbums.filter(
      object => object.userId === Number(id)
    );

    theContent = filteredDataAlbums.map(el => {
      let urlPhoto = '';
      let titlePhoto = '';

      dataPhotos.some(function(item) {
        urlPhoto = item.url;
        titlePhoto = item.title;

        return el.id === item.albumId;
      });

      return (
        <Card key={el.id}>
          <CardMedia src={urlPhoto} alt={titlePhoto} />
          <CardContent>
            <CardTitle>{el.title}</CardTitle>
            <ButtonLink to={`/photo/${el.id}`}>View photos</ButtonLink>
          </CardContent>
        </Card>
      );
    });
  } else {
    theContent = null;
  }

  return loadingAlbums ? (
    <Loader />
  ) : (
    <>
      <ButtonLink onClick={history.goBack}>Go back</ButtonLink>

      <Wrapper>{theContent}</Wrapper>
    </>
  );
};

AlbumPage.propTypes = {
  loadingAlbums: PropTypes.bool.isRequired,
  errorAlbums: PropTypes.bool.isRequired,
  dataAlbums: PropTypes.object.isRequired,
  dataPhotos: PropTypes.object.isRequired
};

export default AlbumPage;
