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

const projects = {
    get,
};

export default projects;
