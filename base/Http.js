import axiosInstance from 'axios';
const axios = axiosInstance.create();

axios.defaults.timeout = 6000;
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers['city-language'] = 'zh';
// axios.defaults.headers["city-app-name"] = appName;
// axios.defaults.headers["appName"] = appName;
// axios.defaults.headers["city-version"] = cityVersion;
// axios.defaults.headers["city-channel-code"] = channel;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    config.baseURL = 'https://gank.io/';
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    };
    return config;
  },
  (err) => {
    return Promise.error(err);
  },
);
/**
 * 解密
 */
axios.interceptors.response.use(
  (response) => {
    try {
      let data = response.data;
      if (data.status + '' === '100') {
        return Promise.resolve(data);
      } else {
        return Promise.reject({error: data});
      }
    } catch (error) {
      return Promise.reject({error});
    }
  },
  (err) => {
    return Promise.reject({error: err});
  },
);

function axiosHttp(method, url, data, config) {
  try {
    let _promise = axios({
      method: method + ''.toLocaleLowerCase(),
      url,
      data,
      config,
    });
    return _promise
      .then((res) => {
        if (__DEV__) {
          console.log('responseResult::', url + '\n' + JSON.stringify(res));
        }
        return res;
      })
      .catch((err) => {
        if (__DEV__) {
          console.log('responseError::', url + '\n' + JSON.stringify(err));
        }
        return err;
      });
  } catch (error) {
    return Promise.error(error);
  }
}

async function post(url, params = {}, config = {}) {
  return axiosHttp('post', url, params, config);
}
async function get(url, params = {}, config = {}) {
  return axiosHttp('get', url, params, config);
}
async function put(url, params = {}, config = {}) {
  return axiosHttp('put', url, params, config);
}
async function deleteMehtod(url, params, config = {}) {
  return axiosHttp('delete', url, params, config);
}

export default {post, get, put, deleteMehtod};
