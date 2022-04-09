import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export const Forms = ({ handleStorage }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleClick = () => {
    handleStorage(name, content);
  };

  return(
    <form className="form">
      <div>
        <Input placeholder={ 'Insert the title' } name={ setName } className="form-control"/>
        <Input placeholder={ 'Insert the content' } name={ setContent } className="form-control"/>
      </div>
      <Button type={ 'button' } onClick={ handleClick } placeholder={ 'Adicionar' }/>
    </form>
  )
};
