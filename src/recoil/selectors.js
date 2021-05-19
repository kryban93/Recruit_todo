import { selector } from 'recoil';
import atoms from './atoms';

const { searchValueAtom, filterOptionAtom, tasksListAtom } = atoms;

const searchTasksSelector = selector({
  key: 'searchTasksSelector',
  get: ({ get }) => {
    const searchValue = new RegExp(get(searchValueAtom), 'gi');
    const tasksList = get(tasksListAtom);

    const filteredTasksArray = tasksList.filter((task) => searchValue.test(task.title));

    console.log(filteredTasksArray);
    return filteredTasksArray;
  },
});

const tasksCounterSelector = selector({
  key: 'tasksCounterSelector',
  get: ({ get }) => {
    let tasksList = get(tasksListAtom);

    const totalTasksNum = tasksList.length;
    const completedTasksNum = tasksList.filter((task) => task.completed).length;
    const uncompletedTasksNum = tasksList.filter((task) => !task.completed).length;
    const completedTasksPercentageNum = (completedTasksNum * 100) / totalTasksNum || 0;
    return {
      totalTasksNum,
      completedTasksNum,
      uncompletedTasksNum,
      completedTasksPercentageNum,
    };
  },
});

const filteredTasksListSelector = selector({
  key: 'filteredTasksListSelector',
  get: ({ get }) => {
    const filterOption = get(filterOptionAtom);
    const tasksList = get(tasksListAtom);

    switch (filterOption) {
      case 'uncompleted':
        return tasksList.filter((task) => !task.completed);
      case 'completed':
        return tasksList.filter((task) => task.completed);
      default:
        return tasksList;
    }
  },
});

const selectors = {
  searchTasksSelector,
  tasksCounterSelector,
  filteredTasksListSelector,
};

export default selectors;
