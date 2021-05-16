import React, { useState } from 'react';
import { Flex, Checkbox, Paragraph, Label } from '@theme-ui/components';
import PropTypes from 'prop-types';

const Task = ({ title, completed, id, created, updated, userId }) => {
  const [isTaskCompleted, setTaskCompletedState] = useState(completed);
  const toggleTaskComplete = () => {
    console.log('lol');
  };
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        m: '5px',
        borderBottom: '0.5px solid #aaa',
        boxShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        borderRadius: '5px',
      }}
    >
      <Paragraph sx={{ m: '0 auto', textAlign: 'left', flex: 5 }}>{title}</Paragraph>
      {/*<Label sx={{ border: '1px solid red' }}>
        <Checkbox onChange={toggleTaskComplete} />
      </Label>*/}
      <input type='checkbox' checked={completed} onChange={toggleTaskComplete} />
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
