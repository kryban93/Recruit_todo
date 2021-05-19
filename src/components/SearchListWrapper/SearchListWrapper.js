import selectors from '../../recoil/selectors';
import { useRecoilValue } from 'recoil';
import TasksList from '../TasksList/TaskList';
import { Box, Heading } from '@theme-ui/components';
import atoms from '../../recoil/atoms';

const SearchListWrapper = () => {
  const { searchTasksSelector } = selectors;
  const { searchValueAtom } = atoms;
  const tasksList = useRecoilValue(searchTasksSelector);
  const searchValue = useRecoilValue(searchValueAtom);

  return (
    <>
      {tasksList.length === 0 ? (
        <Box>
          <Heading sx={{ m: '50px auto' }}>
            Cannot find any result for phrase: {searchValue}
          </Heading>
        </Box>
      ) : (
        <TasksList tasksList={tasksList} />
      )}
    </>
  );
};

export default SearchListWrapper;
