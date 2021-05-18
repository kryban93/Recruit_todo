import React, { useEffect } from 'react';
import { Box, Paragraph } from 'theme-ui';
import alerts from './alerts';
import PropTypes from 'prop-types';

const Alert = ({ code, alertType }) => {
  useEffect();
  return (
    <Box>
      <Paragraph>{alerts[alertType][code].description}</Paragraph>
    </Box>
  );
};

export default Alert;

Alert.propTypes = {
  code: PropTypes.number.isRequired,
  alertType: PropTypes.string.isRequired,
};
