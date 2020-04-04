import axios from 'axios';
import config from './config';

const url = `${config.apiUrl}/tasks`;

const get = async (filter) => {
  try {
    const tasks = await axios.get(url, {
      params: filter,
    });
    return tasks;
  }
  catch (err) {
    throw new Error(err);
  }
};

const post = async (data) => {
  try {
    const task = await axios.post(url, data);
    return task;
  }
  catch (err) {
    throw new Error(err);
  }
};

const tasks = {
  get,
  post,
};

export default tasks;
