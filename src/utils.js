/**
 * Search for locations.
 *
 * @param {string} rootUrl - Root URL.
 * @param {string} query - Location search query.
 * @return {Object[]} A list of locations.
 */
export async function searchLocations(rootUrl, query) {
    // @TODO implementation.
}

/**
 * Search for properties by location.
 *
 * @param {string} rootUrl - Root URL.
 * @param {Object} location - A location.
 * @return {Object[]} A list of properties.
 */
export async function searchProperties(rootUrl, location) {
    // @TODO implementation.
}

/**
 * @typedef MappedProperty
 *
 * @type {object}
 * @property {string} id - A property ID.
 * @property {string} name - A property name.
 * @property {string} description - A property description.
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
    // @TODO implementation.

    const mappedProperty = {
        id: "",
        name: "",
        description: "",
        status: "",
        location: ""
    };

    return mappedProperty;
}