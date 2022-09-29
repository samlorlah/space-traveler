import React from 'react';
import PropTypes from 'prop-types';

const RocketsItemList = ({
  id,
  name,
  description,
  image,
  reserved,
  handleReservation,
  handleReservationCancelation,
}) => (
  <li>
    <div className="images">
      <img height={150} width={200} src={image} alt={`${name}`} />
    </div>
    <div className="description">
      <h4>{name}</h4>
      <p>
        {reserved && <span>Reserved</span>}
        {' '}
        {description}
      </p>
      {!reserved && (
        <button className="reserveRocketBtn" onClick={() => handleReservation(id)} type="button">Reserve Rocket</button>
      )}
      {reserved && (
        <button className="cancelRocketBtn" onClick={() => handleReservationCancelation(id)} type="button">Cancel Reservation</button>
      )}
    </div>
  </li>
);

RocketsItemList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  handleReservation: PropTypes.func.isRequired,
  handleReservationCancelation: PropTypes.func.isRequired,
};

export default RocketsItemList;
