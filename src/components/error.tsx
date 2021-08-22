import React from "react";
import { useAppDispatch } from '../redux/hooks';
import { getNullError,  } from '../redux/articlesSlice';
import '../app.css';


const Error = ({error}) => {
    const dispatch = useAppDispatch();
  
    return (<div className="error">
    <p>Error: {error}</p>
    <button
      className="error-back-btn"
      onClick={() => dispatch(getNullError())}
      type="button"
    >
      back
    </button>
    </div>);
};

export default Error;
