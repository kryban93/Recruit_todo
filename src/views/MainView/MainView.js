import React from 'react';
import Loader from '../../components/Loader/Loader';
import MainListWrapper from '../../components/MainListWrapper/MainListWrapper';
import TasksCounter from '../../components/TasksCounter/TasksCounter';
import TasksFilterSelect from '../../components/TasksFilterSelect/TasksFilterSelect';
import { Flex } from 'theme-ui';

const MainView = () => {
  return (
    <Flex
      as='section'
      sx={{
        flexDirection: 'column',
        width: ['95%', '75%', '60%', '700px'],
        position: 'relative',
        m: ' 0 auto',
        pt: '50px',
      }}
    >
      <React.Suspense fallback={<Loader />}>
        <TasksCounter />
        <TasksFilterSelect />
        <MainListWrapper />
      </React.Suspense>
    </Flex>
  );
};

export default MainView;
