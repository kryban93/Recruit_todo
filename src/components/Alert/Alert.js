import { useEffect, useState } from 'react';
import { Box, Paragraph } from 'theme-ui';
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
    }, 5000);
  }, [currentAlert]);

  return (
    <>
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
            animation: 'move 0.4s ease-out forwards',

            '@keyframes move': {
              '0%': {
                bottom: '-100px',
              },
              '100%': {
                bottom: '0',
              },
            },
          }}
        >
          <Paragraph>{currentAlert.description}</Paragraph>
        </Box>
      )}
    </>
  );
};

export default Alert;
