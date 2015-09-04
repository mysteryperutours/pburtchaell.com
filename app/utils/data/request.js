/**
 * @class Request
 * @description Send requests to the Parse REST API.
 */
export default class Request {
  constructor(resource) {
    this.defaultOptions = {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': PARSE_APPLICATION_ID,
        'X-Parse-REST-API-Key': PARSE_REST_API_KEY
      }
    };

    // The resource to send the data to, e.g., article
    this.resource = resource;

    this.post = this.post.bind(this);
    this.get = this.get.bind(this);
  }

  // Construct the URL used in the request
  buildURL = (id) => `${PARSE_URL}/classes/${this.resource}`;

  async post(body) {
    await fetch(this.buildURL(), Object.assign(this.defaultOptions, {
      method: 'POST',
      body: JSON.stringify(body)
    })).then(response => response.json());
  }

  async get(id) {
    await fetch(this.buildURL(id), Object.assign(this.defaultOptions, {
      method: 'GET'
    })).then(response => response.json());
  }
}
