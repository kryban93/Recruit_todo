import React, { useState } from 'react';
import { Flex, Checkbox, Paragraph, Label, Box } from '@theme-ui/components';
import PropTypes from 'prop-types';

const Task = ({ title, completed, id, created, updated, userId }) => {
  const [isTaskCompleted, setTaskCompletedState] = useState(completed);
  const toggleTaskComplete = () => {
    console.log('lol');
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
      }}
    >
      <Box>
        <Paragraph variant='title' sx={{ m: '0 auto', textAlign: 'left', flex: 5 }}>
          {title}
        </Paragraph>
        {
          //<Paragraph variant='additional'>{formattedCreatedDate}</Paragraph> !
        }
      </Box>
      <Label sx={{ display: 'none' }} htmlFor={`checkbox_${id}`} />
      <Checkbox onChange={toggleTaskComplete} id={`checkbox_${id}`} checked={completed} />
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
