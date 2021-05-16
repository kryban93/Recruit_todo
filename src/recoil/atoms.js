import { atom } from 'recoil';

const searchValueAtom = atom({
  key: 'searchValueAtom',
  default: '',
});

const filterOptionAtom = atom({
  key: 'filterOptionAtom',
  default: 'uncompleted',
});

const atoms = {
  searchValueAtom,
  filterOptionAtom,
};

export default atoms;
