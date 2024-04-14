const axios = require('axios');
const cheerio = require("cheerio");

const url = 'https://www.imdb.com/imdbpicks/staff-picks-april/?ref_=hm_edcft_sw_pks_apr24_em00059_1_i';

(async () => {
  const response = await axios.get(url,{
    headers : {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-GB,en;q=0.9",
      "Connection": "keep-alive",
      "Host": "www.imdb.com",
      "Referer": "https://www.imdb.com/",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15"
    },
    gzip:true
  });
  let $ = cheerio.load(response.data);
  let title = $('a.ipc-title-link-wrapper>h3.ipc-title__text').text();

  console.log(title);
})();