import axios from "axios";
import NProgress from "nprogress";

// 请求实例
const http = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 8000,
});
// 请求拦截器
http.interceptors.request.use(
  (conf: any) => {
    if (conf?.loading) {
      if (!import.meta.env.SSR) NProgress.start();
    }
    conf.headers = {
      ...conf.headers,
      "Content-Type": "application/json",
      Authorization: "",
    };
    return conf;
  },
  (err) => {
    console.log("--->request error", err);
    NProgress.done();
    return Promise.reject(err);
  }
);

/**
 * 响应结果异常处理
 * @param {Object} e 异常响应结果的响应体
 */
const responseReject = (e: any) => {
  e = e.response || e;
  let { data, status } = e;
  let res = { code: 0, msg: "网络异常" };
  if (status) {
    data = data || {};
    res.code = status === 200 ? data.code || -1 : status;
    res.msg = data.msg || data.message;
  }
  NProgress.done();
  return Promise.reject(res);
};

// 响应结果拦截器
http.interceptors.response.use(
  (res) => {
    NProgress.done();
    // console.log('res:::',res)
    if (res.status === 200 && res.data && res.data.code == 1) {
      return Promise.resolve(res.data.data);
    }
    return responseReject(res);
  },
  (err) => responseReject(err)
);

/**
 * 处理请求地址(mock处理)
 * @param {String} url 请求地址
 */
let local = "zh";
if (!import.meta.env.SSR) {
  local = sessionStorage.getItem("local") || "zh";
}
/**
 * HttpGet请求
 * @param {String} url 请求地址
 * @param {Object?} params 请求参数
 */
const GET = (url: string, params = {}) => {
  let config: any = { params: { ...params, lang: local } };
  console.log("config", config);
  return http.get(url, config);
};

/**
 * HttpPost请求
 * @param {String} url 请求地址
 * @param {Object?} params 请求参数
 */
const POST = (url: string, params = {}, loading = 1) => {
  let config: any = { loading };
  return http.post(url, { ...params, lang: local }, config);
};

export { GET, POST };
