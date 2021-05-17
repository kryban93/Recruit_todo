import { atom, selector } from 'recoil';

const tasksListAtom = atom({
  key: 'tasksListAtom',
  default: selector({
    key: 'tasksListAtom/Default',
    get: async () => {
      const response = await fetch('https://gorest.co.in/public-api/todos');
      const data = await response.json();

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

const atoms = {
  tasksListAtom,
  searchValueAtom,
  filterOptionAtom,
};

export default atoms;
