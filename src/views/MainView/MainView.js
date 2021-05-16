import React from 'react';
import Loader from '../../components/Loader/Loader';
import TaskList from '../../components/TasksList/TaskList';
import selectors from '../../recoil/selectors';
import { useRecoilValue } from 'recoil';
import MainListWrapper from '../../components/MainListWrapper/MainListWrapper';

const MainView = () => {
  return (
    <section>
      <p>This is main View</p>
      <React.Suspense fallback={<Loader />}>
        <MainListWrapper />
      </React.Suspense>
    </section>
  );
};

export default MainView;
