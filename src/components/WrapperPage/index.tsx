import { Redirect } from 'ice'
import localStorage from '@/utils/localStorage'

const LoginWrapper = (WrappedComponent) => {
  const Wrapped = (props) => {
    const user = localStorage.get('user') || {}
    
    return <>{user.isLogin ? <WrappedComponent {...props} /> : <Redirect to="/login" />}</>;
  };

  return Wrapped;
};

export default LoginWrapper;