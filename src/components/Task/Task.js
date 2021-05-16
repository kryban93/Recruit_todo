import { Flex, Checkbox, Paragraph } from '@theme-ui/components';
import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ title, completed, id, created, updated, userId }) => {
  const toggleTaskComplete = () => {};
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        m: '5px',
        borderBottom: '0.5px solid #aaa',
      }}
    >
      <Paragraph sx={{ m: '0 auto', textAlign: 'left', flex: 2 }}>{title}</Paragraph>
      <Checkbox
        variant='checkbox'
        type='checkbox'
        checked={completed}
        onChange={(event) => {
          toggleTaskComplete(event);
        }}
      />
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
