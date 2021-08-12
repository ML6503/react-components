import React from 'react';
import './search.css';
import { InputDateProps } from '../../utils/interface';

const InputDate: React.FC<InputDateProps> = ({
  inputDateValue,
  setInputDateValue
}: InputDateProps) => (
  <span className="select-wrapper">
    <label htmlFor="date">oldest date:</label>
    <input
      type="date"
      pattern="(\d{4}-\d{2}-\d{2})+"
      id="date"
      name="date"
      className="select"
      value={inputDateValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputDateValue((e.target as HTMLInputElement).value)
      }
    />
  </span>
);

export default InputDate;
