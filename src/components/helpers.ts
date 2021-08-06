import { Result } from './interface';

export const getDate = () =>
  new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(Date.now());

const toValidate = (data: Result) => {    
  for(let d in data) {
    if(d === 'gdpr') {
      if (data[d] === false) {
        throw new Error ('you must give your consent to data processing');
      }
    } if(typeof d === 'string') {
        if (data[d].length === 0) {    
          throw  new Error ('you must fill all fields');                
        }
      }
  }    
};
