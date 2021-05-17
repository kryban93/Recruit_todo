import React from 'react';
import { Flex, Paragraph, Label, Box, Button, Image } from '@theme-ui/components';
import { useRecoilState } from 'recoil';
import atoms from '../../recoil/atoms';
import PropTypes from 'prop-types';
import icons from '../../assets/icons';

/** @jsxImportSource theme-ui */
const Task = ({ title, completed, id, created, updated, userId }) => {
  const { tasksListAtom } = atoms;
  const [atomTasksList, setAtomTasksList] = useRecoilState(tasksListAtom);

  const toggleTaskComplete = () => {
    let tempTasksArray = [...atomTasksList];
    const index = tempTasksArray.findIndex((value) => value.id === id);
    const toggledTask = {
      title,
      completed: !completed,
      id,
      created,
      updated,
      userId,
    };

    const newTasksList = [
      ...atomTasksList.slice(0, index),
      toggledTask,
      ...atomTasksList.slice(index + 1),
    ];
    setAtomTasksList(newTasksList);
  };

  const deleteTask = () => {
    const filteredTasksList = atomTasksList.filter((task) => task.id !== id);

    setAtomTasksList(filteredTasksList);
  };

  //const formattedCreatedDate = Date(created);
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        m: '5px',
        p: '5px',
        boxShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        borderRadius: '5px',
        bg: '#fff',
        transition: 'transform 0.2s ease-in',

        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Label htmlFor={`checkbox_${id}`} sx={{ width: '40px' }}>
        <Image
          src={!completed ? icons.check_grey : icons.check_green}
          alt={`${title} task complete button`}
        />
        <input
          type='checkbox'
          onChange={toggleTaskComplete}
          id={`checkbox_${id}`}
          checked={completed}
          sx={{ display: 'none' }}
        />
      </Label>
      <Box sx={{ width: '90%', textAlign: 'left' }}>
        <Paragraph variant='title'>{title}</Paragraph>
        {
          //<Paragraph variant='additional'>{formattedCreatedDate}</Paragraph> !
        }
      </Box>
      <Label sx={{ display: 'none' }} htmlFor={`checkbox_${id}`} />
      <Button sx={{ bg: 'transparent', height: '25px', flexGrow: 2 }} onClick={deleteTask}>
        <Image
          src={icons.deleteIcon}
          alt={`delete task ${title} button`}
          sx={{ height: '25px', width: '25px' }}
        />
      </Button>
    </Flex>
  );
};

export default Task;

Task.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};
