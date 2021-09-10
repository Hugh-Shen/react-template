import { SmileOutlined, HeartOutlined } from '@ant-design/icons';


const asideMenuBaseConfig = [
  {
    name: 'home',
    path: '/',
    icon: SmileOutlined,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: HeartOutlined,
  },
  {
    name: 'Add',
    path: '/add',
    icon: HeartOutlined,
  },
  {
    name: 'Hello',
    path: '/hello',
    icon: HeartOutlined,
    auth: 'admin'
  },
  {
    name: 'User',
    path: '/user',
    icon: HeartOutlined,
    routes: [
      {
        name: 'about',
        path: '/login',
      }
    ]
  },
]

const asideMenuConfig = [
  {
    name: 'Ik',
    path: '/ik',
    icon: HeartOutlined,
    auth: 'admin'
  },
  {
    name: 'other',
    path: '/ik',
    icon: HeartOutlined,
    auth: 'guest'
  },
];

export { asideMenuConfig, asideMenuBaseConfig }
