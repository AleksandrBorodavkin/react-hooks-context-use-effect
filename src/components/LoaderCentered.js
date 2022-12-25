import React from 'react';
import { Loader } from 'semantic-ui-react';

const LoaderCentered = () => (
  <div className="Loader__container">
    <Loader active inline="centered" />
  </div>
);

export default LoaderCentered;