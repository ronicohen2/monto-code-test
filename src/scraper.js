import { mapProperty } from './utils.js';

/** Class representing a Crexi scraper. */
export class CrexiScraper {
    #name = "crexi";
    #rootUrl = "";

    /**
     * Create a scraper.
     *
     * @param {string} rootUrl - Root URL for utility functions.
     */
    constructor(rootUrl) {
        if (!rootUrl) {
            throw new Error("Missing root Url.");
        }
        this.#rootUrl = rootUrl;
    }

    /**
     * Search & scrape properties by query.
     *
     * @param {string} query - Properties location search query.
     * @return {MappedProperty[]} A list of mapped properties.
     */
    async scrape(query) {
        console.info(`${this.#name} started.`);
        /*
            @TODO implementation using the utility functions.
         */
        const properties = [];

        console.info(`${this.#name} ended.`);
        return properties.map(property => mapProperty(property));
    }
}