import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission, actions } from '../redux/mission/missions';
import styles from './mission.module.css';

function Mission() {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (mission.length === 0) {
      dispatch(fetchMission());
    }
  }, [dispatch, mission]);

  const handleJoin = (e) => {
    const { id } = e.target;
    dispatch(actions.joinMission(id));
    // console.log(dispatch(actions.joinMission(id)));
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
          {mission.map((one) => (
            <tr key={one.id}>
              <td>{one.name}</td>
              <td className={styles.desc}>{one.description}</td>
              <td>
                {!one.joined && <p className={styles.non}>NOT A MEMBER</p>}
                {one.joined && <p className={styles.active}>ACTIVE MEMBER</p>}
              </td>
              <td>{!one.joined ? (<button id={one.id} type="submit" className={styles.button} onClick={handleJoin}>Join Mission</button>) : (<button type="button" onClick={handleJoin}>Leave Mission</button>)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mission;
