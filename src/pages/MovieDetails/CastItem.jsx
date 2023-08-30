import PropTypes from 'prop-types';
import React from 'react';

import { Base__Url__Img__Actor } from 'utils/constans';
import { CastItemStyle } from './MovieDetails.styled';

export default function CastItem({ name, img, character }) {
  return (
    <CastItemStyle>
      <img src={Base__Url__Img__Actor + img} alt="" />
      <p>{name}</p>
      <p>Character: {character}</p>
    </CastItemStyle>
  );
}

CastItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  character: PropTypes.string,
};
