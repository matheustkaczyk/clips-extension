import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export const Forms = ({ handleStorage }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    handleStorage(name, content);
  };

  return(
    <form>
      <Input placeholder={ 'Digite um nome' } name={ setName }/>
      <Input placeholder={ 'Digite o conteúdo' } name={ setContent }/>
      <Button placeholder={ 'Adicionar' } onClick={ (e) => handleClick(e) }/>
    </form>
  )
};
