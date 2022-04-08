import React from 'react';

export const Input = ({ placeholder, name }) => {
  const handleChange = ({ target }) => {
    name(target.value);
  }

  return(
    <input placeholder={placeholder} onChange={(e) => handleChange(e)} />
  )
};
