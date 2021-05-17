import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import atoms from '../../recoil/atoms';
import logo from '../../assets/logo.svg';
import { Flex, Image, Button, Input, Box } from 'theme-ui';
import icons from '../../assets/icons';

const Nav = () => {
  const { searchValueAtom } = atoms;
  const [searchValue, setSearchValue] = useRecoilState(searchValueAtom);

  return (
    <Flex
      as='nav'
      sx={{
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: ['100%', '85%', '75%', '50%'],
        m: '0 auto',
        zIndex: 4,
        bg: 'background',
      }}
    >
      <Link to='/'>
        <Button>
          <Image src={logo} alt='Logo Home button' />
        </Button>
      </Link>
      <Flex sx={{ width: '100%', flexGrow: 1, mr: '15px' }}>
        <Input
          sx={{ width: '90%' }}
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
    </Flex>
  );
};

export default Nav;
