import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../hooks/useJsonFetch';
import LoaderCentered from './LoaderCentered';
import Error from './Error';

function List({ findUser }) {
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}users.json`);

  return (
    <>
      { isLoading && <LoaderCentered />}
      { error && <Error /> }
      { !isLoading && data && (
        <ul className="List">
          {
            data.map((el) => (
              <li
                className="List__item"
                onClick={() => findUser(el)}
                key={el.id}
                aria-hidden
              >
                {el.name}
              </li>
            ))
          }
        </ul>
      )}
    </>
  );
}

List.propTypes = {
  findUser: PropTypes.func.isRequired,
};

export default List;