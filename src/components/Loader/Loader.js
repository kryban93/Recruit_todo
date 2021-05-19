import { Box, Container } from '@theme-ui/components';

const Loader = () => {
  const generateBoxes = () => {
    const boxes = [];
    for (let i = 1; i <= 5; i++) {
      boxes.push(
        <Box
          key={`loader_${i}`}
          sx={{
            bg: `rgb(${i * 30},${i * 40},${i * 25})`,
            m: '5px 5px',
            width: '30px',
            height: '30px',
            borderRadius: '100%',
            display: 'inline-block',
            animation: 'slide 1s infinite',
            zIndex: 6,
            animationDelay: `${0.1 * i}s`,

            '@keyframes slide': {
              '0%': {
                transform: 'scale(1)',
              },
              '50%': {
                transform: 'scale(2.5)',
                opacity: 0.6,
              },
              '100%': {
                transform: 'scale(1)',
              },
            },
          }}
        ></Box>
      );
    }

    return boxes;
  };
  return <Container sx={{ m: '200px auto' }}>{generateBoxes()}</Container>;
};

export default Loader;
