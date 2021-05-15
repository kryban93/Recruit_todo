import React from 'react';
import { useRecoilValue } from 'recoil';
import selectors from '../../recoil/selectors';
import { Flex } from 'theme-ui';
import Task from '../Task/Task';

const TaskList = () => {
  const { fetchTasksDataSelector } = selectors;
  const tasksList = useRecoilValue(fetchTasksDataSelector);
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      {Object.keys(tasksList).map((item, i) => (
        <Task
          key={i}
          title={tasksList[item].title}
          completed={tasksList[item].completed}
          id={tasksList[item].id}
          created={tasksList[item].created_at}
          updated={tasksList[item].updated_at}
          userId={tasksList[item].user_id}
        />
      ))}
    </Flex>
  );
};

export default TaskList;
