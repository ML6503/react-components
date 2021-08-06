import React, { useState } from 'react';
import '../styles.css';
import Form from './form';
import FormResult from './formResult';
import { Result} from './interface';

const Blank = () => {
  const [results, setResults] = useState<Result[]>([]);

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            marginTop: 50,               
            borderColor: color          
        }}
    />
);

  return (
    <>
      <Form       
        setResults={setResults}       
      />    
      {results.length !== 0 && <ColoredLine color="#9d762f" />}
      <div className="result-blank">
       {results.length !== 0 &&
        results.map((result: Result) => <FormResult result={result} key={result.id} />
        )} 
      </div>     
    </>
  );
};

export default Blank;
