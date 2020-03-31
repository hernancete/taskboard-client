import axios from 'axios';
import config from './config';

const url = `${config.apiUrl}/projects`;

const get = async () => {
  try {
    const projects = await axios.get(url);
    return projects;
  }
  catch (err) {
    // console.error(err);
    throw new Error(err);
  }
};

const post = async (data) => {
  try {
    const project = await axios.post(url, data);
    return project;
  }
  catch (err) {
    // console.error(err);
    throw new Error(err);
  }
};

const put = async (id, data) => {
  try {
    const projectUrl = `${url}/${id}`;
    const project = await axios.put(projectUrl, data);
    return project;
  }
  catch (err) {
    // console.error(err);
    throw new Error(err);
  }
};

const projects = {
  get,
  post,
  put,
};

export default projects;
