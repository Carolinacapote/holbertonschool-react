import React, {Component} from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";

/**
 * 
 */
class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(newNotifications) {
    return (
      newNotifications.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    const buttonStyle = {
      border: 'none',
      backgroundColor: 'transparent',
      float: 'right'
    }

    const notifications = listNotifications.length > 0 ?
      listNotifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          type={notification.type}
          value={notification.value}
          html={notification.html}
          id={notification.id}
          markAsRead={this.markAsRead}
        />
      )) : <NotificationItem value="No new notification for now" />

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
        { notifications }
      </ul>
    </div>: undefined;

    return (
      <>
        <div className="menuItem">
            <p onClick={ () => console.log("holi") }>Your notifications</p>
        </div>
        { moduleMyNotifications }
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
