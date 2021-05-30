//prettier-ignore

export const updateTaskFinishStateFetch = async (id, userId, completed) => {
    await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        id,
        completed: !completed,
      }),
    });
  };

export const changeTaskTitleFetch = async (id, userId, title) => {
  await fetch(`https://gorest.co.in/public-api/todos/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      id,
      title,
    }),
  });
};

//prettier-ignore
export const addTaskFetch = async (title) => {
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

export const deleteTaskFetch = async (id) => {
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
