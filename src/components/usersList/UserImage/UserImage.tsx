import classes from './UserImage.module.scss';

interface Props {
  avatar_url?: string;
  isUserDetails: boolean;
}
const UserImage: React.FC<Props> = ({ avatar_url, isUserDetails }: Props) => {
  const imageClass = isUserDetails
    ? classes['image-big']
    : classes['image-small'];
  return (
    <img
      className={`${classes.image} ${imageClass}`}
      alt="User"
      src={avatar_url}
    />
  );
};
export default UserImage;
