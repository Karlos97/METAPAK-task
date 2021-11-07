import React from 'react';
import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

const Spinner: React.FC<{ loading: boolean }> = ({ loading }) => {
  const override = css`
    display: block;
    margin: 2rem auto;
  `;
  return <MoonLoader loading={loading} css={override} size={100} />;
};

export default Spinner;
