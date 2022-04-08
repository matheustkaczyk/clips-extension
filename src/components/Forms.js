import React, { useState } from 'react';
import { Input } from './Input';

export const Forms = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  return(
    <form>
      <Input placeholder={ 'Digite um nome' } name={ setName }/>
      <Input placeholder={ 'Digite o conteúdo' } name={ setContent }/>
    </form>
  )
};
