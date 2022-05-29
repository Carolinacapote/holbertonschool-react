import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";

/**
 * 
 */
function Notifications({displayDrawer}) {
  const buttonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    float: 'right'
  }

  const moduleMyNotifications = displayDrawer ? <div className="Notifications">
    <button 
      aria-label="Close"
      style={ buttonStyle }
      onClick={ () => console.log('Close button has been clicked') }
      >
        <img className="close-icon" src={closeIcon} alt="Close" />
      </button>
    <p>Here is the list of notifications</p>
    <ul>
      <NotificationItem type="default" value="New course available"/>
      <NotificationItem type="urgent" value="New resume available"/>
      <NotificationItem type="urgent" html={{__html: getLatestNotification()}}/>
    </ul>
  </div>: undefined;
  return (
    <>
      <div className="menuItem">
          <p onClick={ () => displayDrawer = !displayDrawer }>Your notifications</p>
      </div>
      { moduleMyNotifications }
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
