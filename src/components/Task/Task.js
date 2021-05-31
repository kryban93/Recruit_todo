import React, { useEffect, useState, useRef } from 'react';
import { Flex, Box, Button, Image, Input } from '@theme-ui/components';
import { useSetRecoilState } from 'recoil';
import atoms from '../../recoil/atoms';
import PropTypes from 'prop-types';
import icons from '../../assets/icons';
import Editable from '../Editable/Editable';
import requests from '../../requests';
import TaskDetailed from '../TaskDetailed/TaskDetailed';
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';

/** @jsxImportSource theme-ui */
const Task = ({ title, completed, id, created, updated, userId }) => {
  const { activeAlertAtom, tasksListRefresherAtom } = atoms;
  const { deleteTaskFetch, updateTaskFinishStateFetch, changeTaskTitleFetch } = requests;
  const [editableTitle, setEditableTitle] = useState(title);
  const [isDetailedTaskModalVisible, setDetailedModalVisibleState] = useState(false);
  const setAlertAtom = useSetRecoilState(activeAlertAtom);
  const setRefresherValue = useSetRecoilState(tasksListRefresherAtom);

  const titleInputRef = useRef();

  useEffect(() => {
    setEditableTitle(title);
  }, [title]);

  const updateTaskTitle = async () => {
    await changeTaskTitleFetch(id, editableTitle)
      .then(() => {
        setRefresherValue((refreshValue) => refreshValue + 1);
        setAlertAtom({ type: 'success', description: 'Updated task title successfully' });
      })
      .catch((error) => {
        setAlertAtom({
          type: 'warning',
          description: `Error while updating task title: ${error} `,
        });
      });
  };

  const toggleTaskComplete = async () => {
    await updateTaskFinishStateFetch(id, completed)
      .then(() => {
        setRefresherValue((refreshValue) => refreshValue + 1);
        setAlertAtom({ type: 'success', description: 'Updated task successfully' });
      })
      .catch((error) => {
        setAlertAtom({ type: 'warning', description: `Error updating task: ${error} ` });
      });
  };

  const deleteTask = async () => {
    await deleteTaskFetch(id)
      .then(() => {
        setRefresherValue((refreshValue) => refreshValue + 1);
        setAlertAtom({ type: 'success', description: 'Deleted task successfully' });
      })
      .catch((error) => {
        setAlertAtom({ type: 'warning', description: `Error while deleting task: ${error} ` });
      });
  };

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      updateTaskTitle();
    }
  };

  const handleDetailedModalClick = () => {
    setDetailedModalVisibleState(!isDetailedTaskModalVisible);
  };

  return (
    <>
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
        <TaskCheckbox
          title={title}
          completed={completed}
          toggleTaskComplete={toggleTaskComplete}
          id={id}
        />
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
        <Button
          sx={{ bg: 'transparent', height: '25px', flexGrow: 2 }}
          onClick={handleDetailedModalClick}
        >
          <Image
            src={icons.dots_black}
            alt={`show ${title} task details`}
            sx={{ height: '25px', width: '25px' }}
          />
        </Button>
        <Button sx={{ bg: 'transparent', height: '25px', flexGrow: 2 }} onClick={deleteTask}>
          <Image
            src={icons.deleteIcon}
            alt={`delete task ${title} button`}
            sx={{ height: '25px', width: '25px' }}
          />
        </Button>
      </Flex>
      {isDetailedTaskModalVisible && (
        <TaskDetailed
          handleDetailedModalClick={handleDetailedModalClick}
          title={title}
          completed={completed}
          created={created}
          updated={updated}
          id={id}
          userId={userId}
          toggleTaskComplete={toggleTaskComplete}
        />
      )}
    </>
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
