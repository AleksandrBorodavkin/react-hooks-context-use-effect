import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../hooks/useJsonFetch';
import LoaderCentered from './LoaderCentered';
import Error from './Error';

function Details({ info }) {
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}${info.id}.json`);

  return (
    <>
      { isLoading && <LoaderCentered /> }
      { error && <Error /> }
      { !isLoading && data && (
        <div className="Details">
          <img
            className="Details__avatar"
            height="300px"
            alt={data.name}
            src={data.avatar}
          />

          <h2 className="Details__name">{data.name}</h2>

          <ul className="Details__list">
            <li className="Details-list__item">
              {`City: ${data.details.city}`}
            </li>
            <li className="Details-list__item">
              {`Company: ${data.details.company}`}
            </li>
            <li className="Details-list__item">
              {`Position: ${data.details.position}`}
            </li>
          </ul>
        </div>
      ) }
    </>
  );
}

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Details;