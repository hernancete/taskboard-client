import axios from 'axios';
import config from './config';

const url = `${config.apiUrl}/tasks`;

const get = async () => {
  try {
    const tasks = await axios.get(url);
    return tasks;
  }
  catch (err) {
    // console.error(err);
    throw new Error(err);
  }
};

const post = async (data) => {
  try {
    const task = await axios.post(url, data);
    return task;
  }
  catch (err) {
    // console.error(err);
    throw new Error(err);
  }
};

const tasks = {
  get,
  post,
};

export default tasks;
