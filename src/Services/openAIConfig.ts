import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-DV7tpe87HAvnf5ZvYnChS04j',
  apiKey: 'openai-api-secret-here',
});

export const openai = new OpenAIApi(configuration);
