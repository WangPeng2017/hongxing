/* eslint-disable*/

import axios from 'axios'
import qs from 'qs'
const BASEURL = `${Config.api.base}`

function checkStatus(res) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (res && (res.status === 200 || res.status === 304 || res.status === 400)) {
    return res
    // 如果不需要除了data之外的数据，可以直接 return res.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    console.log(res.msg)
  }
  if (res.data && (res.data.code === 0)) {
    console.log(res.data)
  }
  if (res.data && res.data.code === undefined && typeof res.data === 'string') {
    console.log('网络异常')
  }
  return res
}

export default {
  post(url, data) {
    return axios({
      method: 'post',
      baseURL: BASEURL,
      url,
      data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      withCredentials: true // 允许携带cookie
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get(url, params) {
    return axios({
      method: 'get',
      baseURL: BASEURL,
      url,
      params, // get 请求时带的参数
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      withCredentials: true,
    }).then(
      (res) => {
        return checkStatus(res)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  all(getArr) {
    return axios.all(getArr)
  },
  form(url, data) {
    return axios({
      method: 'post',
      baseURL: BASEURL,
      url,
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data'
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      withCredentials: true // 允许携带cookie
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
