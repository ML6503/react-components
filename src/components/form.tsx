import React, { useState, useRef } from 'react';
import '../styles.css';
import { InputEl, FormProps, Result } from './interface';
import { inputData } from './inputData';
import { initialStateValue } from './initialStateValue';
import { getDate } from './helpers';
const keygen = require("keygenerator");

const Form:  React.FC<FormProps> = ({  setResults }) => {

  const [formData, setFormData] = useState(initialStateValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    event.persist();
    const { name, type, value, id } = event.target;
    const isChecked = (event.target as HTMLInputElement).checked;
    const val =
      type === 'checkbox' ? isChecked : name === 'gender' ? id : value;
    setFormData((oldValues) => ({ ...oldValues, [name]: val }));    
  };
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();   
    let result: Result = { ...formData, id: keygen.number(), date: getDate() };
    setResults((oldResults: Array<Result>) => [...oldResults, result]);
    setFormData(initialStateValue); 
    console.log('form Data after submit', formData);
    alert('you got infected with COVID-19! stay were you are. Ambulance is on the way!');
  
    /*TODO*/
    // toValidate(result);   
  };

  let genderOptions: Array<InputEl> | [] = [];
  const gender = (el: InputEl ) => { 
      
      genderOptions = [...genderOptions, el];
      
      return genderOptions.length === 2 && (
        <>               
        <div className="gender-raw">
            <p className="gender-p">{el.name}: </p>
            {genderOptions.map((g) => {
            
              return (
                <React.Fragment key={g.id}>
                    <label htmlFor={g.id} >
                        {g.label}
                    </label>
                    <input
                        id={g.id}
                        type={g.type}
                        value={g.value}
                        className={g.className}
                        // placeholder={g.placeholder}
                        name={g.name}
                        onChange={handleInputChange}
                        required
                        checked={formData.gender === g.id}            
                      />
                </React.Fragment>
            )})}
        </div>  
    </>
    );
  };

  return (
    <div className="form-page">
      <h2>COVID-19 TEST FORM</h2>
      <p className="fill-p">Please fill all fields below</p>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          {inputData.map((el) => el.type === 'radio' ?
          gender(el) :
          el.type === 'select' ?
          (
            <React.Fragment key={el.id}>
              <label htmlFor={el.id} >
                {el.label}
              </label>
              <select
                id={el.id}
                name={el.name}
                className={el.className}
                // value={el.value}
                value={formData[el.id]}
                onChange={handleInputChange}
                required
              > 
                {(el.options as Array<string>).map((c) => (
                  <option value={c} key={c}>
                    {c}
                  </option>
                ))}
              </select>
              <span className="padding-line"></span>
            </React.Fragment>
          )
          : (
            <div className="input-wrapper" key={el.id}>
              <label htmlFor={el.id} >
                {el.label}
              </label>
              <input
                id={el.id}
                type={el.type}
                // value={el.value}
                value={formData[el.id]}
                className={el.className}
                placeholder={el.placeholder}
                name={el.name}
                onChange={handleInputChange}
                pattern={el.pattern}
                required
              />              
            </div>)   
          )}
          <button className="submit" type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
