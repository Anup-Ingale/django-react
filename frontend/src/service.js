import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export var headers = {
    'Access-Control-Allow-Origin': '*',
};
httpClient = axios;
export var httpClient
