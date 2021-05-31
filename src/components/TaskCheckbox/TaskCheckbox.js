import React from 'react';
import { Label, Image } from 'theme-ui';
import icons from '../../assets/icons';

/** @jsxImportSource theme-ui */
const TaskCheckbox = ({ id, title, completed, toggleTaskComplete }) => {
  return (
    <Label htmlFor={`checkbox_${id}`} sx={{ width: '40px' }}>
      <Image
        src={!completed ? icons.check_grey : icons.check_green}
        alt={`${title} task complete button`}
        sx={{ minHeight: '35px' }}
      />
      <input
        type='checkbox'
        onChange={toggleTaskComplete}
        id={`checkbox_${id}`}
        checked={completed}
        sx={{ display: 'none', width: '300px' }}
      />
    </Label>
  );
};

export default TaskCheckbox;
