import React, { useState, useEffect } from 'react';
import { Box, Paragraph } from '@theme-ui/components';
import PropTypes from 'prop-types';

const Editable = ({ title, children, placeholder, childRef }) => {
  const [isEditable, setEditableState] = useState(false);

  useEffect(() => {
    if (childRef && childRef.current && isEditable) {
      childRef.current.focus();
    }
  }, [isEditable, childRef]);

  return (
    <>
      {!isEditable ? (
        <Box onClick={() => setEditableState(true)}>
          <Paragraph>{title || placeholder || 'Please write a task title'}</Paragraph>
        </Box>
      ) : (
        <Box onBlur={() => setEditableState(false)}>{children}</Box>
      )}
    </>
  );
};

export default Editable;

Editable.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  children: PropTypes.element,
};
