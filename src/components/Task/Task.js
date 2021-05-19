import React, { useEffect, useState, useRef } from 'react';
import { Flex, Label, Box, Button, Image, Input } from '@theme-ui/components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import atoms from '../../recoil/atoms';
import PropTypes from 'prop-types';
import icons from '../../assets/icons';
import Editable from '../Editable/Editable';

/** @jsxImportSource theme-ui */
const Task = ({ title, completed, id, created, updated, userId }) => {
  const { tasksListAtom, activeAlertAtom } = atoms;
  const [atomTasksList, setAtomTasksList] = useRecoilState(tasksListAtom);
  const [editableTitle, setEditableTitle] = useState(title);
  const setAlertAtom = useSetRecoilState(activeAlertAtom);

  const titleInputRef = useRef();

  useEffect(() => {
    setEditableTitle(title);
  }, [title]);

  const updateTaskTitle = () => {
    let tempTasksArray = [...atomTasksList];
    const index = tempTasksArray.findIndex((task) => task.id === id);
    const toggledTask = {
      title: editableTitle,
      completed,
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
    setAlertAtom({ type: 'success', description: 'Updated task title successfully' });
  };

  const toggleTaskComplete = () => {
    const tempTasksArray = [...atomTasksList];
    const index = tempTasksArray.findIndex((task) => task.id === id);
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
    setAlertAtom({ type: 'success', description: 'Updated task successfully' });
  };

  const deleteTask = () => {
    console.log(id);
    const tempTasksArray = [...atomTasksList];
    const filteredTasksArray = tempTasksArray.filter((task) => task.id !== id);
    setAtomTasksList(filteredTasksArray);
    setAlertAtom({ type: 'success', description: 'Deleted task successfully' });
  };

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      updateTaskTitle();
    }
  };

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
        postion: 'relative',

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
          sx={{ display: 'none', width: '300px' }}
        />
      </Label>
      <Box sx={{ width: '90%', textAlign: 'left' }}>
        <Editable
          title={editableTitle}
          placeholder={editableTitle}
          childRef={titleInputRef}
          updateTaskTitle={updateTaskTitle}
        >
          <Input
            type='text'
            ref={titleInputRef}
            value={editableTitle}
            onChange={(event) => {
              setEditableTitle(event.target.value);
            }}
            onKeyDown={(event) => handleKeyDown(event)}
            sx={{ width: '100%' }}
          />
        </Editable>
      </Box>

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
  created: PropTypes.string,
  updated: PropTypes.string,
  userId: PropTypes.number,
};
