import React from 'react';
import { Card } from './Card';

export const Main = ({ storage }) => {
  return(
    <div className="card-wrapper">
      {storage.length > 0 && storage.map((item) => <Card key={item.id} name={item.name} content={item.content} id={item.id} />)}
    </div>
  )
};
