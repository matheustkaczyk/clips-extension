import React from 'react';

export const Button = ({ placeholder, onClick, disabled, type }) => {
  return(
    <button
      type={type}
      placeholder={placeholder}
      onClick={onClick}
      disabled={disabled}
    >
      {placeholder}
    </button>
  )
};
