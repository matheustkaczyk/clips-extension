import React from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { Forms } from './Forms';

export const Header = ({ handleStorage }) => {
  return (
    <header className='header'>
      <AiOutlinePaperClip/>
      <h2>Clips</h2>

      <div>
        <Forms handleStorage={ handleStorage } />
      </div>
    </header>
  )
};
