import { openai } from '../Services/openAIConfig';

interface messageMetadata {
  sender: string;
  message: string;
}

interface Respone {
  message: string;
}

export const fetchChatGptResponse = async (
  chat: messageMetadata[]
): Promise<Respone> => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${chat
      .map((messages: messageMetadata) => messages.message)
      .join('\n')}`,
    max_tokens: 100,
    temperature: 0.2,
  });
  return { message: response.data.choices[0].text || '' };
};
