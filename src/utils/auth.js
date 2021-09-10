/* src/utils/auth */ 

import React from 'react';
import NoAuth from '@/components/NotFound'
import localStorage from '@/utils/localStorage'

function Auth({ children, authKey, fallback }) {
  const user = localStorage.get('user')

  let hasAuth = false
  // 判断是否有权限
  if(authKey) {
    hasAuth = user['authConfig'][authKey] === 'admin' ? true : user['authConfig'][authKey]
  }else {
    hasAuth = true
  }
  
  // 有权限时直接渲染内容
  if (hasAuth) {
    return children
  } else {
    // 无权限时显示指定 UI
    return fallback || NoAuth
  }
}

export default Auth