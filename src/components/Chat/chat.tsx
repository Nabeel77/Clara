import React from 'react';

export const Chat: React.FC = () => {
  const messageStyles =
    'border-[#999999] break-all border-2 rounded-xl self-end px-3 py-3 max-w-[80%]';
  return (
    <div>
      <div className="flex flex-col gap-4">
        {/* User message */}
        <div className={messageStyles}>
          <pre className="whitespace-pre-wrap">
            <span>
              Hy whats up! dsa dsadnaskdasndasndasnd asdas das das das dsa das
              daso daso daso daos doas dosa daso !!!
            </span>
          </pre>
        </div>

        {/* Chat-gpt response */}
        <div
          className={`${messageStyles} bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-md mr-auto`}
        >
          <pre>
            <span>Hy bro</span>
          </pre>
        </div>
      </div>
    </div>
  );
};
