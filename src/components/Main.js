import React, { useEffect } from 'react';

export const Main = () => {

  useEffect(() => {
    let itens = localStorage.getItem('clips-*');
    console.log(JSON.parse(itens));
  }, [])

  return(
    <div>

    </div>
  )
};
