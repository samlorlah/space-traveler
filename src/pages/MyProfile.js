import React from 'react';
import { useSelector } from 'react-redux';
import MyProfileLists from '../components/MyProfileLists';

function MyProfile() {
  const profileStyle = {
    width: '100%',
    padding: '10px 20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
  };
  const { missions } = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.joined === true);
  const state = useSelector((state) => state.rockets);
  const reservedRockets = state.rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div style={profileStyle}>
      <div>
        <MyProfileLists title="My Mission" items={joinedMissions} />
      </div>
      <div>
        <MyProfileLists title="My Rockets" items={reservedRockets} />
      </div>
      {/* <div>
        {
          toDisplay
        }
      </div> */}
    </div>
  );
}

export default MyProfile;
