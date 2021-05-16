import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import atoms from '../../recoil/atoms';
import logo from '../../assets/logo.svg';
import { Flex, Image, Button, Input } from 'theme-ui';
import icons from '../../assets/icons';

const Nav = () => {
  const { searchValueAtom } = atoms;
  const [searchValue, setSearchValue] = useRecoilState(searchValueAtom);

  return (
    <Flex as='nav' sx={{ alignItems: 'center' }}>
      <Link to='/'>
        <Button>
          <Image src={logo} alt='Logo Home button' />
        </Button>
      </Link>
      <Input
        type='text'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        placeholder='Search..'
      />
      <Link to={`/search/${searchValue}`}>
        <Button variant='search'>
          <Image src={icons.search} alt='search button icon' />
        </Button>
      </Link>
    </Flex>
  );
};

export default Nav;
