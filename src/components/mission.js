import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import styles from './mission.module.css';

function Mission() {
  const handleAdd = () => {
    console.log('hello');
  };

  const handleDelete = () => {
    console.log('delete');
  };
  const dataSource = [
    {
      key: '1',
      title: 'Mission',
      description: 'This could be the time you would die and go away far far away',
      status: '',
    },
    {
      key: '2',
      title: 'Mission',
      description: 'This could be the time you would die and go away far far away',
    },
    {
      key: '3',
      title: 'Mission',
      description: 'This could be the time you would die and go away far far away',
      status: '',
    },
  ];

  const columns = [
    {
      title: 'Mission',
      dataIndex: 'title',
      key: 'Mission',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'Description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (dataSource.length > 1 ? (
        <Popconfirm title="sure to add" onConfirm={() => handleAdd(record)}>
          <Button type="primary" ghost>
            Join Mission
          </Button>
          {' '}
        </Popconfirm>
      ) : (
        <Popconfirm title="sure to remove" onConfirm={() => handleDelete()}>
          <Button type="danger" ghost>
            Delete
          </Button>
        </Popconfirm>
      ))

      ,
    },

  ];
  return (
    <div className={styles.tableContainer}>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
      />
    </div>
  );
}

export default Mission;
