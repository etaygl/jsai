import { ChatOpenAI } from 'langchain/chat_models/openai';
import { getLoaderFromUrl } from './loader.js';
import { HumanMessage, SystemMessage } from 'langchain/schema';

const chat = new ChatOpenAI();
export async function answerQuestion(url, question){
    const loader = getLoaderFromUrl(url);
    const data = await loader.load(url);
    const content = data[0].pageContent;
  
    const message = [
        new SystemMessage('You are Knoledgeable assistent'),
        new HumanMessage({ content:content}),
        new HumanMessage({content: question})
    ];

    const response = await chat.call(message);
    return response.content;
}

export default answerQuestion;

