import React, { Component } from 'react';
import BasicDetail from './components/BasicDetail';
import BasicDetail1 from './components/BasicDetail1';

export default function () {
  return (
    <div className="Add-page">
      {/* intro block */}
      <BasicDetail />
      {/* intro block */}
      <BasicDetail1 />
    </div>
  );
}
