import React from 'react';
import selectors from '../../recoil/selectors';
import { useRecoilValue } from 'recoil';
import TasksList from '../TasksList/TaskList';

const SearchListWrapper = () => {
  const { searchTasksSelector } = selectors;
  const tasksList = useRecoilValue(searchTasksSelector);

  return (
    <>
      <TasksList tasksList={tasksList} />
    </>
  );
};

export default SearchListWrapper;
