import { useEffect } from 'react';
import { useRequest } from 'ice';
import { Table } from 'antd';
import styles from './index.module.less';

export default function Home() {
  const { data, error, loading, request: fetchRepos } = useRequest('/api');
  const { dataSource = [] } = data || {};

  useEffect(() => {
    (async function () {
      await fetchRepos();
    }());
  }, []);

  return (
    <div className={styles.container}>
      <h2>Home page</h2>
      {
        error ? (
          <div>request error: {error.message}</div>
        ) : (
          <Table
            loading={loading}
            dataSource={dataSource}
            rowKey="id"
          >
            <Table.Column title="ID" dataIndex="id" key="id" />
            <Table.Column title="名称" dataIndex="name" key="name" />
            <Table.Column title="描述" dataIndex="description" key="description" />
          </Table>
        )
      }
    </div>
  );
}

// Home.pageConfig = {
//   // 可选，配置准入权限，若不配置则代表所有角色都可以访问
//   auth: ['guest'],
// }
