import { selector } from 'recoil';

const fetchTasksDataSelector = selector({
  key: 'fetchTasksDataSelector',
  get: async () => {
    const response = await fetch('https://gorest.co.in/public-api/todos');
    const data = await response.json();
    console.log(data.data);
    return data.data;
  },
});

const selectors = {
  fetchTasksDataSelector,
};

export default selectors;
