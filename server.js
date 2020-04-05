const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3030;

// Read words from json file
const fileContents = fs.readFileSync('./five-letter-words.json', 'utf-8');
const words = JSON.parse(fileContents);
const { fiveLetterWords } = words;

// Enable CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Get secret word
app.get('/api/five-letter-word', (req, res) => {
  // select a random word
  const word =
    fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];

  // return it as the response
  res.send(word);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
