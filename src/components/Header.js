import React from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { Forms } from './Forms';

export const Header = () => {
  return (
    <header>
      <AiOutlinePaperClip/>
      <h2>Clips</h2>

      <div>
        <Forms />
      </div>
    </header>
  )
};
