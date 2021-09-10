import React from 'react';
import { useHistory } from 'ice'
import localStorage from '@/utils/localStorage'

type AuthType = 'admin' | 'guest'

const Login = () => {
  const history = useHistory()

  const handleClickToLogin = () => {
    
    const role: AuthType = 'admin'

    // 存取登录信息，作为后面权限需要的验证
    localStorage.set('user', {
      isLogin: true,
      authConfig: {
        admin: role === 'admin',
        guest: role === 'guest'
      },
      user: {
        role
      }
    })
  
    history.replace('/')  
  }

  return (
    <div>
      <div onClick={ handleClickToLogin }>点击登录</div>
    </div>
  )
}

export default Login
