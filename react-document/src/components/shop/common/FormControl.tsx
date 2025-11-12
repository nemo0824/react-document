import React from 'react';

interface FormControlProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FormControl = ({
  htmlFor,
  label,
  required,
  children,
}: FormControlProps) => {
  return (
    <div>
      <label htmlFor={htmlFor}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
};
