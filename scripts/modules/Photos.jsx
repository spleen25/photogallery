import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useModal } from 'hooks';

import {
  ButtonLink,
  Modal,
  Loader,
  Slider,
  Wrapper
} from 'components/controls';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 17%;
  min-height: 17%;
  margin: 16px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
`;

const CardMedia = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PhotoPage = ({ loadingPhotos, errorPhotos, dataPhotos }) => {
  const history = useHistory();
  const { id } = useParams();

  const filteredDataPhotos = dataPhotos.filter(
    object => object.albumId === Number(id)
  );

  const [photoModalOpen, setPhotoModalOpen] = useModal();
  const [indexPhoto, setIndexPhoto] = useState(0);

  const onPhotoModalOpen = index => {
    setPhotoModalOpen(true);
    setIndexPhoto(index);
  };

  const onPhotoModalClose = () => {
    setPhotoModalOpen(false);
  };

  return loadingPhotos ? (
    <Loader />
  ) : (
    <>
      <ButtonLink onClick={history.goBack}>Go back</ButtonLink>

      <Wrapper>
        <Modal isOpen={photoModalOpen} onClose={onPhotoModalClose}>
          <Slider
            indexPhoto={indexPhoto}
            images={filteredDataPhotos}
            setIndexPhoto={setIndexPhoto}
          />
        </Modal>

        {filteredDataPhotos.map(item => (
          <Card
            key={item.id}
            onClick={() => {
              onPhotoModalOpen(filteredDataPhotos.indexOf(item));
            }}
          >
            <CardMedia src={item.thumbnailUrl} alt={item.title} />
          </Card>
        ))}
      </Wrapper>
    </>
  );
};

PhotoPage.propTypes = {
  loadingPhotos: PropTypes.bool.isRequired,
  errorPhotos: PropTypes.bool.isRequired,
  dataPhotos: PropTypes.object.isRequired
};

export default PhotoPage;
