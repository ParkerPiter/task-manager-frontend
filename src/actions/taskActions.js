import axios from 'axios';

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
export const FETCH_TASK_DETAIL_REQUEST = 'FETCH_TASK_DETAIL_REQUEST';
export const FETCH_TASK_DETAIL_SUCCESS = 'FETCH_TASK_DETAIL_SUCCESS';
export const FETCH_TASK_DETAIL_FAILURE = 'FETCH_TASK_DETAIL_FAILURE';
export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';
export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';
export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';
export const SET_FILTER = 'SET_FILTER';

const tryRequest = async (remoteUrl, localUrl, options) => {
  try {
    const response = await axios(remoteUrl, options);
    return response;
  } catch (error) {
    console.error(`Error with remote URL: ${error.message}. Trying local URL...`);
    const response = await axios(localUrl, options);
    return response;
  }
};

export const fetchTasks = () => async (dispatch) => {
    dispatch({ type: FETCH_TASKS_REQUEST });
    try {
      const response = await tryRequest(
        'https://task-manager-vb4x.onrender.com/api/tasks',
        'http://localhost:3001/api/tasks',
        { method: 'get' }
      );
        dispatch({ type: FETCH_TASKS_SUCCESS, payload: response.data });
    } 
    catch (error) {
        dispatch({ type: FETCH_TASKS_FAILURE, payload: error });
    }
};

export const fetchTaskDetail = (id) => async (dispatch) => {
    dispatch({ type: FETCH_TASK_DETAIL_REQUEST });
    try {
      const response = await tryRequest(
        `https://task-manager-vb4x.onrender.com/api/tasks/${id}`,
        `http://localhost:3001/api/tasks/${id}`,
        { method: 'get' }
      );
      dispatch({ type: FETCH_TASK_DETAIL_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_TASK_DETAIL_FAILURE, payload: error.message });
    }
};

export const createTask = (task) => async (dispatch) => {
  dispatch({ type: CREATE_TASK_REQUEST });
  try {
    const response = await tryRequest(
      'https://task-manager-vb4x.onrender.com/api/tasks',
      'http://localhost:3001/api/tasks',
      { method: 'post', data: task }
    );
    dispatch({ type: CREATE_TASK_SUCCESS, payload: response.data });
    dispatch(fetchTasks());
  } catch (error) {
    dispatch({ type: CREATE_TASK_FAILURE, payload: error.message });
  }
}

export const updateTask = (task) => async (dispatch) => {
  dispatch({ type: UPDATE_TASK_REQUEST });
  try {
    const response = await tryRequest(
      `https://task-manager-vb4x.onrender.com/api/tasks/${task.id}`,
      `http://localhost:3001/api/tasks/${task.id}`,
      { method: 'put', data: task }
    );
    dispatch({ type: UPDATE_TASK_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_TASK_FAILURE, payload: error.message });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  dispatch({ type: DELETE_TASK_REQUEST });
  try {
    const response = await tryRequest(
      `https://task-manager-vb4x.onrender.com/api/tasks/${id}`,
      `http://localhost:3001/api/tasks/${id}`,
      { method: 'delete' }
    );
    dispatch({ type: DELETE_TASK_SUCCESS, payload: id });
    dispatch(fetchTasks());
  } catch (error) {
    dispatch({ type: DELETE_TASK_FAILURE, payload: error.message });
  }
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});