import React from 'react';
import { useState } from 'react';
import { TbSend } from 'react-icons/tb';
import { SendMessageParameterObj } from '../../App';
interface InputProps {
  sendMessage: ({ sender, message }: SendMessageParameterObj) => void;
}

export const Input = ({ sendMessage }: InputProps): JSX.Element => {
  const [message, setMessage] = useState('');
  const handleSubmit = (): void => {
    if (!message) return;
    sendMessage({ sender: 'human', message: message });
    setMessage('');
  };
  return (
    <div className="w-full relative  bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto">
      <textarea
        onKeyDown={(e) => {
          e.key === 'Enter' && e.shiftKey === false && handleSubmit();
        }}
        rows={1}
        className="border-0 bg-transparent outline-none w-11/12 resize-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <TbSend
        className="absolute top-4 w-5 h-5 right-4 cursor-pointer ease-in duration-100 hover:scale-150"
        onClick={handleSubmit}
      />
    </div>
  );
};
