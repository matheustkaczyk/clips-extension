import React from 'react';

export const Button = ({ placeholder, onClick, disabled }) => {
  return(
    <button onClick={onClick} disabled={disabled}>{placeholder}</button>
  )
};
