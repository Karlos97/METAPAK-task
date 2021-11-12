import axios, { AxiosResponse } from 'axios';
import { userListLink, usersPerPage } from '../../config/config';
import { UserListItem } from '../../types/userType';

const getUsersList = (since = 0): Promise<UserListItem[]> => {
  return axios
    .get<UserListItem[]>(userListLink + `${usersPerPage}&since=${since}`)
    .then((res: AxiosResponse<UserListItem[]>) =>
      res.data?.map(({ login, id, avatar_url, html_url }) => ({
        login: login,
        id: id,
        avatar_url,
        html_url,
      }))
    );
};

export default getUsersList;
