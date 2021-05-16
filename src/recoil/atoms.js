import { atom } from 'recoil';

const searchValueAtom = atom({
  key: 'searchValueAtom',
  default: '',
});

const atoms = {
  searchValueAtom,
};

export default atoms;
