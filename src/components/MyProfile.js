import React from 'react';
import { useSelector } from 'react-redux';
import JoinedCard from './joinedCard';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.joined === true);
  const toDisplay = joinedMissions.map((mission) => (
    <JoinedCard key={mission.id} name={mission.name} />));
  return (
    <div>
      <div>
        {
          toDisplay
        }
      </div>
    </div>
  );
}

export default MyProfile;
