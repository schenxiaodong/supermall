/**
 * 对首页信息进行封装
 */

import { request } from "network/request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
  })
}
