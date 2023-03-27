import React from 'react';

const App: React.FC = () => {
  return (
    <div
      className="w-112 h-148 bg-gray-dark py-6 relative sm:px-28
       text-white overflow-hidden flex flex-col justify-between align-middle"
    >
      {/* header */}
      <div className="uppercase font-bold text-2xl text-center mb-3">
        Chat GPT Chrome Extension
      </div>

      {/* gradients */}

      <div className="left-gradient z-0 absolute"></div>
      <div className="right-gradient z-0 absolute"></div>

      {/* body */}
      <div></div>

      {/* input */}
      <div></div>
    </div>
  );
};

export default App;
