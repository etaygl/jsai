import express from 'express';
import summarizeContent from './summarizer.js';
import blogWriter from './blog_writer.js';
import answerQuestion from './answer_question.js';

const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.post('/answerQuestion', async (req, res) => {
  const result = await answerQuestion(req.body.url, req.body.question);
 res.send(result)
})

app.post('/summarize', async (req, res) => {
    const result = await summarizeContent(req.body.url);
    res.send(result);
  })

  app.post('/createArticle', async (req, res) => {
    //console.log(req.body.url);
    const result = await blogWriter(req.body.url, req.body.tone);
		res.send(result);
	});

  const PORT = 3000;
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)

  });