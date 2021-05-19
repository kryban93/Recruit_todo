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
    <Flex
      as='nav'
      sx={{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: ['100%', '85%', '75%', '700px'],
        zIndex: 4,
        bg: 'background',
      }}
      data-testid='nav'
    >
      <Link to='/' onClick={() => setSearchValue('')}>
        <Button data-testid='logo-button'>
          <Image src={logo} alt='Logo Home button' />
        </Button>
      </Link>
      <Flex sx={{ width: '100%', flexGrow: 1, m: ' 0 20px' }}>
        <Input
          variant='search'
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
