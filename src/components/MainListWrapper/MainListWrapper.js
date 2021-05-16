import React from 'react';
import selectors from '../../recoil/selectors';
import { useRecoilValue } from 'recoil';
import TasksList from '../TasksList/TaskList';

const MainListWrapper = () => {
  const { fetchTasksDataSelector } = selectors;
  const tasksList = useRecoilValue(fetchTasksDataSelector);

  return (
    <>
      <TasksList tasksList={tasksList} />
    </>
  );
};

export default MainListWrapper;
