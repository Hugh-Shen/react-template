import React, { Component } from 'react';
import SingleTreeTable from './components/SingleTreeTable';
import { Button } from 'antd';

export default function () {
  return (
    <div className="Hello-page">
      {/* single tree table */}
      <SingleTreeTable />
      <Button>components botton</Button> 
    </div>
  );
}
