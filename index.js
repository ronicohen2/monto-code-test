import { CrexiScraper } from './src/scraper.js';

(async () => {
    const rootUrl = "https://www.crexi.com/";
    const query = "Seattle";
    const scraper = new CrexiScraper(rootUrl);

    const properties = await scraper.scrape(query);
    console.log(properties);

    return properties;
})();