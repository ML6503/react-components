// import { Result } from './interface';

const getDate: () => string = () => {
  const newDate = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  return newDate.format(Date.now());
};

// export const toValidate = (data: Result) => {
//   for (const d in data) {
//     if (d === 'gdpr') {
//       if (data[d] === false) {
//         throw new Error('you must give your consent to data processing');
//       }
//     }
//     if (typeof d === 'string') {
//       if (data[d].length === 0) {
//         throw new Error('you must fill all fields');
//       }
//     }
//   }
// };

export default getDate;
