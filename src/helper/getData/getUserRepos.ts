import axios, { AxiosResponse } from 'axios';
import { userReposUrl } from '../../config/config';

interface IUserRepo {
  name: string;
}
const getUserRepos = (username: string): Promise<IUserRepo[]> =>
  axios
    .get<IUserRepo[]>(`${userReposUrl}${username}/repos`)
    .then((res: AxiosResponse<IUserRepo[]>) =>
      res.data?.map(({ name }: IUserRepo) => ({
        name,
      }))
    );

export default getUserRepos;
