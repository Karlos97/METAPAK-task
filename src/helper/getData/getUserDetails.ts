import axios, { AxiosResponse } from 'axios';
import { userDetailsUrl } from '../../config/config';
import { UserDetails, UserListItem } from '../../types/userType';

// .get<UserListItem[]>(bookstListLink)
// .then((res: AxiosResponse<UserListItem[]>) => {
const getUserDetails = (username: string) =>
  axios
    .get<UserDetails>(userDetailsUrl + username)
    .then((res: AxiosResponse<UserDetails>) => {
      console.log(`user details `, res.data);
      return res.data;
    })
    .then(({ name, login, id, avatar_url, html_url }: UserDetails) => ({
      login,
      name: name || null,
      id,
      avatar_url,
      html_url,
    }));

export default getUserDetails;

// - This view should contain information about the chosen user:
//   - Avatar,
//   - Name,
//   - GitHub username,
//   - Id,
//   - Team badge,
//   - Link do their profile on GitHub,
// - A _Back_ button, which, when clicked, should redirect the user to the home page.
