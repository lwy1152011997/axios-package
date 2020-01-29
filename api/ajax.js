import axios from 'axios';
import {message} from "antd";

export default function ajax(url, data = {}, method = 'get') {
  // url : 向哪个地址发送请求
  // data: 向目标请求地址发送请求时的请求参数
  // mthod: 请求方式是什么

  // 将ajax请求封装为一个函数,只用来处理请求成功后得到的数据,然后将成功获取的到的数据返回,
  // 哪个组件需要发送请求获取数据,引入这个函数,调用即可
  // 注意: ajax()函数调用后,内部的 axios.post()这个函数的返回值是一个promise对象,
  // 这个promise对象中包含我们请求回来的data数据对象
  //     因为.then .catch 的返回值是promise对象

  // get请求 和 post请求 的传参不同,我们需要先对传进来的请求方式进行判断,然后规定data的类型
  // get请求的传参需要axios.get('url', {params:})
  let reqParams = data;
  method = method.toLowerCase();
  if (method === 'get') {
    reqParams = {
      params: data
    }
  }

  return axios[method](url, reqParams)
    .then( (response) => {
      const {data} = response;
      if (data.status === 0) {  // 请求成功,将请求到的数据
        return data.data || {};
      } else {
        message.error( data.msg, 2 ); // 请求失败,提示失败错误原因
      }
    } )
    .catch( (err) => {
      // 这里的错误,一般就是网络方面的错误
      message.error( '网络被外星人拦截了,请刷新试试', 2 );
      return Promise.reject('网络被外星人拦截了,请刷新试试');
    } )
}

// import axios from 'axios';
// import { message } from "antd";
//
//
// /**
//  * 统一处理错误响应结果
//  *
//  * @param url
//  * @param data
//  * @param method
//  * @returns 返回值一定成功状态promise（请求成功里面有数据，请求失败里面没有）
//  */
// export default function ajax(url, data = {}, method = 'get') {
//   // 初始化请求参数
//   let reqParams = data;
//   // 转化为小写，在进行比较
//   method = method.toLowerCase();
//
//   if (method === 'get') {
//     reqParams = {
//       params: data
//     }
//   }
//
//   // 将后面表达式整体结果返回
//   // 后面表达式结果看then/catch返回值
//   return axios[method](url, reqParams)
//     .then((res) => {
//       const { data } = res;
//
//       if (data.status === 0) {
//         return data.data || {};
//       } else {
//         // 请求失败。给用户提示错误信息
//         // message.error(data.msg, 2);
//         return Promise.reject(data.msg);
//       }
//     })
//     .catch((err) => {
//       // 请求失败：网络错误、服务器内部错误等
//       // message.error('网络出现异常，请刷新重试~', 2);
//       return Promise.reject('网络出现异常，请刷新重试~');
//     })
// }
