import React from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';

export const Header = () => {
  return (
    <header className='header'>
      <AiOutlinePaperClip className='clips-ico'/>
      <h2>Clips</h2>
    </header>
  )
};
