import { InputEl } from './interface';

export const inputData: Array<InputEl> = [
  {
    id: 'firstName',
    label: 'First Name:',
    type: 'text',
    className: 'form-field',
    // value: formData.firstName,
    placeholder: 'First Name',
    name: 'firstName',
    pattern: `^([a-zA-Z]{2,}s?([a-zA-Z]{1,})?)`
  },
  {
    id: 'lastName',
    label: 'Last Name:',
    type: 'text',
    className: 'form-field',
    // value: formData.lastName,
    placeholder: 'Last Name',
    name: 'lastName',
    pattern: `^([a-zA-Z]{2,}s?([a-zA-Z]{1,})?)`
  },
  {
    id: 'email',
    label: 'Email:',
    type: 'email',
    className: 'form-field',
    // value: formData.email,
    placeholder: 'email',
    name: 'email',
    pattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$'
  },
  {
    id: 'dob',
    label: 'Date of Birth:',
    type: 'date',
    className: 'form-field',
    // value: formData.dob,
    placeholder: 'dob',
    name: 'dob',
    pattern: '/^([0-9]{2})/([0-9]{2})/([0-9]{4})$/'
  },
  {
    id: 'male',
    label: 'male:',
    type: 'radio',
    className: 'form-field',
    value: 'male',
    name: 'gender'
  },
  {
    id: 'female',
    label: 'female:',
    type: 'radio',
    className: 'form-field',
    value: 'female',
    name: 'gender'
  },
  {
    id: 'city',
    label: 'City:',
    type: 'select',
    className: 'form-field',
    // value: formData.city,
    options: ['Aya Napa', 'Larnaca', 'Limassol', 'Nicosia', 'Paphos'],
    placeholder: 'city',
    name: 'city'
  },
  {
    id: 'test',
    label: 'Choose Your Test:',
    type: 'select',
    className: 'form-field',
    // value: formData.test,
    options: ['PCR', 'LFT / Rapid', 'Antibody'],
    placeholder: 'test',
    name: 'test',       
    // onChange: (e: React.ChangeEvent) => handleInputChange(e)
  },
  {
    id: 'gdpr',
    label: 'I consent to my personal data processing according to GDPR:',
    type: 'checkbox',
    className: 'gdpr',         
    name: 'gdpr',
    isChecked: false,      
    // onChange: (e: React.ChangeEvent) => handleInputChange(e)
  },
];
