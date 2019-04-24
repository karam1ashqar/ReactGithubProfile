import { token } from "./token";

export const fetchUserRepos = cb => {
  fetch(`https://api.github.com/users/karam1ashqar/repos?access_token=${token}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => console.log(err));
};
