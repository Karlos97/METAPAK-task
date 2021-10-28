import axios from 'axios';
import { bookDetailsUrl } from '../../config/config';

const getBookDetails = (username) =>
  axios
    .get(bookDetailsUrl + username)
    .then((res) => res.data)
    .then((user) => ({
      login: user.login,
      name: user.name || null,
      id: user.id,
      avatarUrl: user.avatar_url,
      githubUrl: user.html_url,
    }));

export default getBookDetails;

// - This view should contain information about the chosen user:
//   - Avatar,
//   - Name,
//   - GitHub username,
//   - Id,
//   - Team badge,
//   - Link do their profile on GitHub,
// - A _Back_ button, which, when clicked, should redirect the user to the home page.
