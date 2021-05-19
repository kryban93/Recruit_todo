import { useState, useEffect } from 'react';
import { Box, Paragraph, Flex, Button, Image } from '@theme-ui/components';
import PropTypes from 'prop-types';
import icons from '../../assets/icons';

const Editable = ({ title, children, placeholder, childRef, updateTaskTitle }) => {
  const [isEditable, setEditableState] = useState(false);

  useEffect(() => {
    if (childRef && childRef.current && isEditable) {
      childRef.current.focus();
    }
  }, [isEditable, childRef]);

  const handleClick = () => {
    updateTaskTitle();
    setEditableState(false);
  };

  return (
    <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      {!isEditable ? (
        <Box onClick={() => setEditableState(true)}>
          <Paragraph>{title || placeholder || 'Please write a task title'}</Paragraph>
        </Box>
      ) : (
        <Flex sx={{ width: '100%' }}>{children}</Flex>
      )}
      {isEditable && (
        <Button onClick={() => handleClick()} sx={{ bg: 'transparent', height: '25px' }}>
          <Image
            src={icons.edit}
            alt='save new task title button'
            sx={{ height: '25px', width: '25px' }}
          />
        </Button>
      )}
    </Flex>
  );
};

export default Editable;

Editable.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  children: PropTypes.element,
  updateTaskTitle: PropTypes.func.isRequired,
};
