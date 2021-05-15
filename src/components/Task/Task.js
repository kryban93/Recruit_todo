import { Flex } from '@theme-ui/components';
import React from 'react';

const Task = ({ title, completed, id, created, updated, userId }) => {
  return (
    <Flex flex={{ alignItems: 'center', m: '2px 0' }}>
      <p>{title}</p>
    </Flex>
  );
};

export default Task;
