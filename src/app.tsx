import { runApp, IAppConfig } from 'ice'
import requstConfig from '@/utils/requstConfig'

import 'antd/dist/antd.less'
import '@alifd/next/index.scss'  // ant 


const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  auth: {
    // 可选的，设置无权限时的展示组件，默认为 null
    NoAuthFallback: <div>没有权限...</div>,
    // 或者传递一个函数组件
    // NoAuthFallback: () => <div>没有权限..</div>
  },
  router: {
    type: 'hash',
  },
  request: requstConfig
};

runApp(appConfig);
