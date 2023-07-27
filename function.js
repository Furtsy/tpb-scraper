const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  search: async function(query, type = 0) {
    if (!query) throw new Error('Please specify a search query');
    try {
      let page = 1;
      let scrapedData = [];

      while (true) {
        const response = await axios.get(`https://thepiratebay10.org/search/${encodeURIComponent(query)}/${page}/99/${type}`);
        const $ = cheerio.load(response.data);
        const tableRows = $('table tbody tr:not(:last-child)');

        tableRows.each((index, element) => {
          const category = $(element).find('td:nth-child(1) center a').map((_, el) => $(el).text().trim()).get();
          const name = $(element).find('td:nth-child(2) div a').text().trim();
          const magnetLink = $(element).find('td:nth-child(2) a:nth-child(2)').attr('href');
          const tpbLink = $(element).find('td:nth-child(2) a:nth-child(1)').attr('href');
          const details = $(element).find('font.detDesc').text().trim().split(', ');
          const uploadedDate = details[0].replace('Uploaded ', '');
          const size = details[1].replace('Size ', '');
          const uploader = details[2].replace('ULed by ', '');

          const rowData = {
            category: category,
            name: name,
            tpbLink: tpbLink,
            magnetLink: magnetLink,
            uploadedDate: uploadedDate,
            size: size,
            uploader: uploader
          };

          scrapedData.push(rowData);
        });

        const nextPageLink = $('table tbody tr:last-child td a').attr('href');
        if (!nextPageLink) {
          break;
        }

        page++;
      }

      return scrapedData;
    } catch (error) {
      console.error('pool close because moron scraping: ', error);
      return null;
    }
  }
};
