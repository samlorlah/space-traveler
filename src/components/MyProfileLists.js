import React from 'react';
import styles from './MyProfile.module.css';
import MyProfileListItem from './MyProfileListItem';

/* eslint-disable react/prop-types */
const MyProfileLists = ({ items, title }) => (
  <>
    <h3>{title}</h3>
    <ul className={styles.profilesList}>
      {items.map((item) => (
        <MyProfileListItem key={item.id} itemName={item.name} />
      ))}
    </ul>
  </>
);

export default MyProfileLists;
