import React from 'react';
import { css } from '@emotion/react'; // Import css function from emotion
import { SyncLoader } from 'react-spinners'; // Import SyncLoader spinner component

const Spinner = () => {
  return (
    <div className="spinner-container">
      <SyncLoader color="#4db5ff" loading={true} css={override} size={15} />
    </div>
  );
}

// Define custom styles for the spinner
const override = css`
  display: block;
  margin: 0 auto;
`;

export default Spinner;
