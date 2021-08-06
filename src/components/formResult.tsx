import React from 'react';

const FormResult = ({ result }) => (
    <div className="result-single" key={result.id}>
      <p className="result-para">COVID-19 Test</p>   
      <dl>
        {Object.keys(result).map((field) => (
          <React.Fragment key={field}>
            <dt className="result-field">{field}: </dt>
            <dd>{result[field]}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );

  export default FormResult;