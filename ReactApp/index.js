const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const configuration = new Configuration ({
    organization: "org-Wbeo5LUAfHVHTJpjz9wwVeo0",
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json())
app.use(cors())

const port = 3080;

app.post('/', async (req,res) => {
    const { message } = req.body;
    console.log(message, "message")
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        temperature: 0.5,
        max_tokens: 100,
      });
    res.json({
        message: response.data.choices[0].text,
    })
});


app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
});