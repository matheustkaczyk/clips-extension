import React from 'react';
import { Card } from './Card';

export const Main = ({ storage }) => {
  return(
    <div>
      {storage.length > 0 && storage.map((item) => <Card name={item.name} content={item.content} id={item.id} />)}
    </div>
  )
};
