import request from '../util/request';

export function getUserName(userID) {
  return request('/users/' + userID).then(user => user.name);
}
