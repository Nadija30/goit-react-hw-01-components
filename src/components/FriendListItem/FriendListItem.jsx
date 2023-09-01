import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      {isOnline ? (
        <span className="online"></span>
      ):(
        <span className="offline"></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="64" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};