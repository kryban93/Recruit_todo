import React from 'react';
import { useRecoilState } from 'recoil';
import { Select } from 'theme-ui';
import atoms from '../../recoil/atoms';

const TasksFilterSelect = () => {
  const { filterOptionAtom } = atoms;

  const [tasksFilterOption, setTasksFilterOption] = useRecoilState(filterOptionAtom);
  return (
    <Select
      value={tasksFilterOption}
      onChange={(event) => setTasksFilterOption(event.target.value)}
    >
      <option>uncompleted</option>
      <option>completed</option>
      <option>show all</option>
    </Select>
  );
};

export default TasksFilterSelect;
