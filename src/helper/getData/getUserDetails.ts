import axios, { AxiosResponse } from 'axios';
import { userDetailsUrl } from '../../config/config';
import { UserDetailsType } from '../../types/userType';

const getUserDetails = (username: string): Promise<UserDetailsType> =>
  axios
    .get<UserDetailsType>(userDetailsUrl + username)
    .then((res: AxiosResponse<UserDetailsType>) => res.data)
    .then(({ name, login, id, avatar_url, html_url }: UserDetailsType) => ({
      login,
      name,
      id,
      avatar_url,
      html_url,
    }));

export default getUserDetails;
