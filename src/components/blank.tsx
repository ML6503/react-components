import React, { useState } from 'react';
import '../styles.css';
import Form from './form';
import { Result, FormProps } from './interface';

const Blank = () => {
//   const [formCounter, setFormCounter] = useState<number>(0);
  const [results, setResults] = useState<Result[]>([]);

  console.log('TEST RESULTS', results);
  const formResult = (result: Result) => (
    <React.Fragment key={result.id}>
      <p>COVID-19 Test Result</p>
      {/* <p>Filled Form id: {result.id}</p> */}
      {/* <p>Dated: {result.date}</p> */}
      <dl>
        {Object.keys(result).map((field) => (
          <React.Fragment key={field}>
            <dt>{field}</dt>
            <dd>{result[field]}</dd>
          </React.Fragment>
        ))}
      </dl>
    </React.Fragment>
  );

  return (
    <>
      <Form
        // setFormCounter={setFormCounter}
        // formCounter={formCounter}
        setResults={setResults}
        results={results}
      />
      {results.length !== 0 &&
        results.map((result: Result) => formResult(result))}      
    </>
  );
};

export default Blank;
