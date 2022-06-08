import React from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import close_icon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed red',
    padding: '.5rem .2rem',
    position: 'absolute',
    width: '40%',
    right: '1rem',
  },
  menuItem: {
    textAlign: 'right',
    margin: '0 1em',
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const closeStyle = {
      position: 'absolute',
      textAlign: 'right',
      top: '14px',
      right: '12px',
      backgroundColor: 'white',
      border: 0,
    };
    const notificationsList = listNotifications.length > 0 ?
      listNotifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          id={notification.id}
          type={notification.type}
          value={notification.value}
          html={notification.html}
          markAsRead={this.markAsRead}
        />
      )) : <NotificationItem value="No new notification for now" />
    const notifications = displayDrawer ? <div className={css(styles.notifications)}>
      <button style={closeStyle} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src={close_icon} alt="close-icon" width="10" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {notificationsList}
      </ul>
    </div> : undefined;

    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {notifications}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
