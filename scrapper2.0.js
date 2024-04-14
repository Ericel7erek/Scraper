const puppeteer = require('puppeteer');

async function scrapeWebsite(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    // Extract data using Puppeteer selectors
    const titles = await page.evaluate(() => {
      const titles = [];
      const elements = document.querySelectorAll('h1');
      for (const element of elements) {
        titles.push(element.innerText);
      }
      return titles;
    });

    await browser.close();

    return titles;
  } catch (error) {
    console.error('Error scraping website:', error);
    return null;
  }
}

scrapeWebsite('https://www.themoviedb.org/?language=es-ES')
  .then(data => {
    console.log('Titles found on the website:');
    console.log(data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });