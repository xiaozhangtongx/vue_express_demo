export function setToken(tokenKey, token) {
  // 将token存入localStorage
  return localStorage.setItem(tokenKey, token)
}

export function getToken(tokenKey) {
  //拿到localStorage中的token
  return localStorage.getItem(tokenKey)
}

export function removeToken(tokenKey) {
  //退出登录时调用销毁token
  return localStorage.removeItem(tokenKey)
}
