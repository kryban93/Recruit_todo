import React, { useState } from 'react';
import { Button, Flex, Heading, Input, Image } from 'theme-ui';
import icons from '../../assets/icons';
import PropTypes from 'prop-types';
import requests from '../../requests';
import { useSetRecoilState } from 'recoil';
import atoms from '../../recoil/atoms';
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';

/** @jsxImportSource theme-ui */
const TaskForm = ({ handleOpenFormModal }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const { activeAlertAtom, tasksListRefresherAtom } = atoms;
  const { addTaskFetch } = requests;
  const [isTaskCompleted, setTaskCompletedState] = useState(false);
  const setAlertAtom = useSetRecoilState(activeAlertAtom);
  const setRefresherValue = useSetRecoilState(tasksListRefresherAtom);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    await addTaskFetch(taskTitle)
      .then(() => {
        handleOpenFormModal();
        setRefresherValue((refreshValue) => refreshValue + 1);
        setAlertAtom({ type: 'success', description: 'Added new task successfully' });
      })
      .catch((error) => {
        setAlertAtom({ type: 'warning', description: `Error while creating task: ${error} ` });
      });
  };
  return (
    <Flex
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        bg: 'rgba(0,0,0,0.3)',
        zIndex: 5,
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Flex
        as='form'
        onSubmit={handleFormSubmit}
        sx={{
          width: '400px',
          height: '250px',
          bg: 'white',
          m: '0 auto',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          boxSizing: 'border-box',
          p: '5px',
          borderRadius: '5px',
        }}
      >
        <Button
          onClick={() => handleOpenFormModal()}
          sx={{ position: 'absolute', top: '10px', right: '5px' }}
        >
          <Image src={icons.close_black} alt='close form modal button' />
        </Button>
        <Heading as='h2' sx={{ m: '50px 0 10px' }}>
          What's your next task?
        </Heading>
        <Input
          variant='add'
          onChange={(event) => setTaskTitle(event.target.value)}
          value={taskTitle}
          placeholder='Title'
        />

        <Button
          sx={{ position: 'absolute', bottom: '10px', bg: 'primary', p: '5px 10px', fontSize: 4 }}
        >
          add
        </Button>
      </Flex>
    </Flex>
  );
};

export default TaskForm;

TaskForm.propTypes = {
  handleOpenFormModal: PropTypes.func.isRequired,
};
