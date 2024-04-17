const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

app.get('/news', async (req, res) => {
  try {
    const website = 'https://news.google.com/home?hl=ar&gl=EG&ceid=EG:ar';
    const response = await axios.get(website);
    const $ = cheerio.load(response.data);

    let content = [];
$('article class="UwIKyb"', response.data).each(function () {
  const title = $(this).text();
  const url = $(this).find('a').attr('href');
  content.push({ title, url });
});

    res.json(content);
  } catch (error) {
    console.log(error, error.message);
    res.status(500).json({ error: 'An error occurred while scraping the news data.' });
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));