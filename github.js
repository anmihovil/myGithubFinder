class GitHub {
  constructor() {
    this.client_id = '0ef8432b181652192571';
    this.client_secret = '8671da38392a86635143362a70ce35e98665beb4';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?
    client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  } 
}