import React from 'react';
import { Button } from './Button';

export const Card = ({ name, content, id }) => {
  return(
    <section>
      <h3>{name}</h3>
      <Button type="button" placeholder={ 'Excluir' } />
    </section>
  )
};
