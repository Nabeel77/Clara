import React from 'react';
import { Chat } from './components/Chat';
import { Input } from './components/Input';

const App: React.FC = () => {
  const extensionDimensions = 'w-112 h-148';
  return (
    <div
      className={`${extensionDimensions} bg-gray-dark py-6 relative px-2
       text-white overflow-hidden flex flex-col justify-between align-middle`}
    >
      {/* header */}
      <div className="uppercase font-bold text-2xl text-center mb-3">
        Chat GPT Chrome Extension
      </div>

      {/* gradients */}

      <div className="left-gradient z-0 absolute"></div>
      <div className="right-gradient z-0 absolute"></div>

      {/* body */}
      <div className="h-11/12 overflow-auto w-full max-w-4xl min-w-80 py-8 px-4 self-center">
        <Chat />
      </div>

      {/* input */}
      <div className="w-full max-w-4xl min-w-80 self-center">
        <Input />
      </div>
    </div>
  );
};

export default App;
