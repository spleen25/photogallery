import React from 'react';
import * as PropTypes from 'prop-types';

import Button from './Button';

const Slider = ({ indexPhoto, images, setIndexPhoto }) => {
  const onSlideLeftClick = () => {
    const nextIndex = indexPhoto - 1;
    if (nextIndex < 0) {
      setIndexPhoto(images.length - 1);
    } else {
      setIndexPhoto(nextIndex);
    }
  };
  const onSlideRightClick = () => {
    setIndexPhoto((indexPhoto + 1) % images.length);
  };

  return (
    <>
      <Button onClick={onSlideLeftClick}>LEFT</Button>
      <img src={images[indexPhoto].url} alt={images[indexPhoto].title} />
      <Button onClick={onSlideRightClick}>RIGHT</Button>
    </>
  );
};

Slider.propTypes = {
  indexPhoto: PropTypes.number,
  images: PropTypes.array,
  setIndexPhoto: PropTypes.func
};

export default Slider;
