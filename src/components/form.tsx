import React, { useState } from 'react';
import '../styles.css';
import { InputEl } from './interface';
const keygen = require("keygenerator");

const Form = () : JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    gender: '',
    city: 'Aya Napa',
    gdpr: '',
    test: '',
    testResultNotice: ''
  });

  const handleInputChange = (event: React.ChangeEvent, inputName: string) => {
    event.persist();
    // let newData = Object.keys(formData).filter((d) => d === inputName);
    console.log('event target value ', (event.target as HTMLInputElement).value);
    let newFormData = { ...formData };
 
    newFormData[inputName] = (event.target as HTMLInputElement).value;

    setFormData({
      ...newFormData
    });
  };
  console.log('new Data', formData);
  const inputData: Array<InputEl > = [
    {
      id: 'firstName',
      label: 'First Name:',
      type: 'text',
      className: 'form-field',
      value: formData.firstName,
      placeholder: 'First Name',
      name: 'firstName',
      onChange: (e: React.ChangeEvent) => handleInputChange(e, 'firstName')
    },
    {
      id: 'lastName',
      label: 'Last Name:',
      type: 'text',
      className: 'form-field',
      value: formData.lastName,
      placeholder: 'Last Name',
      name: 'lastName',
      onChange: (e: React.ChangeEvent) => handleInputChange(e, 'lastName')
    },
    {
      id: 'email',
      label: 'Email:',
      type: 'email',
      className: 'form-field',
      value: formData.email,
      placeholder: 'email',
      name: 'email',
      pattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$',
      onChange: (e: React.ChangeEvent) => handleInputChange(e, 'email')
    },
    {
      id: 'dob',
      label: 'Date of Birth:',
      type: 'date',
      className: 'form-field',
      value: formData.dob,
      placeholder: 'dob',
      name: 'dob',
      pattern: '/^([0-9]{2})/([0-9]{2})/([0-9]{4})$/',
      onChange: (e: React.ChangeEvent) => handleInputChange(e, 'dob')
    },
    {
      id: 'male',
      label: 'male:',
      type: 'radio',
      className: 'form-field',
      value: 'male',     
      name: 'gender',
      onChange: (e: React.ChangeEvent) => handleInputChange(e, 'gender')
    },
    {
        id: 'female',
        label: 'female:',
        type: 'radio',
        className: 'form-field',
        value: 'female',     
        name: 'gender',
        onChange: (e: React.ChangeEvent) => handleInputChange(e, 'gender')
      },
      {
        id: 'city',
        label: 'City:',
        type: 'select',
        className: 'form-field',
        value: formData.city,
        options: ['Aya Napa', 'Larnaca', 'Limassol', 'Nicosia', 'Paphos'],
        placeholder: 'city',
        name: 'city',       
        onChange: (e: React.ChangeEvent) => handleInputChange(e, 'city')
      },
  ];

  const handleSubmit = () => {
    console.log('FORM DATA', formData);
  };

  let genderOptions: Array<InputEl> | [] = [];
  const gender = (el: InputEl ) => {
     
      genderOptions = [...genderOptions, el];
 
      return genderOptions.length === 2 && (
        <>               
        <div className="gender-raw">
            <p className="gender-p">Gender: </p>
            {genderOptions.map(g => (
                <React.Fragment key={keygen.number()}>
                    <label htmlFor={g.id} >
                        {g.label}
                    </label>
                    <input
                        id={g.id}
                        type={g.type}
                        value={g.value}
                        className={g.className}
                        placeholder={g.placeholder}
                        name={g.name}
                        onChange={g.onChange}
                    />
                </React.Fragment>
            ))}
        </div>
      <span className="padding-line"></span>
    </>
    );
  };

  return (
    <div className="form-page">
      <h1>COVID-19 TEST FORM</h1>
      <p>Please fill all fields below</p>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          {inputData.map((el) => el.name === 'gender' ?
          gender(el) :
          el.type === 'select' ?
          (
            <React.Fragment key={keygen.number()}>
              <label htmlFor={el.id} >
                {el.label}
              </label>
              <select
                id={el.id}
                name={el.name}
                className={el.className}
                value={formData.city}
                onChange={el.onChange}
              > 
                {(el.options as Array<string>).map((c) => (
                    <option value={c} key={keygen.number()}>
                        {c}
                    </option>
                ))}
              </select>
            </React.Fragment>
          )
          : (
            <React.Fragment key={keygen.number()}>
              <label htmlFor={el.id} >
                {el.label}
              </label>
              <input
                id={el.id}
                type={el.type}
                value={el.value}
                className={el.className}
                placeholder={el.placeholder}
                name={el.name}
                onChange={el.onChange}
              />

              <span className="padding-line"></span>
            </React.Fragment>
            ) 
             
          )}

          {/* <label>
          Last Name:
          <input type="text" {...bindLastName} />
        </label>
        <input type="submit" value="Submit" /> */}
        </form>
      </div>
    </div>
  );
};

export default Form;
