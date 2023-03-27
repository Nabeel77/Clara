import React from 'react';
import { TbSend } from 'react-icons/tb';

export const Input: React.FC = () => {
  return (
    <div className="w-full relative  bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto">
      <textarea
        rows={1}
        className="border-0 bg-transparent outline-none w-11/12 resize-none"
      />
      <TbSend className="absolute top-4 w-5 h-5 right-4 cursor-pointer ease-in duration-100 hover:scale-150" />
    </div>
  );
};
