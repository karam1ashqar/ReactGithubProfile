import { token } from "./token";

export const fetchUserInfo = cb => {
  fetch(`https://api.github.com/users/karam1ashqar?access_token=${token}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => console.log(err));
};
