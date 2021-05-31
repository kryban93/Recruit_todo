import { selector } from 'recoil';
import atoms from './atoms';

const { searchValueAtom, filterOptionAtom, tasksListRefresherAtom } = atoms;

const fetchDataFromApiSelector = selector({
  key: 'tasksListAtom/Default',
  get: async ({ get }) => {
    const refresherValue = get(tasksListRefresherAtom);
    const response = await fetch('https://gorest.co.in/public-api/users/71/todos');
    const data = await response.json();
    //const mockedData = data;

    //return mockedData;
    return data.data;
  },
});

const searchTasksSelector = selector({
  key: 'searchTasksSelector',
  get: ({ get }) => {
    const searchValue = new RegExp(get(searchValueAtom), 'gi');
    const tasksList = get(fetchDataFromApiSelector);

    const filteredTasksArray = tasksList.filter((task) => searchValue.test(task.title));

    console.log(filteredTasksArray);
    return filteredTasksArray;
  },
});

const tasksCounterSelector = selector({
  key: 'tasksCounterSelector',
  get: ({ get }) => {
    let tasksList = get(fetchDataFromApiSelector);

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
    const tasksList = get(fetchDataFromApiSelector);

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
  fetchDataFromApiSelector,
  searchTasksSelector,
  tasksCounterSelector,
  filteredTasksListSelector,
};

export default selectors;
