import { selector } from 'recoil';
import atoms from './atoms';
import data from '../data/mockedData';

const { searchValueAtom } = atoms;

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

const selectors = {
  fetchTasksDataSelector,
  searchTasksSelector,
};

export default selectors;
