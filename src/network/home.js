import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}


// 函数调用 -> 压入函数栈（保存函数调用过程中的所有变量）
// 函数调用结束 -> 弹出函数栈（释放函数中的所有变量）
// function test() {
//   const name = ['why', 'aaa']
// }
// test()
