import { CrexiScraper } from './src/scraper.js';

(async () => {
    const mainUrl = "";
    const query = "Seattle";
    const scraper = new CrexiScraper(mainUrl);

    const properties = await scraper.scrape(query);
    console.log(properties);

    return properties;
})();
