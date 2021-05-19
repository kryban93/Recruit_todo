import { useRecoilValue } from 'recoil';
import { Flex, Paragraph } from 'theme-ui';
import selectors from '../../recoil/selectors';

/** @jsxImportSource theme-ui */
const TasksCounter = () => {
  const { tasksCounterSelector } = selectors;
  const { totalTasksNum, completedTasksNum, completedTasksPercentageNum } =
    useRecoilValue(tasksCounterSelector);

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Paragraph sx={{ textAlign: 'center' }}>
        completed: {completedTasksNum}/{totalTasksNum}
      </Paragraph>
      <svg
        viewBox='0 0 36 36'
        sx={{
          display: 'block',
          margin: '10px auto',
          maxWidth: '60%',
          maxHeight: '120px',
        }}
      >
        <path
          sx={{ fill: 'none', stroke: '#ddd', strokeWidth: '3.8' }}
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <path
          sx={{
            fill: 'none',
            strokeWidth: '2.8',
            strokeLinecap: 'round',
            stroke: '#4cc790',
            animation: 'progress 1s ease-out forwards',

            '@keyframes progress': {
              '0%': {
                strokeDasharray: '0 100',
              },
            },
          }}
          strokeDasharray={`${Math.floor(completedTasksPercentageNum)}, 100`}
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <text
          x='18'
          y='20.35'
          sx={{ fill: '#666', fontFamily: 'sans-serif', fontSize: '0.5em', textAnchor: 'middle' }}
        >
          {`${Math.floor(completedTasksPercentageNum)}%`}
        </text>
      </svg>
    </Flex>
  );
};

export default TasksCounter;
