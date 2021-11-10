import axios, { AxiosResponse } from 'axios';
import { userDetailsUrl } from '../../config/config';
import { UserDetails } from '../../types/userType';

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
