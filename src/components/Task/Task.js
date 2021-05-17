import React from 'react';
import { Flex, Checkbox, Paragraph, Label, Box, Button, Image } from '@theme-ui/components';
import { useRecoilState } from 'recoil';
import atoms from '../../recoil/atoms';
import PropTypes from 'prop-types';
import icons from '../../assets/icons';

const Task = ({ title, completed, id, created, updated, userId }) => {
  const { tasksListAtom } = atoms;
  const [atomTasksList, setAtomTasksList] = useRecoilState(tasksListAtom);

  const toggleTaskComplete = () => {};

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
          transform: 'scale(1.1)',
        },
      }}
    >
      <input
        type='checkbox'
        onChange={toggleTaskComplete}
        id={`checkbox_${id}`}
        checked={completed}
      />
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
