import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingRockets, reserveRocket, cancelReservation } from '../redux/rockets/rockets';
import RocketsItemList from './RocketsItemList';
import Loading from './Loading';

const RocketsItems = () => {
  const state = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.rockets.length === 0) {
      dispatch(fetchingRockets());
    }
  }, []);

  const handleReservation = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleReservationCancelation = (id) => {
    dispatch(cancelReservation(id));
  };
  return (
    <div className="rockets">
      {state.loading ? (
        <Loading />
      ) : (
        <ul>
          {state.rockets.map((rocket) => (
            <RocketsItemList
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              image={rocket.img}
              reserved={rocket.reserved}
              handleReservation={handleReservation}
              handleReservationCancelation={handleReservationCancelation}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RocketsItems;
