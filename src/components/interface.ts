import React from 'react';

export interface InputEl {
  id: string;
  label: string;
  type: string;
  className: string;
  value?: string | number;
  options?: Array<string>;
  placeholder?: string;
  name: string;
  pattern?: string;
  isChecked?: boolean;
  // onChange: (e: React.ChangeEvent) => void;
}

export interface Result {
  id: number;
  date: string;
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  gender: string;
  city: string;
  gdpr: boolean;
  test: string;
}

export interface FormProps {
  setResults: React.Dispatch<React.SetStateAction<Result[]>>;
}

export interface ResultProps {
  result: Result;
}
