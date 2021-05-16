import React from 'react';
import selectors from '../../recoil/selectors';
import { useRecoilValue } from 'recoil';
import TasksList from '../TasksList/TaskList';

const MainListWrapper = () => {
  const { filteredTasksListSelector } = selectors;
  const tasksList = useRecoilValue(filteredTasksListSelector);

  return (
    <>
      <TasksList tasksList={tasksList} />
    </>
  );
};

export default MainListWrapper;
