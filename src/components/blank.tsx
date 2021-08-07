import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import Form from './form';
import FormResult from './formResult';
import { Result } from './interface';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      marginTop: 50,
      borderColor: color
    }}
  />
);

const Blank: React.FC = (): JSX.Element => {
  const [results, setResults] = useState<Result[]>([]);

  return (
    <>
      <Form setResults={setResults} />
      {results.length !== 0 && <ColoredLine color="#9d762f" />}
      <div className="result-blank">
        {results.length !== 0 &&
          results.map((result: Result) => (
            <FormResult result={result} key={result.id} />
          ))}
      </div>
    </>
  );
};

ColoredLine.propTypes = {
  color: PropTypes.string.isRequired
};

export default Blank;
