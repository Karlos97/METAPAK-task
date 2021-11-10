interface Props {
  id: number;
  classes: { [key: string]: string };
}

const Badge: React.FC<Props> = ({ id, classes }: Props) => {
  let badge = null;
  const multipleOfFour = id % 4 === 0;
  const multipleOfSix = id % 6 === 0;
  if (multipleOfFour) {
    badge = (
      <span className={classes['user-card-top-description-rank-badge-a']}>
        Team A
      </span>
    );
  } else if (multipleOfSix) {
    badge = (
      <span className={classes['user-card-top-description-rank-badge-b']}>
        Team B
      </span>
    );
  }
  if (multipleOfFour && multipleOfSix) {
    badge = (
      <span className={classes['user-card-top-description-rank-badge-c']}>
        Team C
      </span>
    );
  }

  return badge;
};
export default Badge;
