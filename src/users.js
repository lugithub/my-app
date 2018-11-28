import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }

  static getone(id) {
    return axios.get(`/users/${id}`).then(resp => resp.data);
  }
}

export default Users;