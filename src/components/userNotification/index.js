import React, { useContext } from 'react';
import { UIContext } from '../../context/uiContext';
import './index.scss';

const UserNotification = () => {
  const { data: { notifications }, setData } = useContext(UIContext);
  const destroyCurrentNotification = () => {
    setData(prev => {
      return ({
        ...prev,
        notifications: []
      })
    });
  }
  return (
    <React.Fragment>
      {
        notifications.map((item, index) => {
          const { description, status } = item;
          return (
            <div
              onAnimationEnd={destroyCurrentNotification}
              className={`notification ${status}`}
              key={index}>
              <p>{description}</p>
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export default UserNotification;
