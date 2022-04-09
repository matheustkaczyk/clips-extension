import React from 'react';
import { Card } from './Card';
import { Forms } from './Forms';

export const Main = ({ storage, handleDelete, handleStorage }) => {
  return(
    <main>
      <div>
      <Forms handleStorage={ handleStorage } />
    </div>
      <div className="card-wrapper">
        {storage.length > 0 && storage.map(
          (item) => 
          <Card
            key={item.id}
            name={item.name}
            content={item.content}
            id={item.id}
            handleDelete={handleDelete}
          />
          )
        }
      </div>
    </main>
  )
};
