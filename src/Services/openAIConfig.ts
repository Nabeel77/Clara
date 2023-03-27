import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-DV7tpe87HAvnf5ZvYnChS04j',
  apiKey: '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',
});

export const openai = new OpenAIApi(configuration);
