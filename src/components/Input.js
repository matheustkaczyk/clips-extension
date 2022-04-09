import React from 'react';

export const Input = ({ placeholder, name, classN }) => {
  const handleChange = ({ target }) => {
    name(target.value);
  }

  return(
    <input className={classN} placeholder={placeholder} onChange={(e) => handleChange(e)} />
  )
};
