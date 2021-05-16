import React from 'react';
import Loader from '../../components/Loader/Loader';
import MainListWrapper from '../../components/MainListWrapper/MainListWrapper';
import TasksCounter from '../../components/TasksCounter/TasksCounter';

const MainView = () => {
  return (
    <section>
      <React.Suspense fallback={<Loader />}>
        <TasksCounter />
        <MainListWrapper />
      </React.Suspense>
    </section>
  );
};

export default MainView;
