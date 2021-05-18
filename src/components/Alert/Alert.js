import React, { useEffect, useState } from 'react';
import { Box, Container, Paragraph } from 'theme-ui';
import { useRecoilValue } from 'recoil';
import atoms from '../../recoil/atoms';

const Alert = () => {
  const { activeAlertAtom } = atoms;
  const currentAlert = useRecoilValue(activeAlertAtom);
  const [isAlertVisible, setAlertVisibleState] = useState(false);

  useEffect(() => {
    setAlertVisibleState(true);
    setTimeout(() => {
      setAlertVisibleState(false);
    }, 3000);
  }, [currentAlert]);
  return (
    <div>
      {isAlertVisible && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '0',
            right: '0',
            m: '10px',
            p: '10px',
            bg: `${currentAlert.type}`,
            borderRadius: '5px',
            border: '0.5px solid green',
          }}
        >
          <Paragraph>{currentAlert.description}</Paragraph>
        </Box>
      )}
    </div>
  );
};

export default Alert;
