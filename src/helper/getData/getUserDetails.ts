import axios, { AxiosResponse } from 'axios';
import { userDetailsUrl } from '../../config/config';
import { UserDetails } from '../../types/userType';

const getUserDetails = (username: string): Promise<UserDetails> =>
  axios
    .get<UserDetails>(userDetailsUrl + username)
    .then((res: AxiosResponse<UserDetails>) => {
      return res.data;
    })
    .then(({ name, login, id, avatar_url, html_url }: UserDetails) => ({
      login,
      name,
      id,
      avatar_url,
      html_url,
    }));

export default getUserDetails;
