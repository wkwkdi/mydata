class Provider {
  constructor(fetch) {
    this.fetch = fetch;
    this.repositories = [];
  }

  async getData(username) {
    const { user, repositories } = await this.fetch(username);
    this.repositories = repositories;
    this.user = user;

    return { user, repositories };
  }
}

module.exports = Provider;
