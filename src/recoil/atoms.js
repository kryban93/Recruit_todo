import { atom, selector } from 'recoil';
import data from '../data/mockedData';

const tasksListAtom = atom({
  key: 'tasksListAtom',
  default: selector({
    key: 'tasksListAtom/Default',
    get: async () => {
      const response = await fetch('https://gorest.co.in/public-api/todos');
      const data = await response.json();
      //const mockedData = data;

      //return mockedData;
      return data.data;
    },
  }),
});

const searchValueAtom = atom({
  key: 'searchValueAtom',
  default: '',
});

const filterOptionAtom = atom({
  key: 'filterOptionAtom',
  default: 'uncompleted',
});

const activeAlertAtom = atom({
  key: 'activeAlertAtom',
  default: {
    type: '',
    description: '',
  },
});

const atoms = {
  tasksListAtom,
  searchValueAtom,
  filterOptionAtom,
  activeAlertAtom,
};

export default atoms;
