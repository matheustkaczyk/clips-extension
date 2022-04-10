import React from 'react';
import { Card } from './Card';
import { Forms } from './Forms';
import { Info } from './Info';

export const Main = ({ storage, handleDelete, handleStorage, handleCopy }) => {
  return(
    <main>
      <div>
      <Forms handleStorage={ handleStorage } />
    </div>
      <div className="card-wrapper">
        {
          storage.length > 0 ? storage.map(
            (item) => 
            <Card
              key={item.id}
              name={item.name}
              content={item.content}
              id={item.id}
              handleDelete={handleDelete}
              handleCopy={handleCopy}
            />
            ) :
            <Info />
        }
      </div>
    </main>
  )
};
