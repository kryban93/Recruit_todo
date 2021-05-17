import React from 'react';
import Loader from '../../components/Loader/Loader';
import SearchListWrapper from '../../components/SearchListWrapper/SearchListWrapper';
import { Flex } from 'theme-ui';

const SearchView = () => {
  return (
    <Flex
      as='section'
      sx={{
        flexDirection: 'column',
        width: ['95%', '75%', '50%'],
        position: 'relative',
        m: ' 0 auto',
        pt: '50px',
      }}
    >
      <React.Suspense fallback={<Loader />}>
        <SearchListWrapper />
      </React.Suspense>
    </Flex>
  );
};

export default SearchView;
