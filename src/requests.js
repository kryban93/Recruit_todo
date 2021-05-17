//prettier-ignore

export const updateTaskFinishState = async (id, userId, completed) => {
    await fetch(`https://gorest.co.in/public-api/users/${userId}/todos?id=${id}`, {
      method: 'POST', //PUT , PATCH nie działa, POST zwraca kod 200 ale nie zmienia stanu zadania
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        id: id,
        user_id: userId,
        completed: !completed,
      }),
    });
  };

export const addTask = async (title, userId) => {
  await fetch(`https://gorest.co.in/public-api/users/53/todos/`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      id: 1000,
      user_id: userId,
      completed: false,
      title,
    }),
  });
};
