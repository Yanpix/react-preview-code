// use fakeJSON API - https://github.com/typicode/jsonplaceholder

class FakeDataService {
  _baseUrl = "https://jsonplaceholder.typicode.com";

  getData = async url => {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(res.status);
    }
    return await res.json();
  };

  getUsersBlockquote = async () => {
    const res = await this.getData(`/comments`);
    const shuffleRes = this._shuffle(res);
    const usersData = await shuffleRes.map(this._newUserData);
    return usersData;
  };

  _shuffle(array) {
    return array.sort(() => Math.random() - 0.5).slice(0, 5);
  }
  
  _newUserData = user => {
    return {
      id: user.id,
      name: user.name,
      body: user.body,
      email: user.email
    };
  };
}

export default FakeDataService;
