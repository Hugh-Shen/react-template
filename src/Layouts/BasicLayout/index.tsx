import { createElement } from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { Link } from 'ice';
import { asideMenuConfig, asideMenuBaseConfig } from './menuConfig';
import Header from './components/Header/index'
import Auth from '@/utils/auth'
import localStorage from '@/utils/localStorage'

const loopMenuItem = (menus) => (
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: createElement(icon),
    children: children && loopMenuItem(children),
  }))
)

export default function BasicLayout({ children, location }) {
  const { user } = localStorage.get('user') || {}

  // 合并路由数组
  const mergeRouterConfig = () => {
    
    // 找到 asideMenuConfig 下面匹配路由
    const filterArr = asideMenuConfig.filter(item => item.auth === user.role)
      
    return asideMenuBaseConfig.concat(filterArr)
  }

  const currentRoute = mergeRouterConfig().find(item => item.path === location.pathname)
  
  return (
    <ProLayout
      title="小进步"
      style={{
        minHeight: '100vh',
      }}
      location={{
        pathname: location.pathname,
      }}
      headerRender={() => (
        <Header />
      )}
      menuDataRender={() => loopMenuItem(mergeRouterConfig())}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return <Link to={item.path}>{defaultDom}</Link>;
      }}
      footerRender={() => (
        <DefaultFooter
          links={[
            {
              key: 'icejs',
              title: 'icejs',
              href: 'https://github.com/ice-lab/icejs',
            },
            {
              key: 'antd',
              title: 'antd',
              href: 'https://github.com/ant-design/ant-design',
            },
          ]}
          copyright="by icejs & antd"
        />
      )}
    >
      <div style={{ minHeight: '60vh' }}>
        <Auth authKey={ currentRoute?.auth } fallback='没有权限'>
          { children }
        </Auth>
      </div>
    </ProLayout>
  );
}
