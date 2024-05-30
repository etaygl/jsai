import { OpenAI } from 'langchain/llms/openai';
import { getLoaderFromUrl } from './loader.js';
 
async function summarizeContent (url) {
    const loader = getLoaderFromUrl(url);
	  const data = await loader.load(url);
	  const llm = new OpenAI({ modelName: 'gpt-4o' });
    //console.log(`${data[0].pageContent}`);

    const query = `Please summarize the following data: ${data[0].pageContent}`;
    const result = await llm.predict(query);
  
    return result;
    
  }
export default summarizeContent;
//console.log(result);ß