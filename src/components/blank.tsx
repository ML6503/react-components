import React, { useState } from 'react';
import '../styles.css';
import Form from './form';
import { Result, FormProps } from './interface';

const Blank = () => {
//   const [formCounter, setFormCounter] = useState<number>(0);
  const [results, setResults] = useState<Result[]>([]);

  console.log('TEST RESULTS', results);
  const formResult = (result: Result) => (
    <div className="result-single" key={result.id}>
      <p className="result-para">COVID-19 Test</p>
      {/* <p>Filled Form id: {result.id}</p> */}
      {/* <p>Dated: {result.date}</p> */}
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

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            marginTop: 50,
            // color: color,           
            borderColor: color,           
        }}
    />
);

  return (
    <>
      <Form
        // setFormCounter={setFormCounter}
        // formCounter={formCounter}
        setResults={setResults}
        results={results}
      />
    
      {results.length !== 0 && <ColoredLine color="#9d762f" />}
      <div className="result-blank">
       {results.length !== 0 &&
        results.map((result: Result) => formResult(result))} 
      </div>     
    </>
  );
};

export default Blank;
