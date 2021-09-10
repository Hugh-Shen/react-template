import React, { useEffect } from 'react'
import store from '@/store'
import * as echarts from 'echarts'
import './index.less'

const Dashboard = () => {
  const [userState, userDispatchers] = store.useModel('user')
  
  useEffect(() => {
    const ele = document.getElementById('echarts')
    let myChart = echarts.init(ele as HTMLElement)

    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20],
          smooth: true
        }
      ]
    })
  }, [])

  console.log('userState', userState);
  
  return (
    <div className="container">
      <div id="echarts"></div>
    </div>
  );
}


export default Dashboard
