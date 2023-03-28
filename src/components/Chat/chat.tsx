import { nanoid } from 'nanoid';
import { SendMessageParameterObj } from '../../App';

interface ChatProps {
  chat: SendMessageParameterObj[];
}

export const Chat = ({ chat }: ChatProps): JSX.Element => {
  const messageStylesUser =
    'border-[#999999] break-all border-2 rounded-xl self-end px-3 py-3 max-w-[80%]';
  const messageStylesChatgpt =
    'bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-md mr-auto';
  return (
    <div>
      <div className="flex flex-col gap-4">
        {chat.map((messageObj) => {
          const id: string = nanoid();
          return (
            <div
              className={`${messageStylesUser} ${
                messageObj.sender !== 'human' && messageStylesChatgpt
              }`}
              key={id}
            >
              <pre className="whitespace-pre-wrap">
                <span>{messageObj.message}</span>
              </pre>
            </div>
          );
        })}
      </div>
    </div>
  );
};
