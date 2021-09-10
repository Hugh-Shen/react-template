import { IRouterConfig } from 'ice';
import Layout from '@/Layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import NotFound from '@/components/NotFound';
import Add from '@/pages/Add';
import Hello from '@/pages/Hello';
import User from '@/pages/User';
import Login from '@/pages/Login';
import WrapperPage from '@/components/WrapperPage'

const routerConfig: IRouterConfig[] = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/',
    component: Layout,
    wrappers: [WrapperPage],
    children: [
      { path: '/dashboard', component: Dashboard },
      { path: '/add', component: Add },
      { path: '/hello', component: Hello },
      { path: '/user', component: User },
      { path: '/', exact: true, component: Home },
      { component: NotFound },
    ],
  }
];

export default routerConfig;
