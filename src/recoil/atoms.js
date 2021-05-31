import { atom } from 'recoil';

/*
const tasksListAtom = atom({
  key: 'tasksListAtom',
  default: selector({
    key: 'tasksListAtom/Default',
    get: async () => {
      const response = await fetch('https://gorest.co.in/public-api/users/71/todos');
      const data = await response.json();
      //const mockedData = data;

      //return mockedData;
      return data.data;
    },
  }),
}); */

const tasksListRefresherAtom = atom({
  key: 'tasksListRefresherAtom',
  default: 0,
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
  searchValueAtom,
  filterOptionAtom,
  activeAlertAtom,
  tasksListRefresherAtom,
};

export default atoms;
