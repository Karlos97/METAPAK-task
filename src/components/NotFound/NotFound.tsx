import classes from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={classes['not-found']}>
      <p>Page not found!</p>
    </div>
  );
};

export default NotFound;
