import React, { useState } from 'react';
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

    console.log('event target value ', value);

    setFormData((oldValues) => ({ ...oldValues, [name]: val }));

    // let inputName = (event.target as HTMLInputElement).name;    
    // console.log('event target value ', inputName);
    // let newFormData = { ...formData };
    // if(inputName === 'gdpr') {
    //     newFormData[inputName] = (event.target as HTMLInputElement).checked;   
    // } else {
    //     newFormData[inputName] = (event.target as HTMLInputElement).value;        

    // } 

    // setFormData({
    //   ...newFormData
    // });
  };
 

  // const inputData: Array<InputEl > = [
  //   {
  //     id: 'firstName',
  //     label: 'First Name:',
  //     type: 'text',
  //     className: 'form-field',
  //     value: formData.firstName,
  //     placeholder: 'First Name',
  //     name: 'firstName',
  //     onChange: (e: React.ChangeEvent) => handleInputChange(e)
  //   },
  //   {
  //     id: 'lastName',
  //     label: 'Last Name:',
  //     type: 'text',
  //     className: 'form-field',
  //     value: formData.lastName,
  //     placeholder: 'Last Name',
  //     name: 'lastName',
  //     onChange: (e: React.ChangeEvent) => handleInputChange(e)
  //   },
  //   {
  //     id: 'email',
  //     label: 'Email:',
  //     type: 'email',
  //     className: 'form-field',
  //     value: formData.email,
  //     placeholder: 'email',
  //     name: 'email',
  //     pattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$',
  //     onChange: (e: React.ChangeEvent) => handleInputChange(e)
  //   },
  //   {
  //     id: 'dob',
  //     label: 'Date of Birth:',
  //     type: 'date',
  //     className: 'form-field',
  //     value: formData.dob,
  //     placeholder: 'dob',
  //     name: 'dob',
  //     pattern: '/^([0-9]{2})/([0-9]{2})/([0-9]{4})$/',
  //     onChange: (e: React.ChangeEvent) => handleInputChange(e)
  //   },
  //   {
  //     id: 'male',
  //     label: 'male:',
  //     type: 'radio',
  //     className: 'form-field',
  //     value: 'male',     
  //     name: 'gender',
  //     isChecked: false,
  //     onChange: (e: React.ChangeEvent) => handleInputChange(e)
  //   },
  //   {
  //       id: 'female',
  //       label: 'female:',
  //       type: 'radio',
  //       className: 'form-field',
  //       value: 'female',     
  //       name: 'gender',
  //       isChecked: false,
  //       onChange: (e: React.ChangeEvent) => handleInputChange(e)
  //     },
  //     {
  //       id: 'city',
  //       label: 'City:',
  //       type: 'select',
  //       className: 'form-field',
  //       value: formData.city,
  //       options: ['Aya Napa', 'Larnaca', 'Limassol', 'Nicosia', 'Paphos'],
  //       // placeholder: 'city',
  //       name: 'city',       
  //       onChange: (e: React.ChangeEvent) => handleInputChange(e)
  //     },
  //     {
  //       id: 'test',
  //       label: 'Choose Your Test:',
  //       type: 'select',
  //       className: 'form-field',
  //       value: formData.test,
  //       options: ['PCR', 'LFT / Rapid', 'Antibody'],
  //       placeholder: 'test',
  //       name: 'test',       
  //       onChange: (e: React.ChangeEvent) => handleInputChange(e)
  //     },
  //     {
  //       id: 'gdpr',
  //       label: 'I consent to my personal data processing according to GDPR:',
  //       type: 'checkbox',
  //       className: 'gdpr',         
  //       name: 'gdpr',
  //       isChecked: formData.gdpr,      
  //       onChange: (e: React.ChangeEvent) => handleInputChange(e)
  //     },
  // ];


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('FORM DATA', formData);
    // setFormCounter(formCounter + 1);
    let result: Result = { ...formData, id: keygen.number(), date: getDate() };

    setResults((oldResults: Array<Result>) => [...oldResults, result]);
    setFormData(initialStateValue);
    console.log('form Data after submit', formData);
    // alert('you got infected with COVID-19! stay were you are. Ambulance is on the way!');
    // toValidate(result);   
   
  };

  let genderOptions: Array<InputEl> | [] = [];
  const gender = (el: InputEl ) => {     
      genderOptions = [...genderOptions, el];
 
      return genderOptions.length === 2 && (
        <>               
        <div className="gender-raw">
            <p className="gender-p">{el.name}: </p>
            {genderOptions.map(g => (
                <React.Fragment key={g.id}>
                    <label htmlFor={g.id} >
                        {g.label}
                    </label>
                    <input
                        id={g.id}
                        type={g.type}
                        // value={g.value}
                        className={g.className}
                        // placeholder={g.placeholder}
                        name={g.name}
                        onChange={handleInputChange}
                        required               
                    />
                </React.Fragment>
            ))}
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
