//prettier-ignore

const updateTaskFinishStateFetch = async (id, completed) => {
    await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        id,
        completed: completed ? false : true,
      }),
    });
  };

const changeTaskTitleFetch = async (id, title) => {
  await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      id: id,
      title: title,
    }),
  });
};

//prettier-ignore
const addTaskFetch = async (title) => {
  await fetch(`https://gorest.co.in/public-api/users/71/todos/`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      completed: false,
      title,
    }),
  });
};

const deleteTaskFetch = async (id) => {
  await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
  });
};

const requests = {
  updateTaskFinishStateFetch,
  changeTaskTitleFetch,
  addTaskFetch,
  deleteTaskFetch,
};

export default requests;
