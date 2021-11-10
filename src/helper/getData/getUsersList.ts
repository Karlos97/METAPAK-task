import axios, { AxiosResponse } from 'axios';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { usersPerPage } from '../../config/config';
import { selectShowPage } from '../../store/selectors/selectors';
import { UserListItem } from '../../types/userType';

const getUsersList = (since = 0): Promise<UserListItem[]> => {
  const bookstListLink = `https://api.github.com/users?per_page=${usersPerPage}&since=${since}`;

  return axios
    .get<UserListItem[]>(bookstListLink)
=======
import { userListLink, usersPerPage } from '../../config/config';
import { UserListItem } from '../../types/userType';

const getUsersList = (since = 0): Promise<UserListItem[]> => {
  console.log(since);
  return axios
    .get<UserListItem[]>(userListLink + `${usersPerPage}&since=${since}`)
>>>>>>> styling
    .then((res: AxiosResponse<UserListItem[]>) => res.data)
    .then((res) =>
      res?.map(({ login, id, avatar_url, html_url }) => ({
        login: login,
        id: id,
        avatar_url: avatar_url,
        html_url: html_url,
      }))
    );
};

export default getUsersList;
