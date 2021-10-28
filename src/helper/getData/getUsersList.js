import axios from 'axios';
import { bookListUrl, booksPerFetch } from '../../config/config';

const getUsersList = (startIndex = 0) => {
  const bookstListLink = `https://api.github.com/users`;

  return axios
    .get(bookstListLink)
    .then((res) => res.data)
    .then((res) =>
      res?.map((user) => ({
        login: user.login,
        id: user.id,
        avatarUrl: user.avatar_url,
        githubUrl: user.html_url,
      }))
    );
};

export default getUsersList;
