import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { Button } from './Button';

export const Card = ({ name, content, id, handleDelete, handleCopy }) => {
  const [opened, setOpened] = useState(false);
  return(
    <section onClick={ () => handleCopy(copy, content, setOpened) } className="card">
      <div>
        <h3>{name}</h3>
        { opened && <span>Successfully copied!</span> }
      </div>
      <Button type="button" placeholder={ 'Delete' } onClick={ () => handleDelete(id) } />
    </section>
  )
};
