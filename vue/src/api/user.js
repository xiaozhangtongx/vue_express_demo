// 对api进行统一的管理
import request from '@/utils/request'

// 用户登录接口
export const login = (url, params) => request.post(url, params)