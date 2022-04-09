import React from 'react';
import copy from 'copy-to-clipboard';
import { Button } from './Button';

export const Card = ({ name, content, id, handleDelete }) => {
  return(
    <section onClick={ () => copy(content) } className="card">
      <h3>{name}</h3>
      <Button type="button" placeholder={ 'Delete' } onClick={ () => handleDelete(id) } />
    </section>
  )
};
