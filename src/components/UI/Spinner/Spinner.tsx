import React from 'react';
import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

const Spinner: React.FC<{ loading: boolean }> = ({ loading }) => {
  const override = css`
    display: block;
    margin: 2rem auto;
  `;
<<<<<<< HEAD:src/components/UI/Spinner.tsx
  return <MoonLoader loading={loading} css={override} size={100} />;
=======
  return (
    <div style={{ width: '100%' }}>
      <MoonLoader loading={loading} css={override} size={100} />
    </div>
  );
>>>>>>> styling:src/components/UI/Spinner/Spinner.tsx
};

export default Spinner;
