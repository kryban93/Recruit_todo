import { selector } from 'recoil';
import atoms from './atoms';
import data from '../data/mockedData';

const { searchValueAtom, filterOptionAtom } = atoms;

const fetchTasksDataSelector = selector({
  key: 'fetchTasksDataSelector',
  get: async () => {
    //const response = await fetch('https://gorest.co.in/public-api/todos');
    //const data = await response.json();
    const mockedData = data;

    //return data.data;
    return mockedData;
  },
});

const searchTasksSelector = selector({
  key: 'searchTasksSelector',
  get: ({ get }) => {
    const searchValue = new RegExp(get(searchValueAtom), 'gi');
    const tasksList = get(fetchTasksDataSelector);

    const filteredTasksArray = tasksList.filter((task) => searchValue.test(task.title));

    console.log(filteredTasksArray);
    return filteredTasksArray;
  },
});

const tasksCounterSelector = selector({
  key: 'tasksCounterSelector',
  get: ({ get }) => {
    let tasksList = get(fetchTasksDataSelector);

    const totalTasksNum = tasksList.length;
    const completedTasksNum = tasksList.filter((task) => task.completed).length;
    const uncompletedTasksNum = tasksList.filter((task) => !task.completed).length;
    const completedTasksPercentageNum = (completedTasksNum * 100) / totalTasksNum;
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
    const tasksList = get(searchTasksSelector);

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
  fetchTasksDataSelector,
  searchTasksSelector,
  tasksCounterSelector,
  filteredTasksListSelector,
};

export default selectors;
