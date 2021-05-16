import React from 'react';
import Loader from '../../components/Loader/Loader';
import MainListWrapper from '../../components/MainListWrapper/MainListWrapper';
import TasksCounter from '../../components/TasksCounter/TasksCounter';
import TasksFilterSelect from '../../components/TasksFilterSelect/TasksFilterSelect';

const MainView = () => {
  return (
    <section>
      <React.Suspense fallback={<Loader />}>
        <TasksCounter />
        <TasksFilterSelect />
        <MainListWrapper />
      </React.Suspense>
    </section>
  );
};

export default MainView;
