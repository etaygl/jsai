import { OpenAI } from 'langchain/llms/openai';
import { getLoaderFromUrl } from './loader.js';
import { PromptTemplate } from 'langchain/prompts';

const blogPromptTemplate = new PromptTemplate({
  inputVariables: ['content', 'tone'],
  template: `Given the tone {tone}, please generate a blog article based on the content from the URL provided in HTML format using tailwindCSS style. For heading, use <h1 class=“text-2xl font-bold mb-4”> for main title and <h2 class=“text-xl font-bold mb-3”> ensure paragraphs use the <p class=“mb-4”> class. Content: {content}`
  
});

async function blogWriter (url, tone) {
    const loader = getLoaderFromUrl(url);
    const data = await loader.load(url);
	  const llm = new OpenAI({ modelName: 'gpt-4o' });
   // console.log(tone);
    const query =  await blogPromptTemplate.format({
      
      content: data[0].pageContent,
      tone: tone
    });
   // const query = `Please summarize the following data: ${data[0].pageContent}`;
    const result = await llm.predict(query);
    
   // console.log(`<br>` + result);
    return result;
  }
 
export default blogWriter;
