class Request {
  constructor() {
    this.defaultOptions = {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': PARSE_APPLICATION_ID,
        'X-Parse-REST-API-Key': PARSE_REST_API_KEY
      }
    };

    this.post = this.post.bind(this);
  }

  // Construct the URL used in the request
  buildURL = resource => `${PARSE_URL}/classes/${resource}`;

  async post(url, body) {
    await fetch(this.buildURL(url), Object.assign(this.defaultOptions, {
      method: 'POST',
      body: JSON.stringify(body)
    })).then(response => response.json());
  }

  async get(url) {
    await fetch(this.buildURL(url), Object.assign(this.defaultOptions, {
      method: 'GET'
    })).then(response => response.json());
  }
}

export default new Request();
