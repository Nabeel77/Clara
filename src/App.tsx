import { useState } from 'react';
import { Chat } from './components/Chat';
import { Input } from './components/Input';
import { fetchChatGptResponse } from './Api';
import { useMutation } from '@tanstack/react-query';

export interface SendMessageParameterObj {
  sender: string;
  message: string;
}

const App = () => {
  const [chat, setChat] = useState<SendMessageParameterObj[]>([]);
  const mutation = useMutation({
    mutationFn: () => fetchChatGptResponse(chat),
    onSuccess: (data) =>
      setChat((prev) => {
        const responseObj: SendMessageParameterObj = {
          sender: 'chat-gpt',
          message: data.message.trim(),
        };
        return [...prev, responseObj];
      }),
  });
  const extensionDimensions = 'w-112 h-148';

  const sendMessage = async (
    messageObj: SendMessageParameterObj
  ): Promise<void> => {
    await Promise.resolve(setChat((prev) => [...prev, messageObj]));
    mutation.mutate();
  };

  return (
    <div
      className={`${extensionDimensions} bg-gray-dark py-6 relative px-2
       text-white overflow-hidden flex flex-col justify-between align-middle`}
    >
      {/* header */}
      <div className="uppercase font-bold text-2xl text-center mb-3">
        Chat-GPT Chrome Extension
      </div>

      {/* gradients */}

      <div className="left-gradient z-0 absolute"></div>
      <div className="right-gradient z-0 absolute"></div>

      {/* body */}
      <div className="h-11/12 overflow-auto w-full max-w-4xl min-w-80 py-8 px-4 self-center">
        <Chat chat={chat} />
      </div>

      {/* input */}
      <div className="w-full max-w-4xl min-w-80 self-center">
        <Input sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default App;
