import React from 'react';
import PropTypes from 'prop-types';

function MyProfileListItem({ itemName }) {
  return (
    <li>{itemName}</li>
  );
}

MyProfileListItem.propTypes = { itemName: PropTypes.string.isRequired };

export default MyProfileListItem;
