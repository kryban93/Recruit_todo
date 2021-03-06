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
      sx={{
        border: 'none',
        borderBottom: '0.5px solid black',
        borderRadius: 0,
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      <option>uncompleted</option>
      <option>completed</option>
      <option>show all</option>
    </Select>
  );
};

export default TasksFilterSelect;
