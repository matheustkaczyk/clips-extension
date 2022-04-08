import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export const Forms = ({ handleStorage }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  return(
    <form>
      <Input placeholder={ 'Digite um nome' } name={ setName }/>
      <Input placeholder={ 'Digite o conteúdo' } name={ setContent }/>
      <Button placeholder={ 'Adicionar' } />
    </form>
  )
};
