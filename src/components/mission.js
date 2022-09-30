import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission, actions } from '../redux/mission/missions';
import styles from './mission.module.css';

function Mission() {
  const dispatch = useDispatch();
  const { missions, loading } = useSelector((state) => state.missions);

  useEffect(() => {
    if (loading === 'idle') {
      dispatch(fetchMission());
    }
  }, []);

  const handleJoin = (e) => {
    const { id } = e.target;
    dispatch(actions.joinMission(id));
  };

  const handleLeave = (e) => {
    const { id } = e.target;
    dispatch(actions.leaveMission(id));
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {Array.isArray(missions) ? missions.map((one) => (
            <tr key={one.id}>
              <td>{one.name}</td>
              <td className={styles.desc}>{one.description}</td>
              <td>
                {!one.joined && <p className={styles.non}>NOT A MEMBER</p>}
                {one.joined && <p className={styles.active}>ACTIVE MEMBER</p>}
              </td>
              <td>{!one.joined ? (<button id={one.id} type="submit" className={styles.button} onClick={handleJoin}>Join Mission</button>) : (<button type="button" id={one.id} className={styles.btn} onClick={handleLeave}>Leave Mission</button>)}</td>
            </tr>
          )) : null}
        </tbody>
      </table>
    </div>
  );
}

export default Mission;
