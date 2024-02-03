/**
 * @param {string} url - The API url to make the request to.
 * @param {Object} [options] - Additional options for the fetch request (e.g., method, headers, body).
 * @returns {Promise} - A Promise that resolves to the response data or rejects with an error.
 */
export const Request = async(url, options = {}) => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${ response.status }`);
    }

    return response.json();
};
