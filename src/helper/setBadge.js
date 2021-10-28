const setBadge = (id, classes) => {
  let badge = null;
  const multipleOfFour = id % 4 === 0;
  const multipleOfSix = id % 6 === 0;
  if (multipleOfFour) {
    badge = (
      <span className={classes['user-card-top-description-badge-a']}>
        badge A
      </span>
    );
  } else if (multipleOfSix) {
    badge = (
      <span className={classes['user-card-top-description-badge-b']}>
        badge B
      </span>
    );
  }
  if (multipleOfFour && multipleOfSix) {
    badge = (
      <span className={classes['user-card-top-description-badge-c']}>
        badge C
      </span>
    );
  }

  return badge;
};
export default setBadge;
