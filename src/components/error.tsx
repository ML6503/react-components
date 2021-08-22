import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { getNullError } from '../redux/articlesSlice';
import '../app.css';
import { ErrorProps } from '../utils/interface';

const Error = ({ error }: ErrorProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className="error">
      <p>Error: {error}</p>
      <button
        className="error-back-btn"
        onClick={() => dispatch(getNullError())}
        type="button"
      >
        back
      </button>
    </div>
  );
};

export default Error;
