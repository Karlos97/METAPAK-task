import axios, { AxiosResponse } from 'axios';
import { userReposUrl } from '../../config/config';

interface IUserRepo {
  name: string;
}
const getUserRepos = (username: string) =>
  axios
    .get<IUserRepo[]>(`${userReposUrl}${username}/repos`)
    .then((res: AxiosResponse<IUserRepo[]>) => res.data)
    .then((res) =>
      res?.map(({ name }: IUserRepo) => ({
        name,
      }))
    );

export default getUserRepos;