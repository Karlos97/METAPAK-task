import React from 'react';
import { NotificationType } from '../../../types/notificationType';
import classes from './Notification.module.scss';

const Notification: React.FC<NotificationType> = ({
  status,
  title,
  message,
}) => {
  let specialClasses = '';

  if (status === 'error') {
    specialClasses = classes.error;
  }
  if (status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2 className={classes['notificion-header']}>{title}</h2>
      <p className={classes['notificion-paragraph']}>{message}</p>
    </section>
  );
};

export default Notification;
