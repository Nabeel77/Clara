import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-DV7tpe87HAvnf5ZvYnChS04j',
  apiKey: 'input-api-key',
});

export const openai = new OpenAIApi(configuration);
