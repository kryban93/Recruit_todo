import React from 'react';
import TaskList from '../../components/TasksList/TaskList';

const MainView = () => {
  return (
    <section>
      <p>This is main View</p>
      <React.Suspense
        fallback={
          <div>
            <p>Loading...</p>
          </div>
        }
      >
        <TaskList />
      </React.Suspense>
    </section>
  );
};

export default MainView;
