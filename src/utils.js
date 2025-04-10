import puppeteer from "puppeteer-extra"
import stealthPlugin from "puppeteer-extra-plugin-stealth";
puppeteer.use(stealthPlugin())

/**
 * Search for properties by query.
 *
 * @param {string} rootUrl - Root URL.
 * @param {string} query - Location search query.
 * @return {Object[]} A list of properties.
 */
export async function searchProperties(rootUrl, query) {
        // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false, // cancel default view
        userDataDir: "./tmp"
    });
    const page = await browser.newPage();
    await page.goto(rootUrl, {waitUntil: "networkidle0"});
    let properties = [];
    await page.type("input.search-bar-input", query);
    await page.click("form > button > span.mdc-button__label");
    await page.waitForSelector(".wrapper")
    const productsHandles = await page.$$("crx-sales-property-tile");

    for (const productHandle of productsHandles) {
        let id = null
        let name = null
        let status = null
        let location = null

        try {
            id = await productHandle.evaluate(el => el.id,productHandle);
        } catch (error) {}
        try {
            name = await page.evaluate(
                (el) => el.querySelector("h5")?.textContent,
                productHandle
            );
        } catch (error) {}
        // try {
        //    status = await page.evaluate(
        //        (el) => el.querySelector(".a-price .a-offscreen")?.textContent,
        //        productHandle
        //    );
        // } catch (error) {}
        try {
            location = await page.evaluate(
                (el) => el.querySelector("h4")?.textContent,
                productHandle
            );
        } catch (error) {}
        if (name !== null) {
            properties.push({id,name,status,location});
        }
    }
   // console.log(properties);
    //console.log(properties.length);
    await browser.close(); //close the browser
    return properties;
 }

/**
 * @typedef MappedProperty
 *
 * @type {object}
 * @property {string} id - A property ID.
 * @property {string} name - A property name.
 * @property {string} status - A property status.
 * @property {string} location - A property location.
 */

/**
 * Map a raw property.
 *
 * @param {Object} property - A property.
 * @return {MappedProperty} A mapped property.
 */
export async function mapProperty(property) {

    const mappedProperty = {
        id: property.id || " ",
        name: property.name || "",
        status: property.status || "",
        location: property.location || ""
    };

    return mappedProperty;
}

//searchProperties("https://www.crexi.com", "Seattle");
