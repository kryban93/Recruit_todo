import React from 'react';
import Loader from '../../components/Loader/Loader';
import SearchListWrapper from '../../components/SearchListWrapper/SearchListWrapper';

const SearchView = () => {
  return (
    <section>
      <React.Suspense fallback={<Loader />}>
        <SearchListWrapper />
      </React.Suspense>
    </section>
  );
};

export default SearchView;
