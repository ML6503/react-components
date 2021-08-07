import React from 'react';
import { InferProps } from 'prop-types';
import { Result, ResultProps } from './interface';

const FormResult: React.FC<ResultProps> = ({
  result
}: InferProps<typeof FormResult.propTypes>) => (
  <div className="result-single" key={result.id}>
    <p className="result-para">COVID-19 Test</p>
    <dl>
      {Object.keys(result as Result).map((field) => (
        <React.Fragment key={field}>
          <dt className="result-field">{field}: </dt>
          <dd>{result[field]}</dd>
        </React.Fragment>
      ))}
    </dl>
  </div>
);

export default FormResult;
