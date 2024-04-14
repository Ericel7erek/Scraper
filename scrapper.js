const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Extract data using Cheerio selectors
    const titles = [];
    $('h2').each((index, element) => {
      titles.push($(element).text());
    });

    return titles;
  } catch (error) {
    console.error('Error scraping website:', error);
    return null;
  }
}
scrapeWebsite('https://www.instagram.com/nike')
  .then(data => {
    console.log('Titles found on the website:');
    console.log(data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

  