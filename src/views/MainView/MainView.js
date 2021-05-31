import React, { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import MainListWrapper from '../../components/MainListWrapper/MainListWrapper';
import TasksCounter from '../../components/TasksCounter/TasksCounter';
import TasksFilterSelect from '../../components/TasksFilterSelect/TasksFilterSelect';

import { Button, Flex, Image } from 'theme-ui';
import icons from '../../assets/icons';
import TaskForm from '../../components/TaskForm/TaskForm';

const MainView = () => {
  const [isFormModalOpen, setFormModalOpenState] = useState(false);

  const handleOpenFormModal = () => {
    setFormModalOpenState(!isFormModalOpen);
  };
  return (
    <Flex
      as='section'
      sx={{
        flexDirection: 'column',
        width: ['95%', '75%', '60%', '700px'],
        m: ' 0 auto',
        pt: '50px',
      }}
    >
      <React.Suspense fallback={<Loader />}>
        <TasksCounter />
        <TasksFilterSelect />
        <MainListWrapper />
      </React.Suspense>
      <Button
        variant='add'
        sx={{ position: 'fixed', bottom: '5px', right: '5px' }}
        onClick={() => setFormModalOpenState(!isFormModalOpen)}
      >
        <Image src={icons.plus_white} alt='open task form button' />
      </Button>
      {isFormModalOpen && <TaskForm handleOpenFormModal={handleOpenFormModal} />}
    </Flex>
  );
};

export default MainView;
