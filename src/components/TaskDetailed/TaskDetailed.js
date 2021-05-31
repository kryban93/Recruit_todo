import React from 'react';
import { Button, Flex, Image, Paragraph, Heading, Grid } from 'theme-ui';
import icons from '../../assets/icons';
import PropTypes from 'prop-types';
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';

const TaskDetailed = ({
  title,
  completed,
  id,
  created,
  updated,
  userId,
  handleDetailedModalClick,
  toggleTaskComplete,
}) => {
  const createdDateObject = new Date(created);
  const lastUpdateDateObject = new Date(updated);
  const formattedCreatedDate = `${createdDateObject.getDate()}.${createdDateObject.getMonth()}.${createdDateObject.getFullYear()}
            ${createdDateObject.getHours()}:${
    createdDateObject.getMinutes() < 10
      ? `0${createdDateObject.getMinutes()}`
      : createdDateObject.getMinutes()
  }`;
  const formattedUpdatedDate = `${lastUpdateDateObject.getDate()}.${lastUpdateDateObject.getMonth()}.${lastUpdateDateObject.getFullYear()}
            ${lastUpdateDateObject.getHours()}:${
    lastUpdateDateObject.getMinutes() < 10
      ? `0${lastUpdateDateObject.getMinutes()}`
      : lastUpdateDateObject.getMinutes()
  }`;
  return (
    <Flex
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        bg: 'rgba(0,0,0,0.3)',
        zIndex: 5,
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Flex
        sx={{
          width: '400px',
          height: '400px',
          bg: 'white',
          m: '0 auto',
          flexDirection: 'column',
          position: 'relative',
          boxSizing: 'border-box',
          p: '5px',
          borderRadius: '5px',
        }}
      >
        <Button
          onClick={() => handleDetailedModalClick()}
          sx={{ position: 'absolute', top: '10px', right: '5px' }}
        >
          <Image src={icons.close_black} alt='close form modal button' />
        </Button>
        <Flex
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            mt: '30px',
            mb: '10px',
            justifyContent: 'flex-start',
          }}
        >
          <TaskCheckbox
            title={title}
            id={id}
            completed={completed}
            toggleTaskComplete={toggleTaskComplete}
          />
          <Heading as='h3' sx={{ lineHeight: 1.2, flexGrow: 3 }}>
            {title}
          </Heading>
        </Flex>

        <Grid columns={[2, '1fr 4fr']} gap={0}>
          <Paragraph>created: </Paragraph>
          <Paragraph>{formattedCreatedDate}</Paragraph>
          <Paragraph>last updated: </Paragraph>
          <Paragraph> {formattedUpdatedDate}</Paragraph>
          <Paragraph>id: </Paragraph>
          <Paragraph> {id}</Paragraph>
          <Paragraph>userId: </Paragraph>
          <Paragraph> {userId}</Paragraph>
        </Grid>

        <Button></Button>
      </Flex>
    </Flex>
  );
};

export default TaskDetailed;

TaskDetailed.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  created: PropTypes.string,
  updated: PropTypes.string,
  userId: PropTypes.number,
  handleDetailedModalClick: PropTypes.func.isRequired,
  toggleTaskComplete: PropTypes.func.isRequired,
};
