const baseUrl = 'https://614086504a700c0017b0cd68.mockapi.io/api/v1/tasks';

// const mapTasks = tasks => tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));
export const getTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
  // .then(tasks => mapTasks(tasks));
};

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updateTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updateTaskData),
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
